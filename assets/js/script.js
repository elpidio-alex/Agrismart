// =========================
// ⚙️ API CONFIG
// =========================
// Fonctions serverless Vercel (api/*.py), servies sur le même domaine
// que le frontend. Plus besoin de CORS ni d'URL codée en dur.
const API_BASE = "";

// =========================
// 🌍 LANGUAGE SYSTEM (FIXED)
// =========================

let lang = localStorage.getItem("lang") || "en";

const text = {
    en: {
        navHome: "Home",
        navWeather: "Weather",
        navCrops: "Crops",
        navPrices: "Prices",
        navDisease: "Disease",
        navCalculator: "Calculator",
        navForum: "Forum",
        navAbout: "About",
        navContact: "Contact",
        navLogin: "Log in",
        navSignup: "Sign up",

        title: "Welcome to AgriSmart 🌾",
        subtitle: "Your Smart Farming Assistant",
        weather: "Weather Forecast",
        crops: "Crop Guide",
        prices: "Market Prices",
        disease: "Disease Detection",
        about: "About AgriSmart",
        contact: "Contact Support",
        calculator: "Farm Calculator",
        community: "Farmer Community",
        footerDescription: "Smart agriculture platform helping farmers in Togo make better decisions using technology.",
        quickLinks: "Quick Links",
        homeLink: "Home", 
        weatherLink: "Weather",
        cropsLink: "Crops",
        pricesLink: "Prices",
        forumLink: "Forum",
        contactHeading: "Contact",
        copyright: "© 2026 AgriSmart. All rights reserved.",

        weatherMain: "🌦️ Weather Forecast",
        selectDayText: "Select a day 🌤️",
        tempText: "Temperature will appear here",
        adviceTitle: "🌱 Farming Advice",
        adviceText: "Select a day to see advice",
        weatherSubtitle: "Plan your farming activities with weather insights",
        forecastTitle: "📅 3-Day Forecast",
        day1: "Day 1",
        sunny: "Sunny",
        day2: "Day 2",
        rainy: "Rainy",
        day3: "Day 3",
        cloudy: "Cloudy",
        

        cropTitle: "🌾 Crop Guide",
        cropSubtitle: "Search for crops and learn how to grow them better in Togo",
        searchPlaceholder: "Search crop (maize, rice, cassava...)",

        maizeName: "🌽 Maize",
        maizeSeason: "Season: Rainy season",
        maizeAdvice: "Advice: Use fertilizer after 2 weeks",

        riceName: "🌾 Rice",
        riceSeason: "Season: Wet lands",
        riceAdvice: "Advice: Needs constant water",

        cassavaName: "🥔 Cassava",
        cassavaSeason: "Season: All year",
        cassavaAdvice: "Advice: Resistant to drought",

        pricesTitle: "💰 Market Prices",
        priceSubtitle: "Live crop price estimates in Togo 📊",
        highlightBtn: "Highlight Prices 📊",

        groundnutName: "🥜 Groundnut",
        priceLabel: "Price",
        perKg: "per kg",

        maizePriceRange: "250 - 300 FCFA / kg",
        ricePriceRange: "400 - 600 FCFA / kg",
        cassavaPriceRange: "150 - 200 FCFA / kg",
        groundnutPriceRange: "500 - 800 FCFA / kg",

        diseaseTitle: "🦠 Disease Detection",
        diseaseSubtitle: "Upload a plant image to detect diseases",
        uploadImage: "📁 Upload Image",
        analyzeBtn: "Analyze 🌱",
        fileText: "No file chosen",
        backHome: "⬅ Back Home",

        aboutTitle: "ℹ️ About AgriSmart",
        aboutSubtitle: "Smart agriculture platform for farmers in Togo",

        overviewTitle: "🌾 Overview",
        overviewText1: "AgriSmart is a smart digital agriculture platform designed to support farmers in Togo by providing essential tools for decision-making.",
        overviewText2: "It integrates weather forecasting, crop management guidance, market price tracking, and disease detection in one system.",

        backgroundTitle: "🌍 Background & Challenges",
        backgroundText1: "Agriculture is a key sector in Togo, but farmers face many challenges such as lack of information, climate uncertainty, crop diseases, and unstable market prices.",
        backgroundText2: "These issues often lead to low productivity and financial instability.",

        solutionTitle: "💡 Proposed Solution",
        solutionText: "AgriSmart provides real-time agricultural information in a simple and accessible platform.",

        featuresTitle: "⚙️ Key Features",
        feature1: "🌦️ Weather Forecast with farming advice",
        feature2: "🌱 Crop Guide with planting instructions",
        feature3: "💰 Market Price tracking system",
        feature4: "🦠 Disease Detection using image analysis",

        impactTitle: "🚀 Expected Impact",
        impact1: "Increased crop productivity",
        impact2: "Reduced farming risks",
        impact3: "Better disease management",
        impact4: "Improved farmer income",

        futureTitle: "🌍 Future Development",
        future1: "AI-powered disease detection",
        future2: "Real-time weather API integration",
        future3: "Offline mode for rural areas",
        future4: "Support for local languages",

        conclusionTitle: "🙏 Conclusion",
        conclusionText: "AgriSmart modernizes agriculture in Togo by combining technology and farming needs to improve productivity and livelihoods.",

        backHome: "⬅ Back Home",

       contactPageTitle: "Contact AgriSmart 📩",
       contactPageSubtitle: "We are here to help farmers in Togo and beyond",

        nameLabel: "Full Name",
        namePlaceholder: "Your name",

        emailLabel: "Email",
        emailPlaceholder: "Your email",

        subjectLabel: "Subject",
        subjectPlaceholder: "Subject",

        messageLabel: "Message",
        messagePlaceholder: "Write your message...",

        sendBtn: "Send Message",

        ourInfoTitle: "📍 Our Info",
        emailInfo: "📧 Email: support@agrismart.com",
        phoneInfo: "📞 Phone: +228 79 56 07 98",
        locationInfo: "📍 Location: Lomé, Togo",

        followUsTitle: "🌍 Follow Us",
        socialLinks: "Facebook | WhatsApp | Instagram",

        footerLocation: "📍 Lomé, Togo",
        footerEmail: "📧 support@agrismart.com",
        footerPhone: "📞 +228 79 56 07 98",

        calcTitle: "🌾 Farm Calculator",
        calcSubtitle: "Estimate your crop production easily",
        areaLabel: "Field Area (hectares)",
        yieldLabel: "Yield per hectare (tons)",
        calcBtn: "Calculate",
        resultTitle: "Result:",
        calcOutputError: "Please enter valid values",
        calcOutputText: "tons estimated production",

        forumTitle: "🌾 Farmer Community Forum",
        forumSubtitle: "Share tips, ask questions, and help other farmers",
        createPostTitle: "📝 Create a Post",
        postBtn: "Post",
        yourName: "Your name",
        writeMessage: "Write your message...",

        postUser1: "Amis Farmer",
        postText1: "Which crop is best for the rainy season in Togo?",
        postUser2: "AgriExpert",
        postText2: "Maize and cassava are very productive in this period.",

        postBtn: "Post"
    },

    fr: {
        navHome: "Accueil",
        navWeather: "Météo",
        navCrops: "Cultures",
        navPrices: "Prix",
        navDisease: "Maladies",
        navCalculator: "Calculateur",
        navForum: "Forum",
        navAbout: "À propos",
        navContact: "Contact",
        navLogin: "Se connecter",
        navSignup: "Créer un compte",

        title: "Bienvenue à AgriSmart 🌾",
        subtitle: "Votre assistant agricole intelligent",
        weather: "Prévisions météo",
        crops: "Guide des cultures",
        prices: "Prix du marché",
        disease: "Détection de maladies",
        about: "À propos d’AgriSmart",
        contact: "Support",
        calculator: "Calculateur de ferme",
        community: "Communauté",
        footerDescription: "Plateforme agricole intelligente aidant les agriculteurs du Togo à prendre de meilleures décisions grâce à la technologie.",
        quickLinks: "Liens rapides",
        homeLink: "Accueil",
        weatherLink: "Météo",
        cropsLink: "Cultures",
        pricesLink: "Prix",
        forumLink: "Communauté",
        contactHeading: "Contact",
        copyright: "© 2026 AgriSmart. Tous droits réservés.",

        weatherMain: "🌦️ Prévisions météo",
        selectDayText: "Choisir un jour 🌤️",
        tempText: "La température apparaîtra ici",
        adviceTitle: "🌱 Conseils agricoles",
        adviceText: "Choisissez un jour pour voir les conseils",
        weatherSubtitle: "Planifiez vos activités agricoles grâce aux prévisions météo",
        forecastTitle: "📅 Prévisions sur 3 jours",
        day1: "Jour 1",
        sunny: "Ensoleillé",
        day2: "Jour 2",
        rainy: "Pluvieux",
        day3: "Jour 3",
        cloudy: "Nuageux",
        
        cropTitle: "🌾 Guide des cultures",
        cropSubtitle: "Recherchez des cultures et apprenez à mieux les cultiver au Togo",
        searchPlaceholder: "Rechercher une culture...",

        maizeName: "🌽 Maïs",
        maizeSeason: "Saison : Pluies",
        maizeAdvice: "Conseil : Engrais après 2 semaines",

        riceName: "🌾 Riz",
        riceSeason: "Saison : Zones humides",
        riceAdvice: "Conseil : Eau constante",

        cassavaName: "🥔 Manioc",
        cassavaSeason: "Saison : Toute l’année",
        cassavaAdvice: "Conseil : Résistant à la sécheresse",

        pricesTitle: "💰 Prix du marché",
        priceSubtitle: "Prix en temps réel 📊",
        highlightBtn: "Mettre en évidence 📊",

        groundnutName: "🥜 Arachide",
        priceLabel: "Prix",
        perKg: "par kg",

        maizePriceRange: "250 - 300 FCFA par kg",
        ricePriceRange: "400 - 600 FCFA par kg",
        cassavaPriceRange: "150 - 200 FCFA par kg",
        groundnutPriceRange: "500 - 800 FCFA par kg",

        diseaseTitle: "🦠 Détection de maladies",
        diseaseSubtitle: "Téléchargez une image",
        uploadImage: "📁 Télécharger",
        analyzeBtn: "Analyser 🌱",
        fileText: "Aucun fichier",
        backHome: "⬅ Retour",

        aboutTitle: "ℹ️ À propos d’AgriSmart",
        aboutSubtitle: "Plateforme agricole intelligente pour les agriculteurs du Togo",

        overviewTitle: "🌾 Aperçu",
        overviewText1: "AgriSmart est une plateforme agricole numérique intelligente conçue pour aider les agriculteurs au Togo.",
        overviewText2: "Elle intègre la météo, la gestion des cultures, les prix du marché et la détection des maladies.",

        backgroundTitle: "🌍 Contexte et défis",
        backgroundText1: "L’agriculture est un secteur clé au Togo, mais les agriculteurs font face à plusieurs défis.",
        backgroundText2: "Ces problèmes entraînent souvent une faible productivité et une instabilité financière.",

        solutionTitle: "💡 Solution proposée",
        solutionText: "AgriSmart fournit des informations agricoles en temps réel dans une plateforme simple.",

        featuresTitle: "⚙️ Fonctionnalités principales",
        feature1: "🌦️ Prévisions météo avec conseils agricoles",
        feature2: "🌱 Guide des cultures",
        feature3: "💰 Suivi des prix du marché",
        feature4: "🦠 Détection des maladies par image",

        impactTitle: "🚀 Impact attendu",
        impact1: "Augmentation de la productivité",
        impact2: "Réduction des risques agricoles",
        impact3: "Meilleure gestion des maladies",
        impact4: "Amélioration des revenus",

        futureTitle: "🌍 Développement futur",
        future1: "Détection IA des maladies",
        future2: "API météo en temps réel",
        future3: "Mode hors ligne",
        future4: "Support des langues locales",

        conclusionTitle: "🙏 Conclusion",
        conclusionText: "AgriSmart modernise l’agriculture au Togo grâce à la technologie.",

        backHome: "⬅ Retour",

        contactPageTitle: "Contactez AgriSmart 📩",
        contactPageSubtitle: "Nous sommes là pour aider les agriculteurs au Togo et au-delà",

        nameLabel: "Nom complet",
        namePlaceholder: "Votre nom",

        emailLabel: "E-mail",
        emailPlaceholder: "Votre e-mail",

        subjectLabel: "Sujet",
        subjectPlaceholder: "Sujet",

        messageLabel: "Message",
        messagePlaceholder: "Écrivez votre message...",

        sendBtn: "Envoyer le message",

        ourInfoTitle: "📍 Nos coordonnées",
        emailInfo: "📧 E-mail : support@agrismart.com",
        phoneInfo: "📞 Téléphone : +228 79 56 07 98",
        locationInfo: "📍 Localisation : Lomé, Togo",

        followUsTitle: "🌍 Suivez-nous",
        socialLinks: "Facebook | WhatsApp | Instagram",

        footerLocation: "📍 Lomé, Togo",
        footerEmail: "📧 support@agrismart.com",
        footerPhone: "📞 +228 79 56 07 98",

        calcTitle: "🌾 Calculateur agricole",
        calcSubtitle: "Estimez facilement votre production agricole",
        areaLabel: "Superficie (hectares)",
        yieldLabel: "Rendement par hectare (tonnes)",
        calcBtn: "Calculer",
        resultTitle: "Résultat :",
        calcOutputError: "Veuillez entrer des valeurs valides",
        calcOutputText: "tonnes de production estimée",

        forumTitle: "🌾 Forum des agriculteurs",
        forumSubtitle: "Partagez des conseils et posez des questions",
        createPostTitle: "📝 Créer une publication",
        postBtn: "Publier",
        yourName: "Votre nom",
        writeMessage: "Écrivez votre message...",

        postUser1: "Amis Agriculteur",
        postText1: "Quelle culture est la meilleure pour la saison des pluies au Togo ?",
        postUser2: "Expert Agricole",
        postText2: "Le maïs et le manioc sont très productifs pendant cette période.",

        postBtn: "Publier"
    }
};

// =========================
// APPLY LANGUAGE
// =========================

function setLanguage(l) {
    lang = l;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);

    const flagGB = document.getElementById("langFlagIconGB");
    const flagFR = document.getElementById("langFlagIconFR");
    const flagCode = document.getElementById("langFlagCode");
    const toggleBtn = document.getElementById("langToggleBtn");
    if (flagGB && flagFR && flagCode) {
        // Affiche le drapeau de la langue VERS LAQUELLE on peut basculer
        if (lang === "fr") {
            flagGB.style.display = "inline-flex";
            flagFR.style.display = "none";
            flagCode.textContent = "EN";
            if (toggleBtn) toggleBtn.setAttribute("aria-label", "Switch to English");
        } else {
            flagGB.style.display = "none";
            flagFR.style.display = "inline-flex";
            flagCode.textContent = "FR";
            if (toggleBtn) toggleBtn.setAttribute("aria-label", "Passer en français");
        }
    }

    updateText();
}

function toggleLanguage() {
    setLanguage(lang === "en" ? "fr" : "en");
}

function updateText() {
    const t = text[lang];

    const set = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
    };

    const setPlaceholder = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.placeholder = value;
    };

    set("title", t.title);
    set("subtitle", t.subtitle);
    set("navHome", t.navHome);
    set("navWeather", t.navWeather);
    set("navCrops", t.navCrops);
    set("navPrices", t.navPrices);
    set("navDisease", t.navDisease);
    set("navCalculator", t.navCalculator);
    set("navForum", t.navForum);
    set("navAbout", t.navAbout);
    set("navContact", t.navContact);
    set("navLoginLink", t.navLogin);
    set("navSignupLink", t.navSignup);
    set("weatherText", t.weather);
    set("cropsText", t.crops);
    set("pricesText", t.prices);
    set("diseaseText", t.disease);
    set("aboutText", t.about);
    set("contactText", t.contact);
    set("calculatorText", t.calculator);
    set("forumText", t.community);
    set("footerDescription", t.footerDescription);
    set("quickLinks", t.quickLinks);
    set("homeLink", t.homeLink);
    set("weatherLink", t.weatherLink);
    set("cropsLink", t.cropsLink);
    set("pricesLink", t.pricesLink);
    set("forumLink", t.forumLink);
    set("contactHeading", t.contactHeading);
    set("footerBottomText", t.copyright);

    set("weatherMain", t.weatherMain);
    set("weatherTitle", t.selectDayText);
    set("weatherSubtitle", t.weatherSubtitle);
    set("forecastTitle", t.forecastTitle);
    set("day1", t.day1);
    set("day2", t.day2);
    set("day3", t.day3);
    set("sunny", t.sunny);
    set("rainy", t.rainy);
    set("cloudy", t.cloudy);
    set("footerDescription", t.footerDescription);
    set("temp", t.tempText);
    set("advice", t.adviceText);
    set("adviceTitle", t.adviceTitle);
    
    set("cropTitle", t.cropTitle);
    set("cropSubtitle", t.cropSubtitle);
    setPlaceholder("searchBox", t.searchPlaceholder);

    set("maizeName", t.maizeName);
    set("riceName", t.riceName);
    set("cassavaName", t.cassavaName);
    set("maizeSeason", t.maizeSeason);
    set("maizeAdvice", t.maizeAdvice);
    set("riceSeason", t.riceSeason);
    set("riceAdvice", t.riceAdvice);
    set("cassavaSeason", t.cassavaSeason);
    set("cassavaAdvice", t.cassavaAdvice);

    set("pricesTitle", t.pricesTitle);
    set("priceSubtitle", t.priceSubtitle);
    set("highlightBtn", t.highlightBtn);

    set("groundnutName", t.groundnutName);
    set("groundnutSeason", t.groundnutSeason);
    set("groundnutAdvice", t.groundnutAdvice);

    set("maizePriceRange", t.maizePriceRange);
    set("ricePriceRange", t.ricePriceRange);
    set("cassavaPriceRange", t.cassavaPriceRange);
    set("groundnutPriceRange", t.groundnutPriceRange);

    set("diseaseTitle", t.diseaseTitle);
    set("diseaseSubtitle", t.diseaseSubtitle);
    set("uploadImage", t.uploadImage);
    set("analyzeBtn", t.analyzeBtn);
    set("fileText", t.fileText);
    set("backHome", t.backHome);

    set("aboutTitle", t.aboutTitle);
    set("aboutSubtitle", t.aboutSubtitle);

    set("overviewTitle", t.overviewTitle);
    set("overviewText1", t.overviewText1);
    set("overviewText2", t.overviewText2);

    set("backgroundTitle", t.backgroundTitle);
    set("backgroundText1", t.backgroundText1);
    set("backgroundText2", t.backgroundText2);

    set("solutionTitle", t.solutionTitle);
    set("solutionText", t.solutionText);

    set("featuresTitle", t.featuresTitle);
    set("feature1", t.feature1);
    set("feature2", t.feature2);
    set("feature3", t.feature3);
    set("feature4", t.feature4);

    set("impactTitle", t.impactTitle);
    set("impact1", t.impact1);
    set("impact2", t.impact2);
    set("impact3", t.impact3);
    set("impact4", t.impact4);

    set("futureTitle", t.futureTitle);
    set("future1", t.future1);
    set("future2", t.future2);
    set("future3", t.future3);
    set("future4", t.future4);

    set("conclusionTitle", t.conclusionTitle);
    set("conclusionText", t.conclusionText);

   set("backHome", t.backHome);

   set("weatherFeature", t.feature1);
   set("cropFeature", t.feature2);
   set("pricesFeature", t.feature3);
   set("diseaseFeature", t.feature4);

   set("impact1", t.impact1);
   set("impact2", t.impact2);
   set("impact3", t.impact3);
   set("impact4", t.impact4);

   set("aiFeature", t.future1);
   set("weatherApiFeature", t.future2);
   set("offlineFeature", t.future3);
   set("localLanguagesFeature", t.future4);

   // CONTACT PAGE
   set("title", t.contactPageTitle);
   set("subtitle", t.contactPageSubtitle);

   set("nameLabel", t.nameLabel);
   set("emailLabel", t.emailLabel);
   set("subjectLabel", t.subjectLabel);
   set("messageLabel", t.messageLabel);

   setPlaceholder("name", t.namePlaceholder);
   setPlaceholder("email", t.emailPlaceholder);
   setPlaceholder("subject", t.subjectPlaceholder);
   setPlaceholder("message", t.messagePlaceholder);

   set("sendBtn", t.sendBtn);

   set("ourInfoTitle", t.ourInfoTitle);
   set("emailInfo", t.emailInfo);
   set("phoneInfo", t.phoneInfo);
   set("locationInfo", t.locationInfo);

   set("followUsTitle", t.followUsTitle);
   set("socialLinks", t.socialLinks);

   // FARM CALCULATOR
    set("calcTitle", t.calcTitle);
    set("calcSubtitle", t.calcSubtitle);
    set("areaLabel", t.areaLabel);
    set("yieldLabel", t.yieldLabel);
    set("calcBtn", t.calcBtn);
    set("resultTitle", t.resultTitle);
    set("backHome", t.backHome);
    set("footerTitle", "🌾 AgriSmart");
    set("footerDescription", t.footerDescription);
    set("quickLinksTitle", t.quickLinks);
    set("homeLink", t.homeLink);
    set("weatherLink", t.weatherLink);
    set("cropLink", t.cropsLink);
    set("pricesLink", t.pricesLink);
    set("forumLink", t.forumLink);
    set("contactTitle", t.contactHeading);
    set("copyright", t.copyright);
    set("locationText", "📍 Lomé, Togo");
    set("emailText", t.emailInfo);
    set("phoneText", t.phoneInfo);

    // FORUM PAGE
    set("forumTitle", t.forumTitle);
    set("forumSubtitle", t.forumSubtitle);
    set("createPostTitle", t.createPostTitle);
    set("postBtn", t.postBtn);

// placeholders
    setPlaceholder("username", t.yourName);
    setPlaceholder("message", t.writeMessage);

// default posts
    set("postUser1", "Amis Farmer");
    set("postText1", t.postText1 || "Which crop is best for the rainy season in Togo?");
    set("postUser2", "AgriExpert");
    set("postText2", t.postText2 || "Maize and cassava are very productive in this period.");

    set("postUser1", t.postUser1);
    set("postText1", t.postText1);
    set("postUser2", t.postUser2);
    set("postText2", t.postText2);

    set("postBtn", t.postBtn);
}

// =========================
// 🌦️ WEATHER PAGE
// =========================

const weatherData = {
    day1: { temp: "31°C", adviceKey: "adviceDay1" },
    day2: { temp: "27°C", adviceKey: "adviceDay2" },
    day3: { temp: "28°C", adviceKey: "adviceDay3" }
};

const adviceText = {
    en: {
        adviceDay1: "Sunny day: good for planting and drying harvest.",
        adviceDay2: "Rainy day: avoid spraying pesticides today.",
        adviceDay3: "Cloudy day: good for transplanting seedlings."
    },
    fr: {
        adviceDay1: "Journée ensoleillée : idéale pour semer et sécher la récolte.",
        adviceDay2: "Journée pluvieuse : évitez de pulvériser des pesticides aujourd'hui.",
        adviceDay3: "Journée nuageuse : idéale pour repiquer les jeunes plants."
    }
};

function changeWeather(day) {
    const data = weatherData[day];
    if (!data) return;

    const titleEl = document.getElementById("weatherTitle");
    const tempEl = document.getElementById("temp");
    const adviceEl = document.getElementById("advice");

    if (titleEl) titleEl.innerText = text[lang][day] || day;
    if (tempEl) tempEl.innerText = data.temp;
    if (adviceEl) adviceEl.innerText = adviceText[lang][data.adviceKey];

    document.querySelectorAll(".forecast-card").forEach(c => c.classList.remove("active"));
    const clicked = Array.from(document.querySelectorAll(".forecast-card"))
        .find(c => c.getAttribute("onclick") === `changeWeather('${day}')`);
    if (clicked) clicked.classList.add("active");
}

// =========================
// 💰 PRICES PAGE
// =========================

async function highlightCheap() {
    const cards = document.querySelectorAll(".price-card[data-price]");
    if (!cards.length) return;

    // Try to refresh prices from the backend first (if reachable),
    // then highlight the cheapest one either way.
    try {
        const res = await fetch(`${API_BASE}/api/prices`, { signal: AbortSignal.timeout(2000) });
        if (res.ok) {
            const prices = await res.json();
            prices.forEach(p => {
                const card = document.querySelector(`.price-card[data-crop="${p.crop}"]`);
                if (!card) return;
                card.dataset.price = ((p.min + p.max) / 2).toFixed(0);
                const rangeEl = card.querySelector("[id$='PriceRange']");
                if (rangeEl) rangeEl.innerText = `${p.min} - ${p.max} ${p.unit}`;
            });
        }
    } catch (err) {
        // Backend unreachable — silently keep using the values already in the page.
    }

    let min = Infinity;
    cards.forEach(c => {
        const p = parseFloat(c.dataset.price);
        if (!isNaN(p) && p < min) min = p;
    });

    cards.forEach(c => {
        const p = parseFloat(c.dataset.price);
        c.classList.toggle("best-price", p === min);
    });
}

// =========================
// 🌾 CROP GUIDE PAGE
// =========================

function searchCrop() {
    const input = document.getElementById("searchBox");
    if (!input) return;
    const query = input.value.trim().toLowerCase();

    document.querySelectorAll("#cropList .card-box").forEach(card => {
        const name = (card.dataset.name || "").toLowerCase();
        const matches = query === "" || name.includes(query);
        card.style.display = matches ? "" : "none";
    });
}

// =========================
// 🦠 DISEASE DETECTION PAGE
// =========================

function previewImage() {
    const input = document.getElementById("imageInput");
    const preview = document.getElementById("preview");
    const fileText = document.getElementById("fileText");
    if (!input || !input.files || !input.files[0]) return;

    const file = input.files[0];
    if (fileText) fileText.innerText = file.name;

    const reader = new FileReader();
    reader.onload = e => { if (preview) preview.src = e.target.result; };
    reader.readAsDataURL(file);
}

async function analyzeImage() {
    const resultEl = document.getElementById("result");
    const input = document.getElementById("imageInput");
    if (!resultEl) return;

    if (!input || !input.files || !input.files[0]) {
        resultEl.innerText = lang === "fr"
            ? "Veuillez d'abord choisir une image."
            : "Please choose an image first.";
        return;
    }

    resultEl.innerText = lang === "fr" ? "Analyse en cours..." : "Analyzing...";

    const formData = new FormData();
    formData.append("file", input.files[0]);

    try {
        const res = await fetch(`${API_BASE}/predict`, {
            method: "POST",
            body: formData,
            signal: AbortSignal.timeout(8000)
        });

        if (!res.ok) throw new Error("Backend returned an error");

        const data = await res.json();
        const diseaseName = lang === "fr" ? (data.disease_fr || data.disease) : data.disease;
        const confidencePct = Math.round((data.confidence || 0) * 100);

        resultEl.innerText = lang === "fr"
            ? `Résultat : ${diseaseName} — confiance ${confidencePct}%`
            : `Result: ${diseaseName} — ${confidencePct}% confidence`;
    } catch (err) {
        // Backend unreachable: explain instead of faking a result.
        resultEl.innerText = lang === "fr"
            ? "Impossible de contacter le serveur d'analyse. Démarrez backend/app.py (voir README) pour activer la détection."
            : "Couldn't reach the analysis server. Start backend/app.py (see README) to enable detection.";
    }
}

// =========================
// 🔦 SCROLL REVEAL
// =========================

function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.12 });

    items.forEach(el => observer.observe(el));
}

// =========================
// 🧭 ACTIVE NAV LINK
// =========================

function markCurrentNavLink() {
    const current = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".topnav-links a").forEach(a => {
        const href = a.getAttribute("href");
        if (href === current) {
            a.classList.add("current");
            a.setAttribute("aria-current", "page");
        }
    });
}

// =========================
// 💬 FORUM PAGE
// =========================

function renderForumPost(post) {
    const postContainer = document.getElementById("posts");
    if (!postContainer) return;

    const el = document.createElement("div");
    el.classList.add("post");
    el.innerHTML = `<h3></h3><p></p>`;
    el.querySelector("h3").textContent = post.name;
    el.querySelector("p").textContent = post.message;
    postContainer.appendChild(el);
}

async function loadForumPosts() {
    const postContainer = document.getElementById("posts");
    if (!postContainer) return;

    try {
        const res = await fetch(`${API_BASE}/api/forum`, { signal: AbortSignal.timeout(2000) });
        if (!res.ok) throw new Error("bad response");
        const posts = await res.json();

        postContainer.innerHTML = "";
        posts.slice().reverse().forEach(renderForumPost);
    } catch (err) {
        // Backend unreachable — keep the default posts already in the HTML.
    }
}

async function addPost() {
    const nameInput = document.getElementById("username");
    const messageInput = document.getElementById("message");
    if (!nameInput || !messageInput) return;

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        alert(lang === "fr" ? "Veuillez remplir tous les champs" : "Please fill all fields");
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/api/forum`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, message }),
            signal: AbortSignal.timeout(4000)
        });

        if (!res.ok) throw new Error("bad response");

        const saved = await res.json();
        const postContainer = document.getElementById("posts");
        const el = document.createElement("div");
        el.classList.add("post");
        el.innerHTML = `<h3></h3><p></p>`;
        el.querySelector("h3").textContent = saved.name;
        el.querySelector("p").textContent = saved.message;
        postContainer.prepend(el);
    } catch (err) {
        // Backend unreachable — still show the post locally so the UI feels responsive,
        // but it won't be saved for other visitors.
        const postContainer = document.getElementById("posts");
        const el = document.createElement("div");
        el.classList.add("post");
        el.innerHTML = `<h3></h3><p></p>`;
        el.querySelector("h3").textContent = name;
        el.querySelector("p").textContent = message;
        postContainer.prepend(el);
    }

    nameInput.value = "";
    messageInput.value = "";
}

// INIT
window.addEventListener("DOMContentLoaded", () => {
    setLanguage(lang);
    markCurrentNavLink();
    initReveal();
    loadForumPosts();
});
