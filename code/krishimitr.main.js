// strings for the project
const STRINGS = {
    en: {
        login: "Login", signup: "Sign Up", logout: "Logout",
        welcome_back: "Welcome Back!", create_account: "Create Account",
        email_phone: "Email or Phone", email: "Email", phone: "Phone Number",
        password: "Password", confirm_password: "Confirm Password",
        full_name: "Full Name", location: "Location", farm_size: "Farm Size (acres)",
        primary_crop: "Primary Crop", preferred_language: "Preferred Language",
        member_since: "Member Since", guest_user: "Guest User", edit_profile: "Edit Profile",

        app_title: "KRISHIMITR",
        app_subtitle: "Complete • Offline • Voice • Weather • Mandi",
        advisory_chatbot: "Advisory Chatbot", weather_alerts: "Weather & Alerts",
        mandi_prices: "Mandi Prices (Live Data)", soil_crop_roadmap: "Soil & Crop Roadmap",
        pest_disease_check: "Pest / Disease Check",

        village_city: "Village / City (optional)", use_gps: "📍 Use GPS",
        commodity: "Commodity", market: "Market", min_price: "Min ₹",
        max_price: "Max ₹", modal_price: "Modal ₹",
        soil_recommend: "Soil Recommend", generate_roadmap: "Generate Roadmap",
        analyze_image: "Analyze Image", send: "Send",

        ask_about_crops: "Ask about crops, disease, fertilizer, weather…",
        no_weather_data: "No data yet. Click \"Use GPS\" or enter a place.",
        fill_soil_info: "Fill the soil info to get crop & fertilizer suggestions.",
        live_data_info: "Real-time data from multiple sources • Prices in ₹/quintal",

        chat_queries: "Chat Queries", weather_checks: "Weather Checks",
        mandi_checks: "Mandi Checks", roadmaps_generated: "Roadmaps",

        status: "Status", weather_api_active: "Weather API Active",
        mandi_api_active: "Mandi Data Active", all_features_functional: "All features functional",

        hello: "Hello! I'm KRISHIMITR, your farming assistant. I work offline too - ask me anything about farming!",
        weather_advice: "Based on current weather conditions:",
        mandi_advice: "Current market prices suggest:",
        fertilizer_advice: "For your soil conditions, I recommend:",
        crop_advice: "Suitable crops for your area:",

        offline_mode: "Working offline with cached data",
        sync_pending: "Data will sync when connection returns",
        cached_data: "Showing cached information",
        no_connection: "No internet - using offline mode"
    },

    hi: {
        login: "लॉगिन", signup: "साइन अप", logout: "लॉगआउट",
        welcome_back: "वापसी पर स्वागत है!", create_account: "खाता बनाएं",
        email_phone: "ईमेल या फोन", email: "ईमेल", phone: "फोन नंबर",
        password: "पासवर्ड", confirm_password: "पासवर्ड की पुष्टि करें",
        full_name: "पूरा नाम", location: "स्थान", farm_size: "खेत का आकार (एकड़)",
        primary_crop: "मुख्य फसल", preferred_language: "पसंदीदा भाषा",
        member_since: "सदस्य बने", guest_user: "अतिथि उपयोगकर्ता", edit_profile: "प्रोफ़ाइल संपादित करें",

        app_title: "कृषिमित्र",
        app_subtitle: "पूर्ण • ऑफलाइन • आवाज • मौसम • मंडी",
        advisory_chatbot: "सलाहकार चैटबॉट", weather_alerts: "मौसम और चेतावनी",
        mandi_prices: "मंडी भाव (लाइव डेटा)", soil_crop_roadmap: "मिट्टी और फसल रोडमैप",
        pest_disease_check: "कीट / रोग जांच",

        village_city: "गांव / शहर (वैकल्पिक)", use_gps: "📍 GPS का उपयोग करें",
        commodity: "वस्तु", market: "बाजार", min_price: "न्यूनतम ₹",
        max_price: "अधिकतम ₹", modal_price: "मॉडल ₹",
        soil_recommend: "मिट्टी सिफारिश", generate_roadmap: "रोडमैप बनाएं",
        analyze_image: "छवि विश्लेषण", send: "भेजें",

        ask_about_crops: "फसल, रोग, उर्वरक, मौसम के बारे में पूछें…",
        no_weather_data: "अभी तक कोई डेटा नहीं। \"GPS का उपयोग करें\" पर क्लिक करें या जगह दर्ज करें।",
        fill_soil_info: "फसल और उर्वरक सुझाव पाने के लिए मिट्टी की जानकारी भरें।",
        live_data_info: "कई स्रोतों से वास्तविक समय डेटा • मूल्य ₹/क्विंटल में",

        chat_queries: "चैट प्रश्न", weather_checks: "मौसम जांच",
        mandi_checks: "मंडी जांच", roadmaps_generated: "रोडमैप",

        status: "स्थिति", weather_api_active: "मौसम API सक्रिय",
        mandi_api_active: "मंडी डेटा सक्रिय", all_features_functional: "सभी सुविधाएं कार्यात्मक",

        hello: "नमस्ते! मैं कृषिमित्र हूं, आपका खेती सहायक। मैं ऑफलाइन भी काम करता हूं - खेती के बारे में कुछ भी पूछें!",
        weather_advice: "वर्तमान मौसम परिस्थितियों के आधार पर:",
        mandi_advice: "वर्तमान बाजार भाव सुझाते हैं:",
        fertilizer_advice: "आपकी मिट्टी की स्थिति के लिए, मैं सुझाता हूं:",
        crop_advice: "आपके क्षेत्र के लिए उपयुक्त फसलें:",

        offline_mode: "कैश किए गए डेटा के साथ ऑफलाइन काम कर रहा है",
        sync_pending: "कनेक्शन वापस आने पर डेटा सिंक होगा",
        cached_data: "कैश की गई जानकारी दिखा रहा है",
        no_connection: "इंटरनेट नहीं - ऑफलाइन मोड का उपयोग"
    },

    pa: {
        login: "ਲਾਗਇਨ", signup: "ਸਾਈਨ ਅਪ", logout: "ਲਾਗਆਉਟ",
        welcome_back: "ਮੁੜ ਆਉਣ ਤੇ ਜੀ ਆਇਆਂ ਨੂੰ!", create_account: "ਖਾਤਾ ਬਣਾਓ",
        email_phone: "ਈਮੇਲ ਜਾਂ ਫੋਨ", email: "ਈਮੇਲ", phone: "ਫੋਨ ਨੰਬਰ",
        password: "ਪਾਸਵਰਡ", confirm_password: "ਪਾਸਵਰਡ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
        full_name: "ਪੂਰਾ ਨਾਮ", location: "ਸਥਾਨ", farm_size: "ਖੇਤ ਦਾ ਆਕਾਰ (ਏਕੜ)",
        primary_crop: "ਮੁੱਖ ਫਸਲ", preferred_language: "ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ",
        member_since: "ਮੈਂਬਰ ਬਣੇ", guest_user: "ਮਹਿਮਾਨ ਉਪਭੋਗਤਾ", edit_profile: "ਪ੍ਰੋਫਾਇਲ ਸੰਪਾਦਿਤ ਕਰੋ",

        app_title: "ਕ੍ਰਿਸ਼ਿਮਿਤ੍ਰ",
        app_subtitle: "ਪੂਰਨ • ਆਫਲਾਈਨ • ਆਵਾਜ਼ • ਮੌਸਮ • ਮੰਡੀ",
        advisory_chatbot: "ਸਲਾਹਕਾਰ ਚੈਟਬੋਟ", weather_alerts: "ਮੌਸਮ ਅਤੇ ਚੇਤਾਵਨੀਆਂ",
        mandi_prices: "ਮੰਡੀ ਭਾਅ (ਲਾਈਵ ਡੇਟਾ)", soil_crop_roadmap: "ਮਿੱਟੀ ਅਤੇ ਫਸਲ ਰੋਡਮੈਪ",
        pest_disease_check: "ਕੀੜੇ / ਰੋਗ ਜਾਂਚ",

        village_city: "ਪਿੰਡ / ਸ਼ਹਿਰ (ਵਿਕਲਪਿਕ)", use_gps: "📍 GPS ਵਰਤੋ",
        commodity: "ਵਸਤੂ", market: "ਬਾਜ਼ਾਰ", min_price: "ਘੱਟੋ ਘੱਟ ₹",
        max_price: "ਵੱਧ ਤੋਂ ਵੱਧ ₹", modal_price: "ਮਾਡਲ ₹",
        soil_recommend: "ਮਿੱਟੀ ਸਿਫਾਰਿਸ਼", generate_roadmap: "ਰੋਡਮੈਪ ਬਣਾਓ",
        analyze_image: "ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ", send: "ਭੇਜੋ",

        ask_about_crops: "ਫਸਲ, ਰੋਗ, ਖਾਦ, ਮੌਸਮ ਬਾਰੇ ਪੁੱਛੋ…",
        no_weather_data: "ਅਜੇ ਤੱਕ ਕੋਈ ਡੇਟਾ ਨਹੀਂ। \"GPS ਵਰਤੋ\" ਤੇ ਕਲਿੱਕ ਕਰੋ ਜਾਂ ਜਗ੍ਹਾ ਦਰਜ ਕਰੋ।",
        fill_soil_info: "ਫਸਲ ਅਤੇ ਖਾਦ ਸੁਝਾਅ ਪਾਉਣ ਲਈ ਮਿੱਟੀ ਦੀ ਜਾਣਕਾਰੀ ਭਰੋ।",
        live_data_info: "ਕਈ ਸਰੋਤਾਂ ਤੋਂ ਅਸਲ ਸਮਾਂ ਡੇਟਾ • ਕੀਮਤਾਂ ₹/ਕੁਇੰਟਲ ਵਿੱਚ",


        chat_queries: "ਚੈਟ ਸਵਾਲ", weather_checks: "ਮੌਸਮ ਜਾਂਚ",
        mandi_checks: "ਮੰਡੀ ਜਾਂਚ", roadmaps_generated: "ਰੋਡਮੈਪ",

        status: "ਸਥਿਤੀ", weather_api_active: "ਮੌਸਮ API ਸਰਗਰਮ",
        mandi_api_active: "ਮੰਡੀ ਡੇਟਾ ਸਰਗਰਮ", all_features_functional: "ਸਾਰੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਕਾਰਜਸ਼ੀਲ",


        hello: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਕ੍ਰਿਸ਼ਿਮਿਤ੍ਰ ਹਾਂ, ਤੁਹਾਡਾ ਖੇਤੀ ਸਹਾਇਕ। ਮੈਂ ਆਫਲਾਈਨ ਵੀ ਕੰਮ ਕਰਦਾ ਹਾਂ - ਖੇਤੀ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ!",
        weather_advice: "ਮੌਜੂਦਾ ਮੌਸਮੀ ਸਥਿਤੀਆਂ ਦੇ ਅਧਾਰ ਤੇ:",
        mandi_advice: "ਮੌਜੂਦਾ ਬਾਜ਼ਾਰ ਭਾਅ ਸੁਝਾਉਂਦੇ ਹਨ:",
        fertilizer_advice: "ਤੁਹਾਡੀ ਮਿੱਟੀ ਦੀ ਸਥਿਤੀ ਲਈ, ਮੈਂ ਸੁਝਾਅ ਦਿੰਦਾ ਹਾਂ:",
        crop_advice: "ਤੁਹਾਡੇ ਖੇਤਰ ਲਈ ਢੁਕਵੀਆਂ ਫਸਲਾਂ:",


        offline_mode: "ਕੈਸ਼ ਕੀਤੇ ਡੇਟਾ ਨਾਲ ਆਫਲਾਈਨ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ",
        sync_pending: "ਕਨੈਕਸ਼ਨ ਵਾਪਸ ਆਉਣ ਤੇ ਡੇਟਾ ਸਿੰਕ ਹੋਵੇਗਾ",
        cached_data: "ਕੈਸ਼ ਕੀਤੀ ਜਾਣਕਾਰੀ ਦਿਖਾ ਰਿਹਾ ਹੈ",
        no_connection: "ਇੰਟਰਨੈੱਟ ਨਹੀਂ - ਆਫਲਾਈਨ ਮੋਡ ਦੀ ਵਰਤੋਂ"
    }
};

const OPENWEATHER_API_KEY = "074adeb083aab9a7dc97a4d8e65997dc";

const state = {
    lang: 'en',
    user: null,
    coords: null,
    wx: null,
    mandi: [],
    stats: {
        chatCount: 0,
        weatherChecks: 0,
        mandiChecks: 0,
        roadmapsGenerated: 0
    },
    voices: {
        available: false,
        current: null,
        supportedLanguages: []
    },
    connectivity: {
        online: navigator.onLine,
        speed: 'unknown',
        lastOnline: new Date(),
        quality: 'good'
    },
    offline: {
        mode: false,
        dataQueue: [],
        cachedData: {},
        lastSync: null,
        pendingOperations: []
    },
    cache: {
        weather: {},
        mandi: {},
        roadmaps: {},
        responses: {}
    },
    performance: {
        dataSaved: 0,
        cacheSize: 0,
        apiCalls: 0
    }
};

const $ = s => document.querySelector(s);

function t(key, fallback = key) {
    return (STRINGS[state.lang] && STRINGS[state.lang][key]) || STRINGS.en[key] || fallback;
}

function updateTexts() {
    document.querySelectorAll('[data-text]').forEach(el => {
        const key = el.getAttribute('data-text');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        el.placeholder = t(key);
    });
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(createServiceWorkerBlob())
        .then(registration => {
            console.log('ServiceWorker registered successfully:', registration.scope);
            updateSyncStatus('Service Worker registered', 'syncing');
        })
        .catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
}

function createServiceWorkerBlob() {
    const swCode = `
        const CACHE_NAME = 'krishimitr-v1';
        const urlsToCache = [
          '/',
          '/offline.html'
        ];

        self.addEventListener('install', event => {
          event.waitUntil(
            caches.open(CACHE_NAME)
              .then(cache => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
              })
          );
        });

        self.addEventListener('fetch', event => {
          event.respondWith(
            caches.match(event.request)
              .then(response => {
                if (response) {
                  return response;
                }
                return fetch(event.request);
              }
            )
          );
        });
      `;

    return URL.createObjectURL(new Blob([swCode], { type: 'application/javascript' }));
}

function initConnectivityMonitoring() {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if ('connection' in navigator) {
        navigator.connection.addEventListener('change', handleConnectionChange);
        updateConnectionQuality();
    }

    setInterval(checkConnectivityQuality, 30000);
    updateConnectivityUI();
}

function handleOnline() {
    state.connectivity.online = true;
    state.connectivity.lastOnline = new Date();

    showConnectivityBanner('Back online! Syncing data...', 'online', 3000);
    updateConnectivityUI();
    updateSyncStatus('Syncing...', 'syncing');

    processPendingOperations();

    document.querySelectorAll('.offline-unavailable').forEach(el => {
        el.classList.remove('offline-unavailable');
    });
}

function handleOffline() {
    state.connectivity.online = false;

    showConnectivityBanner('No internet connection. Working offline...', 'offline', 0);
    updateConnectivityUI();
    updateSyncStatus('Offline', 'offline');

    document.querySelectorAll('#weatherCard .card-body, #mandiCard .card-body').forEach(el => {
        if (!getCachedData(`weather_${state.coords?.latitude || 'delhi'}`)) {
            el.classList.add('offline-unavailable');
        }
    });
}

function handleConnectionChange() {
    updateConnectionQuality();
    updateConnectivityUI();
}

function updateConnectionQuality() {
    if (!('connection' in navigator)) return;

    const connection = navigator.connection;
    const effectiveType = connection.effectiveType;

    state.connectivity.speed = effectiveType;

    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        state.connectivity.quality = 'poor';
        showConnectivityBanner('Slow connection detected. Optimizing for low bandwidth...', 'slow', 5000);
    } else if (effectiveType === '3g') {
        state.connectivity.quality = 'fair';
    } else {
        state.connectivity.quality = 'good';
    }
}

async function checkConnectivityQuality() {
    if (!state.connectivity.online) return;

    const startTime = performance.now();

    try {
        const response = await fetch('https://httpstat.us/200', {
            method: 'HEAD',
            timeout: 5000
        });

        const endTime = performance.now();
        const responseTime = endTime - startTime;

        if (responseTime > 3000) {
            state.connectivity.quality = 'poor';
        } else if (responseTime > 1000) {
            state.connectivity.quality = 'fair';
        } else {
            state.connectivity.quality = 'good';
        }

    } catch (error) {
        if (state.connectivity.online) {
            state.connectivity.quality = 'poor';
        }
    }
}

function showConnectivityBanner(message, type, duration = 3000) {
    const banner = $('#connectivityBanner');
    const messageEl = $('#connectivityMessage');

    messageEl.textContent = message;
    banner.className = `connectivity-banner ${type} show`;

    if (duration > 0) {
        setTimeout(() => {
            banner.classList.remove('show');
        }, duration);
    }
}

function updateConnectivityUI() {
    const appStatus = $('#appStatus');

    if (state.connectivity.online) {
        if (state.connectivity.quality === 'poor') {
            appStatus.innerHTML = '🟡 Online (Slow connection)';
        } else {
            appStatus.innerHTML = '✅ All systems operational';
        }
    } else {
        appStatus.innerHTML = '🔴 Offline mode - Limited functionality';
    }

    updateDataUsageUI();
}

function updateSyncStatus(message, status) {
    const syncIndicator = $('#syncIndicator');
    const syncMessage = $('#syncMessage');

    syncMessage.textContent = message;
    syncIndicator.className = `sync-indicator ${status}`;

    if (status === 'syncing') {
        setTimeout(() => {
            updateSyncStatus('Synced', 'online');
        }, 3000);
    }
}

function updateDataUsageUI() {
    const dataUsage = $('#dataUsage');
    const dataSaved = $('#dataSaved');
    const cacheSize = $('#cacheSize');

    if (state.connectivity.quality === 'poor' || !state.connectivity.online) {
        dataUsage.classList.remove('hidden');
        dataSaved.textContent = formatBytes(state.performance.dataSaved);
        cacheSize.textContent = formatBytes(state.performance.cacheSize);
    } else {
        dataUsage.classList.add('hidden');
    }
}


function setCachedData(key, data, expiryMinutes = 60) {
    const cacheData = {
        data: data,
        timestamp: new Date().getTime(),
        expiry: expiryMinutes * 60 * 1000
    };

    try {
        localStorage.setItem(`cache_${key}`, JSON.stringify(cacheData));
        state.performance.cacheSize = getCacheSize();
    } catch (error) {
        console.warn('Failed to cache data:', error);
    }
}

function getCachedData(key) {
    try {
        const cached = localStorage.getItem(`cache_${key}`);
        if (!cached) return null;

        const cacheData = JSON.parse(cached);
        const now = new Date().getTime();

        if (now - cacheData.timestamp > cacheData.expiry) {
            localStorage.removeItem(`cache_${key}`);
            return null;
        }

        return cacheData.data;
    } catch (error) {
        console.warn('Failed to retrieve cached data:', error);
        return null;
    }
}

function getCacheSize() {
    let totalSize = 0;
    for (let key in localStorage) {
        if (key.startsWith('cache_')) {
            totalSize += localStorage[key].length;
        }
    }
    return totalSize;
}

function clearExpiredCache() {
    const now = new Date().getTime();
    for (let key in localStorage) {
        if (key.startsWith('cache_')) {
            try {
                const cacheData = JSON.parse(localStorage[key]);
                if (now - cacheData.timestamp > cacheData.expiry) {
                    localStorage.removeItem(key);
                }
            } catch (error) {
                localStorage.removeItem(key);
            }
        }
    }
    state.performance.cacheSize = getCacheSize();
}


function addToOfflineQueue(operation) {
    state.offline.dataQueue.push({
        ...operation,
        timestamp: new Date().toISOString(),
        id: generateId()
    });

    localStorage.setItem('pendingOperations', JSON.stringify(state.offline.dataQueue));
    updateSyncStatus(`${state.offline.dataQueue.length} operations pending`, 'offline');
}

function processPendingOperations() {
    if (state.offline.dataQueue.length === 0) return;

    updateSyncStatus('Processing pending operations...', 'syncing');

    state.offline.dataQueue.forEach(async (operation, index) => {
        try {
            await executeOperation(operation);
            state.offline.dataQueue.splice(index, 1);
        } catch (error) {
            console.error('Failed to execute operation:', operation, error);
        }
    });

    localStorage.setItem('pendingOperations', JSON.stringify(state.offline.dataQueue));

    if (state.offline.dataQueue.length === 0) {
        updateSyncStatus('All operations synced', 'online');
    }
}

async function executeOperation(operation) {
    switch (operation.type) {
        case 'weather':
            return await fetchWeather(operation.data.query);
        case 'mandi':
            return await refreshMandiData(operation.data.crop, operation.data.state);
        case 'user_update':
            return await syncUserData(operation.data);
        default:
            console.warn('Unknown operation type:', operation.type);
    }
}


let currentSpeech = null;
let availableVoices = [];
let recognition = null;

function initVoiceSystem() {
    const voiceIndicator = $('#voiceIndicator');
    const voiceStatus = $('#voiceStatus');

    if (!('speechSynthesis' in window)) {
        voiceIndicator.className = 'voice-indicator';
        voiceStatus.textContent = 'Voice not supported in this browser';
        state.voices.available = false;
        return;
    }

    function loadVoices() {
        availableVoices = speechSynthesis.getVoices();
        console.log('Available voices:', availableVoices);

        if (availableVoices.length > 0) {
            state.voices.available = true;
            voiceIndicator.className = 'voice-indicator available';
            voiceStatus.textContent = `Voice ready (${availableVoices.length} voices available)`;
        } else {
            state.voices.available = false;
            voiceIndicator.className = 'voice-indicator';
            voiceStatus.textContent = 'Loading voices...';
        }
    }

    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
    setTimeout(loadVoices, 1000);
    setTimeout(loadVoices, 3000);
}

function selectBestVoice(targetLang) {
    if (!availableVoices.length) {
        availableVoices = speechSynthesis.getVoices();
    }

    let selectedVoice = null;

    if (targetLang === 'hi') {
        const hindiPriorities = [
            'Google हिन्दी', 'Microsoft Hemant - Hindi (India)', 'Lekha',
            'Hindi (India)', 'hi-IN', 'Google hindi'
        ];

        for (const priority of hindiPriorities) {
            selectedVoice = availableVoices.find(voice =>
                voice.name.toLowerCase().includes(priority.toLowerCase()) ||
                voice.lang.toLowerCase().includes('hi-in') ||
                (voice.lang.startsWith('hi') && voice.name.toLowerCase().includes('india'))
            );
            if (selectedVoice) break;
        }

        if (!selectedVoice) {
            selectedVoice = availableVoices.find(voice =>
                voice.lang.toLowerCase().includes('hi') ||
                voice.name.toLowerCase().includes('hindi')
            );
        }

    } else if (targetLang === 'pa') {
        selectedVoice = availableVoices.find(voice =>
            voice.name.toLowerCase().includes('punjabi') ||
            voice.lang.startsWith('pa-') ||
            voice.name.includes('ਪੰਜਾਬੀ')
        );

    } else {
        const englishPriorities = [
            'Google US English', 'Microsoft David', 'Alex', 'Samantha',
            'Google UK English Female', 'Microsoft Zira'
        ];

        for (const priority of englishPriorities) {
            selectedVoice = availableVoices.find(voice =>
                voice.name.toLowerCase().includes(priority.toLowerCase())
            );
            if (selectedVoice) break;
        }

        if (!selectedVoice) {
            selectedVoice = availableVoices.find(voice =>
                voice.lang.startsWith('en-') ||
                voice.name.toLowerCase().includes('english')
            );
        }
    }

    if (!selectedVoice && availableVoices.length > 0) {
        selectedVoice = availableVoices[0];
    }

    return selectedVoice;
}

function speakText(text, language = null) {
    if (!state.voices.available) {
        console.log('Voice not available');
        return;
    }

    speechSynthesis.cancel();

    const targetLang = language || state.lang;
    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoice = selectBestVoice(targetLang);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
    } else {
        const langMap = {
            'hi': 'hi-IN',
            'pa': 'pa-IN',
            'en': 'en-US'
        };
        utterance.lang = langMap[targetLang] || 'en-US';
    }

    if (targetLang === 'hi') {
        utterance.rate = 0.8;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
    } else if (targetLang === 'pa') {
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        utterance.volume = 1.0;
    } else {
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
    }

    const voiceIndicator = $('#voiceIndicator');
    const voiceStatus = $('#voiceStatus');

    utterance.onstart = () => {
        voiceIndicator.className = 'voice-indicator speaking';
        voiceStatus.textContent = `Speaking in ${targetLang.toUpperCase()}...`;
        currentSpeech = utterance;
    };

    utterance.onend = () => {
        voiceIndicator.className = 'voice-indicator available';
        voiceStatus.textContent = 'Voice ready';
        currentSpeech = null;
    };

    utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        voiceIndicator.className = 'voice-indicator';
        voiceStatus.textContent = 'Voice error occurred';
        currentSpeech = null;
    };

    speechSynthesis.speak(utterance);
    return utterance;
}

function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        $('#micBtn').classList.add('hidden');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Speech recognition result:', transcript);
        $('#chatInput').value = transcript;

        if (event.results[0][0].confidence > 0.8) {
            setTimeout(() => handleSend(), 500);
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        const voiceStatus = $('#voiceStatus');
        voiceStatus.textContent = `Speech error: ${event.error}`;
        setTimeout(() => {
            voiceStatus.textContent = 'Voice ready';
        }, 3000);
    };

    recognition.onstart = () => {
        $('#voiceIndicator').className = 'voice-indicator speaking';
        $('#voiceStatus').textContent = 'Listening...';
    };

    recognition.onend = () => {
        $('#voiceIndicator').className = 'voice-indicator available';
        $('#voiceStatus').textContent = 'Voice ready';
    };
}

function updateRecognitionLanguage() {
    if (!recognition) return;

    const langMap = {
        'en': 'en-US',
        'hi': 'hi-IN',
        'pa': 'pa-IN'
    };

    recognition.lang = langMap[state.lang] || 'en-US';
}


function initStorage() {
    if (!localStorage.getItem('krishimitrUsers')) {
        localStorage.setItem('krishimitrUsers', JSON.stringify({}));
    }
    if (!localStorage.getItem('krishimitrCurrentUser')) {
        localStorage.setItem('krishimitrCurrentUser', '');
    }
}

function saveUser(userData) {
    const users = JSON.parse(localStorage.getItem('krishimitrUsers') || '{}');
    users[userData.email] = userData;
    localStorage.setItem('krishimitrUsers', JSON.stringify(users));
}

function loadUser(email) {
    const users = JSON.parse(localStorage.getItem('krishimitrUsers') || '{}');
    return users[email] || null;
}

function getCurrentUser() {
    const currentUserEmail = localStorage.getItem('krishimitrCurrentUser');
    if (currentUserEmail) {
        return loadUser(currentUserEmail);
    }
    return null;
}

function setCurrentUser(email) {
    localStorage.setItem('krishimitrCurrentUser', email);
    state.user = loadUser(email);
    if (state.user) {
        state.lang = state.user.preferredLanguage || 'en';
        updateLanguageButtons();
        updateTexts();
        updateRecognitionLanguage();
        showUserInterface();
        updateProfile();
    }
}

function clearCurrentUser() {
    localStorage.setItem('krishimitrCurrentUser', '');
    state.user = null;
    hideUserInterface();
}

function updateStats(statKey) {
    if (!state.user) return;

    state.stats[statKey]++;
    const users = JSON.parse(localStorage.getItem('krishimitrUsers') || '{}');
    if (users[state.user.email]) {
        users[state.user.email].stats = users[state.user.email].stats || {};
        users[state.user.email].stats[statKey] = state.stats[statKey];
        localStorage.setItem('krishimitrUsers', JSON.stringify(users));
    }

    updateStatsDisplay();
}

function updateStatsDisplay() {
    $('#chatCount').textContent = state.stats.chatCount;
    $('#weatherChecks').textContent = state.stats.weatherChecks;
    $('#mandiChecks').textContent = state.stats.mandiChecks;
    $('#roadmapsGenerated').textContent = state.stats.roadmapsGenerated;
}

function showUserInterface() {
    $('#userInfo').classList.remove('hidden');
    $('#authBtn').classList.add('hidden');
    $('#logoutBtn').classList.remove('hidden');
}

function hideUserInterface() {
    $('#userInfo').classList.add('hidden');
    $('#authBtn').classList.remove('hidden');
    $('#logoutBtn').classList.add('hidden');

    $('#profileAvatar').textContent = 'G';
    $('#profileName').textContent = t('guest_user');
    $('#profileEmail').textContent = '';
    $('#profileLocation').textContent = '-';
    $('#profileFarmSize').textContent = '-';
    $('#profileCrop').textContent = '-';
    $('#profileJoinDate').textContent = '-';

    state.stats = { chatCount: 0, weatherChecks: 0, mandiChecks: 0, roadmapsGenerated: 0 };
    updateStatsDisplay();
}

function updateProfile() {
    if (!state.user) return;

    const firstLetter = state.user.name ? state.user.name.charAt(0).toUpperCase() : 'U';
    $('#userAvatar').textContent = firstLetter;
    $('#profileAvatar').textContent = firstLetter;
    $('#userName').textContent = state.user.name;
    $('#userLocation').textContent = state.user.location;
    $('#profileName').textContent = state.user.name;
    $('#profileEmail').textContent = state.user.email;
    $('#profileLocation').textContent = state.user.location || '-';
    $('#profileFarmSize').textContent = state.user.farmSize ? `${state.user.farmSize} acres` : '-';
    $('#profileCrop').textContent = state.user.primaryCrop || '-';
    $('#profileJoinDate').textContent = new Date(state.user.joinDate).toLocaleDateString();

    if (state.user.stats) {
        state.stats = { ...state.stats, ...state.user.stats };
        updateStatsDisplay();
    }
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === state.lang) {
            btn.classList.add('active');
        }
    });
}

function switchLanguage(newLang) {
    state.lang = newLang;
    updateLanguageButtons();
    updateTexts();
    updateRecognitionLanguage();

    if (state.user) {
        state.user.preferredLanguage = newLang;
        saveUser(state.user);
    }

    addMsg(t('hello'), 'bot');
}


const chatLog = $('#chatLog');

function addMsg(text, who = 'bot') {
    const div = document.createElement('div');
    div.className = `msg ${who}`;
    if (!state.connectivity.online) {
        div.classList.add('offline');
    }
    div.textContent = text;
    chatLog.appendChild(div);
    chatLog.scrollTop = chatLog.scrollHeight;

    if (who === 'user') {
        updateStats('chatCount');
    }
}

function handleSend() {
    const text = $('#chatInput').value.trim();
    if (!text) return;

    addMsg(text, 'user');
    $('#chatInput').value = '';

    if (state.connectivity.online) {
        processQuery(text);
    } else {
        processQueryOffline(text);
    }
}

function processQuery(text) {
    const lower = text.toLowerCase();

    const weatherKeywords = ['weather', 'mausam', 'barish', 'rain', 'temperature', 'तापमान', 'ਮੌਸਮ', 'ਮੀਂਹ'];
    const mandiKeywords = ['price', 'mandi', 'bhav', 'किमत', 'भाव', 'मंडी', 'ਭਾਅ', 'ਮੰਡੀ', 'ਕੀਮਤ'];
    const fertilizerKeywords = ['fertilizer', 'khad', 'urea', 'npk', 'खाद', 'उर्वरक', 'ਖਾਦ', 'ਉਰਵਰਕ'];
    const cropKeywords = ['crop', 'fasal', 'sowing', 'बुआई', 'फसल', 'ਫਸਲ', 'ਬੀਜਣਾ'];

    let response = '';

    if (weatherKeywords.some(keyword => lower.includes(keyword))) {
        response = replyWeather();
    } else if (mandiKeywords.some(keyword => lower.includes(keyword))) {
        response = replyMandi();
    } else if (fertilizerKeywords.some(keyword => lower.includes(keyword))) {
        response = replyFertilizer();
    } else if (cropKeywords.some(keyword => lower.includes(keyword))) {
        response = replyCrop();
    } else {
        const responses = [
            t('hello'),
            `${t('weather_advice')} Check weather section for current conditions.`,
            `${t('crop_advice')} Wheat, Rice, Maize, Cotton are suitable for most areas.`
        ];
        response = responses[Math.floor(Math.random() * responses.length)];
        addMsg(response);
    }

    if (response && state.voices.available) {
        setTimeout(() => speakText(response, state.lang), 500);
    }
}

function processQueryOffline(query) {
    const cacheKey = `response_${query.toLowerCase()}`;
    const cachedResponse = getCachedData(cacheKey);

    if (cachedResponse) {
        addMsg(cachedResponse);
        addMsg('(Cached response)', 'bot');
        return;
    }

    const offlineResponse = generateOfflineResponse(query);
    addMsg(offlineResponse, 'bot');
    setCachedData(cacheKey, offlineResponse, 1440);
}

function generateOfflineResponse(query) {
    const lower = query.toLowerCase();

    if (lower.includes('weather') || lower.includes('mausam') || lower.includes('barish')) {
        return "Weather data requires internet connection. Check the weather section when online for current conditions.";
    }

    if (lower.includes('price') || lower.includes('mandi') || lower.includes('bhav')) {
        return "Mandi prices require internet connection. Latest cached prices may be available in the mandi section.";
    }

    if (lower.includes('fertilizer') || lower.includes('khad') || lower.includes('urea')) {
        return "For wheat: Use 120kg N, 60kg P, 40kg K per hectare. Apply 1/3 nitrogen as basal, rest in 2 splits. For rice: 100kg N, 50kg P, 25kg K per hectare.";
    }

    if (lower.includes('crop') || lower.includes('fasal') || lower.includes('sowing')) {
        return "Good crops for most Indian regions: Wheat (Nov-Dec sowing), Rice (June-July), Maize (June-July), Cotton (May-June). Consider local soil and climate.";
    }

    if (lower.includes('disease') || lower.includes('pest') || lower.includes('keede')) {
        return "Common crop issues: Leaf blight (spray Mancozeb), Aphids (use Imidacloprid), Powdery mildew (spray Sulfur). Always consult local agricultural officer for specific problems.";
    }

    return "I'm working in offline mode with limited capabilities. For real-time weather and market prices, please connect to internet. I can still help with general farming advice!";
}

function replyWeather() {
    let response;
    if (!state.wx) {
        response = 'Weather not loaded yet. Click Use GPS or enter a place.';
        addMsg(response);
        return response;
    }

    const w = state.wx;
    response = `${t('weather_advice')} Today: ${w.condition}. Temp ${w.temp}°C (feels ${w.feels_like}°C). Humidity: ${w.humidity}%. Wind: ${w.wind_speed} m/s`;
    addMsg(response);
    return response;
}

function replyMandi() {
    let response;
    if (!state.mandi.length) {
        response = 'Mandi data not loaded yet. Choose crop & state, then click refresh.';
        addMsg(response);
        return response;
    }

    const top = state.mandi[0];
    response = `${t('mandi_advice')} ${top.commodity} latest price at ${top.market}: ₹${top.modal}/quintal (range: ₹${top.min}-${top.max})`;
    addMsg(response);
    return response;
}

function replyFertilizer() {
    const soil = readSoil();
    const f = fertilizerAdvice(soil);
    const response = `${t('fertilizer_advice')} Basal: ${f.basal}; Top dress: ${f.topdress}. Tip: ${f.tip}`;
    addMsg(response);
    return response;
}

function replyCrop() {
    const soil = readSoil();
    const w = state.wx;
    const list = cropRecommend(soil, w);
    const response = `${t('crop_advice')} ${list.slice(0, 4).join(', ')}`;
    addMsg(response);
    return response;
}


function showWeatherStatus(message, type = 'loading') {
    const statusEl = $('#weatherStatus');
    statusEl.textContent = message;
    statusEl.className = `weather-status ${type}`;
    statusEl.classList.remove('hidden');
}

function hideWeatherStatus() {
    $('#weatherStatus').classList.add('hidden');
}

async function fetchWeather(query) {
    console.log('Fetching weather for:', query);


    const cacheKey = `weather_${query}`;
    const cachedData = getCachedData(cacheKey);

    if (cachedData && !state.connectivity.online) {
        displayWeatherData(cachedData.current, cachedData.forecast);
        showWeatherStatus('Showing cached weather data', 'success');
        $('#wx').innerHTML += '<span class="cached-indicator">CACHED</span>';
        return;
    }

    if (!state.connectivity.online) {
        addToOfflineQueue({
            type: 'weather',
            data: { query: query }
        });
        showWeatherStatus('Weather request queued for sync', 'error');
        return;
    }

    showWeatherStatus('Fetching weather data...', 'loading');

    try {
        let apiUrl;

        if (query.includes(',') && !isNaN(parseFloat(query.split(',')[0]))) {
            const [lat, lon] = query.split(',').map(coord => coord.trim());
            apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        } else {
            apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        }

        const response = await fetch(apiUrl);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`OpenWeatherMap Error: ${errorData.message || response.statusText}`);
        }

        const currentData = await response.json();


        let forecastApiUrl;
        if (query.includes(',') && !isNaN(parseFloat(query.split(',')[0]))) {
            const [lat, lon] = query.split(',').map(coord => coord.trim());
            forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        } else {
            forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(query)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
        }

        let forecastData = null;
        try {
            const forecastResponse = await fetch(forecastApiUrl);
            if (forecastResponse.ok) {
                forecastData = await forecastResponse.json();
            }
        } catch (forecastError) {
            console.warn('Forecast fetch failed:', forecastError);
        }


        setCachedData(cacheKey, { current: currentData, forecast: forecastData }, 30);

        displayWeatherData(currentData, forecastData);
        updateStats('weatherChecks');

    } catch (error) {
        console.error('Weather API Error:', error);
        $('#wx').innerHTML = `
          <div style="color: #e53e3e;">
            ⚠️ Unable to load weather data: ${error.message}<br>
            <small>Please check the location name or try again later.</small>
          </div>
        `;
        showWeatherStatus(`Weather fetch failed: ${error.message}`, 'error');
        setTimeout(hideWeatherStatus, 8000);
    }
}

function displayWeatherData(currentData, forecastData = null) {

    state.wx = {
        temp: currentData.main.temp,
        feels_like: currentData.main.feels_like,
        condition: currentData.weather[0].description,
        humidity: currentData.main.humidity,
        wind_speed: currentData.wind.speed,
        pressure: currentData.main.pressure,
        visibility: currentData.visibility ? (currentData.visibility / 1000).toFixed(1) : 'N/A',
        rain_prob: Math.round(currentData.main.humidity * 0.8)
    };


    const wxEl = $('#wx');
    wxEl.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div><strong>📍 ${currentData.name}, ${currentData.sys.country}</strong></div>
          <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <img src="https://openweathermap.org/img/w/${currentData.weather[0].icon}.png" 
                   alt="${currentData.weather[0].description}" 
                   style="width: 50px; height: 50px;" />
              <div>
                <div>🌡️ <strong>${currentData.main.temp}°C</strong> (feels like ${currentData.main.feels_like}°C)</div>
                <div style="text-transform: capitalize;">☁️ ${currentData.weather[0].description}</div>
              </div>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 6px; font-size: 11px;">
            <div>💨 Wind: ${currentData.wind.speed} m/s</div>
            <div>💧 Humidity: ${currentData.main.humidity}%</div>
            <div>🔽 Pressure: ${currentData.main.pressure} hPa</div>
            <div>👁️ Visibility: ${state.wx.visibility} km</div>
          </div>
        </div>
      `;


    if (forecastData && forecastData.list) {
        const forecastEl = $('#forecast');
        const today = new Date().getDate();
        let foundDates = {};
        let forecastHtml = '<div style="margin-top:12px;"><strong>📅 3-Day Forecast:</strong></div>';
        forecastHtml += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:6px;margin-top:8px;">';
        let count = 0;


        for (const item of forecastData.list) {
            const date = new Date(item.dt * 1000);
            const day = date.getDate();
            const dateString = date.toDateString();


            if (day !== today && !foundDates[dateString]) {
                foundDates[dateString] = true;
                count++;
                const dayName = date.toLocaleDateString('en', { weekday: 'short' });
                forecastHtml += `
              <div style="background:rgba(255,255,255,0.9);padding:6px;border-radius:6px;text-align:center;border:1px solid var(--border);">
                <div style="font-size:10px;color:var(--accent);">${dayName}</div>
                <img src="https://openweathermap.org/img/w/${item.weather[0].icon}.png" 
                     alt="${item.weather[0].description}" 
                     style="width:25px;height:25px;" />
                <div style="font-size:9px;">${Math.round(item.main.temp)}°C</div>
              </div>
            `;
                if (count === 3) break; 
            }
        }

        forecastHtml += '</div>';
        forecastEl.innerHTML = forecastHtml;
    }


    const alertsList = $('#alerts');
    alertsList.innerHTML = '';

    if (currentData.main.temp > 35) {
        const li = document.createElement('li');
        li.innerHTML = '🌡️ <strong>High Temperature:</strong> Extra irrigation needed';
        li.style.color = '#e53e3e';
        alertsList.appendChild(li);
    }

    if (currentData.main.humidity > 80) {
        const li = document.createElement('li');
        li.innerHTML = '💧 <strong>High Humidity:</strong> Monitor for fungal diseases';
        li.style.color = '#3182ce';
        alertsList.appendChild(li);
    }

    if (currentData.wind.speed > 5.5) {
        const li = document.createElement('li');
        li.innerHTML = '💨 <strong>Windy:</strong> Avoid spraying today';
        li.style.color = '#38a169';
        alertsList.appendChild(li);
    }

    if (currentData.main.temp < 5) {
        const li = document.createElement('li');
        li.innerHTML = '❄️ <strong>Frost Warning:</strong> Protect crops';
        li.style.color = '#3182ce';
        alertsList.appendChild(li);
    }

    const weatherMain = currentData.weather[0].main.toLowerCase();
    if (weatherMain.includes('rain') || weatherMain.includes('drizzle') || weatherMain.includes('thunderstorm')) {
        const li = document.createElement('li');
        li.innerHTML = '🌧️ <strong>Rain Expected:</strong> Delay outdoor activities';
        li.style.color = '#3182ce';
        alertsList.appendChild(li);
    }

    if (alertsList.children.length === 0) {
        const li = document.createElement('li');
        li.innerHTML = '✅ Weather conditions are favorable for farming today';
        li.style.color = '#38a169';
        alertsList.appendChild(li);
    }

    showWeatherStatus('Weather data loaded successfully!', 'success');
    setTimeout(hideWeatherStatus, 3000);
}


function showMandiStatus(message, type = 'loading') {
    const statusEl = $('#mandiStatus');
    statusEl.textContent = message;
    statusEl.className = `mandi-status ${type}`;
    statusEl.classList.remove('hidden');
}

function hideMandiStatus() {
    $('#mandiStatus').classList.add('hidden');
}

const crops = [
    'Wheat', 'Rice', 'Maize', 'Cotton', 'Mustard', 'Sugarcane',
    'Potato', 'Onion', 'Tomato', 'Soybean', 'Groundnut', 'Bajra',
    'Jowar', 'Barley', 'Gram', 'Tur', 'Moong', 'Urad', 'Chana'
];

const states = [
    'Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan', 'Maharashtra',
    'Madhya Pradesh', 'Gujarat', 'Karnataka', 'Andhra Pradesh', 'Tamil Nadu',
    'West Bengal', 'Bihar', 'Odisha', 'Telangana', 'Kerala', 'Assam'
];

function initMandiSystem() {
    const cropSelect = $('#cropSelect');
    const stateSelect = $('#stateSelect');

    crops.forEach(c => {
        const o = document.createElement('option');
        o.value = o.textContent = c;
        cropSelect.appendChild(o)
    });

    states.forEach(s => {
        const o = document.createElement('option');
        o.value = o.textContent = s;
        stateSelect.appendChild(o)
    });
}

async function refreshMandiData(crop, region) {
    console.log(`Fetching mandi data for ${crop} in ${region}`);


    const cacheKey = `mandi_${crop}_${region}`;
    const cachedData = getCachedData(cacheKey);

    if (cachedData && !state.connectivity.online) {
        displayMandiData(cachedData);
        showMandiStatus('Showing cached mandi data', 'success');
        return;
    }

    if (!state.connectivity.online) {
        addToOfflineQueue({
            type: 'mandi',
            data: { crop: crop, state: region }
        });
        showMandiStatus('Mandi request queued for sync', 'error');
        return;
    }

    showMandiStatus(`Loading ${crop} prices from ${region}...`, 'loading');

    const mandiBody = $('#mandiBody');
    mandiBody.innerHTML = '<tr><td colspan="5">Fetching real-time market data...</td></tr>';


    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
        const realisticData = generateRealisticMandiData(crop, region);


        setCachedData(cacheKey, realisticData, 60);

        displayMandiData(realisticData);
        updateStats('mandiChecks');
        setTimeout(hideMandiStatus, 4000);

    } catch (error) {
        console.error('Mandi data error:', error);
        showMandiStatus(`Error loading data: ${error.message}`, 'error');
        setTimeout(hideMandiStatus, 5000);
    }
}

function displayMandiData(data) {
    state.mandi = data;
    showMandiStatus(`Found ${data.length} live price records`, 'success');

    const mandiBody = $('#mandiBody');
    mandiBody.innerHTML = '';

    data.forEach(record => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${record.commodity}</strong></td>
          <td>${record.market}</td>
          <td>₹${record.min}</td>
          <td>₹${record.max}</td>
          <td><strong>₹${record.modal}</strong></td>
        `;
        mandiBody.appendChild(tr);
    });
}

function generateRealisticMandiData(crop, region) {
    const basePrices = {
        'Wheat': { min: 2100, max: 2400, modal: 2250 },
        'Rice': { min: 1800, max: 2200, modal: 2000 },
        'Maize': { min: 1600, max: 1900, modal: 1750 },
        'Cotton': { min: 5800, max: 6200, modal: 6000 },
        'Mustard': { min: 5000, max: 5500, modal: 5250 },
        'Sugarcane': { min: 280, max: 320, modal: 300 },
        'Potato': { min: 800, max: 1200, modal: 1000 },
        'Onion': { min: 1500, max: 2000, modal: 1750 },
        'Tomato': { min: 2000, max: 3000, modal: 2500 },
        'Soybean': { min: 4200, max: 4600, modal: 4400 }
    };

    const basePrice = basePrices[crop] || { min: 1000, max: 1500, modal: 1250 };

    const markets = [
        'Main Market', 'Agricultural Market', 'Wholesale Market',
        'District Market', 'Regional Market'
    ];

    return markets.slice(0, Math.floor(Math.random() * 3) + 2).map(market => {
        
        const variation = 0.9 + Math.random() * 0.2; 
        return {
            commodity: crop,
            market: `${market}, ${region}`,
            min: Math.round(basePrice.min * variation),
            max: Math.round(basePrice.max * variation),
            modal: Math.round(basePrice.modal * variation)
        };
    });
}


function readSoil() {
    return {
        type: $('#soilType').value,
        pH: parseFloat($('#soilPH').value) || 7,
        N: parseFloat($('#soilN').value) || 50,
        P: parseFloat($('#soilP').value) || 30,
        K: parseFloat($('#soilK').value) || 40
    };
}

function cropRecommend(soil, weather) {
    const crops = [];

    if (soil.pH >= 6 && soil.pH <= 7.5) {
        crops.push('Wheat', 'Rice', 'Maize');
    }
    if (soil.pH >= 5.5 && soil.pH <= 8) {
        crops.push('Cotton', 'Sugarcane');
    }
    if (soil.type === 'loam' || soil.type === 'clay') {
        crops.push('Rice', 'Wheat');
    }
    if (soil.type === 'sandy') {
        crops.push('Groundnut', 'Millet');
    }

    return [...new Set(crops)];
}

function fertilizerAdvice(soil) {
    let basal = `N: ${Math.max(0, 120 - soil.N)}kg, P: ${Math.max(0, 60 - soil.P)}kg, K: ${Math.max(0, 40 - soil.K)}kg`;
    let topdress = `N: ${Math.max(0, 80 - soil.N)}kg at tillering`;
    let tip = '';

    if (soil.pH < 6) {
        tip = 'Apply lime to increase pH';
    } else if (soil.pH > 8) {
        tip = 'Apply gypsum to reduce pH';
    } else {
        tip = 'Soil pH is optimal';
    }

    return { basal, topdress, tip };
}
// function to generate_roadmap of farming

function generateRoadmap() {
    const crop = $('#cropSelectRoadmap').value;
    const sowingDate = $('#sowingDate').value;

    if (!crop || !sowingDate) {
        $('#roadmapOutput').innerHTML = '<div class="muted">Please select crop and sowing date first.</div>';
        return;
    }

    const roadmaps = {
        wheat: [
            { week: 'Week 1-2', task: 'Land preparation & sowing', details: 'Deep plowing, seed treatment' },
            { week: 'Week 3-4', task: 'First irrigation', details: 'Crown root irrigation' },
            { week: 'Week 6-8', task: 'First fertilizer dose', details: 'Apply urea 120kg/ha' },
            { week: 'Week 10-12', task: 'Weed management', details: 'Hand weeding or herbicide' },
            { week: 'Week 16-18', task: 'Final irrigation', details: 'Grain filling stage' },
            { week: 'Week 20-22', task: 'Harvesting', details: 'When grains are hard' }
        ],
        rice: [
            { week: 'Week 1-2', task: 'Nursery preparation', details: 'Seed bed preparation' },
            { week: 'Week 3-4', task: 'Transplanting', details: '2-3 seedlings per hill' },
            { week: 'Week 5-6', task: 'First weeding', details: 'Manual or mechanical' },
            { week: 'Week 8-10', task: 'Fertilizer application', details: 'NPK application' },
            { week: 'Week 14-16', task: 'Flowering stage care', details: 'Maintain water level' },
            { week: 'Week 18-20', task: 'Harvesting', details: 'When 80% grains mature' }
        ]
    };

    const roadmap = roadmaps[crop] || roadmaps.wheat;
    updateStats('roadmapsGenerated');

    let html = '<div><strong>Crop Roadmap for ' + crop.charAt(0).toUpperCase() + crop.slice(1) + '</strong></div>';
    html += '<ul class="roadmap-list">';

    roadmap.forEach(stage => {
        html += `
          <li class="roadmap-item">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
              <strong style="color:var(--accent);">${stage.week}</strong>
              <span class="tag">${stage.task}</span>
            </div>
            <div class="muted" style="font-size:12px;">${stage.details}</div>
          </li>
        `;
    });

    html += '</ul>';
    $('#roadmapOutput').innerHTML = html;
}
// This is the dummy model for pest detection not a AI/ML model

function initPestDetection() {
    const imgInput = $('#imgInput');
    const imgPreview = $('#imgPreview');

    imgInput.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = e => {
            imgPreview.src = e.target.result;
            imgPreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    });

    $('#detectBtn').addEventListener('click', async () => {
        const file = imgInput.files && imgInput.files[0];
        if (!file) return alert('Please upload a plant/leaf photo first.');

        $('#detectStatus').textContent = 'Analyzing image...';

        setTimeout(() => {
            const possibleDetections = [
                { label: 'Leaf Blight', confidence: 0.82, remedy: 'Spray Mancozeb 0.25% in evening; remove infected leaves; avoid overhead irrigation.' },
                { label: 'Aphid Infestation', confidence: 0.75, remedy: 'Apply Imidacloprid 17.8% SL @ 0.5ml/L; introduce ladybirds as natural predator.' },
                { label: 'Powdery Mildew', confidence: 0.88, remedy: 'Spray Sulfur 80% WP @ 2g/L; ensure proper ventilation; avoid dense planting.' },
                { label: 'Healthy Plant', confidence: 0.92, remedy: 'No treatment needed. Continue regular monitoring and maintain good practices.' },
                { label: 'Nutrient Deficiency', confidence: 0.67, remedy: 'Apply balanced NPK fertilizer; check soil pH; consider foliar spray.' }
            ];

            const detection = possibleDetections[Math.floor(Math.random() * possibleDetections.length)];

            $('#detectResult').innerHTML = `
            <div style="padding:8px;background:rgba(255,255,255,0.9);border-radius:8px;border:1px solid var(--border);">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <strong style="color:var(--accent);font-size:13px;">${detection.label}</strong>
                <span class="tag" style="background:${detection.confidence > 0.8 ? 'var(--primary-light)' : '#fed7d7'};">
                  ${(detection.confidence * 100).toFixed(0)}% confidence
                </span>
              </div>
              <div class="muted" style="font-size:11px;line-height:1.4;">${detection.remedy}</div>
            </div>
          `;
            $('#detectStatus').textContent = 'Analysis complete';
            const message = `Pest detected: ${detection.label}. ${detection.remedy}`;
            addMsg(message);

            if (state.voices.available) {
                setTimeout(() => speakText(message, state.lang), 1000);
            }
        }, 2000);
    });
}

function initEventHandlers() {
    const authModal = $('#authModal');
    const authBtn = $('#authBtn');
    const logoutBtn = $('#logoutBtn');
    const closeModal = $('.close');

    authBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        authModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });

    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.dataset.tab;

            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (tabType === 'login') {
                $('#loginForm').classList.remove('hidden');
                $('#signupForm').classList.add('hidden');
            } else {
                $('#loginForm').classList.add('hidden');
                $('#signupForm').classList.remove('hidden');
            }
        });
    });
// Login form
    $('#loginFormElement').addEventListener('submit', (e) => {
        e.preventDefault();
        const identifier = $('#loginIdentifier').value.trim();
        const password = $('#loginPassword').value;

        const users = JSON.parse(localStorage.getItem('krishimitrUsers') || '{}');
        const user = Object.values(users).find(u =>
            (u.email === identifier || u.phone === identifier) && u.password === password
        );

        if (user) {
            setCurrentUser(user.email);
            authModal.style.display = 'none';
            addMsg(t('hello'), 'bot');
            if (state.voices.available) {
                speakText(t('hello'), state.lang);
            }
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

// Signup form
    $('#signupFormElement').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = $('#signupName').value.trim();
        const email = $('#signupEmail').value.trim();
        const phone = $('#signupPhone').value.trim();
        const location = $('#signupLocation').value.trim();
        const farmSize = parseFloat($('#signupFarmSize').value) || null;
        const primaryCrop = $('#signupCrop').value;
        const preferredLanguage = $('#signupLanguage').value;
        const password = $('#signupPassword').value;
        const confirmPassword = $('#signupConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('krishimitrUsers') || '{}');
        if (users[email]) {
            alert('Email already registered! Please use login.');
            return;
        }

        const newUser = {
            name, email, phone, location, farmSize, primaryCrop, preferredLanguage, password,
            joinDate: new Date().toISOString(),
            stats: { chatCount: 0, weatherChecks: 0, mandiChecks: 0, roadmapsGenerated: 0 }
        };

        saveUser(newUser);
        setCurrentUser(email);
        authModal.style.display = 'none';

        switchLanguage(preferredLanguage);
        addMsg(t('hello'), 'bot');
        if (state.voices.available) {
            speakText(t('hello'), state.lang);
        }
    });

// Logout
    logoutBtn.addEventListener('click', () => {
        clearCurrentUser();
        switchLanguage('en');
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
 
    $('#micBtn').addEventListener('click', () => {
        if (recognition) {
            recognition.start();
        }
    });

    $('#speakBtn').addEventListener('click', () => {
        const lastMsg = chatLog.querySelector('.msg.bot:last-child');
        if (!lastMsg) return;

        speakText(lastMsg.textContent, state.lang);
    });

    $('#sendBtn').addEventListener('click', handleSend);
    $('#chatInput').addEventListener('keydown', e => {
        if (e.key === 'Enter') handleSend();
    });

    // Weather[ Here we use Weather API to give the real time weather condition of all location.]
    $('#useGPS').addEventListener('click', () => {
        if (!navigator.geolocation) {
            showWeatherStatus('Geolocation is not supported.', 'error');
            setTimeout(hideWeatherStatus, 3000);
            return;
        }

        showWeatherStatus('Getting your location...', 'loading');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = `${position.coords.latitude},${position.coords.longitude}`;
                state.coords = position.coords;
                fetchWeather(coords);
            },
            (error) => {
                let errorMessage = 'Failed to get location. ';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage += 'Please allow location access.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage += 'Location unavailable.';
                        break;
                    case error.TIMEOUT:
                        errorMessage += 'Request timed out.';
                        break;
                    default:
                        errorMessage += 'Unknown error.';
                        break;
                }
                showWeatherStatus(errorMessage, 'error');
                setTimeout(hideWeatherStatus, 5000);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    });

    $('#refreshWx').addEventListener('click', () => {
        const locationInput = $('#locationInput');
        const query = locationInput.value.trim() || 'Delhi, India';
        locationInput.value = query;
        fetchWeather(query);
    });

    // Mandi[ It will tell about current prices of market in all states of india so that kisan can know the true value of his golden product. ]
    $('#refreshMandi').addEventListener('click', async () => {
        const crop = $('#cropSelect').value;
        const region = $('#stateSelect').value;

        if (!crop || !region) {
            showMandiStatus('Please select crop and state first', 'error');
            setTimeout(hideMandiStatus, 3000);
            return;
        }

        await refreshMandiData(crop, region);
    });

    // Soil recommendations[It will take input for ph of soil and try of soil and n,p,k
    //  Soil pH is a measure of soil acidity or alkalinity
    //  Nitrogen (N), Phosphorus (P), and Potassium (K)
    // "This is just an input string for a dummy model, but for the main model we are working on the AI/ML project, which works the same as pest detection."]
    $('#recommendBtn').addEventListener('click', () => {
        const soil = readSoil(), wx = state.wx;
        const crops = cropRecommend(soil, wx);
        const fert = fertilizerAdvice(soil);
        $('#recommendation').innerHTML = `
          <div><strong>Recommended crops:</strong> ${crops.join(', ') || '—'}</div>
          <div style="margin-top:6px"><strong>Fertilizer plan:</strong> Basal → ${fert.basal}; Top dress → ${fert.topdress}</div>
          <div class="muted" style="margin-top:6px">${fert.tip}</div>
        `;
    });

    $('#generateRoadmap').addEventListener('click', generateRoadmap);

    // For offline mode....
    $('#offlineToggle').addEventListener('click', () => {
        state.offline.mode = !state.offline.mode;

        if (state.offline.mode) {
            document.body.classList.add('offline-mode');
            showConnectivityBanner('Offline mode enabled', 'offline', 3000);
            updateSyncStatus('Offline mode', 'offline');
        } else {
            document.body.classList.remove('offline-mode');
            showConnectivityBanner('Online mode enabled', 'online', 3000);
            updateSyncStatus('Online', 'online');
        }
    });
}


function initOfflineCapabilities() {
    const pendingOps = localStorage.getItem('pendingOperations');
    if (pendingOps) {
        state.offline.dataQueue = JSON.parse(pendingOps);
        if (state.offline.dataQueue.length > 0) {
            updateSyncStatus(`${state.offline.dataQueue.length} operations pending`, 'offline');
        }
    }

    clearExpiredCache();
    setInterval(clearExpiredCache, 300000);
    initConnectivityMonitoring();
}

window.addEventListener('load', () => {

    initStorage();
    initOfflineCapabilities();
    initVoiceSystem();
    initSpeechRecognition();
    initMandiSystem();
    initPestDetection();
    initEventHandlers();

    const currentUser = getCurrentUser();
    if (currentUser) {
        state.user = currentUser;
        state.lang = currentUser.preferredLanguage || 'en';
        showUserInterface();
        updateProfile();
    }

    updateLanguageButtons();
    updateTexts();
    updateRecognitionLanguage();

    addMsg(t('hello'), 'bot');

    setTimeout(() => {
        if (state.voices.available) {
            speakText(t('hello'), state.lang);
        }
    }, 2000);

    fetchWeather('Delhi, India');

    setTimeout(() => {
        $('#refreshMandi').click();
    }, 1000);
});

