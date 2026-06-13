// ============================================================
// AutoKart - Complete Application Logic (Vanilla JavaScript)
// College Project: Yenepoya Institute
// Team Leader: Mohammed Saleeth
// ============================================================

// --- Data Models ---
const categories = [
    { id: 'engine', name: 'Engine Parts', icon: 'ph-engine' },
    { id: 'brakes', name: 'Brake Parts', icon: 'ph-disc' },
    { id: 'suspension', name: 'Suspension Parts', icon: 'ph-arrows-down-up' },
    { id: 'electrical', name: 'Electrical Parts', icon: 'ph-lightning' },
    { id: 'battery', name: 'Battery & Accessories', icon: 'ph-battery-charging' },
    { id: 'tyres', name: 'Tyres & Wheels', icon: 'ph-circle-half-tilt' },
    { id: 'filters', name: 'Filters', icon: 'ph-funnel' },
    { id: 'lubricants', name: 'Lubricants & Oils', icon: 'ph-drop' },
    { id: 'bike', name: 'Bike Spare Parts', icon: 'ph-motorcycle' },
    { id: 'car', name: 'Car Spare Parts', icon: 'ph-car' },
    { id: 'tools', name: 'Tools & Garage Equipment', icon: 'ph-wrench' },
    { id: 'performance', name: 'Performance Parts', icon: 'ph-gauge' },
    { id: 'body_kits', name: 'Body Kits', icon: 'ph-aperture' },
    { id: 'lights', name: 'Car Lights', icon: 'ph-headlights' },
    { id: 'mirrors', name: 'Mirrors', icon: 'ph-columns' },
    { id: 'wipers', name: 'Wipers', icon: 'ph-windshield' }
];

const defaultProducts = [
    { id: 1, name: 'Brembo Ceramic Brake Pads', brand: 'Brembo', category: 'brakes', price: 3499, mrp: 4500, rating: 4.8, reviews: 124, stock: 15, image: 'images/brake_disc.png', partNumber: 'BR-9921', desc: 'Premium Brembo ceramic brake pads offering superior stopping power, low dust, and ultra-quiet operation.' },
    { id: 2, name: 'Castrol EDGE 5W-40 Synthetic Oil', brand: 'Castrol', category: 'lubricants', price: 2199, mrp: 2800, rating: 4.9, reviews: 450, stock: 50, image: 'images/engine_oil.png', partNumber: 'CS-EDGE-5W40', desc: 'Advanced full synthetic engine oil providing maximum protection under extreme temperatures and pressures.' },
    { id: 3, name: 'Exide Mileage Max Battery', brand: 'Exide', category: 'battery', price: 4800, mrp: 6200, rating: 4.7, reviews: 310, stock: 20, image: 'images/battery.png', partNumber: 'EX-M480', desc: 'High reliability, long life maintenance-free battery engineered specifically for Indian road conditions.' },
    { id: 4, name: 'Pioneer AVH Touchscreen Stereo', brand: 'Pioneer', category: 'battery', price: 12999, mrp: 16500, rating: 4.6, reviews: 88, stock: 8, image: 'images/stereo.png', partNumber: 'PI-AVH88', desc: 'Premium double-DIN touchscreen multimedia receiver with Apple CarPlay, Android Auto, and high-fidelity sound output.' },
    { id: 5, name: 'Michelin Primacy 4 Tyre (16 inch)', brand: 'Michelin', category: 'tyres', price: 7200, mrp: 9000, rating: 4.8, reviews: 215, stock: 24, image: 'images/tyre.png', partNumber: 'MI-PR4-16', desc: 'Superior wet braking performance, high durability, and lower noise levels for premium luxury cars.' },
    { id: 6, name: 'Bosch Clear Advantage Wiper Set', brand: 'Bosch', category: 'wipers', price: 850, mrp: 1200, rating: 4.5, reviews: 190, stock: 40, image: 'images/wiper_blade.png', partNumber: 'BS-CL-2418', desc: 'All-weather, graphite-treated wiping edge reduces friction and noise for clean, crystal-clear vision.' },
    { id: 7, name: 'K&N High-Flow Air Filter', brand: 'K&N', category: 'filters', price: 3800, mrp: 4800, rating: 4.8, reviews: 142, stock: 12, image: 'images/air_filter.png', partNumber: 'KN-HF-102', desc: 'Washable and reusable performance air filter designed to increase horsepower and engine efficiency.' },
    { id: 8, name: 'NGK Laser Iridium Spark Plug Set', brand: 'NGK', category: 'electrical', price: 1600, mrp: 2200, rating: 4.7, reviews: 98, stock: 30, image: 'images/spark_plug.png', partNumber: 'NGK-IR-4S', desc: 'Extreme ignitability and long service life with Iridium-tipped center and platinum-tipped ground electrodes.' },
    { id: 9, name: 'Monroe Reflex Strut Damper', brand: 'Monroe', category: 'suspension', price: 4200, mrp: 5500, rating: 4.6, reviews: 75, stock: 10, image: 'images/shock_absorber.png', partNumber: 'MN-RF-908', desc: 'Twin-technology dampers for immediate response and improved stability on uneven surfaces.' },
    { id: 10, name: 'Hella LED Headlight H7 Bulb Kit', brand: 'Hella', category: 'lights', price: 2400, mrp: 3500, rating: 4.5, reviews: 105, stock: 18, image: 'images/headlight_bulb.png', partNumber: 'HL-LED-H7', desc: 'Super bright 6000K white light offering superior visibility and modern styling without blinding oncoming traffic.' },
    { id: 11, name: 'Yamaha FZ Genuine Clutch & Brake Cable', brand: 'Yamaha', category: 'bike', price: 350, mrp: 450, rating: 4.6, reviews: 65, stock: 15, image: 'ph-motorcycle', partNumber: 'YM-CAB-FZ', desc: 'Genuine high-tensile inner core cable providing smooth control action and long life.' },
    { id: 12, name: 'Carbon Fiber Universal Rear Spoiler', brand: 'Spec-A', category: 'body_kits', price: 9500, mrp: 13000, rating: 4.7, reviews: 42, stock: 5, image: 'ph-aperture', partNumber: 'CF-SPL-UNIV', desc: 'Real lightweight carbon fiber GT-style rear wing providing authentic sporty aesthetics and aerodynamic downforce.' },
    { id: 13, name: 'Brembo Racing 6-Piston Caliper Kit', brand: 'Brembo', category: 'performance', price: 18000, mrp: 22000, rating: 4.9, reviews: 20, stock: 4, image: 'ph-gauge', partNumber: 'BR-CAL-6P', desc: 'High-performance aluminum calipers designed to deliver maximum braking force and thermal dissipation.' },
    { id: 14, name: 'Stanley 120-Piece Professional Tool Kit', brand: 'Stanley', category: 'tools', price: 5500, mrp: 7500, rating: 4.7, reviews: 112, stock: 15, image: 'ph-wrench', partNumber: 'ST-TK120', desc: 'Complete garage socket and spanner wrench tool kit in a heavy-duty portable carry case.' },
    { id: 15, name: 'Convex Wide-Angle Side Mirrors', brand: 'AutoGuard', category: 'mirrors', price: 1200, mrp: 1800, rating: 4.4, reviews: 80, stock: 25, image: 'ph-columns', partNumber: 'AG-MX-CONV', desc: 'Blue tinted anti-glare convex side glass mirrors for wider blind-spot visibility.' },
    { id: 16, name: 'Toyota Fortuner Chrome Front Grille', brand: 'TRD', category: 'car', price: 4500, mrp: 6000, rating: 4.8, reviews: 54, stock: 8, image: 'ph-car', partNumber: 'TF-GR-CH', desc: 'High-impact ABS front grille with premium triple-chrome finish for aggressive SUV look.' },
    { id: 17, name: 'Mobil 1 Racing 4T 10W-40 Bike Oil', brand: 'Mobil', category: 'lubricants', price: 750, mrp: 950, rating: 4.8, reviews: 180, stock: 60, image: 'images/engine_oil.png', partNumber: 'MB-4T-10W40', desc: 'Fully synthetic 4-stroke motorcycle engine oil engineered to optimize wet clutch performance.' },
    { id: 18, name: 'K&N Spin-On Premium Oil Filter', brand: 'K&N', category: 'filters', price: 950, mrp: 1300, rating: 4.6, reviews: 78, stock: 35, image: 'images/air_filter.png', partNumber: 'KN-HP-201', desc: 'High-flow rate filter designed with synthetic media to capture 99% of harmful contaminants.' },
    { id: 19, name: 'KTM Duke 200 Chain & Sprocket Kit', brand: 'Rolon', category: 'bike', price: 3200, mrp: 4000, rating: 4.7, reviews: 84, stock: 10, image: 'ph-motorcycle', partNumber: 'RL-SPK-K200', desc: 'Heavy-duty brass-plated roller chain with hardened front and rear sprockets for performance riding.' },
    { id: 20, name: 'Bilstein B6 Heavy Duty Shock Absorbers', brand: 'Bilstein', category: 'suspension', price: 45000, mrp: 55000, rating: 4.9, reviews: 15, stock: 3, image: 'images/shock_absorber.png', partNumber: 'BL-B6-SET', desc: 'Monotube gas pressure performance shock absorbers offering optimal road adhesion and lane stability.' },
    { id: 21, name: 'Denso 12V Car Starter Motor', brand: 'Denso', category: 'electrical', price: 6500, mrp: 8500, rating: 4.6, reviews: 36, stock: 6, image: 'ph-lightning', partNumber: 'DN-SM-12V', desc: 'Precision-manufactured starter motor offering quick cold starts and durable brush gear longevity.' },
    { id: 22, name: 'Carbon Fiber D-Cut Performance Wheel', brand: 'Spec-A', category: 'performance', price: 24000, mrp: 30000, rating: 4.9, reviews: 8, stock: 2, image: 'ph-gauge', partNumber: 'CF-SW-DCUT', desc: 'Flat-bottom performance steering wheel wrapped in real carbon fiber and perforated alcantara leather.' },
    { id: 23, name: 'OSRAM LED Fog Light Bulb H8/H11', brand: 'OSRAM', category: 'lights', price: 3800, mrp: 5200, rating: 4.7, reviews: 62, stock: 15, image: 'images/headlight_bulb.png', partNumber: 'OS-LED-FOG', desc: 'Brilliant cool white LED replacement bulb offering high brightness and long lifetime up to 5000 hours.' },
    { id: 24, name: 'OBD2 Bluetooth Code Scanner Pro', brand: 'Vgate', category: 'tools', price: 1500, mrp: 2500, rating: 4.8, reviews: 230, stock: 50, image: 'ph-wrench', partNumber: 'VG-OBD-BT', desc: 'Real-time diagnostic code reader compatible with iOS/Android/Windows to clear check engine lights.' },
    { id: 25, name: 'Aerodynamic Silicone Wiper Blade H1', brand: 'AutoGuard', category: 'wipers', price: 600, mrp: 900, rating: 4.4, reviews: 110, stock: 100, image: 'images/wiper_blade.png', partNumber: 'AG-WP-SIL1', desc: 'Water-repelling silicone blade coating provides extreme longevity and clean streak-free wipes.' },
    { id: 26, name: 'Mahle Performance Pistons Set', brand: 'Mahle', category: 'engine', price: 12000, mrp: 15000, rating: 4.8, reviews: 30, stock: 5, image: 'ph-engine', partNumber: 'MH-PIS-80', desc: 'High-silicon forged pistons set offering superior wear resistance and durability under performance loads.' },
    { id: 27, name: 'Gates PowerGrip Timing Belt Kit', brand: 'Gates', category: 'engine', price: 4500, mrp: 5800, rating: 4.7, reviews: 55, stock: 12, image: 'ph-engine', partNumber: 'GT-TB-202', desc: 'Complete timing belt engine service kit containing belt, pulleys, and structural tensioners.' },
    { id: 28, name: 'Brembo Racing Brake Rotors', brand: 'Brembo', category: 'brakes', price: 6500, mrp: 8200, rating: 4.8, reviews: 90, stock: 10, image: 'images/brake_disc.png', partNumber: 'BR-ROT-22', desc: 'Drilled and slotted high-carbon cast iron brake discs for rapid heat dispersion and maximum bite.' },
    { id: 29, name: 'TVS Rear Drum Brake Shoes Set', brand: 'TVS', category: 'brakes', price: 280, mrp: 380, rating: 4.5, reviews: 110, stock: 35, image: 'images/brake_disc.png', partNumber: 'TVS-BS-33', desc: 'High-friction brake shoe compound offering reliable rear axle stopping and longevity for motorcycles.' },
    { id: 30, name: 'Gabriel Rear Strut Suspension', brand: 'Gabriel', category: 'suspension', price: 1800, mrp: 2400, rating: 4.6, reviews: 45, stock: 16, image: 'images/shock_absorber.png', partNumber: 'GB-SA-402', desc: 'Oil-hydraulic gas shocks providing soft damping and smooth passenger comfort.' },
    { id: 31, name: 'Lucas TVS 12V Alternator Assembly', brand: 'Lucas', category: 'electrical', price: 5800, mrp: 7200, rating: 4.7, reviews: 22, stock: 6, image: 'ph-lightning', partNumber: 'LT-ALT-12V', desc: 'High amp alternator designed to efficiently charge vehicle battery systems and power accessories.' },
    { id: 32, name: 'Amaron Pro Bike battery 2.5LC', brand: 'Amaron', category: 'battery', price: 1450, mrp: 1850, rating: 4.8, reviews: 250, stock: 40, image: 'images/battery.png', partNumber: 'AM-PRO-BK', desc: 'Valve Regulated Lead Acid (VRLA) battery, zero maintenance, and high cranking performance for scooters.' },
    { id: 33, name: 'Apollo Alnac 4G Car Tyre (15 inch)', brand: 'Apollo', category: 'tyres', price: 4800, mrp: 6000, rating: 4.6, reviews: 180, stock: 32, image: 'images/tyre.png', partNumber: 'AP-AL4G-15', desc: 'Highly stable highway tyre offering exceptional cornering control and quiet cabin comfort.' },
    { id: 34, name: 'Bosch Premium Spin-On Fuel Filter', brand: 'Bosch', category: 'filters', price: 450, mrp: 650, rating: 4.5, reviews: 125, stock: 50, image: 'images/air_filter.png', partNumber: 'BS-FF-902', desc: 'Ensures absolute fuel purity by removing rust, sand, and moisture particles before entering injection nozzles.' },
    { id: 35, name: 'Shell Helix Ultra 5W-40 Synthetic', brand: 'Shell', category: 'lubricants', price: 3200, mrp: 4000, rating: 4.9, reviews: 320, stock: 45, image: 'images/engine_oil.png', partNumber: 'SH-HU-5W40', desc: 'Top tier fully synthetic motor oil made from natural gas utilizing Shell PurePlus technology.' },
    { id: 36, name: 'Hero Splendor Heavy Duty Chain Kit', brand: 'Hero', category: 'bike', price: 680, mrp: 850, rating: 4.7, reviews: 410, stock: 100, image: 'ph-motorcycle', partNumber: 'HR-SPK-SPL', desc: 'Replacement roller link drive chain and sprockets kit for daily commuter bikes.' },
    { id: 37, name: 'Maruti Swift Front Bumper Cover', brand: 'Maruti', category: 'car', price: 2200, mrp: 3000, rating: 4.6, reviews: 75, stock: 15, image: 'ph-car', partNumber: 'MS-FB-SW', desc: 'Replacement unpainted front bumper shell constructed from high-quality impact-resistant polymers.' },
    { id: 38, name: 'Hydraulic Bottle Jack (5 Ton Capacity)', brand: 'Spec-A', category: 'tools', price: 1800, mrp: 2600, rating: 4.7, reviews: 88, stock: 12, image: 'ph-wrench', partNumber: 'PI-BJ-5T', desc: 'Heavy-duty hydraulic car jack with safety bypass valve for quick, reliable roadside tyre lifting.' },
    { id: 39, name: 'RaceChips Pro ECU Tuning Module', brand: 'RaceChip', category: 'performance', price: 28000, mrp: 35000, rating: 4.8, reviews: 15, stock: 3, image: 'ph-gauge', partNumber: 'RC-ECU-T1', desc: 'Plug-and-play auxiliary computer module yielding up to +25% torque and power improvement.' },
    { id: 40, name: 'Swift Sport Front Aerodynamics Splitter', brand: 'Spec-A', category: 'body_kits', price: 3500, mrp: 4800, rating: 4.5, reviews: 28, stock: 8, image: 'ph-aperture', partNumber: 'SP-SPL-SW', desc: 'Matte black front bumper splitter lip designed to guide airflow and enhance sports handling.' },
    { id: 41, name: 'Philips H4 X-tremeVision Bulbs Set', brand: 'Philips', category: 'lights', price: 1100, mrp: 1600, rating: 4.6, reviews: 210, stock: 50, image: 'images/headlight_bulb.png', partNumber: 'PH-XV-H4', desc: 'Up to 150% brighter halogen beam offering superior visibility and reaction time.' },
    { id: 42, name: 'Honda Activa Chrome Side Mirror Set', brand: 'Honda', category: 'mirrors', price: 350, mrp: 450, rating: 4.5, reviews: 320, stock: 80, image: 'ph-columns', partNumber: 'HN-MR-ACT', desc: 'Replacement oval side mirrors with chrome brackets and clear wide-angle vision lenses.' },
    { id: 43, name: 'Michelin Pro 24-inch Wiper Blade', brand: 'Michelin', category: 'wipers', price: 950, mrp: 1400, rating: 4.7, reviews: 85, stock: 30, image: 'images/wiper_blade.png', partNumber: 'MI-WP-24', desc: 'Premium silicone hybrid design offering smooth performance, quiet wiping, and long lifetime.' }
];


const teamMembers = [
    {
        name: "Mohammed Saleeth",
        role: "Team Leader & Full Stack Developer",
        college: "Yenepoya Institute of Technology",
        desc: "Led the development of state architecture, secure Razorpay checkout gateway simulation, responsive Flipkart-style design layouts, and local CRUD features.",
        photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150"
    },
    {
        name: "Fahad Ahmed",
        role: "Frontend Engineer & UI Designer",
        college: "Yenepoya Institute of Technology",
        desc: "Designed the PWA-ready custom CSS design system, implemented theme-switching controls, voice search API interaction, and invoice formatting layouts.",
        photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150"
    },
    {
        name: "Niharika K.",
        role: "Database & QA Engineer",
        college: "Yenepoya Institute of Technology",
        desc: "Handled data models integrity, local storage state persistence caching, order status tracking progress timelines, and admin CRUD validation testing.",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150"
    }
];

const banners = [
    { title: 'Mega Automotive Sale', desc: 'Up to 45% off on genuine Brake Kits & Spares.', image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80', color: '#1a365d', btn: 'Shop Brakes' },
    { title: 'K&N Official Distributor', desc: 'Washable high-flow filters starting at ₹3,800.', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80', color: '#7a1b1b', btn: 'Browse K&N' },
    { title: 'Monsoon Car Wiper Deals', desc: 'Premium silicone Bosch wipers and blades up to 30% off.', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80', color: '#1c4d37', btn: 'Browse Wipers' }
];

// --- App State Initialization ---
let currentView = 'home';
let products = [...defaultProducts];
let cart = [];
let wishlist = [];
let orders = [];
let notifications = [
    { id: 1, title: 'Welcome to AutoKart!', body: 'Shop premium car and bike spare parts online at best prices.', time: 'Just now', type: 'info', read: false },
    { id: 2, title: 'Yenepoya College Special', body: 'Use coupon YENEPOYA20 at checkout for an instant 20% off!', time: '1 hour ago', type: 'promo', read: false }
];
let userAddresses = [
    { id: 1, name: 'Rahul Sharma', phone: '+91 98765 43210', street: '102 Auto Heights, Karkala Road', city: 'Mangalore', pin: '575001', isDefault: true }
];
let currentUser = { name: 'Demo User', email: 'saleeth.project@yenepoya.edu', phone: '+91 98765 43210', role: 'admin' };
let selectedCategory = 'all';
let isDarkMode = false;
let couponDiscount = 0;
let appliedCouponCode = '';

// --- DOM Elements ---
const mainContent = document.getElementById('main-content');
const cartBadge = document.getElementById('cart-badge');
const wishBadge = document.getElementById('wish-badge');
const notifBadge = document.getElementById('notif-badge');
const themeIcon = document.getElementById('theme-icon');
const productModal = document.getElementById('product-modal');
const productModalContent = document.getElementById('product-modal-content');
const imageViewer = document.getElementById('image-viewer');
const ivImage = document.getElementById('iv-image');
const ivCounter = document.getElementById('iv-counter');

let activeImageGallery = [];
let activeImageIndex = 0;

// --- Initialize App ---
function init() {
    // Load from local storage
    const storedProducts = localStorage.getItem('autokart_products');
    if (storedProducts) {
        const parsed = JSON.parse(storedProducts);
        // Sync if default list updated or expanded
        if (parsed.length !== defaultProducts.length) {
            products = [...defaultProducts];
            localStorage.setItem('autokart_products', JSON.stringify(products));
        } else {
            products = parsed;
        }
    } else {
        localStorage.setItem('autokart_products', JSON.stringify(products));
    }
    
    if (localStorage.getItem('autokart_cart')) {
        cart = JSON.parse(localStorage.getItem('autokart_cart'));
    }
    
    if (localStorage.getItem('autokart_wishlist')) {
        wishlist = JSON.parse(localStorage.getItem('autokart_wishlist'));
    }

    if (localStorage.getItem('autokart_orders')) {
        orders = JSON.parse(localStorage.getItem('autokart_orders'));
    } else {
        // Mock default order
        orders = [
            { 
                orderId: 'AK98273', 
                name: 'Rahul Sharma', 
                phone: '+91 98765 43210', 
                addr: '102 Auto Heights, Karkala Road', 
                city: 'Mangalore', 
                pin: '575001', 
                method: 'cod', 
                total: 5698, 
                items: [
                    { id: 1, name: 'Brembo Ceramic Brake Pads', price: 3499, qty: 1 },
                    { id: 2, name: 'Castrol EDGE 5W-40 Synthetic Oil', price: 2199, qty: 1 }
                ],
                status: 'delivered', 
                date: '2026-06-11T14:32:00.000Z',
                estDate: 'June 14, 2026'
            }
        ];
        localStorage.setItem('autokart_orders', JSON.stringify(orders));
    }

    if (localStorage.getItem('autokart_addresses')) {
        userAddresses = JSON.parse(localStorage.getItem('autokart_addresses'));
    } else {
        localStorage.setItem('autokart_addresses', JSON.stringify(userAddresses));
    }

    // Check system theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
    
    updateBadges();
    navigate('home');
}

// --- Theme Controls ---
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    themeIcon.className = isDarkMode ? 'ph ph-sun' : 'ph ph-moon';
}

// --- Navigation Controller ---
function navigate(viewId) {
    currentView = viewId;
    
    // Highlight active tab in mobile nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${viewId}'`)) {
            item.classList.add('active');
        }
    });

    // Toggle Search Bar Container visibility
    const searchContainer = document.getElementById('global-search-container');
    if (viewId === 'home' || viewId === 'categories' || viewId === 'search') {
        searchContainer.style.display = 'block';
    } else {
        searchContainer.style.display = 'none';
    }

    window.scrollTo(0, 0);
    renderCurrentView();
}

// --- Badge Indicators ---
function updateBadges() {
    // Cart Badge
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCount > 0) {
        cartBadge.innerText = cartCount;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }

    // Wishlist Badge
    if (wishlist.length > 0) {
        wishBadge.innerText = wishlist.length;
        wishBadge.classList.remove('hidden');
    } else {
        wishBadge.classList.add('hidden');
    }

    // Notifications Badge
    const unreadNotifs = notifications.filter(n => !n.read).length;
    if (unreadNotifs > 0) {
        notifBadge.innerText = unreadNotifs;
        notifBadge.classList.remove('hidden');
    } else {
        notifBadge.classList.add('hidden');
    }
}

// --- UI Notification Helper ---
function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let iconClass = 'ph-info';
    if (type === 'success') iconClass = 'ph-check-circle';
    if (type === 'error') iconClass = 'ph-x-circle';
    if (type === 'warning') iconClass = 'ph-warning';

    toast.innerHTML = `<i class="ph ${iconClass}"></i><span>${msg}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeIn 0.3s reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Global Search Key Handler ---
function handleGlobalSearchKeyUp(event) {
    if (event.key === 'Enter') {
        triggerSearch();
    }
}

function triggerSearch() {
    const query = document.getElementById('global-search-input').value.trim();
    if (query !== '') {
        navigate('search');
        setTimeout(() => {
            const innerInput = document.getElementById('search-input');
            if (innerInput) {
                innerInput.value = query;
                handleSearch();
            }
        }, 50);
    }
}

// --- Voice Search API ---
function startVoiceSearch(event) {
    event.stopPropagation();
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showToast('Voice Search is not supported in this browser.', 'warning');
        return;
    }
    
    const recognition = new SpeechRecognition();
    const micBtn = document.getElementById('voice-search-btn');
    
    micBtn.classList.add('recording');
    showToast('Listening for automobile parts...', 'info');
    
    recognition.onresult = function(e) {
        const transcript = e.results[0][0].transcript;
        document.getElementById('global-search-input').value = transcript;
        showToast(`Searching for: "${transcript}"`, 'success');
        micBtn.classList.remove('recording');
        
        navigate('search');
        setTimeout(() => {
            const innerInput = document.getElementById('search-input');
            if (innerInput) {
                innerInput.value = transcript;
                handleSearch();
            }
        }, 50);
    };
    
    recognition.onerror = function() {
        micBtn.classList.remove('recording');
        showToast('Voice recognition error. Please try again.', 'error');
    };
    
    recognition.onend = function() {
        micBtn.classList.remove('recording');
    };
    
    recognition.start();
}

// --- Render Route Handlers ---
function renderCurrentView() {
    let html = '';
    
    switch(currentView) {
        case 'home': html = getHomeHtml(); break;
        case 'search': html = getSearchHtml(); break;
        case 'categories': html = getCategoriesHtml(); break;
        case 'cart': html = getCartHtml(); break;
        case 'checkout': html = getCheckoutHtml(); break;
        case 'profile': html = getProfileHtml(); break;
        case 'wishlist': html = getWishlistHtml(); break;
        case 'notifications': html = getNotificationsHtml(); break;
        case 'project-team': html = getProjectTeamHtml(); break;
        case 'admin': html = getAdminHtml(); break;
        default: html = getHomeHtml();
    }
    
    mainContent.innerHTML = html + getFooterHtml();
    
    // Post-rendering bindings
    if (currentView === 'home') setupCarousel();
    if (currentView === 'admin') initAdminDashboard();
}

// --- VIEW HTML GENERATORS ---

// 1. Homepage HTML
function getHomeHtml() {
    // Filter out some trending and new arrival subsets
    const trending = products.slice(0, 5);
    const newArrivals = products.slice(5, 10);
    
    return `
        <div class="view active">
            <!-- Banner Slider -->
            <div class="carousel-container">
                <div class="carousel-track" id="home-carousel">
                    ${banners.map(b => `
                        <div class="carousel-slide">
                            <div class="banner" style="background-image: url('${b.image}')">
                                <div class="banner-content">
                                    <h2>${b.title}</h2>
                                    <p>${b.desc}</p>
                                    <button class="btn btn-primary" onclick="navigate('categories')">${b.btn}</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-indicators" id="carousel-indicators">
                    ${banners.map((_, i) => `<div class="indicator ${i === 0 ? 'active' : ''}"></div>`).join('')}
                </div>
            </div>

            <!-- Categories Scroll -->
            <div class="categories-container">
                <div class="categories-scroll">
                    ${categories.map(c => `
                        <div class="category-item" onclick="filterByCategory('${c.id}')">
                            <div class="category-img-container">
                                <i class="ph ${c.icon}"></i>
                            </div>
                            <span>${c.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Trending Parts Section -->
            <div class="section-header">
                <span class="section-title">Trending Spare Parts</span>
                <button class="see-all-btn" onclick="filterByCategory('all')">See All</button>
            </div>
            <div class="product-h-list">
                ${trending.map(p => getProductCardHtml(p)).join('')}
            </div>

            <!-- College Special Coupon Banner -->
            <div class="cart-summary" style="margin: 16px; background: linear-gradient(135deg, #2874f0, #1b5cb7); color: white; border: none; text-align: center; padding: 20px;">
                <h3 style="font-size: 16px; font-weight: 800; text-transform: uppercase; margin-bottom: 4px;">Yenepoya Institute Project Offer</h3>
                <p style="font-size: 12px; opacity: 0.9; margin-bottom: 12px;">Get a flat 20% off on all items for students & faculty members.</p>
                <div style="background: rgba(255,255,255,0.2); border: 2px dashed rgba(255,255,255,0.6); padding: 8px 16px; display: inline-block; font-weight: 700; border-radius: 4px; font-size: 14px; letter-spacing: 1px;">
                    Coupon Code: YENEPOYA20
                </div>
            </div>

            <!-- New Arrivals Section -->
            <div class="section-header">
                <span class="section-title">New Arrivals</span>
                <button class="see-all-btn" onclick="filterByCategory('all')">See All</button>
            </div>
            <div class="product-h-list">
                ${newArrivals.map(p => getProductCardHtml(p)).join('')}
            </div>
        </div>
    `;
}

// Product Card HTML Utility
function getProductCardHtml(p) {
    const isWished = wishlist.includes(p.id);
    const inCart = cart.some(c => c.id === p.id);
    const discountPercent = Math.round(((p.mrp - p.price) / p.mrp) * 100);
    
    return `
        <div class="product-card-v" onclick="openProduct(${p.id})">
            <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist(event, ${p.id})">
                <i class="ph ${isWished ? 'ph-heart-fill' : 'ph-heart'}"></i>
            </button>
            <div class="img-container">
                ${p.image.startsWith('ph-') ? `<i class="ph ${p.image}"></i>` : `<img src="${p.image}" alt="${p.name}" onerror="this.onerror=null; this.outerHTML='<i class=\x22ph ph-wrench\x22></i>'">`}
            </div>
            <div class="brand">${p.brand}</div>
            <div class="title">${p.name}</div>
            <div class="rating"><i class="ph-fill ph-star"></i> ${p.rating}</div>
            
            <div style="margin-bottom: 6px; font-size: 10px; font-weight:600; color: ${p.stock > 5 ? 'var(--success)' : p.stock > 0 ? 'var(--warning)' : 'var(--danger)'}">
                ${p.stock > 5 ? 'In Stock' : p.stock > 0 ? `Only ${p.stock} left!` : 'Out of Stock'}
            </div>
            
            <div class="price-row">
                <div>
                    <div class="price">₹${p.price.toLocaleString()}</div>
                    <div style="display:flex; align-items:center; gap: 4px;">
                        <span class="mrp">₹${p.mrp.toLocaleString()}</span>
                        <span class="discount">${discountPercent}% off</span>
                    </div>
                </div>
                <button class="add-to-cart-sm ${inCart ? 'added' : ''}" onclick="toggleCart(event, ${p.id})">
                    <i class="ph ${inCart ? 'ph-check' : 'ph-plus'}"></i>
                </button>
            </div>
        </div>
    `;
}

// 2. Search Page HTML
function getSearchHtml() {
    return `
        <div class="view active" style="padding: 16px;">
            <div class="search-bar" style="border: 1px solid var(--primary-color);">
                <i class="ph ph-magnifying-glass"></i>
                <input type="text" id="search-input" placeholder="Search by brand, SKU, vehicle category..." oninput="handleSearch()">
                <i class="ph ph-x" onclick="clearSearch()" style="cursor:pointer; color:var(--text-secondary);"></i>
            </div>
            
            <div class="search-filters">
                <div class="filter-chip active" onclick="filterSearchResults('all', this)">All Results</div>
                <div class="filter-chip" onclick="filterSearchResults('brakes', this)">Brakes</div>
                <div class="filter-chip" onclick="filterSearchResults('lubricants', this)">Lubricants & Oils</div>
                <div class="filter-chip" onclick="filterSearchResults('battery', this)">Batteries</div>
                <div class="filter-chip" onclick="filterSearchResults('filters', this)">Filters</div>
                <div class="filter-chip" onclick="filterSearchResults('tools', this)">Garage Tools</div>
            </div>
            
            <div class="search-results-grid" id="search-results">
                ${products.map(p => getProductCardHtml(p)).join('')}
            </div>
        </div>
    `;
}

function handleSearch() {
    const q = document.getElementById('search-input').value.toLowerCase().trim();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) || 
        p.partNumber.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
    );
    
    const grid = document.getElementById('search-results');
    if (filtered.length > 0) {
        grid.innerHTML = filtered.map(p => getProductCardHtml(p)).join('');
    } else {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; padding: 48px 16px; text-align: center; color: var(--text-secondary);">
                <i class="ph ph-magnifying-glass" style="font-size: 48px; margin-bottom: 12px; display:block;"></i>
                <h3 style="color:var(--text-primary);">No Results Found</h3>
                <p style="font-size:12px; margin-top:4px;">Try searching for different keywords, part numbers, or brands.</p>
            </div>
        `;
    }
}

function clearSearch() {
    const input = document.getElementById('search-input');
    if (input) {
        input.value = '';
        handleSearch();
    }
}

function filterSearchResults(catId, chipEl) {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chipEl.classList.add('active');
    
    const input = document.getElementById('search-input');
    const q = input ? input.value.toLowerCase().trim() : '';
    
    let filtered = products;
    if (catId !== 'all') {
        filtered = filtered.filter(p => p.category === catId);
    }
    if (q !== '') {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.brand.toLowerCase().includes(q) ||
            p.partNumber.toLowerCase().includes(q)
        );
    }
    
    const grid = document.getElementById('search-results');
    grid.innerHTML = filtered.length > 0 ? 
        filtered.map(p => getProductCardHtml(p)).join('') : 
        `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-secondary);">No products match this filter.</div>`;
}

function filterByCategory(catId) {
    selectedCategory = catId;
    navigate('search');
    setTimeout(() => {
        const input = document.getElementById('search-input');
        if (input) {
            if (catId !== 'all') {
                const categoryObj = categories.find(c => c.id === catId);
                input.value = categoryObj ? categoryObj.name : '';
            } else {
                input.value = '';
            }
            handleSearch();
        }
    }, 100);
}

// 3. Categories List Page
function getCategoriesHtml() {
    return `
        <div class="view active" style="padding: 16px;">
            <h2 class="section-title" style="margin-bottom: 16px; font-family:'Outfit', sans-serif;">Browse Spares By Category</h2>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                ${categories.map(c => `
                    <div class="dashboard-card" style="margin: 0; padding: 20px; cursor: pointer; display: flex; flex-direction: column; align-items: center;" onclick="filterByCategory('${c.id}')">
                        <div style="font-size: 36px; color: var(--primary-color); margin-bottom: 8px;">
                            <i class="ph ${c.icon}"></i>
                        </div>
                        <h4 style="font-size: 13px; font-weight: 700; color: var(--text-primary);">${c.name}</h4>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// 4. Cart View HTML
function getCartHtml() {
    if (cart.length === 0) {
        return `
            <div class="view active" style="padding: 48px 16px; text-align: center; color: var(--text-secondary);">
                <i class="ph ph-shopping-cart" style="font-size: 64px; margin-bottom: 16px; color:var(--border-color); display:block;"></i>
                <h3 style="color:var(--text-primary);">Your Cart is Empty</h3>
                <p style="font-size:12px; margin-top:4px;">No auto parts added yet. Discover products on the store!</p>
                <button class="btn btn-secondary" style="margin: 20px auto 0;" onclick="navigate('home')">Start Shopping</button>
            </div>
        `;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.18; // 18% GST mock
    const discountAmount = subtotal * couponDiscount;
    const total = subtotal + tax - discountAmount;

    return `
        <div class="view active" style="padding: 8px;">
            <div class="cart-view-container">
                <div class="cart-items-column">
                    <h2 class="section-title" style="padding: 12px 16px; background:#fff; border: 1px solid var(--border-color); border-bottom:none; margin: 8px 8px 0;">My Cart (${cart.length})</h2>
                    <div class="cart-list" style="padding:0;">
                        ${cart.map(item => `
                            <div class="cart-item">
                                <div class="cart-item-img">
                                    ${item.image.startsWith('ph-') ? `<i class="ph ${item.image}" style="font-size: 36px;"></i>` : `<img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.outerHTML='<i class=\x22ph ph-wrench\x22></i>'">`}
                                </div>
                                <div class="cart-item-info">
                                    <div class="cart-item-title">${item.name}</div>
                                    <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;">Brand: ${item.brand}</div>
                                    <div class="cart-item-actions">
                                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                                        <div class="qty-ctrl">
                                            <button onclick="updateQty(${item.id}, -1)">-</button>
                                            <span>${item.qty}</span>
                                            <button onclick="updateQty(${item.id}, 1)">+</button>
                                        </div>
                                    </div>
                                </div>
                                <button class="cart-remove" onclick="removeFromCart(${item.id})">
                                    <i class="ph ph-trash"></i>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="cart-summary-column">
                    <div class="cart-summary">
                        <div class="summary-title">Price Details</div>
                        <div class="summary-row">
                            <span>Price (${cart.length} items)</span>
                            <span>₹${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                        <div class="summary-row">
                            <span>GST (18%)</span>
                            <span>₹${tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                        ${couponDiscount > 0 ? `
                        <div class="summary-row" style="color: var(--success);">
                            <span>Discount (${appliedCouponCode})</span>
                            <span>- ₹${discountAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>` : ''}
                        <div class="summary-row">
                            <span>Delivery Charges</span>
                            <span style="color: var(--success);">FREE</span>
                        </div>
                        
                        <!-- Coupon Code Field -->
                        <div class="coupon-container">
                            <input type="text" class="coupon-input" id="coupon-code" placeholder="Enter Coupon Code" value="${appliedCouponCode}">
                            <button class="btn btn-secondary" style="padding: 6px 12px; font-size:12px;" onclick="applyCoupon()">Apply</button>
                        </div>
                        
                        <div class="summary-row total">
                            <span>Total Amount</span>
                            <span>₹${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                        </div>
                        
                        <button class="btn btn-primary btn-block" style="margin-top: 20px;" onclick="navigate('checkout')">
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function applyCoupon() {
    const code = document.getElementById('coupon-code').value.trim().toUpperCase();
    if (code === '') {
        couponDiscount = 0;
        appliedCouponCode = '';
        renderCurrentView();
        return;
    }
    
    if (code === 'YENEPOYA20') {
        couponDiscount = 0.20;
        appliedCouponCode = 'YENEPOYA20';
        showToast('College Special 20% discount applied!', 'success');
    } else if (code === 'AUTOKART10') {
        couponDiscount = 0.10;
        appliedCouponCode = 'AUTOKART10';
        showToast('Coupon AUTOKART10 applied! 10% Off.', 'success');
    } else {
        showToast('Invalid coupon code.', 'error');
        couponDiscount = 0;
        appliedCouponCode = '';
    }
    renderCurrentView();
}

// 5. Checkout HTML
function getCheckoutHtml() {
    if (cart.length === 0) {
        return `<div class="view active" style="padding:48px 16px;text-align:center;"><i class="ph ph-shopping-cart" style="font-size:48px;"></i><h3>Your cart is empty</h3></div>`;
    }

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const tax = subtotal * 0.18;
    const discountAmount = subtotal * couponDiscount;
    const total = subtotal + tax - discountAmount;
    
    // Select default address if exists
    const defaultAddress = userAddresses[0] || null;

    return `
        <div class="view active" style="padding: 16px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                <div class="icon-btn" onclick="navigate('cart')"><i class="ph ph-arrow-left" style="color:var(--text-primary)"></i></div>
                <h2 style="font-size:18px; font-weight:700;">Secure Checkout</h2>
            </div>
            
            <div class="cart-view-container">
                <div class="cart-items-column" style="margin-top:0;">
                    <!-- Address Selection Module -->
                    <div class="cart-summary" style="margin: 0 0 16px 0; padding:16px;">
                        <div class="summary-title"><i class="ph ph-map-pin" style="margin-right:6px; color:var(--primary-color)"></i> Shipping Address</div>
                        
                        ${userAddresses.map(addr => `
                            <div class="address-item" style="border-color: ${addr.isDefault ? 'var(--primary-color)' : 'var(--border-color)'}; cursor:pointer;" onclick="selectAddress(${addr.id})">
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <i class="ph ${addr.isDefault ? 'ph-radio-button-fill' : 'ph-circle'}" style="color:var(--primary-color)"></i>
                                    <strong>${addr.name}</strong>
                                    <span style="font-size:11px; background:#e0e0e0; padding:1px 4px; border-radius:2px;">Phone: ${addr.phone}</span>
                                </div>
                                <div style="font-size:13px; color:var(--text-secondary); margin-left: 22px; margin-top:4px;">
                                    ${addr.street}, ${addr.city} - ${addr.pin}
                                </div>
                            </div>
                        `).join('')}

                        <!-- Add Address Trigger -->
                        <div id="add-address-form" style="display:none; border:1px dashed var(--border-color); padding:12px; border-radius:4px; margin-top:12px;">
                            <div class="form-group"><label>Recipient Name</label><input type="text" class="form-control" id="addr-name"></div>
                            <div class="form-group"><label>Mobile Phone</label><input type="tel" class="form-control" id="addr-phone"></div>
                            <div class="form-group"><label>Street Address</label><input type="text" class="form-control" id="addr-street"></div>
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                                <div class="form-group"><label>City</label><input type="text" class="form-control" id="addr-city" value="Mangalore"></div>
                                <div class="form-group"><label>Pincode</label><input type="text" class="form-control" id="addr-pin" placeholder="575001"></div>
                            </div>
                            <div style="display:flex; gap:10px; margin-top:8px;">
                                <button class="btn btn-secondary btn-sm" onclick="saveNewAddress()">Save Address</button>
                                <button class="btn btn-outline btn-sm" onclick="toggleAddressForm(false)">Cancel</button>
                            </div>
                        </div>

                        <button class="btn btn-outline btn-block btn-sm" style="margin-top:12px;" onclick="toggleAddressForm(true)">
                            <i class="ph ph-plus"></i> Add New Delivery Address
                        </button>
                    </div>

                    <!-- Payment Selection Module -->
                    <div class="cart-summary" style="margin: 0 0 16px 0; padding:16px;">
                        <div class="summary-title"><i class="ph ph-credit-card" style="margin-right:6px; color:var(--primary-color)"></i> Payment Methods</div>
                        <div id="checkout-payments">
                            <div class="pay-opt selected" onclick="selectCheckoutPayment(this, 'upi')">
                                <i class="ph ph-qr-code" style="font-size:22px; color:#5c2d91"></i>
                                <div style="flex:1">
                                    <div style="font-weight:600;">UPI (Google Pay, PhonePe, Paytm)</div>
                                    <div style="font-size:11px; color:var(--text-secondary)">Pay instantly via UPI App</div>
                                </div>
                            </div>
                            <div class="pay-opt" onclick="selectCheckoutPayment(this, 'card')">
                                <i class="ph ph-credit-card" style="font-size:22px; color:#1a365d"></i>
                                <div style="flex:1">
                                    <div style="font-weight:600;">Debit / Credit Card</div>
                                    <div style="font-size:11px; color:var(--text-secondary)">Visa, Mastercard, RuPay supported</div>
                                </div>
                            </div>
                            <div class="pay-opt" onclick="selectCheckoutPayment(this, 'netbanking')">
                                <i class="ph ph-bank" style="font-size:22px; color:#e28743"></i>
                                <div style="flex:1">
                                    <div style="font-weight:600;">Net Banking</div>
                                    <div style="font-size:11px; color:var(--text-secondary)">Secure bank login redirects</div>
                                </div>
                            </div>
                            <div class="pay-opt" onclick="selectCheckoutPayment(this, 'cod')">
                                <i class="ph ph-money" style="font-size:22px; color:#388e3c"></i>
                                <div style="flex:1">
                                    <div style="font-weight:600;">Cash on Delivery (COD)</div>
                                    <div style="font-size:11px; color:var(--text-secondary)">Pay cash upon spares arrival</div>
                                </div>
                            </div>
                            <div class="pay-opt" onclick="selectCheckoutPayment(this, 'wallet')">
                                <i class="ph ph-wallet" style="font-size:22px; color:#008cff"></i>
                                <div style="flex:1">
                                    <div style="font-weight:600;">Wallet Payment</div>
                                    <div style="font-size:11px; color:var(--text-secondary)">Paytm, Mobikwik, Amazon Pay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right checkout price confirmation panel -->
                <div class="cart-summary-column">
                    <div class="cart-summary" style="margin:0;">
                        <div class="summary-title">Confirm Order Details</div>
                        ${cart.map(item => `
                            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:8px; border-bottom:1px solid #f6f8fb; padding-bottom:6px;">
                                <span style="max-width: 70%;">${item.name} <strong>x${item.qty}</strong></span>
                                <span style="font-weight:600;">₹${(item.price*item.qty).toLocaleString()}</span>
                            </div>
                        `).join('')}
                        <div style="margin-top:16px; border-top: 1px dashed var(--border-color); padding-top:12px;">
                            <div class="summary-row" style="margin-bottom:6px;">
                                <span>Subtotal</span>
                                <span>₹${subtotal.toLocaleString()}</span>
                            </div>
                            <div class="summary-row" style="margin-bottom:6px;">
                                <span>GST (18%)</span>
                                <span>₹${Math.round(tax).toLocaleString()}</span>
                            </div>
                            ${couponDiscount > 0 ? `
                            <div class="summary-row" style="color: var(--success); margin-bottom:6px;">
                                <span>Promo Discount</span>
                                <span>- ₹${Math.round(discountAmount).toLocaleString()}</span>
                            </div>` : ''}
                            <div class="summary-row total" style="margin-top:8px;">
                                <span>Payable Total</span>
                                <span>₹${Math.round(total).toLocaleString()}</span>
                            </div>
                        </div>

                        <button class="btn btn-primary btn-block" style="margin-top: 24px;" onclick="placeECommerceOrder(${Math.round(total)})">
                            <i class="ph ph-lock"></i> Place Order · ₹${Math.round(total).toLocaleString()}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

let activePaymentMethod = 'upi';
function selectCheckoutPayment(el, method) {
    activePaymentMethod = method;
    document.querySelectorAll('#checkout-payments .pay-opt').forEach(opt => {
        opt.classList.remove('selected');
    });
    el.classList.add('selected');
}

function toggleAddressForm(show) {
    document.getElementById('add-address-form').style.display = show ? 'block' : 'none';
}

function selectAddress(id) {
    userAddresses.forEach(a => {
        a.isDefault = (a.id === id);
    });
    localStorage.setItem('autokart_addresses', JSON.stringify(userAddresses));
    renderCurrentView();
    showToast('Shipping address selected.', 'info');
}

function saveNewAddress() {
    const name = document.getElementById('addr-name').value.trim();
    const phone = document.getElementById('addr-phone').value.trim();
    const street = document.getElementById('addr-street').value.trim();
    const city = document.getElementById('addr-city').value.trim();
    const pin = document.getElementById('addr-pin').value.trim();

    if (!name || !phone || !street || !city || !pin) {
        showToast('Please fill all address details.', 'warning');
        return;
    }

    const newAddr = {
        id: Date.now(),
        name,
        phone,
        street,
        city,
        pin,
        isDefault: false
    };

    userAddresses.push(newAddr);
    localStorage.setItem('autokart_addresses', JSON.stringify(userAddresses));
    toggleAddressForm(false);
    renderCurrentView();
    showToast('New address saved successfully.', 'success');
}

function placeECommerceOrder(payableAmount) {
    const activeAddress = userAddresses.find(a => a.isDefault);
    if (!activeAddress) {
        showToast('Please select or add a shipping address.', 'warning');
        return;
    }

    // Razorpay Integration Redirect Simulation or COD Confirmation
    const orderId = 'AK' + Math.floor(100000 + Math.random() * 900000);
    
    // Set Estimated Delivery (3 Days from now)
    const estDate = new Date();
    estDate.setDate(estDate.getDate() + 3);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    const newOrder = {
        orderId,
        name: activeAddress.name,
        phone: activeAddress.phone,
        addr: activeAddress.street,
        city: activeAddress.city,
        pin: activeAddress.pin,
        method: activePaymentMethod,
        total: payableAmount,
        items: [...cart],
        status: 'placed',
        date: new Date().toISOString(),
        estDate: estDate.toLocaleDateString('en-US', options)
    };

    // Decrement stock levels locally
    cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (prod) {
            prod.stock = Math.max(0, prod.stock - item.qty);
        }
    });
    localStorage.setItem('autokart_products', JSON.stringify(products));

    orders.unshift(newOrder);
    localStorage.setItem('autokart_orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    localStorage.removeItem('autokart_cart');
    updateBadges();

    // Show Confirmation Screen
    showOrderSuccessScreen(newOrder);
}

function showOrderSuccessScreen(o) {
    const paymentLabel = { upi: 'UPI App', card: 'Debit/Credit Card', netbanking: 'Net Banking', cod: 'Cash on Delivery', wallet: 'Mobile Wallet' }[o.method];
    
    mainContent.innerHTML = `
        <div class="view active" style="padding: 16px; max-width: 600px; margin: 0 auto;">
            <div class="success-card">
                <i class="ph-fill ph-check-circle" style="font-size: 64px; color: var(--success); display:block; margin-bottom:12px;"></i>
                <h2 style="font-family:'Outfit'; font-size:24px; font-weight:800; color:var(--text-primary);">Order Confirmed!</h2>
                <p style="font-size: 13px; color:var(--text-secondary); margin-top:4px;">Hi ${o.name}, your spare parts order has been placed successfully.</p>
                
                <div class="cart-summary" style="margin:24px 0 16px; text-align:left; border:1px solid var(--border-color);">
                    <div class="summary-title" style="font-size:13px;">Order Summary</div>
                    <div class="summary-row"><span>Order ID</span><span class="bold">#${o.orderId}</span></div>
                    <div class="summary-row"><span>Amount Paid</span><span class="bold">₹${o.total.toLocaleString()}</span></div>
                    <div class="summary-row"><span>Payment Method</span><span class="bold">${paymentLabel}</span></div>
                    <div class="summary-row"><span>Est. Delivery Date</span><span class="bold" style="color:var(--primary-color);">${o.estDate}</span></div>
                    <div class="summary-row" style="margin-bottom:0;">
                        <span>Shipped To</span>
                        <span style="font-size:12px; font-weight:600; text-align:right;">${o.addr}, ${o.city} - ${o.pin}</span>
                    </div>
                </div>

                <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
                    <button class="btn btn-secondary" onclick="navigate('profile')">View Order History & Track</button>
                    <button class="btn btn-outline" onclick="downloadInvoice('${o.orderId}')"><i class="ph ph-download-simple"></i> Download PDF Invoice</button>
                    <button class="btn btn-primary" onclick="navigate('home')">Continue Shopping</button>
                </div>
            </div>
        </div>
    `;
}

// 6. User Profile HTML
function getProfileHtml() {
    return `
        <div class="view active" style="padding: 16px;">
            <div class="profile-card">
                <div class="profile-avatar">${currentUser.name.charAt(0)}</div>
                <div>
                    <h3 style="font-family:'Outfit'; font-weight:700;">${currentUser.name}</h3>
                    <p style="font-size:12px; color:var(--text-secondary);">${currentUser.email}</p>
                    <span style="font-size:10px; background:rgba(40,116,240,0.1); color:var(--primary-color); font-weight:700; padding:2px 6px; border-radius:10px; display:inline-block; margin-top:4px; text-transform:uppercase;">
                        Project Role: ${currentUser.role}
                    </span>
                </div>
            </div>

            <!-- College/Team quick access button -->
            <div class="dashboard-card" style="margin: 8px 8px 16px; padding: 12px; cursor:pointer; background: #fffcf0; border: 1px solid #ffd0a0; display:flex; justify-content:space-between; align-items:center;" onclick="navigate('project-team')">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="ph ph-graduation-cap" style="font-size:24px; color:#ff9f00"></i>
                    <div style="text-align:left;">
                        <h4 style="font-size:13px; font-weight:700;">Yenepoya College Project Details</h4>
                        <p style="font-size:10px; color:var(--text-secondary);">Mohammed Saleeth & Team Members</p>
                    </div>
                </div>
                <i class="ph ph-caret-right" style="color:var(--text-secondary)"></i>
            </div>

            <!-- Profile Menu Options -->
            <div class="cart-summary" style="margin:8px; padding:12px;">
                <div class="summary-title" style="font-size:12px;">Account Sections</div>
                
                <div style="border-bottom: 1px solid var(--border-color); padding: 12px 4px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="toggleProfileSection('history-section')">
                    <span class="bold" style="font-size:13px;"><i class="ph ph-package" style="margin-right:8px; font-size:18px; color:var(--primary-color); vertical-align:middle;"></i> Order History (${orders.length})</span>
                    <i class="ph ph-caret-down text-secondary" id="history-arrow"></i>
                </div>
                <div id="history-section" style="padding-top:12px;">
                    ${orders.map(o => `
                        <div style="border: 1px solid var(--border-color); border-radius:4px; padding:10px; margin-bottom:8px; background:#fafafa;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <strong style="font-size:12px;">Order ID: #${o.orderId}</strong>
                                <span class="badge-status ${o.status}">${o.status}</span>
                            </div>
                            <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">Placed on: ${new Date(o.date).toLocaleDateString()}</div>
                            <div style="font-size:12px; margin-top:8px; font-weight:600;">Total: ₹${o.total.toLocaleString()}</div>
                            
                            <div style="display:flex; gap:8px; margin-top:10px;">
                                <button class="btn btn-outline btn-sm" style="padding: 4px 8px; font-size:11px;" onclick="trackOrderTimeline('${o.orderId}')">Track Order</button>
                                <button class="btn btn-outline btn-sm" style="padding: 4px 8px; font-size:11px;" onclick="downloadInvoice('${o.orderId}')">Invoice</button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div style="border-bottom: ${currentUser.role === 'admin' ? '1px solid var(--border-color)' : 'none'}; padding: 12px 4px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="toggleProfileSection('address-sec')">
                    <span class="bold" style="font-size:13px;"><i class="ph ph-map-pin" style="margin-right:8px; font-size:18px; color:var(--primary-color); vertical-align:middle;"></i> Address Directory</span>
                    <i class="ph ph-caret-right text-secondary" id="address-arrow"></i>
                </div>
                <div id="address-sec" style="display:none; padding-top:12px;">
                    ${userAddresses.map(addr => `
                        <div class="address-item" style="margin-bottom:8px;">
                            <strong>${addr.name}</strong> - ${addr.phone}
                            <div style="font-size:12px; color:var(--text-secondary); margin-top:2px;">${addr.street}, ${addr.city} - ${addr.pin}</div>
                            <button class="address-btn-delete" onclick="deleteProfileAddress(${addr.id})">Delete</button>
                        </div>
                    `).join('')}
                </div>

                ${currentUser.role === 'admin' ? `
                <div style="padding: 12px 4px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="navigate('admin')">
                    <span class="bold" style="font-size:13px; color:var(--danger);"><i class="ph ph-shield-check" style="margin-right:8px; font-size:18px; color:var(--danger); vertical-align:middle;"></i> Admin Dashboard Control</span>
                    <i class="ph ph-caret-right text-secondary"></i>
                </div>` : ''}
            </div>
        </div>
    `;
}

function toggleProfileSection(id) {
    const sec = document.getElementById(id);
    const arrow = document.getElementById(id === 'history-section' ? 'history-arrow' : 'address-arrow');
    if (sec.style.display === 'none') {
        sec.style.display = 'block';
        arrow.className = 'ph ph-caret-down text-secondary';
    } else {
        sec.style.display = 'none';
        arrow.className = 'ph ph-caret-right text-secondary';
    }
}

function deleteProfileAddress(id) {
    userAddresses = userAddresses.filter(a => a.id !== id);
    localStorage.setItem('autokart_addresses', JSON.stringify(userAddresses));
    renderCurrentView();
    showToast('Address deleted.', 'warning');
}

// 7. Wishlist HTML
function getWishlistHtml() {
    if (wishlist.length === 0) {
        return `
            <div class="view active" style="padding: 48px 16px; text-align: center; color: var(--text-secondary);">
                <i class="ph ph-heart" style="font-size: 64px; margin-bottom: 16px; color:var(--border-color); display:block;"></i>
                <h3 style="color:var(--text-primary);">Your Wishlist is Empty</h3>
                <p style="font-size:12px; margin-top:4px;">Click the heart icon on parts to add them to your wishlist.</p>
                <button class="btn btn-secondary" style="margin:20px auto 0;" onclick="navigate('home')">Discover Spares</button>
            </div>
        `;
    }

    const wishItems = products.filter(p => wishlist.includes(p.id));

    return `
        <div class="view active" style="padding: 16px;">
            <h2 class="section-title" style="margin-bottom: 16px; font-family:'Outfit';">My Wishlist (${wishlist.length})</h2>
            <div class="search-results-grid">
                ${wishItems.map(p => getProductCardHtml(p)).join('')}
            </div>
        </div>
    `;
}

// 8. Notifications HTML
function getNotificationsHtml() {
    return `
        <div class="view active" style="padding: 16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h2 class="section-title" style="margin:0; font-family:'Outfit';">Notifications</h2>
                <button class="btn btn-outline btn-sm" style="padding: 4px 8px; font-size:11px;" onclick="markAllNotificationsRead()">Mark All Read</button>
            </div>
            
            <div style="display:flex; flex-direction:column; gap:10px;">
                ${notifications.map(n => `
                    <div class="address-item" style="border-left: 4px solid ${n.read ? 'var(--border-color)' : 'var(--primary-color)'}; background-color: ${n.read ? 'var(--surface-color)' : '#f5f9ff'};">
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <strong style="font-size:13px; color: var(--text-primary);">${n.title}</strong>
                            <span style="font-size:10px; color:var(--text-secondary);">${n.time}</span>
                        </div>
                        <p style="font-size:12px; color:var(--text-secondary); margin-top:4px; line-height:1.4;">${n.body}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function markAllNotificationsRead() {
    notifications.forEach(n => n.read = true);
    updateBadges();
    renderCurrentView();
    showToast('Notifications marked as read.', 'success');
}

// 9. College Project Team HTML
function getProjectTeamHtml() {
    return `
        <div class="view active" style="padding: 8px;">
            <div class="project-team-view">
                <div class="college-logo-container">
                    <i class="ph ph-graduation-cap" style="font-size: 56px; color:var(--primary-color);"></i>
                    <h2 class="college-title">Yenepoya Institute</h2>
                    <p class="college-subtitle">DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</p>
                </div>
                
                <div style="border-bottom: 1.5px solid var(--border-color); padding-bottom: 12px; margin-bottom: 20px;">
                    <h3 style="font-size:16px; font-weight:700; color:var(--text-primary);">Project Scope & Overview</h3>
                    <p style="font-size:13px; color:var(--text-secondary); line-height:1.5; margin-top:6px;">
                        <strong>AutoKart</strong> is a state-of-the-art Single Page E-commerce platform engineered using vanilla HTML5, CSS3, and JavaScript ES6, simulating progressive web application modules. The project simulates custom local storage caching, Razorpay checkout redirection scripts, voice search recognition, and base64 image parsing.
                    </p>
                </div>

                <h3 style="font-size:15px; font-weight:800; text-transform:uppercase; color:var(--text-secondary); letter-spacing:0.5px; text-align:center;">Development Team</h3>
                <div class="team-grid">
                    ${teamMembers.map(tm => `
                        <div class="team-card">
                            <div class="team-photo-container">
                                <img src="${tm.photoUrl}" alt="${tm.name}" onerror="this.onerror=null; this.outerHTML='<i class=\x22ph ph-user-circle\x22></i>'">
                            </div>
                            <div class="team-name">${tm.name} ${tm.name.includes('Saleeth') ? '★' : ''}</div>
                            <div class="team-role">${tm.role}</div>
                            <div style="font-size:10px; font-weight:600; color:var(--text-secondary); margin-top:2px;">${tm.college}</div>
                            <p class="team-desc">${tm.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// 10. Footer HTML Utility
function getFooterHtml() {
    return `
        <footer class="footer">
            <div class="footer-wrapper">
                <div class="footer-grid">
                    <div class="footer-col">
                        <h4>About AutoKart</h4>
                        <p style="font-size: 11px; line-height: 1.5; opacity: 0.8;">
                            AutoKart is your premier automotive spares marketplace. Providing engine parts, filters, brakes, suspension systems, and garage accessories with zero friction.
                        </p>
                        <div class="social-links">
                            <a href="#"><i class="ph-fill ph-facebook-logo"></i></a>
                            <a href="#"><i class="ph-fill ph-twitter-logo"></i></a>
                            <a href="#"><i class="ph-fill ph-instagram-logo"></i></a>
                            <a href="#"><i class="ph-fill ph-linkedin-logo"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Customer Care</h4>
                        <ul>
                            <li onclick="showTermsModal('contact')">Contact Us</li>
                            <li onclick="showTermsModal('return')">Return Policy</li>
                            <li onclick="showTermsModal('shipping')">Shipping Rates</li>
                            <li onclick="navigate('profile')">Track Spares</li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Legals</h4>
                        <ul>
                            <li onclick="showTermsModal('privacy')">Privacy Policy</li>
                            <li onclick="showTermsModal('terms')">Terms & Conditions</li>
                            <li onclick="showTermsModal('refund')">Refund Scheme</li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Yenepoya Project</h4>
                        <p style="font-size: 11px; line-height: 1.4; opacity: 0.8;">
                            College Assignment Submission<br>
                            <strong>Yenepoya Institute</strong><br>
                            Leader: Mohammed Saleeth<br>
                            Team: Fahad, Niharika
                        </p>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <span>&copy; 2026 AutoKart Inc. All Rights Reserved. Designed for Yenepoya Assignment.</span>
                    <span style="cursor:pointer;" onclick="navigate('project-team')">Team Details & Contribution Log</span>
                </div>
            </div>
        </footer>
    `;
}

// --- Order Tracking Logic ---
function trackOrderTimeline(orderId) {
    const o = orders.find(x => x.orderId === orderId);
    if (!o) return;

    const steps = ['placed', 'confirmed', 'shipped', 'delivered'];
    const currentStepIndex = steps.indexOf(o.status);

    const stepLabels = {
        placed: { title: 'Order Placed', time: 'Awaiting package packaging' },
        confirmed: { title: 'Spares Packed & Confirmed', time: 'AutoKart hub processed' },
        shipped: { title: 'Handed to Delivery Logistics', time: 'En-route to Mangalore terminal' },
        delivered: { title: 'Delivered', time: 'Package signed and handed over' }
    };

    mainContent.innerHTML = `
        <div class="view active" style="padding: 16px; max-width: 600px; margin: 0 auto;">
            <div class="success-card" style="text-align:left;">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px; border-bottom:1px solid var(--border-color); padding-bottom:12px;">
                    <div class="icon-btn" onclick="navigate('profile')"><i class="ph ph-arrow-left" style="color:var(--text-primary)"></i></div>
                    <h2 style="font-size:18px; font-weight:700;">Live Order Tracking</h2>
                </div>

                <div style="background-color:var(--bg-color); padding:12px; border-radius:4px; margin-bottom:20px;">
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
                        <span>Order Reference:</span><strong>#${o.orderId}</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:12px;">
                        <span>Estimated Arrival:</span><strong style="color:var(--primary-color);">${o.estDate}</strong>
                    </div>
                </div>

                <div class="tracking-timeline">
                    ${steps.map((step, idx) => {
                        const isCompleted = idx <= currentStepIndex;
                        const isActive = idx === currentStepIndex;
                        const classes = `${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
                        return `
                            <div class="tracking-step ${classes}">
                                <div class="tracking-dot"></div>
                                <div class="tracking-label" style="color:${isActive ? 'var(--primary-color)' : 'var(--text-primary)'}">${stepLabels[step].title}</div>
                                <div class="tracking-time">${isCompleted ? (idx === 0 ? new Date(o.date).toLocaleTimeString() : 'Completed in transit') : stepLabels[step].time}</div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <button class="btn btn-secondary btn-block" style="margin-top:24px;" onclick="navigate('profile')">Back to Profile</button>
            </div>
        </div>
    `;
}

// --- Invoice Generator ---
function downloadInvoice(orderId) {
    const o = orders.find(x => x.orderId === orderId);
    if (!o) {
        showToast('Order not found.', 'error');
        return;
    }

    const paymentLabel = { upi: 'UPI App Payment', card: 'Debit/Credit Card', netbanking: 'Net Banking', cod: 'Cash on Delivery', wallet: 'Mobile Wallet' }[o.method];
    const subtotal = o.items.reduce((s, i) => s + (i.price * i.qty), 0);
    const tax = subtotal * 0.18;
    const discount = o.total - subtotal - tax; // Calculated retroactively

    const invoiceWindow = window.open('', '_blank');
    invoiceWindow.document.write(`
        <html>
        <head>
            <title>Invoice - #${o.orderId}</title>
            <style>
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                    padding: 30px;
                    border: 1px solid #eee;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                    font-size: 15px;
                    line-height: 24px;
                    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                    color: #333;
                }
                .invoice-box table { width: 100%; line-height: inherit; text-align: left; border-collapse: collapse; }
                .invoice-box table td { padding: 8px; vertical-align: top; }
                .invoice-box table tr td:nth-child(2) { text-align: right; }
                .invoice-box table tr.top table td { padding-bottom: 20px; }
                .invoice-box table tr.top table td.title { font-size: 38px; line-height: 38px; color: #2874f0; font-weight: bold; }
                .invoice-box table tr.information table td { padding-bottom: 30px; }
                .invoice-box table tr.heading td { background: #f6f8fb; border-bottom: 1px solid #ddd; font-weight: bold; font-size: 13px; }
                .invoice-box table tr.item td { border-bottom: 1px solid #eee; font-size: 13px; }
                .invoice-box table tr.total td:nth-child(2) { border-top: 2px solid #eee; font-weight: bold; }
                .invoice-footer { text-align: center; margin-top: 30px; font-size: 11px; color: #878787; border-top: 1px solid #eee; padding-top: 12px; }
                .print-btn { background: #2874f0; color: #fff; border:none; padding:8px 16px; border-radius:4px; font-weight:700; cursor:pointer; margin-bottom:12px; }
            </style>
        </head>
        <body>
            <center><button class="print-btn" onclick="window.print()">Print Invoice</button></center>
            <div class="invoice-box">
                <table>
                    <tr class="top">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td class="title">AutoKart</td>
                                    <td>
                                        Invoice #: INV-${o.orderId}<br>
                                        Date: ${new Date(o.date).toLocaleDateString()}<br>
                                        Status: Paid via ${paymentLabel}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr class="information">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td>
                                        <strong>AutoKart Marketplace</strong><br>
                                        Yenepoya Project Hub<br>
                                        Mangalore, Karnataka - 575001
                                    </td>
                                    <td>
                                        <strong>Delivery To:</strong><br>
                                        ${o.name}<br>
                                        ${o.addr}, ${o.city}<br>
                                        Pincode: ${o.pin}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr class="heading">
                        <td>Spare Part Details</td>
                        <td>Price</td>
                    </tr>
                    ${o.items.map(item => `
                        <tr class="item">
                            <td>${item.name} <strong>x${item.qty}</strong></td>
                            <td>₹${(item.price * item.qty).toLocaleString()}</td>
                        </tr>
                    `).join('')}
                    <tr class="total">
                        <td></td>
                        <td>
                           Subtotal: ₹${subtotal.toLocaleString()}<br>
                           GST (18%): ₹${Math.round(tax).toLocaleString()}<br>
                           ${discount !== 0 ? `Discount: -₹${Math.abs(Math.round(discount)).toLocaleString()}<br>` : ''}
                           <strong>Grand Total: ₹${o.total.toLocaleString()}</strong>
                        </td>
                    </tr>
                </table>
                <div class="invoice-footer">
                    Thank you for shopping at AutoKart! Project Assignment created by Yenepoya CSE Students.
                </div>
            </div>
        </body>
        </html>
    `);
    invoiceWindow.document.close();
}

// --- Cart and Wishlist Actions ---
function toggleCart(e, productId) {
    if (e) e.stopPropagation();
    const p = products.find(x => x.id === productId);
    if (!p) return;
    
    if (p.stock <= 0) {
        showToast('This spare part is currently out of stock.', 'error');
        return;
    }

    const existingIndex = cart.findIndex(x => x.id === productId);
    if (existingIndex > -1) {
        cart.splice(existingIndex, 1);
        showToast('Removed from cart.', 'warning');
    } else {
        cart.push({ ...p, qty: 1 });
        showToast('Added to cart successfully.', 'success');
    }
    
    localStorage.setItem('autokart_cart', JSON.stringify(cart));
    updateBadges();
    renderCurrentView();
}

function updateQty(productId, change) {
    const item = cart.find(x => x.id === productId);
    const prod = products.find(x => x.id === productId);
    
    if (item && prod) {
        const newQty = item.qty + change;
        if (newQty > prod.stock) {
            showToast(`Only ${prod.stock} items available in inventory.`, 'warning');
            return;
        }
        item.qty = newQty;
        if (item.qty <= 0) {
            cart = cart.filter(x => x.id !== productId);
        }
    }
    localStorage.setItem('autokart_cart', JSON.stringify(cart));
    updateBadges();
    renderCurrentView();
}

function removeFromCart(id) {
    cart = cart.filter(x => x.id !== id);
    localStorage.setItem('autokart_cart', JSON.stringify(cart));
    updateBadges();
    renderCurrentView();
    showToast('Item removed from cart.', 'warning');
}

function toggleWishlist(e, productId) {
    if (e) e.stopPropagation();
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist.', 'info');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist.', 'success');
    }
    localStorage.setItem('autokart_wishlist', JSON.stringify(wishlist));
    updateBadges();
    renderCurrentView();
}

// --- Product Modal / Gallery ---
function openProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    
    const inCart = cart.some(c => c.id === id);
    const isWished = wishlist.includes(p.id);
    const discountPercent = Math.round(((p.mrp - p.price) / p.mrp) * 100);

    let html = `
        <div class="pd-header">
            <div class="icon-btn" onclick="closeProduct()"><i class="ph ph-caret-down" style="color:var(--text-primary);"></i></div>
            <h3 style="font-size:14px; font-weight:700;">Spare Part Details</h3>
            <div class="icon-btn" onclick="toggleWishlistModal(${p.id})">
                <i class="ph ${isWished ? 'ph-heart-fill' : 'ph-heart'}" id="pd-wish-icon" style="color:${isWished ? '#ff3f6c' : 'inherit'}"></i>
            </div>
        </div>
        
        <div class="pd-image-container" onclick="openFullscreenViewer('${p.image}')" style="cursor:pointer;" title="Click to Expand">
            ${p.image.startsWith('ph-') ? `<i class="ph ${p.image}"></i>` : `<img src="${p.image}" alt="${p.name}" onerror="this.onerror=null; this.outerHTML='<i class=\x22ph ph-wrench\x22></i>'">`}
        </div>
        
        <div class="pd-info">
            <div class="pd-brand">${p.brand}</div>
            <div class="pd-title">${p.name}</div>
            
            <div class="pd-meta">
                <div class="pd-rating"><i class="ph-fill ph-star"></i> ${p.rating} <span>(${p.reviews} reviews)</span></div>
                <div class="pd-stock" style="color:${p.stock > 0 ? 'var(--success)' : 'var(--danger)'}">
                    <i class="ph ${p.stock > 0 ? 'ph-check-circle' : 'ph-x-circle'}"></i> 
                    ${p.stock > 0 ? `In Stock (Only ${p.stock} units left)` : 'Out of Stock'}
                </div>
            </div>
            
            <div class="pd-price-box">
                <div>
                    <div class="pd-price">₹${p.price.toLocaleString()}</div>
                    <div class="pd-mrp">MRP: ₹${p.mrp.toLocaleString()}</div>
                </div>
                <div style="background:var(--success); color:white; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:bold;">
                    ${discountPercent}% OFF
                </div>
            </div>
            
            <div class="pd-section-title">Specifications</div>
            <div class="pd-specs">
                <div class="spec-item"><span class="spec-label">Part Number</span><span class="spec-value">${p.partNumber}</span></div>
                <div class="spec-item"><span class="spec-label">Category</span><span class="spec-value" style="text-transform:capitalize;">${p.category}</span></div>
                <div class="spec-item"><span class="spec-label">Fitment</span><span class="spec-value">Direct Replacement</span></div>
            </div>
            
            <div class="pd-section-title">Description</div>
            <p style="color:var(--text-secondary); font-size:13px; line-height:1.5; margin-bottom:24px;">
                ${p.desc}
            </p>
            
            <div class="pd-browser-link" onclick="simulateSupplierDoc('https://en.wikipedia.org/wiki/${p.brand}')">
                <i class="ph ph-globe"></i> View Technical Fitment PDF
            </div>
        </div>
        
        <div class="pd-action-bar">
            <button class="btn btn-outline" style="flex: 1;" onclick="toggleCartModal(${p.id})" id="pd-cart-btn">
                ${inCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <button class="btn btn-primary" style="flex: 1.2;" onclick="buyNowModal(${p.id})">Buy Now</button>
        </div>
    `;
    
    productModalContent.innerHTML = html;
    productModal.classList.add('active');
}

function closeProduct() {
    productModal.classList.remove('active');
    renderCurrentView();
}

function toggleWishlistModal(id) {
    toggleWishlist(null, id);
    const isWished = wishlist.includes(id);
    const icon = document.getElementById('pd-wish-icon');
    icon.className = isWished ? 'ph ph-heart-fill' : 'ph ph-heart';
    icon.style.color = isWished ? '#ff3f6c' : 'inherit';
}

function toggleCartModal(id) {
    toggleCart(null, id);
    const inCart = cart.some(c => c.id === id);
    document.getElementById('pd-cart-btn').innerText = inCart ? 'Added to Cart' : 'Add to Cart';
}

function buyNowModal(productId) {
    const p = products.find(x => x.id === productId);
    if (!p) return;
    
    if (p.stock <= 0) {
        showToast('This spare part is out of stock.', 'error');
        return;
    }

    if (!cart.some(x => x.id === productId)) {
        cart.push({ ...p, qty: 1 });
        localStorage.setItem('autokart_cart', JSON.stringify(cart));
        updateBadges();
    }
    
    closeProduct();
    navigate('checkout');
}

// --- Fullscreen Image Viewer Modal ---
function openFullscreenViewer(imageSrc) {
    activeImageGallery = [imageSrc];
    activeImageIndex = 0;
    ivImage.src = imageSrc;
    ivCounter.innerText = '1 / 1';
    imageViewer.classList.remove('hidden');
}

function closeImageViewer() {
    imageViewer.classList.add('hidden');
}

function prevImage() {
    // Single image mock placeholder
}

function nextImage() {
    // Single image mock placeholder
}

// --- Browser Simulation Module ---
function simulateSupplierDoc(url) {
    const browserModal = document.getElementById('browser-modal');
    const iframe = document.getElementById('browser-frame');
    const address = document.getElementById('browser-url-text');
    
    address.innerText = url;
    iframe.src = url;
    browserModal.classList.add('active');
}

function closeBrowser() {
    document.getElementById('browser-modal').classList.remove('active');
}

// --- Legal/Terms Modal Simulation ---
function showTermsModal(type) {
    const titles = {
        contact: 'Contact Us - AutoKart Support',
        return: 'Return & Exchange Scheme',
        shipping: 'Automobile Shipping Details',
        privacy: 'Privacy & Cookies Charter',
        terms: 'Terms of Service',
        refund: 'Escrow & Refund Process'
    };
    
    const text = {
        contact: 'Email: support@autokart.com | Toll-Free Support: 1800-450-990 | Location: AutoKart Plaza, Mangalore.',
        return: 'Auto parts can be returned within 10 days of delivery. Parts must be in original packings and unused state.',
        shipping: 'Estimated standard delivery is 3 working days. Express priority logistics to Mangalore and Udupi within 24 hours.',
        privacy: 'We respect your data. Your car fitment logs and payment telemetry are fully encrypted and never sold to third parties.',
        terms: 'By utilizing AutoKart, you agree to buy genuine parts conforming to OES guidelines. Project compiled for evaluation.',
        refund: 'Failed payments are auto-credited back to original source UPI or Cards within 2 business banking days.'
    };

    alert(`*** ${titles[type]} ***\n\n${text[type]}\n\n(Yenepoya College Project Demonstration)`);
}

// --- Banner Carousel Autoplay ---
let carouselInterval = null;
function setupCarousel() {
    const track = document.getElementById('home-carousel');
    const indicators = document.getElementById('carousel-indicators');
    if (!track || !indicators) return;
    
    const indicatorsList = indicators.children;
    let currentIndex = 0;
    
    if (carouselInterval) clearInterval(carouselInterval);
    
    carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % banners.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        Array.from(indicatorsList).forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
        });
    }, 4000);
}

// ============================================================
// ADMIN DASHBOARD CONTROLLER (CRUD, STATS, REPORTS)
// ============================================================

function getAdminHtml() {
    return `
        <div class="view active" style="padding: 16px;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                <div class="icon-btn" onclick="navigate('profile')"><i class="ph ph-arrow-left" style="color:var(--text-primary)"></i></div>
                <h2 style="font-size:18px; font-weight:700;">Admin Dashboard</h2>
            </div>

            <!-- Stats Grid -->
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <h3 id="stat-revenue">₹0</h3>
                    <p>Total Revenue</p>
                </div>
                <div class="dashboard-card">
                    <h3 id="stat-orders">0</h3>
                    <p>Total Orders</p>
                </div>
                <div class="dashboard-card">
                    <h3 id="stat-users">1,450</h3>
                    <p>Customers</p>
                </div>
                <div class="dashboard-card">
                    <h3 id="stat-products">${products.length}</h3>
                    <p>Active Spares</p>
                </div>
            </div>

            <!-- Sales reports chart -->
            <div class="cart-summary" style="margin: 16px 0; padding:16px;">
                <div class="summary-title" style="font-size:12px;">Sales By Parts Category</div>
                <div class="chart-bar-container" id="admin-chart">
                    <!-- Dynamic Bars injected -->
                </div>
            </div>

            <!-- Tabs selector for Admin Panels -->
            <div class="search-filters" style="border-bottom:none; margin:16px 0 0; padding:0;">
                <div class="filter-chip active" id="btn-adm-spares" onclick="toggleAdminTab('spares')">Manage Catalog</div>
                <div class="filter-chip" id="btn-adm-orders" onclick="toggleAdminTab('orders')">Manage Orders</div>
                <div class="filter-chip" id="btn-adm-lowstock" onclick="toggleAdminTab('inventory')">Low Inventory</div>
            </div>

            <!-- Tab 1: Products CRUD Panel -->
            <div id="admin-spares-panel" style="margin-top:12px;">
                <button class="btn btn-secondary btn-block btn-sm" onclick="showAddProductForm(true)">
                    <i class="ph ph-plus"></i> Add New Automobile Spare Part
                </button>
                
                <!-- Add/Edit Product Form (Hidden by default) -->
                <div id="product-crud-form" class="cart-summary" style="margin:12px 0; display:none; padding:16px; border:1.5px dashed var(--primary-color);">
                    <h3 id="form-crud-title" style="font-size:14px; font-weight:700; margin-bottom:12px;">Add Spare Part</h3>
                    <input type="hidden" id="crud-id">
                    
                    <div class="form-group"><label>Product Name</label><input type="text" class="form-control" id="crud-name" placeholder="e.g. Brembo Brake Pad"></div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                        <div class="form-group"><label>Brand</label><input type="text" class="form-control" id="crud-brand" placeholder="e.g. Brembo"></div>
                        <div class="form-group">
                            <label>Category</label>
                            <select class="form-control" id="crud-category">
                                ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
                        <div class="form-group"><label>Price (₹)</label><input type="number" class="form-control" id="crud-price"></div>
                        <div class="form-group"><label>MRP (₹)</label><input type="number" class="form-control" id="crud-mrp"></div>
                        <div class="form-group"><label>Stock Level</label><input type="number" class="form-control" id="crud-stock"></div>
                    </div>
                    <div class="form-group"><label>SKU / Part Number</label><input type="text" class="form-control" id="crud-part" placeholder="BR-9921"></div>
                    <div class="form-group"><label>Description</label><textarea class="form-control" id="crud-desc" style="height:60px;" placeholder="Spares specifications..."></textarea></div>
                    
                    <!-- Base64 Photo Upload Zone -->
                    <div class="form-group">
                        <label>Product Image Upload</label>
                        <div class="image-upload-zone" onclick="triggerFileInput()">
                            <i class="ph ph-camera" style="font-size:28px; color:var(--text-secondary);"></i>
                            <div style="font-size:12px; font-weight:600; margin-top:4px;">Upload Spares Photo</div>
                            <span style="font-size:10px; color:var(--text-secondary);">Supports PNG, JPG (Auto-converts)</span>
                            <input type="file" id="crud-file-input" style="display:none;" accept="image/*" onchange="handleAdminPhotoUpload(event)">
                        </div>
                        <div class="image-upload-preview" id="crud-upload-preview"></div>
                    </div>

                    <div style="display:flex; gap:10px; margin-top:16px;">
                        <button class="btn btn-secondary btn-sm" onclick="saveProductCrud()">Save Product</button>
                        <button class="btn btn-outline btn-sm" onclick="showAddProductForm(false)">Cancel</button>
                    </div>
                </div>

                <div class="data-table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${products.map(p => `
                                <tr>
                                    <td>
                                        <strong>${p.name}</strong><br>
                                        <span style="font-size:10px; color:var(--text-secondary); text-transform:uppercase;">${p.brand} | ${p.partNumber}</span>
                                    </td>
                                    <td>₹${p.price.toLocaleString()}</td>
                                    <td class="bold" style="color:${p.stock > 5 ? 'var(--success)' : p.stock > 0 ? 'var(--warning)' : 'var(--danger)'}">${p.stock}</td>
                                    <td>
                                        <div class="data-table-actions">
                                            <button style="background:rgba(40,116,240,0.1); color:var(--primary-color);" onclick="editProductCrud(${p.id})">Edit</button>
                                            <button style="background:rgba(211,47,47,0.1); color:var(--danger);" onclick="deleteProductCrud(${p.id})">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Tab 2: Orders Panel -->
            <div id="admin-orders-panel" style="display:none; margin-top:12px;">
                <div class="data-table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${orders.map(o => `
                                <tr>
                                    <td>
                                        <strong>#${o.orderId}</strong><br>
                                        <span style="font-size:10px; color:var(--text-secondary);">${o.name}</span>
                                    </td>
                                    <td>₹${o.total.toLocaleString()}</td>
                                    <td>
                                        <span class="badge-status ${o.status}">${o.status}</span>
                                    </td>
                                    <td>
                                        <select class="form-control" style="padding:4px; font-size:11px; width:auto;" onchange="updateAdminOrderStatus('${o.orderId}', this.value)">
                                            <option value="placed" ${o.status === 'placed' ? 'selected' : ''}>Placed</option>
                                            <option value="confirmed" ${o.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                                            <option value="shipped" ${o.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                                            <option value="delivered" ${o.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                                            <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                                        </select>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Tab 3: Low Inventory Alerts -->
            <div id="admin-inventory-panel" style="display:none; margin-top:12px;">
                <div class="data-table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Part Name</th>
                                <th>SKU</th>
                                <th>In Stock</th>
                                <th>Quick Restock</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${products.filter(p => p.stock <= 5).map(p => `
                                <tr>
                                    <td><strong>${p.name}</strong></td>
                                    <td><code>${p.partNumber}</code></td>
                                    <td class="bold" style="color:var(--danger);">${p.stock}</td>
                                    <td>
                                        <button class="btn btn-secondary btn-sm" style="padding:4px 8px; font-size:10px;" onclick="quickRestockProduct(${p.id})">Restock +20</button>
                                    </td>
                                </tr>
                            `).join('')}
                            ${products.filter(p => p.stock <= 5).length === 0 ? `<tr><td colspan="4" style="text-align:center;">All products have healthy inventory levels!</td></tr>` : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// --- Admin Initialization ---
function initAdminDashboard() {
    // Calculate total stats
    const totalRev = orders.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + o.total, 0);
    document.getElementById('stat-revenue').innerText = '₹' + totalRev.toLocaleString();
    document.getElementById('stat-orders').innerText = orders.length;

    // Render bar charts using CSS percentages
    // Dynamic calculation: parts categories distribution
    const chartData = {};
    categories.forEach(c => {
        chartData[c.id] = 0;
    });

    // Populate data based on orders
    orders.forEach(o => {
        if (o.status !== 'cancelled') {
            o.items.forEach(item => {
                const prod = products.find(p => p.id === item.id);
                if (prod && chartData[prod.category] !== undefined) {
                    chartData[prod.category] += (item.price * item.qty);
                }
            });
        }
    });

    const maxVal = Math.max(...Object.values(chartData), 1000); // Prevent divide by zero
    const chartContainer = document.getElementById('admin-chart');
    
    // Choose 6 main categories to show in report
    const reportCategories = ['engine', 'brakes', 'suspension', 'electrical', 'battery', 'filters'];
    
    chartContainer.innerHTML = reportCategories.map(cat => {
        const val = chartData[cat] || 0;
        const heightPct = Math.min(100, Math.max(5, (val / maxVal) * 100));
        const catObj = categories.find(c => c.id === cat);
        return `
            <div class="chart-bar-wrap" title="₹${val.toLocaleString()}">
                <div class="chart-bar" style="height: ${heightPct}px;"></div>
                <div class="chart-label">${catObj ? catObj.name.split(' ')[0] : cat}</div>
            </div>
        `;
    }).join('');
}

function toggleAdminTab(tabName) {
    document.getElementById('btn-adm-spares').classList.toggle('active', tabName === 'spares');
    document.getElementById('btn-adm-orders').classList.toggle('active', tabName === 'orders');
    document.getElementById('btn-adm-lowstock').classList.toggle('active', tabName === 'inventory');

    document.getElementById('admin-spares-panel').style.display = tabName === 'spares' ? 'block' : 'none';
    document.getElementById('admin-orders-panel').style.display = tabName === 'orders' ? 'block' : 'none';
    document.getElementById('admin-inventory-panel').style.display = tabName === 'inventory' ? 'block' : 'none';
}

function showAddProductForm(show) {
    document.getElementById('product-crud-form').style.display = show ? 'block' : 'none';
    // Clear form inputs
    if (show) {
        document.getElementById('crud-id').value = '';
        document.getElementById('crud-name').value = '';
        document.getElementById('crud-brand').value = '';
        document.getElementById('crud-category').value = 'engine';
        document.getElementById('crud-price').value = '';
        document.getElementById('crud-mrp').value = '';
        document.getElementById('crud-stock').value = '';
        document.getElementById('crud-part').value = '';
        document.getElementById('crud-desc').value = '';
        document.getElementById('crud-upload-preview').innerHTML = '';
        document.getElementById('form-crud-title').innerText = 'Add Spare Part';
    }
}

// CRUD Save Function (Create / Update)
let base64UploadedImage = '';
function triggerFileInput() {
    document.getElementById('crud-file-input').click();
}

function handleAdminPhotoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        base64UploadedImage = e.target.result;
        const preview = document.getElementById('crud-upload-preview');
        preview.innerHTML = `
            <div class="preview-img-container">
                <img src="${base64UploadedImage}" alt="Uploaded Part">
                <div class="preview-img-remove" onclick="removeUploadedImage()">x</div>
            </div>
        `;
    };
    reader.readAsDataURL(file);
}

function removeUploadedImage() {
    base64UploadedImage = '';
    document.getElementById('crud-upload-preview').innerHTML = '';
}

function saveProductCrud() {
    const id = document.getElementById('crud-id').value;
    const name = document.getElementById('crud-name').value.trim();
    const brand = document.getElementById('crud-brand').value.trim();
    const category = document.getElementById('crud-category').value;
    const price = parseInt(document.getElementById('crud-price').value);
    const mrp = parseInt(document.getElementById('crud-mrp').value);
    const stock = parseInt(document.getElementById('crud-stock').value);
    const partNumber = document.getElementById('crud-part').value.trim();
    const desc = document.getElementById('crud-desc').value.trim();

    if (!name || !brand || isNaN(price) || isNaN(mrp) || isNaN(stock) || !partNumber) {
        showToast('Please fill all mandatory spare part fields.', 'warning');
        return;
    }

    if (id === '') {
        // Create Mode
        const newProduct = {
            id: Date.now(),
            name,
            brand,
            category,
            price,
            mrp,
            stock,
            partNumber,
            desc: desc || 'Direct fit replacement auto part.',
            image: base64UploadedImage || 'ph-wrench',
            rating: 5.0,
            reviews: 1
        };
        products.push(newProduct);
        showToast('Spare part created successfully!', 'success');
    } else {
        // Edit Mode
        const prodId = parseInt(id);
        const prod = products.find(p => p.id === prodId);
        if (prod) {
            prod.name = name;
            prod.brand = brand;
            prod.category = category;
            prod.price = price;
            prod.mrp = mrp;
            prod.stock = stock;
            prod.partNumber = partNumber;
            prod.desc = desc;
            if (base64UploadedImage !== '') {
                prod.image = base64UploadedImage;
            }
        }
        showToast('Spare part details updated.', 'success');
    }

    localStorage.setItem('autokart_products', JSON.stringify(products));
    base64UploadedImage = '';
    showAddProductForm(false);
    renderCurrentView();
}

function editProductCrud(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    showAddProductForm(true);
    document.getElementById('form-crud-title').innerText = 'Edit Spare Part Details';
    document.getElementById('crud-id').value = p.id;
    document.getElementById('crud-name').value = p.name;
    document.getElementById('crud-brand').value = p.brand;
    document.getElementById('crud-category').value = p.category;
    document.getElementById('crud-price').value = p.price;
    document.getElementById('crud-mrp').value = p.mrp;
    document.getElementById('crud-stock').value = p.stock;
    document.getElementById('crud-part').value = p.partNumber;
    document.getElementById('crud-desc').value = p.desc;
    
    if (!p.image.startsWith('ph-')) {
        const preview = document.getElementById('crud-upload-preview');
        preview.innerHTML = `
            <div class="preview-img-container">
                <img src="${p.image}" alt="Uploaded Part">
                <div class="preview-img-remove" onclick="removeUploadedImage()">x</div>
            </div>
        `;
    }
}

function deleteProductCrud(id) {
    if (confirm('Are you sure you want to remove this spare part from inventory?')) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('autokart_products', JSON.stringify(products));
        renderCurrentView();
        showToast('Product deleted.', 'warning');
    }
}

function updateAdminOrderStatus(orderId, newStatus) {
    const o = orders.find(x => x.orderId === orderId);
    if (o) {
        o.status = newStatus;
        localStorage.setItem('autokart_orders', JSON.stringify(orders));
        showToast(`Order status updated to: "${newStatus}"`, 'success');
        
        // Add user notification simulation
        notifications.unshift({
            id: Date.now(),
            title: `Order #${orderId} Updated`,
            body: `Your spare parts package has transitioned to status: ${newStatus.toUpperCase()}`,
            time: 'Just now',
            type: 'info',
            read: false
        });
        updateBadges();
        
        renderCurrentView();
        toggleAdminTab('orders');
    }
}

function quickRestockProduct(id) {
    const p = products.find(x => x.id === id);
    if (p) {
        p.stock += 20;
        localStorage.setItem('autokart_products', JSON.stringify(products));
        renderCurrentView();
        toggleAdminTab('inventory');
        showToast(`Restocked 20 units for ${p.name}.`, 'success');
    }
}

// Start application
init();
