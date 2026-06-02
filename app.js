// --- Data Models (Mock DB) ---
const categories = [
    { id: 'engine', name: 'Engine Parts', icon: 'ph-engine' },
    { id: 'brakes', name: 'Brakes', icon: 'ph-disc' },
    { id: 'electrical', name: 'Electricals', icon: 'ph-lightning' },
    { id: 'body', name: 'Body Parts', icon: 'ph-car' },
    { id: 'suspension', name: 'Suspension', icon: 'ph-arrows-down-up' },
    { id: 'accessories', name: 'Accessories', icon: 'ph-headlights' }
];

const products = [
    { id: 1, name: 'Brembo Ceramic Brake Pads', brand: 'Brembo', category: 'brakes', price: 3499, mrp: 4500, rating: 4.8, reviews: 124, stock: 15, image: 'https://loremflickr.com/400/400/car,brakes,pad?lock=1', partNumber: 'BR-9921', desc: 'Premium ceramic brake pads for high performance and low dust.' },
    { id: 2, name: 'Castrol EDGE 5W-40 Synthetic Oil', brand: 'Castrol', category: 'engine', price: 2199, mrp: 2800, rating: 4.9, reviews: 450, stock: 50, image: 'https://loremflickr.com/400/400/engine,oil?lock=2', partNumber: 'CS-EDGE-5W40', desc: 'Advanced full synthetic engine oil providing superior performance.' },
    { id: 3, name: 'NGK Iridium IX Spark Plug Set', brand: 'NGK', category: 'electrical', price: 1800, mrp: 2200, rating: 4.7, reviews: 310, stock: 25, image: 'https://loremflickr.com/400/400/sparkplug?lock=3', partNumber: 'NGK-IR-4', desc: 'Extreme ignitability, improved throttle response and superior anti-fouling.' },
    { id: 4, name: 'Monroe OESpectrum Strut', brand: 'Monroe', category: 'suspension', price: 4200, mrp: 5100, rating: 4.6, reviews: 89, stock: 8, image: 'https://loremflickr.com/400/400/car,suspension?lock=4', partNumber: 'MN-723', desc: 'Engineered for superior ride quality and control.' },
    { id: 5, name: 'Bosch Clear Advantage Wiper Blades', brand: 'Bosch', category: 'body', price: 650, mrp: 850, rating: 4.5, reviews: 520, stock: 100, image: 'https://loremflickr.com/400/400/windshield,wiper?lock=5', partNumber: 'BS-CL-21', desc: 'All-weather performance and smooth, quiet wiping.' },
    { id: 6, name: 'K&N High Performance Air Filter', brand: 'K&N', category: 'engine', price: 3100, mrp: 3800, rating: 4.8, reviews: 215, stock: 12, image: 'https://loremflickr.com/400/400/car,parts,engine?lock=6', partNumber: 'KN-33-22', desc: 'Designed to increase horsepower and acceleration.' },
];

const banners = [
    { title: 'Summer Sale', desc: 'Up to 40% off on AC components.', color: 'red', btn: 'Shop Now' },
    { title: 'Brembo Official', desc: 'New performance kits arrived.', color: 'blue', btn: 'View Range' },
    { title: 'Free Delivery', desc: 'On orders above ₹5,000.', color: 'green', btn: 'Explore' }
];

// --- App State ---
let currentView = 'home';
let cart = [];
let wishlist = [];
let isDarkMode = false;
let mapInstance = null;

// DOM Elements
const mainContent = document.getElementById('main-content');
const cartBadge = document.getElementById('cart-badge');
const globalSearchContainer = document.getElementById('global-search-container');
const themeIcon = document.getElementById('theme-icon');
const productModal = document.getElementById('product-modal');
const productModalContent = document.getElementById('product-modal-content');
const browserModal = document.getElementById('browser-modal');
const browserFrame = document.getElementById('browser-frame');
const browserUrlText = document.getElementById('browser-url-text');

// --- Initialization ---
function init() {
    // Check theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
    
    navigate('home');
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    themeIcon.className = isDarkMode ? 'ph ph-sun' : 'ph ph-moon';
}

function navigate(viewId) {
    currentView = viewId;
    
    // Update bottom nav active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick').includes(`'${viewId}'`)) {
            item.classList.add('active');
        }
    });

    // Toggle search bar visibility
    if (viewId === 'home' || viewId === 'categories') {
        globalSearchContainer.style.display = 'block';
    } else {
        globalSearchContainer.style.display = 'none';
    }

    mainContent.scrollTop = 0;
    renderCurrentView();
}

// --- Render Logic ---
function renderCurrentView() {
    let html = '';
    
    switch(currentView) {
        case 'home': html = getHomeHtml(); break;
        case 'search': html = getSearchHtml(); break;
        case 'categories': html = getCategoriesHtml(); break;
        case 'cart': html = getCartHtml(); break;
        case 'seller': html = getSellerHtml(); break;
        case 'admin': html = getAdminHtml(); break;
        case 'profile': html = getProfileHtml(); break;
        default: html = getHomeHtml();
    }
    
    mainContent.innerHTML = html;
    
    // Post render actions
    if (currentView === 'home') setupCarousel();
    if (currentView === 'search') document.getElementById('search-input').focus();
}

// --- View HTML Generators ---

function getHomeHtml() {
    let html = `
        <div class="view active">
            <!-- Banner Carousel -->
            <div class="carousel-container">
                <div class="carousel-track" id="home-carousel">
                    ${banners.map(b => `
                        <div class="carousel-slide">
                            <div class="banner ${b.color}">
                                <h2>${b.title}</h2>
                                <p>${b.desc}</p>
                                <button class="btn">${b.btn}</button>
                                <i class="ph ph-engine banner-bg-icon"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="carousel-indicators" id="carousel-indicators">
                    ${banners.map((_, i) => `<div class="indicator ${i===0?'active':''}"></div>`).join('')}
                </div>
            </div>

            <!-- Quick Categories -->
            <div class="section-header">
                <span class="section-title">Shop by Category</span>
                <span class="see-all" onclick="navigate('categories')">See All</span>
            </div>
            <div class="quick-categories">
                ${categories.map(c => `
                    <div class="quick-cat" onclick="openSearchFilter('${c.id}')">
                        <div class="quick-cat-icon"><i class="ph ${c.icon}"></i></div>
                        <span>${c.name.split(' ')[0]}</span>
                    </div>
                `).join('')}
            </div>

            <!-- Trending / Best Sellers -->
            <div class="section-header">
                <span class="section-title">Trending Parts</span>
                <span class="see-all">See All</span>
            </div>
            <div class="product-h-list">
                ${products.map(p => getProductCardHtml(p)).join('')}
            </div>
            
            <!-- New Arrivals -->
            <div class="section-header">
                <span class="section-title">New Arrivals</span>
            </div>
            <div class="product-h-list">
                ${[...products].reverse().map(p => getProductCardHtml(p)).join('')}
            </div>
            
            <div style="height: 24px;"></div>
        </div>
    `;
    return html;
}

function getProductCardHtml(p) {
    const isWished = wishlist.includes(p.id);
    const inCart = cart.some(c => c.id === p.id);
    return `
        <div class="product-card-v" onclick="openProduct(${p.id})">
            <button class="wishlist-btn ${isWished ? 'active' : ''}" onclick="toggleWishlist(event, ${p.id})">
                <i class="ph ${isWished ? 'ph-heart-fill' : 'ph-heart'}"></i>
            </button>
            <div class="img-container">
                ${p.image.startsWith('ph-') ? `<i class="ph ${p.image}"></i>` : `<img src="${p.image}" alt="${p.name}" class="product-photo">`}
            </div>
            <div class="brand">${p.brand}</div>
            <div class="title">${p.name}</div>
            <div class="rating"><i class="ph-fill ph-star"></i> ${p.rating} (${p.reviews})</div>
            <div class="price-row">
                <div class="price">₹${p.price.toLocaleString()}</div>
                <button class="add-to-cart-sm ${inCart ? 'added' : ''}" onclick="toggleCart(event, ${p.id})">
                    <i class="ph ${inCart ? 'ph-check' : 'ph-plus'}"></i>
                </button>
            </div>
        </div>
    `;
}

function getSearchHtml() {
    return `
        <div class="view active" style="padding-top: 16px;">
            <div class="search-bar-container">
                <div class="search-bar" style="border-color: var(--primary-color);">
                    <i class="ph ph-magnifying-glass"></i>
                    <input type="text" id="search-input" placeholder="Search by vehicle, part number..." oninput="handleSearch()">
                    <i class="ph ph-sliders"></i>
                </div>
            </div>
            
            <div class="search-filters">
                <div class="filter-chip active">All Results</div>
                <div class="filter-chip">Engine</div>
                <div class="filter-chip">Brakes</div>
                <div class="filter-chip">Suspension</div>
            </div>
            
            <div class="search-results-grid" id="search-results">
                ${products.map(p => getProductCardHtml(p)).join('')}
            </div>
        </div>
    `;
}

function handleSearch() {
    const q = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) || 
        p.partNumber.toLowerCase().includes(q)
    );
    
    document.getElementById('search-results').innerHTML = filtered.length ? 
        filtered.map(p => getProductCardHtml(p)).join('') : 
        `<div style="grid-column: 1/-1;" class="empty-state">
            <i class="ph ph-magnifying-glass"></i>
            <h3>No results found</h3>
            <p>Try searching for a different part or model.</p>
        </div>`;
}

function openSearchFilter(catId) {
    navigate('search');
    setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if(searchInput) {
            searchInput.value = catId;
            handleSearch();
        }
    }, 10);
}

function getCategoriesHtml() {
    return `
        <div class="view active">
            <h2 class="section-title" style="margin-top: 16px;">All Categories</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 16px;">
                ${categories.map(c => `
                    <div class="dashboard-card" style="margin:0; display:flex; flex-direction:column; align-items:center; cursor:pointer;" onclick="navigate('search')">
                        <div style="font-size: 48px; color: var(--accent-color); margin-bottom: 12px;"><i class="ph ${c.icon}"></i></div>
                        <h4 style="font-size:14px;">${c.name}</h4>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function getCartHtml() {
    if (cart.length === 0) {
        return `
            <div class="view active empty-state">
                <i class="ph ph-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added any premium parts yet.</p>
                <button class="btn" style="margin-top: 24px;" onclick="navigate('home')">Start Shopping</button>
            </div>
        `;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.18; // 18% GST mock
    const total = subtotal + tax;

    return `
        <div class="view active">
            <h2 class="section-title">Your Cart</h2>
            <div class="cart-list">
                ${cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-img">
                            ${item.image.startsWith('ph-') ? `<i class="ph ${item.image}"></i>` : `<img src="${item.image}" alt="${item.name}" class="product-photo">`}
                        </div>
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-actions">
                                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                                <div class="qty-ctrl">
                                    <button onclick="updateQty(${item.id}, -1)">-</button>
                                    <span>${item.qty}</span>
                                    <button onclick="updateQty(${item.id}, 1)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Subtotal</span>
                    <span>₹${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div class="summary-row">
                    <span>GST (18%)</span>
                    <span>₹${tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery</span>
                    <span style="color: var(--success);">Free</span>
                </div>
                <div class="summary-row total">
                    <span>Total Amount</span>
                    <span>₹${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                
                <button class="btn btn-block" style="margin-top: 20px;">Proceed to Checkout</button>
            </div>
        </div>
    `;
}

function getSellerHtml() {
    return `
        <div class="view active">
            <div class="dashboard-card">
                <h2>Seller Dashboard</h2>
                <p style="color: var(--text-secondary); font-size: 13px;">Manage your premium catalog.</p>
                
                <div class="stat-grid">
                    <div class="stat-box">
                        <h3>12</h3>
                        <p>Active Listings</p>
                    </div>
                    <div class="stat-box">
                        <h3>48</h3>
                        <p>Orders this week</p>
                    </div>
                </div>
                
                <button class="btn btn-block btn-outline" style="margin-top: 24px;">
                    <i class="ph ph-plus"></i> Add New Product
                </button>
            </div>
        </div>
    `;
}

function getAdminHtml() {
    return `
        <div class="view active">
            <div class="dashboard-card" style="border-top: 4px solid var(--primary-color);">
                <h2>Admin Control Panel</h2>
                <p style="color: var(--text-secondary); font-size: 13px;">Platform analytics and management.</p>
                
                <div class="stat-grid">
                    <div class="stat-box">
                        <h3>₹2.4M</h3>
                        <p>Revenue (MTD)</p>
                    </div>
                    <div class="stat-box">
                        <h3>1.2k</h3>
                        <p>Active Users</p>
                    </div>
                    <div class="stat-box">
                        <h3>84</h3>
                        <p>Verified Sellers</p>
                    </div>
                    <div class="stat-box">
                        <h3 style="color: var(--warning);">12</h3>
                        <p>Pending Tickets</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getProfileHtml() {
    return `
        <div class="view active">
            <div class="dashboard-card" style="display:flex; align-items:center; gap:16px;">
                <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--primary-color); display:flex; justify-content:center; align-items:center; color:white; font-size: 24px;">
                    <i class="ph ph-user"></i>
                </div>
                <div>
                    <h2 style="font-size:18px;">Demo User</h2>
                    <p style="color:var(--text-secondary); font-size:13px;">demo@autokart.com</p>
                </div>
            </div>
            
            <div style="padding: 0 16px;">
                <div style="background: var(--surface-color); border-radius: var(--radius-md); overflow:hidden; box-shadow: var(--shadow-sm);">
                    <div style="padding: 16px; border-bottom: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                        <span style="font-weight:600;"><i class="ph ph-package" style="margin-right:8px; font-size:18px; vertical-align:middle;"></i> My Orders</span>
                        <i class="ph ph-caret-right text-secondary"></i>
                    </div>
                    <div style="padding: 16px; border-bottom: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                        <span style="font-weight:600;"><i class="ph ph-heart" style="margin-right:8px; font-size:18px; vertical-align:middle;"></i> Wishlist</span>
                        <i class="ph ph-caret-right text-secondary"></i>
                    </div>
                    <div style="padding: 16px; border-bottom: 1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                        <span style="font-weight:600;"><i class="ph ph-map-pin" style="margin-right:8px; font-size:18px; vertical-align:middle;"></i> Saved Addresses</span>
                        <i class="ph ph-caret-right text-secondary"></i>
                    </div>
                    <div style="padding: 16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; color: var(--danger);">
                        <span style="font-weight:600;"><i class="ph ph-sign-out" style="margin-right:8px; font-size:18px; vertical-align:middle;"></i> Logout</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- Action Logic ---

function toggleCart(e, productId) {
    e.stopPropagation();
    const p = products.find(x => x.id === productId);
    const existing = cart.find(x => x.id === productId);
    
    if (existing) {
        cart = cart.filter(x => x.id !== productId);
    } else {
        cart.push({...p, qty: 1});
    }
    
    updateBadges();
    if (currentView === 'home' || currentView === 'search') renderCurrentView();
}

function updateQty(productId, change) {
    const item = cart.find(x => x.id === productId);
    if(item) {
        item.qty += change;
        if(item.qty <= 0) cart = cart.filter(x => x.id !== productId);
    }
    updateBadges();
    renderCurrentView();
}

function toggleWishlist(e, productId) {
    e.stopPropagation();
    if(wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }
    if (currentView === 'home' || currentView === 'search') renderCurrentView();
}

function updateBadges() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    if(count > 0) {
        cartBadge.innerText = count;
        cartBadge.classList.remove('hidden');
    } else {
        cartBadge.classList.add('hidden');
    }
}

// --- Product Modal Logic ---
function openProduct(id) {
    const p = products.find(x => x.id === id);
    if(!p) return;
    
    const inCart = cart.some(c => c.id === id);
    
    let html = `
        <div class="pd-header">
            <div class="icon-btn" onclick="closeProduct()"><i class="ph ph-caret-down"></i></div>
            <div class="icon-btn" onclick="toggleWishlistModal(${p.id})"><i class="ph ph-heart${wishlist.includes(p.id)?'-fill':''}" id="pd-wish-icon" style="color:${wishlist.includes(p.id)?'var(--primary-color)':'inherit'}"></i></div>
        </div>
        
        <div class="pd-image-container">
            ${p.image.startsWith('ph-') ? `<i class="ph ${p.image}"></i>` : `<img src="${p.image}" alt="${p.name}" class="product-photo-large">`}
        </div>
        
        <div class="pd-info">
            <div class="pd-brand">${p.brand}</div>
            <div class="pd-title">${p.name}</div>
            
            <div class="pd-meta">
                <div class="pd-rating"><i class="ph-fill ph-star"></i> ${p.rating} <span>(${p.reviews} reviews)</span></div>
                <div class="pd-stock"><i class="ph-fill ph-check-circle"></i> In Stock</div>
            </div>
            
            <div class="pd-price-box">
                <div>
                    <div class="pd-price">₹${p.price.toLocaleString()}</div>
                    <div class="pd-mrp">MRP: ₹${p.mrp.toLocaleString()}</div>
                </div>
                <div style="background:var(--primary-color); color:white; padding:4px 8px; border-radius:4px; font-size:12px; font-weight:bold;">
                    ${Math.round(((p.mrp - p.price)/p.mrp)*100)}% OFF
                </div>
            </div>
            
            <div class="pd-section-title">Specifications</div>
            <div class="pd-specs">
                <div class="spec-item">
                    <span class="spec-label">Part Number</span>
                    <span class="spec-value">${p.partNumber}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Category</span>
                    <span class="spec-value" style="text-transform:capitalize;">${p.category}</span>
                </div>
            </div>
            
            <div class="pd-section-title">Description</div>
            <p style="color:var(--text-secondary); font-size:14px; line-height:1.5; margin-bottom:24px;">
                ${p.desc}
            </p>
            
            <div class="pd-browser-link" onclick="openBrowser('https://en.wikipedia.org/wiki/${p.brand}')">
                <i class="ph ph-globe"></i> View Official Supplier Documentation
            </div>
        </div>
        
        <div class="pd-action-bar">
            <button class="btn btn-outline" style="flex: 0.8;" onclick="toggleCartModal(${p.id})" id="pd-cart-btn">
                ${inCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <button class="btn" style="flex: 1.2;">Buy Now</button>
        </div>
    `;
    
    productModalContent.innerHTML = html;
    productModal.classList.add('active');
}

function closeProduct() {
    productModal.classList.remove('active');
    renderCurrentView(); // Refresh underlying view
}

function toggleWishlistModal(id) {
    if(wishlist.includes(id)) {
        wishlist = wishlist.filter(x => x !== id);
        document.getElementById('pd-wish-icon').className = 'ph ph-heart';
        document.getElementById('pd-wish-icon').style.color = 'inherit';
    } else {
        wishlist.push(id);
        document.getElementById('pd-wish-icon').className = 'ph ph-heart-fill';
        document.getElementById('pd-wish-icon').style.color = 'var(--primary-color)';
    }
}

function toggleCartModal(id) {
    const btn = document.getElementById('pd-cart-btn');
    if (cart.some(x => x.id === id)) {
        cart = cart.filter(x => x.id !== id);
        btn.innerText = 'Add to Cart';
    } else {
        const p = products.find(x => x.id === id);
        cart.push({...p, qty: 1});
        btn.innerText = 'Added to Cart';
    }
    updateBadges();
}

// --- Browser WebView Logic ---
function openBrowser(url) {
    browserUrlText.innerText = new URL(url).hostname;
    browserFrame.src = url;
    browserModal.classList.add('active');
}
function closeBrowser() {
    browserModal.classList.remove('active');
    setTimeout(() => { browserFrame.src = 'about:blank'; }, 300);
}

// --- UI Utilities ---
function setupCarousel() {
    const track = document.getElementById('home-carousel');
    const indicators = document.getElementById('carousel-indicators').children;
    if(!track) return;
    
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % banners.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        Array.from(indicators).forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
        });
    }, 4000);
}

// Initialize App
init();
