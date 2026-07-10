"""GET /api/prices — liste des prix du marché, depuis Postgres/Neon."""

import json
import sys
import os
from http.server import BaseHTTPRequestHandler

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from lib.db import query


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            rows = query(
                "SELECT crop, label, min_price AS min, max_price AS max, unit "
                "FROM prices ORDER BY id ASC"
            )
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(rows, default=str).encode())
        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"error": str(e)}).encode())
