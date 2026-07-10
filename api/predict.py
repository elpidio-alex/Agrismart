"""POST /predict — détection heuristique de maladie sur feuille (même logique que app.py)."""

import json
import cgi
import io
from http.server import BaseHTTPRequestHandler
from PIL import Image

DISEASE_PROFILES = [
    {"name": "Healthy", "name_fr": "Sain", "min_green_ratio": 0.55},
    {"name": "Early Blight", "name_fr": "Alternariose", "min_green_ratio": 0.35},
    {"name": "Leaf Rust", "name_fr": "Rouille des feuilles", "min_green_ratio": 0.15},
    {"name": "Advanced Leaf Damage", "name_fr": "Dégâts foliaires avancés", "min_green_ratio": 0.0},
]


def _analyze_leaf_image(image):
    img = image.convert("RGB").resize((64, 64))
    pixels = list(img.getdata())

    green_count = 0
    brown_yellow_count = 0

    for r, g, b in pixels:
        if g > r and g > b and g > 60:
            green_count += 1
        elif r > 100 and g > 60 and b < 100:
            brown_yellow_count += 1

    total = len(pixels)
    green_ratio = green_count / total if total else 0
    stress_ratio = brown_yellow_count / total if total else 0

    profile = DISEASE_PROFILES[-1]
    for candidate in DISEASE_PROFILES:
        if green_ratio >= candidate["min_green_ratio"]:
            profile = candidate
            break

    confidence = round(min(0.95, 0.55 + stress_ratio + (1 - green_ratio) * 0.2), 2)

    return {
        "disease": profile["name"],
        "disease_fr": profile["name_fr"],
        "confidence": confidence,
        "green_ratio": round(green_ratio, 3),
        "stress_ratio": round(stress_ratio, 3),
        "note": "Heuristic color-based estimate, not a trained ML model.",
    }


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            ctype, pdict = cgi.parse_header(self.headers.get("Content-Type", ""))
            if ctype != "multipart/form-data":
                self._send_json(400, {"error": "Expected multipart/form-data"})
                return

            pdict["boundary"] = pdict["boundary"].encode()
            length = int(self.headers.get("Content-Length", 0))
            pdict["CONTENT-LENGTH"] = length
            fields = cgi.parse_multipart(self.rfile, pdict)

            file_bytes = fields.get("file")
            if not file_bytes:
                self._send_json(400, {"error": "No file part in the request"})
                return

            image = Image.open(io.BytesIO(file_bytes[0]))
            result = _analyze_leaf_image(image)
            self._send_json(200, result)
        except Exception as e:
            self._send_json(400, {"error": f"Invalid or unreadable image file: {e}"})

    def _send_json(self, status, payload):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode())
