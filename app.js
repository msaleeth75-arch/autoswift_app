const categories = [
    { id: 'engine', name: 'Engine Parts', icon: 'ph-engine' },
    { id: 'brakes', name: 'Brake System', icon: 'ph-disc' },
    { id: 'electrical', name: 'Electrical', icon: 'ph-lightning' },
    { id: 'accessories', name: 'Accessories', icon: 'ph-car-profile' },
    { id: 'bike', name: 'Bike Parts', icon: 'ph-motorcycle' },
    { id: 'tyres', name: 'Tyres & Wheels', icon: 'ph-tire' },
    { id: 'suspension', name: 'Suspension', icon: 'ph-arrows-down-up' },
    { id: 'body', name: 'Body & Exterior', icon: 'ph-car' },
];

const shops = [
    // ── Original Partners ──
    { id: 's1', name: 'Mangalore Auto Spares', rating: 4.8, time: '15-20 mins', area: 'Hampankatta' },
    { id: 's2', name: 'City Bike Point', rating: 4.5, time: '20-25 mins', area: 'Kankanady' },
    { id: 's3', name: 'Coastal Car Accessories', rating: 4.2, time: '30-40 mins', area: 'Bejai' },
    { id: 's4', name: 'Prime Motors Spares', rating: 4.6, time: '10-15 mins', area: 'Falnir' },
    { id: 's5', name: 'Royal Enfield Customs', rating: 4.9, time: '25-30 mins', area: 'Kadri' },
    { id: 's6', name: 'National Auto Garage', rating: 4.3, time: '15-20 mins', area: 'Bunder' },
    { id: 's7', name: 'Speed Wheels Alloys', rating: 4.7, time: '30-45 mins', area: 'Pumpwell' },
    { id: 's8', name: 'AutoKart Exclusive Store', rating: 5.0, time: '5-10 mins', area: 'Lalbagh' },
    { id: 's9', name: 'Kudla Motors & Spares', rating: 4.4, time: '20-30 mins', area: 'Mangaladevi' },
    { id: 's10', name: 'Highway Auto Care', rating: 4.6, time: '15-25 mins', area: 'Kottara' },
    { id: 's11', name: 'Udupi Spares Mangalore Hub', rating: 4.1, time: '35-50 mins', area: 'Padil' },
    { id: 's12', name: 'Global Tyres & Batteries', rating: 4.8, time: '10-20 mins', area: 'Jeppu' },
    // ── New Partners ──
    { id: 's13', name: 'Karavali Auto Parts', rating: 4.7, time: '10-15 mins', area: 'Hampankatta' },
    { id: 's14', name: 'Tyre Zone Mangalore', rating: 4.5, time: '15-20 mins', area: 'Bendoorwell' },
    { id: 's15', name: 'Sri Devi Motors', rating: 4.3, time: '20-30 mins', area: 'Attavar' },
    { id: 's16', name: 'Bike Hub Customs', rating: 4.8, time: '10-15 mins', area: 'Valencia' },
    { id: 's17', name: 'Dakshina Auto Works', rating: 4.6, time: '25-35 mins', area: 'Surathkal' },
    { id: 's18', name: 'BajrangBali Auto Spares', rating: 4.4, time: '15-20 mins', area: 'Bunder' },
    { id: 's19', name: 'Netravathi Motors', rating: 4.9, time: '10-15 mins', area: 'Kankanady' },
    { id: 's20', name: 'MG Road Auto Centre', rating: 4.2, time: '20-25 mins', area: 'MG Road' },
    { id: 's21', name: 'Pitstop Performance Parts', rating: 4.7, time: '15-20 mins', area: 'Kadri' },
    { id: 's22', name: 'Moto Garage Mangalore', rating: 4.5, time: '20-30 mins', area: 'Falnir' },
    { id: 's23', name: 'Kuttipadpu Auto Traders', rating: 4.0, time: '30-40 mins', area: 'Bantwal Rd' },
    { id: 's24', name: 'Turbo Tech Accessories', rating: 4.8, time: '10-15 mins', area: 'Lalbagh' },
];

const products = [
    // ═══════════════════ ENGINE PARTS ═══════════════════
    { id: 1, name: 'K&N Air Filter', category: 'engine', price: 2100, image: 'ph-wind', shopId: 's1' },
    { id: 2, name: 'Bosch Spark Plug (Set of 4)', category: 'engine', price: 450, image: 'ph-lightning', shopId: 's2' },
    { id: 3, name: 'Castrol Edge 5W-40 (4L)', category: 'engine', price: 3500, image: 'ph-drop', shopId: 's8' },
    { id: 4, name: 'NGK Iridium Spark Plug', category: 'engine', price: 850, image: 'ph-lightning', shopId: 's10' },
    { id: 5, name: 'Timing Belt Kit', category: 'engine', price: 2800, image: 'ph-gear-six', shopId: 's1' },
    { id: 6, name: 'Mobil 1 Synthetic Oil 5W-30', category: 'engine', price: 4200, image: 'ph-drop', shopId: 's13' },
    { id: 7, name: 'Water Pump Assembly', category: 'engine', price: 1800, image: 'ph-fan', shopId: 's15' },
    { id: 8, name: 'Radiator Coolant (5L)', category: 'engine', price: 650, image: 'ph-drop', shopId: 's6' },
    { id: 9, name: 'Oil Filter – Genuine', category: 'engine', price: 280, image: 'ph-funnel', shopId: 's13' },
    { id: 10, name: 'Fuel Pump Module', category: 'engine', price: 3200, image: 'ph-gas-pump', shopId: 's17' },
    { id: 11, name: 'Throttle Body Cleaner', category: 'engine', price: 320, image: 'ph-spray-bottle', shopId: 's18' },
    { id: 12, name: 'Engine Mount Set', category: 'engine', price: 1500, image: 'ph-nut', shopId: 's19' },

    // ═══════════════════ BRAKE SYSTEM ═══════════════════
    { id: 13, name: 'Brembo Brake Pads (Front)', category: 'brakes', price: 1250, image: 'ph-disc', shopId: 's1' },
    { id: 14, name: 'Brembo Brake Pads (Rear)', category: 'brakes', price: 1100, image: 'ph-disc', shopId: 's1' },
    { id: 15, name: 'Brake Disc Rotor', category: 'brakes', price: 2200, image: 'ph-disc', shopId: 's4' },
    { id: 16, name: 'Brake Fluid DOT 4 (1L)', category: 'brakes', price: 450, image: 'ph-drop', shopId: 's6' },
    { id: 17, name: 'ABS Sensor Module', category: 'brakes', price: 1800, image: 'ph-cpu', shopId: 's17' },
    { id: 18, name: 'Brake Caliper Kit', category: 'brakes', price: 3500, image: 'ph-wrench', shopId: 's13' },
    { id: 19, name: 'Handbrake Cable', category: 'brakes', price: 600, image: 'ph-link', shopId: 's15' },
    { id: 20, name: 'Brake Shoe Set (Drum)', category: 'brakes', price: 750, image: 'ph-disc', shopId: 's18' },

    // ═══════════════════ ELECTRICAL ═══════════════════
    { id: 21, name: 'Amaron Battery 12V 65Ah', category: 'electrical', price: 3200, image: 'ph-battery-full', shopId: 's3' },
    { id: 22, name: 'Exide Battery 12V 45Ah', category: 'electrical', price: 2400, image: 'ph-battery-full', shopId: 's12' },
    { id: 23, name: 'LED Headlight Bulbs H4', category: 'electrical', price: 1500, image: 'ph-lightbulb', shopId: 's3' },
    { id: 24, name: 'LED Fog Lamp Kit', category: 'electrical', price: 1200, image: 'ph-lightbulb', shopId: 's24' },
    { id: 25, name: 'Alternator Assembly', category: 'electrical', price: 4800, image: 'ph-lightning', shopId: 's19' },
    { id: 26, name: 'Car Fuse Box Kit', category: 'electrical', price: 350, image: 'ph-cpu', shopId: 's20' },
    { id: 27, name: 'Ignition Coil Pack', category: 'electrical', price: 1600, image: 'ph-lightning', shopId: 's17' },
    { id: 28, name: 'Starter Motor', category: 'electrical', price: 5500, image: 'ph-gear-six', shopId: 's19' },
    { id: 29, name: 'Wiring Harness Set', category: 'electrical', price: 900, image: 'ph-plugs', shopId: 's20' },
    { id: 30, name: 'Horn – Hella Twin Tone', category: 'electrical', price: 750, image: 'ph-megaphone', shopId: 's24' },

    // ═══════════════════ ACCESSORIES ═══════════════════
    { id: 31, name: 'Car Cover Waterproof', category: 'accessories', price: 900, image: 'ph-car', shopId: 's4' },
    { id: 32, name: 'Denso Wipers (Pair)', category: 'accessories', price: 800, image: 'ph-cloud-rain', shopId: 's9' },
    { id: 33, name: 'Pioneer Car Stereo', category: 'accessories', price: 4500, image: 'ph-speaker-hifi', shopId: 's8' },
    { id: 34, name: 'Dash Cam 1080p', category: 'accessories', price: 3200, image: 'ph-video-camera', shopId: 's24' },
    { id: 35, name: 'Seat Cover PU Leather (Full)', category: 'accessories', price: 4800, image: 'ph-armchair', shopId: 's8' },
    { id: 36, name: 'Car Perfume – Godrej Aer', category: 'accessories', price: 250, image: 'ph-wind', shopId: 's20' },
    { id: 37, name: 'Floor Mat Set (4 pc)', category: 'accessories', price: 1200, image: 'ph-squares-four', shopId: 's9' },
    { id: 38, name: 'Sun Visor Film – 3M', category: 'accessories', price: 1800, image: 'ph-sun', shopId: 's24' },
    { id: 39, name: 'Mobile Phone Mount', category: 'accessories', price: 450, image: 'ph-device-mobile', shopId: 's20' },
    { id: 40, name: 'Steering Wheel Cover', category: 'accessories', price: 550, image: 'ph-steering-wheel', shopId: 's22' },

    // ═══════════════════ BIKE PARTS ═══════════════════
    { id: 41, name: 'Motul 7100 10W50 (1L)', category: 'bike', price: 850, image: 'ph-drop', shopId: 's2' },
    { id: 42, name: 'Chain Lube Spray – Motul', category: 'bike', price: 350, image: 'ph-spray-bottle', shopId: 's4' },
    { id: 43, name: 'Exide Bike Battery 12V 9Ah', category: 'bike', price: 1800, image: 'ph-battery-full', shopId: 's11' },
    { id: 44, name: 'Chain & Sprocket Kit', category: 'bike', price: 1600, image: 'ph-link', shopId: 's5' },
    { id: 45, name: 'RE Classic Silencer', category: 'bike', price: 3500, image: 'ph-cylinder', shopId: 's5' },
    { id: 46, name: 'Clutch Cable Assembly', category: 'bike', price: 280, image: 'ph-link', shopId: 's16' },
    { id: 47, name: 'Visor – Full Face Helmet', category: 'bike', price: 450, image: 'ph-shield-check', shopId: 's16' },
    { id: 48, name: 'Crash Guard – RE 350', category: 'bike', price: 2200, image: 'ph-shield', shopId: 's5' },
    { id: 49, name: 'LED Tail Light Universal', category: 'bike', price: 650, image: 'ph-lightbulb', shopId: 's16' },
    { id: 50, name: 'Bike Cover Waterproof', category: 'bike', price: 500, image: 'ph-umbrella', shopId: 's22' },

    // ═══════════════════ TYRES & WHEELS ═══════════════════
    { id: 51, name: 'Michelin Pilot Sport Tyre', category: 'tyres', price: 6500, image: 'ph-circle-dashed', shopId: 's12' },
    { id: 52, name: 'MRF ZLX 175/65 R14', category: 'tyres', price: 3800, image: 'ph-circle-dashed', shopId: 's14' },
    { id: 53, name: 'CEAT Milaze X3 155/80 R13', category: 'tyres', price: 2900, image: 'ph-circle-dashed', shopId: 's14' },
    { id: 54, name: 'Apollo Amazer 4G 165/80 R14', category: 'tyres', price: 3200, image: 'ph-circle-dashed', shopId: 's14' },
    { id: 55, name: 'JK Tyre UX Royale 185/65 R15', category: 'tyres', price: 4100, image: 'ph-circle-dashed', shopId: 's12' },
    { id: 56, name: 'Alloy Wheels 15" (Set of 4)', category: 'tyres', price: 12000, image: 'ph-circle-notch', shopId: 's7' },
    { id: 57, name: 'Steel Wheel Rim 14"', category: 'tyres', price: 1800, image: 'ph-circle-notch', shopId: 's7' },
    { id: 58, name: 'Tubeless Tyre Repair Kit', category: 'tyres', price: 350, image: 'ph-wrench', shopId: 's14' },
    { id: 59, name: 'MRF Bike Tyre – Revz FC', category: 'tyres', price: 2400, image: 'ph-circle-dashed', shopId: 's16' },
    { id: 60, name: 'Wheel Balancing Weights', category: 'tyres', price: 120, image: 'ph-scales', shopId: 's7' },

    // ═══════════════════ SUSPENSION ═══════════════════
    { id: 61, name: 'Monroe Front Shock Absorber', category: 'suspension', price: 2800, image: 'ph-arrows-down-up', shopId: 's17' },
    { id: 62, name: 'Monroe Rear Shock Absorber', category: 'suspension', price: 2500, image: 'ph-arrows-down-up', shopId: 's17' },
    { id: 63, name: 'Coil Spring Set (Front)', category: 'suspension', price: 3200, image: 'ph-spiral', shopId: 's21' },
    { id: 64, name: 'Strut Mount Bearing', category: 'suspension', price: 950, image: 'ph-nut', shopId: 's21' },
    { id: 65, name: 'Control Arm Bushing Kit', category: 'suspension', price: 1200, image: 'ph-nut', shopId: 's21' },
    { id: 66, name: 'Tie Rod End – Pair', category: 'suspension', price: 1400, image: 'ph-link', shopId: 's15' },
    { id: 67, name: 'Ball Joint Lower Arm', category: 'suspension', price: 800, image: 'ph-nut', shopId: 's23' },
    { id: 68, name: 'Stabilizer Link Kit', category: 'suspension', price: 650, image: 'ph-link', shopId: 's23' },

    // ═══════════════════ BODY & EXTERIOR ═══════════════════
    { id: 69, name: 'Side Mirror (LH) – Universal', category: 'body', price: 750, image: 'ph-rectangle', shopId: 's20' },
    { id: 70, name: 'Bumper Guard Chrome', category: 'body', price: 1800, image: 'ph-shield', shopId: 's24' },
    { id: 71, name: 'Door Handle Chrome Set', category: 'body', price: 1200, image: 'ph-door', shopId: 's22' },
    { id: 72, name: 'Mud Flap Set (4 pc)', category: 'body', price: 400, image: 'ph-squares-four', shopId: 's23' },
    { id: 73, name: 'Tail Lamp Assembly (LH)', category: 'body', price: 2200, image: 'ph-lightbulb', shopId: 's15' },
    { id: 74, name: 'Headlamp Assembly (RH)', category: 'body', price: 3500, image: 'ph-lightbulb', shopId: 's19' },
    { id: 75, name: 'Windshield Glass – Front', category: 'body', price: 5500, image: 'ph-rectangle', shopId: 's23' },
    { id: 76, name: 'Roof Rail Bar Set', category: 'body', price: 3800, image: 'ph-line-segments', shopId: 's24' },
];

// App State
let currentView = 'home';
let cart = [];
let mapInitialized = false;
let map;

// DOM Elements
const mainContent = document.getElementById('main-content');
const cartBadge = document.getElementById('cart-badge');

// Initialize App
function init() {
    renderHome();
    updateNav();
}

// Navigation Logic
function navigate(viewId, param = null) {
    currentView = viewId;
    updateNav();
    
    switch(viewId) {
        case 'home': renderHome(); break;
        case 'search': renderSearch(); break;
        case 'sell': renderSell(); break;
        case 'cart': renderCart(); break;
        case 'track': renderTrack(); break;
        case 'profile': renderProfile(); break;
        case 'shop': renderShop(param); break;
    }
    
    // Scroll to top on navigation
    mainContent.scrollTop = 0;
}

function updateNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick').includes(`'${currentView}'`)) {
            item.classList.add('active');
        }
    });
}

// Render Functions
function renderHome() {
    let html = `
        <div class="view active" id="view-home">
            <div class="hero">
                <h1>Fast <span>Delivery</span><br>of Auto Parts</h1>
                <p>Genuine spares for your car and bike, delivered to your door in Mangalore.</p>
                <div class="hero-stats">
                    <div class="hero-stat">
                        <strong>${shops.length}</strong>
                        <span>Partners</span>
                    </div>
                    <div class="hero-stat">
                        <strong>${products.length}+</strong>
                        <span>Parts</span>
                    </div>
                    <div class="hero-stat">
                        <strong>${categories.length}</strong>
                        <span>Categories</span>
                    </div>
                </div>
                <button class="btn" onclick="navigate('search')">
                    <i class="ph ph-magnifying-glass"></i> Find Parts
                </button>
            </div>
            
            <h2 class="section-title">Categories</h2>
            <div class="categories-grid">
                ${categories.map(cat => {
                    const count = products.filter(p => p.category === cat.id).length;
                    return `
                    <div class="category-item" onclick="navigate('search'); filterByCategory('${cat.id}')">
                        <div class="category-icon">
                            <i class="ph ${cat.icon}"></i>
                        </div>
                        <span>${cat.name}</span>
                        <span class="cat-count">${count} parts</span>
                    </div>
                `}).join('')}
            </div>
            
            <h2 class="section-title">Partner Shops <span class="title-badge">${shops.length}</span></h2>
            <div class="shops-list">
                ${shops.map(shop => {
                    const partCount = products.filter(p => p.shopId === shop.id).length;
                    return `
                    <div class="shop-card" onclick="navigate('shop', '${shop.id}')">
                        <div class="shop-img">
                            <i class="ph ph-storefront"></i>
                        </div>
                        <div class="shop-info">
                            <div class="shop-name">${shop.name}</div>
                            <div class="shop-area"><i class="ph ph-map-pin"></i> ${shop.area || 'Mangalore'}</div>
                            <div class="shop-meta">
                                <span class="rating"><i class="ph-fill ph-star"></i> ${shop.rating}</span>
                                <span class="time"><i class="ph ph-clock"></i> ${shop.time}</span>
                                <span class="parts-count"><i class="ph ph-package"></i> ${partCount}</span>
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
            
            <h2 class="section-title">Popular Parts</h2>
            <div class="product-list">
                ${products.slice(0, 6).map(p => productCard(p)).join('')}
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
}

function renderSearch(categoryId = null) {
    let html = `
        <div class="view active" id="view-search">
            <div class="search-container">
                <div class="search-box">
                    <i class="ph ph-magnifying-glass"></i>
                    <input type="text" id="search-input" placeholder="Search by part name or vehicle..." onkeyup="handleSearch()">
                </div>
            </div>
            
            <div class="product-list" id="search-results">
                ${products.map(p => productCard(p)).join('')}
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
    
    if (categoryId) {
        // Implementation for filtering by category if needed
        document.getElementById('search-input').value = categoryId; // Mock behavior
        handleSearch();
    }
}

function handleSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        (shops.find(s => s.id === p.shopId)?.name.toLowerCase().includes(query))
    );
    
    document.getElementById('search-results').innerHTML = filtered.length ? 
        filtered.map(p => productCard(p)).join('') : 
        `<div class="empty-state">
            <i class="ph ph-magnifying-glass"></i>
            <p>No parts found</p>
        </div>`;
}

function filterByCategory(catId) {
    setTimeout(() => {
        const input = document.getElementById('search-input');
        if (input) {
            input.value = catId;
            handleSearch();
        }
    }, 50);
}

function renderShop(shopId) {
    const shop = shops.find(s => s.id === shopId);
    const shopProducts = products.filter(p => p.shopId === shopId);
    
    let html = `
        <div class="view active" id="view-shop">
            <div style="background: var(--white); padding: 16px; border-bottom: 1px solid var(--gray-light); margin-bottom: 16px; position: sticky; top: 0; z-index: 10;">
                <button class="btn btn-secondary" style="margin-bottom: 12px; padding: 6px 12px;" onclick="navigate('home')">
                    <i class="ph ph-arrow-left"></i> Back
                </button>
                <h2 style="font-size: 20px; font-weight: 700;">${shop.name}</h2>
                <div class="shop-area" style="margin-top: 4px;"><i class="ph ph-map-pin"></i> ${shop.area || 'Mangalore'}</div>
                <div class="shop-meta" style="margin-top: 8px;">
                    <span class="rating"><i class="ph-fill ph-star"></i> ${shop.rating}</span>
                    <span class="time"><i class="ph ph-clock"></i> ${shop.time}</span>
                    <span class="parts-count"><i class="ph ph-package"></i> ${shopProducts.length} parts</span>
                </div>
            </div>
            
            <h2 class="section-title">Available Parts</h2>
            <div class="product-list">
                ${shopProducts.length ? shopProducts.map(p => productCard(p)).join('') : '<div class="empty-state"><p>No parts available</p></div>'}
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
}

function renderCart() {
    let html = `<div class="view active" id="view-cart">`;
    
    if (cart.length === 0) {
        html += `
            <div class="empty-state">
                <i class="ph ph-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p style="margin: 8px 0 16px;">Looks like you haven't added any parts yet.</p>
                <button class="btn" onclick="navigate('search')">Browse Parts</button>
            </div>
        `;
    } else {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const deliveryFee = 50;
        const total = subtotal + deliveryFee;
        
        html += `
            <div style="padding: 16px;">
                ${cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="product-img" style="width: 50px; height: 50px; font-size: 24px;">
                                <i class="ph ${item.image}"></i>
                            </div>
                            <div>
                                <div class="product-title">${item.name}</div>
                                <div class="product-price">₹${item.price}</div>
                            </div>
                        </div>
                        <div class="cart-qty-ctrl">
                            <button onclick="updateQty(${item.id}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button onclick="updateQty(${item.id}, 1)">+</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <h2 class="section-title">Payment Method</h2>
            <div class="payment-methods">
                <div class="payment-option selected" onclick="selectPayment(this)">
                    <i class="ph ph-money" style="color: #4CAF50;"></i>
                    <div style="flex:1">
                        <div style="font-weight: 600;">Cash on Delivery</div>
                        <div style="font-size: 12px; color: var(--gray-dark);">Pay when you receive</div>
                    </div>
                    <i class="ph ph-check-circle" style="color: var(--primary-color);"></i>
                </div>
                <div class="payment-option" onclick="selectPayment(this)">
                    <i class="ph ph-qr-code"></i>
                    <div style="flex:1">
                        <div style="font-weight: 600;">UPI</div>
                        <div style="font-size: 12px; color: var(--gray-dark);">Google Pay, PhonePe, Paytm</div>
                    </div>
                </div>
            </div>
            
            <div class="bill-details">
                <div class="bill-row">
                    <span>Item Total</span>
                    <span>₹${subtotal}</span>
                </div>
                <div class="bill-row">
                    <span>Delivery Fee</span>
                    <span>₹${deliveryFee}</span>
                </div>
                <div class="bill-row bill-total">
                    <span>To Pay</span>
                    <span>₹${total}</span>
                </div>
            </div>
            
            <div style="height: 100px;"></div>
            
            <div class="checkout-bar">
                <div>
                    <div style="font-size: 12px; color: var(--gray-dark);">Total Amount</div>
                    <div style="font-weight: 700; font-size: 18px;">₹${total}</div>
                </div>
                <button class="btn" onclick="placeOrder()">
                    Place Order <i class="ph ph-arrow-right"></i>
                </button>
            </div>
        `;
    }
    
    html += `</div>`;
    mainContent.innerHTML = html;
}

function selectPayment(element) {
    document.querySelectorAll('.payment-option').forEach(el => {
        el.classList.remove('selected');
        const icon = el.querySelector('.ph-check-circle');
        if(icon) icon.remove();
    });
    element.classList.add('selected');
    element.innerHTML += '<i class="ph ph-check-circle" style="color: var(--primary-color);"></i>';
}

function placeOrder() {
    if (cart.length === 0) return;

    // Get selected payment method
    let paymentMethod = 'Cash on Delivery';
    const selectedPaymentEl = document.querySelector('.payment-option.selected .font-weight-600') || document.querySelector('.payment-option.selected div[style*="font-weight: 600"]');
    if (selectedPaymentEl) {
        paymentMethod = selectedPaymentEl.innerText;
    }

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const deliveryFee = 50;
    const total = subtotal + deliveryFee;

    // Format WhatsApp message
    let message = `*New Order from AutoKart* 🚀\n\n*Items:*\n`;
    cart.forEach(item => {
        message += `- ${item.qty}x ${item.name} (₹${item.price})\n`;
    });
    
    message += `\n*Delivery Fee:* ₹${deliveryFee}`;
    message += `\n*Total Amount:* ₹${total}`;
    message += `\n*Payment Method:* ${paymentMethod}`;
    message += `\n\nPlease confirm my order.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "916364420190"; // Replace with actual business number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');

    // Reset cart and go to tracking
    cart = [];
    updateCartBadge();
    navigate('track');
}

function renderTrack() {
    let html = `
        <div class="view active" id="view-track">
            <div id="map"></div>
            <div class="status-timeline">
                <h3 style="margin-bottom: 24px;">Order #AW84729</h3>
                
                <div class="status-step completed">
                    <div class="step-icon"><i class="ph ph-check"></i></div>
                    <div class="step-content">
                        <h4>Order Accepted</h4>
                        <p>12:30 PM</p>
                    </div>
                </div>
                
                <div class="status-step completed">
                    <div class="step-icon"><i class="ph ph-package"></i></div>
                    <div class="step-content">
                        <h4>Items Packed</h4>
                        <p>12:45 PM</p>
                    </div>
                </div>
                
                <div class="status-step active">
                    <div class="step-icon"><i class="ph ph-motorcycle"></i></div>
                    <div class="step-content">
                        <h4>Out for Delivery</h4>
                        <p>Arriving in ~15 mins</p>
                    </div>
                </div>
                
                <div class="status-step">
                    <div class="step-icon"><i class="ph ph-house"></i></div>
                    <div class="step-content">
                        <h4>Delivered</h4>
                        <p>Pending</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
    
    // Initialize Map after DOM is updated
    setTimeout(initMap, 100);
}

function initMap() {
    if (map) {
        map.remove();
    }
    
    // Mangalore Coordinates
    const mangaloreLat = 12.8722;
    const mangaloreLng = 74.8425;
    
    map = L.map('map', { zoomControl: false }).setView([mangaloreLat, mangaloreLng], 14);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    // Delivery Boy Marker
    const deliveryIcon = L.divIcon({
        html: '<div style="background:var(--primary-color); color:black; width:30px; height:30px; border-radius:50%; display:flex; justify-content:center; align-items:center; border:2px solid white; box-shadow:0 2px 5px rgba(0,0,0,0.3);"><i class="ph ph-motorcycle" style="font-size:18px;"></i></div>',
        className: '',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker([mangaloreLat, mangaloreLng], {icon: deliveryIcon}).addTo(map)
        .bindPopup('Delivery Partner')
        .openPopup();
        
    // Customer Location
    const customerIcon = L.divIcon({
        html: '<div style="background:black; color:white; width:30px; height:30px; border-radius:50%; display:flex; justify-content:center; align-items:center; border:2px solid white; box-shadow:0 2px 5px rgba(0,0,0,0.3);"><i class="ph ph-house" style="font-size:18px;"></i></div>',
        className: '',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    L.marker([12.8800, 74.8500], {icon: customerIcon}).addTo(map);
}

function renderProfile() {
    let html = `
        <div class="view active" id="view-profile">
            <div class="profile-header">
                <div class="avatar">
                    <i class="ph ph-user"></i>
                </div>
                <h2 style="margin-bottom: 4px;">Moha Saleeth</h2>
                <p style="color: var(--gray-dark); font-size: 14px;">+91 98765 43210</p>
                <div style="margin-top: 16px;">
                    <button class="btn" style="padding: 8px 16px;">Edit Profile</button>
                </div>
            </div>
            
            <div class="profile-links">
                <div class="profile-link">
                    <div class="profile-link-left">
                        <i class="ph ph-clock-counter-clockwise" style="font-size: 20px;"></i>
                        <span>Order History</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--gray-dark);"></i>
                </div>
                <div class="profile-link">
                    <div class="profile-link-left">
                        <i class="ph ph-map-pin" style="font-size: 20px;"></i>
                        <span>Saved Addresses</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--gray-dark);"></i>
                </div>
                <div class="profile-link">
                    <div class="profile-link-left">
                        <i class="ph ph-wallet" style="font-size: 20px;"></i>
                        <span>Payment Methods</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--gray-dark);"></i>
                </div>
                <div class="profile-link">
                    <div class="profile-link-left">
                        <i class="ph ph-info" style="font-size: 20px;"></i>
                        <span>About AutoKart</span>
                    </div>
                    <i class="ph ph-caret-right" style="color: var(--gray-dark);"></i>
                </div>
                <div class="profile-link" style="color: #e53935;">
                    <div class="profile-link-left">
                        <i class="ph ph-sign-out" style="font-size: 20px;"></i>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
}

// Helper Components
function productCard(product) {
    const inCart = cart.find(i => i.id === product.id);
    const btnClass = inCart ? 'add-btn added' : 'add-btn';
    const btnText = inCart ? 'Added' : 'Add +';
    
    return `
        <div class="product-card">
            <div class="product-img">
                <i class="ph ${product.image}"></i>
            </div>
            <div class="product-info">
                <div>
                    <div class="product-title">${product.name}</div>
                    <div class="product-cat">${categories.find(c => c.id === product.category)?.name || 'Part'}</div>
                </div>
                <div class="product-price-row">
                    <div class="product-price">₹${product.price}</div>
                    <button class="${btnClass}" onclick="toggleCart(${product.id})">${btnText}</button>
                </div>
            </div>
        </div>
    `;
}

// Cart Logic
function toggleCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(i => i.id === productId);
    
    if (existing) {
        cart = cart.filter(i => i.id !== productId);
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    updateCartBadge();
    
    // Re-render current view to update buttons
    if (currentView === 'home') renderHome();
    if (currentView === 'search') renderSearch();
    // For shop view, we need to know which shop we are in, but simple re-render might lose param. 
    // We can just update the DOM directly or re-render using current logic.
    if (currentView === 'shop') {
        const product = products.find(p => p.id === productId);
        if (product) renderShop(product.shopId);
    }
}

function updateQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    updateCartBadge();
    renderCart(); // Re-render cart since we are there
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
}

// Marketplace Features
function renderSell() {
    let html = `
        <div class="view active" id="view-sell">
            <div style="padding: 16px; background: var(--white); border-bottom: 1px solid var(--gray-light);">
                <h2 style="font-size: 20px; font-weight: 700;">Partner with AutoKart</h2>
                <p style="font-size: 14px; color: var(--gray-dark); margin-top: 4px;">List your auto parts for sale on our platform.</p>
            </div>
            
            <form class="sell-form" onsubmit="handleSellSubmit(event)">
                <div class="form-group">
                    <label>Shop / Seller Name</label>
                    <input type="text" id="sell-shop" class="form-control" placeholder="e.g. Mangalore Motors" required>
                </div>
                
                <div class="form-group">
                    <label>Part Name</label>
                    <input type="text" id="sell-part" class="form-control" placeholder="e.g. Royal Enfield Silencer" required>
                </div>
                
                <div class="form-group">
                    <label>Category</label>
                    <select id="sell-category" class="form-control select" required>
                        ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Price (₹)</label>
                    <input type="number" id="sell-price" class="form-control" placeholder="e.g. 1500" required>
                </div>
                
                <div style="height: 20px;"></div>
                
                <button type="submit" class="btn btn-block">List Product <i class="ph ph-upload-simple"></i></button>
            </form>
        </div>
    `;
    mainContent.innerHTML = html;
}

function handleSellSubmit(event) {
    event.preventDefault();
    
    const shopName = document.getElementById('sell-shop').value;
    const partName = document.getElementById('sell-part').value;
    const catId = document.getElementById('sell-category').value;
    const price = document.getElementById('sell-price').value;
    
    // Simulate adding to local data
    const newShopId = 's' + (shops.length + 1);
    
    // Check if shop already exists
    let existingShop = shops.find(s => s.name.toLowerCase() === shopName.toLowerCase());
    if (!existingShop) {
        shops.push({ id: newShopId, name: shopName, rating: 5.0, time: 'Ready to ship' });
        existingShop = shops[shops.length - 1];
    }
    
    products.push({
        id: products.length + 1,
        name: partName,
        category: catId,
        price: parseInt(price),
        image: categories.find(c => c.id === catId).icon,
        shopId: existingShop.id
    });
    
    // Format WhatsApp message to send to admin for "approval"
    const message = `*New Seller Listing Alert* 📝\n\n*Seller:* ${shopName}\n*Part:* ${partName}\n*Category:* ${catId}\n*Price:* ₹${price}\n\nPlease approve my listing for AutoKart.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "916364420190"; 
    
    if(confirm("Listing successfully added to the app locally! Do you want to send this listing to the admin via WhatsApp for official approval?")) {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
    
    navigate('home');
}

// Start App
init();
