// India's Heritage Website JavaScript - Fixed Version
let map;
let currentState = null;

// Heritage states data - only the 7 specified states
const heritageStates = {
    'jammu-kashmir': {
        name: 'Jammu & Kashmir',
        lat: 34.0837,
        lon: 74.7973,
        subtitle: 'Crown Jewel of India',
        monuments: [
            {
                name: 'Dal Lake',
                description: 'Pristine lake with floating gardens and houseboats, a symbol of Kashmir\'s natural beauty',
                image: '🏞️'
            },
            {
                name: 'Gulmarg',
                description: 'Meadow of flowers and premier winter sports destination in the Himalayas',
                image: '⛷️'
            },
            {
                name: 'Sonamarg',
                description: 'Golden meadow at the gateway to Ladakh with pristine mountain views',
                image: '🏔️'
            },
            {
                name: 'Vaishno Devi',
                description: 'Sacred Hindu pilgrimage shrine nestled in the Trikuta mountains',
                image: '🛕'
            }
        ],
        culture: [
            {
                name: 'Sufi Traditions',
                description: 'Rich Sufi heritage with spiritual music, poetry and mystical practices',
                image: '🎵'
            },
            {
                name: 'Kashmiri Pandit Culture',
                description: 'Ancient Hindu traditions, festivals and scholarly heritage',
                image: '📿'
            },
            {
                name: 'Folk Music',
                description: 'Traditional songs and instruments like Santoor echoing through valleys',
                image: '🎶'
            }
        ],
        arts: [
            {
                name: 'Pashmina Shawls',
                description: 'World\'s finest wool from Changthangi goats, hand-woven into luxury',
                image: '🧣'
            },
            {
                name: 'Papier Mache',
                description: 'Intricate hand-painted decorative items with Persian influence',
                image: '🎨'
            },
            {
                name: 'Carpet Weaving',
                description: 'Traditional silk and wool carpets with intricate patterns',
                image: '🪡'
            }
        ],
        food: [
            {
                name: 'Wazwan',
                description: 'Multi-course royal meal with aromatic spices and tender meat',
                image: '🍛'
            },
            {
                name: 'Rogan Josh',
                description: 'Signature red lamb curry with Kashmiri spices and yogurt',
                image: '🥘'
            },
            {
                name: 'Kahwa',
                description: 'Traditional green tea with cardamom, cinnamon and almonds',
                image: '🍵'
            }
        ]
    },
    'uttarakhand': {
        name: 'Uttarakhand',
        lat: 30.0668,
        lon: 79.0193,
        subtitle: 'Land of the Gods',
        monuments: [
            {
                name: 'Kedarnath Temple',
                description: 'Sacred Shiva temple in the Himalayas, one of the twelve Jyotirlingas',
                image: '🏔️'
            },
            {
                name: 'Badrinath Temple',
                description: 'Holy Vishnu shrine among the four Char Dhams, on Alaknanda banks',
                image: '🛕'
            },
            {
                name: 'Valley of Flowers',
                description: 'UNESCO World Heritage alpine valley with rare Himalayan flora',
                image: '🌸'
            },
            {
                name: 'Haridwar Ghats',
                description: 'Sacred bathing steps on river Ganga, gateway to the gods',
                image: '🕉️'
            }
        ],
        culture: [
            {
                name: 'Garhwali Traditions',
                description: 'Mountain folk culture with ancient festivals and customs',
                image: '⛰️'
            },
            {
                name: 'Kumaoni Heritage',
                description: 'Hill traditions with seasonal celebrations and folk wisdom',
                image: '🏔️'
            },
            {
                name: 'Char Dham Yatra',
                description: 'Sacred pilgrimage circuit tradition to four holy shrines',
                image: '🚶'
            }
        ],
        arts: [
            {
                name: 'Wood Carving',
                description: 'Intricate Himalayan temple and house decorations in deodar wood',
                image: '🪵'
            },
            {
                name: 'Aipan Art',
                description: 'Traditional floor and wall geometric paintings with natural colors',
                image: '🖌️'
            },
            {
                name: 'Ringaal Crafts',
                description: 'Bamboo basket weaving and utility items by hill artisans',
                image: '🧺'
            }
        ],
        food: [
            {
                name: 'Bal Mithai',
                description: 'Brown milk-based sweet with white sugar coating, Almora specialty',
                image: '🍬'
            },
            {
                name: 'Bhatt ki Churkani',
                description: 'Black bean curry with local spices, nutritious hill food',
                image: '🫘'
            },
            {
                name: 'Aloo ke Gutke',
                description: 'Spiced mountain potatoes with local herbs and mustard seeds',
                image: '🥔'
            }
        ]
    },
    'uttar-pradesh': {
        name: 'Uttar Pradesh',
        lat: 26.8467,
        lon: 80.9462,
        subtitle: 'Heartland of India',
        monuments: [
            {
                name: 'Taj Mahal',
                description: 'Eternal symbol of love and architectural masterpiece in white marble',
                image: '🕌'
            },
            {
                name: 'Fatehpur Sikri',
                description: 'Abandoned Mughal capital with stunning red sandstone architecture',
                image: '🏰'
            },
            {
                name: 'Varanasi Ghats',
                description: 'Ancient spiritual bathing steps on Ganges, oldest living city',
                image: '🛶'
            },
            {
                name: 'Lucknow Residency',
                description: 'Historical British colonial complex with tales of 1857 revolt',
                image: '🏛️'
            }
        ],
        culture: [
            {
                name: 'Kathak Dance',
                description: 'Classical dance form with intricate footwork and storytelling',
                image: '💃'
            },
            {
                name: 'Awadhi Culture',
                description: 'Refined courtly traditions of Lucknow with tehzeeb and adab',
                image: '🎭'
            },
            {
                name: 'Ganga Aarti',
                description: 'Evening prayer ceremony on river banks with oil lamps',
                image: '🪔'
            }
        ],
        arts: [
            {
                name: 'Chikankari',
                description: 'Delicate white embroidery on fine fabrics, Lucknow specialty',
                image: '🪡'
            },
            {
                name: 'Zardozi Work',
                description: 'Gold thread embroidery on royal garments and accessories',
                image: '✨'
            },
            {
                name: 'Pottery of Khurja',
                description: 'Blue and white ceramic traditions with Mughal influences',
                image: '🏺'
            }
        ],
        food: [
            {
                name: 'Awadhi Biryani',
                description: 'Fragrant rice dish with tender meat cooked in dum style',
                image: '🍛'
            },
            {
                name: 'Tunday Kababi',
                description: 'Melt-in-mouth minced meat kebabs, Lucknow\'s pride',
                image: '🍢'
            },
            {
                name: 'Kulfi Falooda',
                description: 'Traditional ice cream with vermicelli and rose syrup',
                image: '🍨'
            }
        ]
    },
    'rajasthan': {
        name: 'Rajasthan',
        lat: 27.0238,
        lon: 74.2179,
        subtitle: 'Land of Kings',
        monuments: [
            {
                name: 'Amber Fort',
                description: 'Hilltop fort with mirror palace and elephant rides, Jaipur\'s crown',
                image: '🏰'
            },
            {
                name: 'Hawa Mahal',
                description: 'Palace of winds with 953 intricate windows for royal ladies',
                image: '🕌'
            },
            {
                name: 'City Palace Udaipur',
                description: 'Lakeside palace complex with stunning architecture and museums',
                image: '🏛️'
            },
            {
                name: 'Jaisalmer Fort',
                description: 'Living golden fort in Thar desert, still inhabited by families',
                image: '🏜️'
            }
        ],
        culture: [
            {
                name: 'Ghoomar Dance',
                description: 'Traditional folk dance with flowing movements and colorful ghagras',
                image: '💃'
            },
            {
                name: 'Rajasthani Music',
                description: 'Folk ballads and classical traditions by Manganiar and Langa',
                image: '🎵'
            },
            {
                name: 'Desert Festivals',
                description: 'Colorful celebrations in Pushkar and Jaisalmer with camel races',
                image: '🐪'
            }
        ],
        arts: [
            {
                name: 'Blue Pottery',
                description: 'Glazed pottery with Persian influence, Jaipur\'s unique craft',
                image: '🏺'
            },
            {
                name: 'Miniature Paintings',
                description: 'Detailed Rajput and Mughal style art on paper and silk',
                image: '🎨'
            },
            {
                name: 'Bandhani Textiles',
                description: 'Tie-dye fabric art with intricate patterns and vibrant colors',
                image: '🧵'
            }
        ],
        food: [
            {
                name: 'Dal Baati Churma',
                description: 'Traditional meal with lentils, baked wheat balls and sweet crumbs',
                image: '🍛'
            },
            {
                name: 'Ghewar',
                description: 'Honeycomb-shaped sweet dessert, festival specialty',
                image: '🍯'
            },
            {
                name: 'Laal Maas',
                description: 'Spicy mutton curry with red chilies, royal Rajasthani dish',
                image: '🌶️'
            }
        ]
    },
    'haryana': {
        name: 'Haryana',
        lat: 29.0588,
        lon: 76.0856,
        subtitle: 'Land of Rotis',
        monuments: [
            {
                name: 'Kurukshetra',
                description: 'Sacred battlefield of Mahabharata epic, birthplace of Bhagavad Gita',
                image: '⚔️'
            },
            {
                name: 'Surajkund',
                description: 'Ancient reservoir with step-well architecture, hosts crafts fair',
                image: '💧'
            },
            {
                name: 'Pinjore Gardens',
                description: 'Mughal-style terraced gardens with fountains and pavilions',
                image: '🌺'
            },
            {
                name: 'Brahma Sarovar',
                description: 'Sacred tank in Kurukshetra, site of solar eclipse pilgrimage',
                image: '🕉️'
            }
        ],
        culture: [
            {
                name: 'Folk Music',
                description: 'Traditional Haryanvi songs and ballads celebrating rural life',
                image: '🎵'
            },
            {
                name: 'Wrestling Tradition',
                description: 'Ancient sport with modern Olympic champions, village akhadas',
                image: '🤼'
            },
            {
                name: 'Seasonal Festivals',
                description: 'Harvest celebrations like Baisakhi and local village fairs',
                image: '🌾'
            }
        ],
        arts: [
            {
                name: 'Phulkari Embroidery',
                description: 'Colorful floral embroidery on dupattas by women artisans',
                image: '🌸'
            },
            {
                name: 'Pottery',
                description: 'Traditional clay crafts and utility items for daily use',
                image: '🏺'
            },
            {
                name: 'Bamboo Crafts',
                description: 'Woven baskets and decorative items from local bamboo',
                image: '🧺'
            }
        ],
        food: [
            {
                name: 'Bajra Khichdi',
                description: 'Millet and lentil comfort food, nutritious winter staple',
                image: '🍛'
            },
            {
                name: 'Singri ki Sabzi',
                description: 'Desert bean vegetable curry, unique to region',
                image: '🥬'
            },
            {
                name: 'Churma Ladoo',
                description: 'Sweet balls made from wheat flour and jaggery',
                image: '🍯'
            }
        ]
    },
    'himachal-pradesh': {
        name: 'Himachal Pradesh',
        lat: 31.1048,
        lon: 77.1734,
        subtitle: 'Dev Bhoomi',
        monuments: [
            {
                name: 'Shimla Heritage',
                description: 'Colonial architecture and heritage buildings, summer capital legacy',
                image: '🏛️'
            },
            {
                name: 'Manali Temples',
                description: 'Ancient Hindu temples in valley setting with mountain backdrop',
                image: '⛰️'
            },
            {
                name: 'Dharamshala',
                description: 'Tibetan Buddhist culture and monasteries, Dalai Lama residence',
                image: '🏔️'
            },
            {
                name: 'Spiti Monasteries',
                description: 'High-altitude Buddhist gompas in cold desert landscape',
                image: '🛕'
            }
        ],
        culture: [
            {
                name: 'Pahari Culture',
                description: 'Hill traditions and folk practices in mountain communities',
                image: '⛰️'
            },
            {
                name: 'Buddhist Heritage',
                description: 'Tibetan influence and monasteries preserving ancient wisdom',
                image: '☸️'
            },
            {
                name: 'Mountain Festivals',
                description: 'Seasonal celebrations and fairs in high altitude regions',
                image: '🎊'
            }
        ],
        arts: [
            {
                name: 'Kullu Shawls',
                description: 'Woolen shawls with traditional patterns from valley artisans',
                image: '🧣'
            },
            {
                name: 'Pahari Painting',
                description: 'Hill miniature painting tradition with natural themes',
                image: '🎨'
            },
            {
                name: 'Wood Carving',
                description: 'Temple and architectural decorations in pine and deodar',
                image: '🪵'
            }
        ],
        food: [
            {
                name: 'Dham',
                description: 'Traditional feast served on banana leaves during festivals',
                image: '🍃'
            },
            {
                name: 'Siddu',
                description: 'Steamed bread stuffed with poppy seeds and walnuts',
                image: '🥖'
            },
            {
                name: 'Chha Ghost',
                description: 'Marinated lamb curry with yogurt and hill spices',
                image: '🥘'
            }
        ]
    },
    'punjab': {
        name: 'Punjab',
        lat: 31.1471,
        lon: 75.3412,
        subtitle: 'Land of Five Rivers',
        monuments: [
            {
                name: 'Golden Temple',
                description: 'Holiest Sikh shrine with gold-plated dome, symbol of equality',
                image: '🏛️'
            },
            {
                name: 'Anandpur Sahib',
                description: 'Birthplace of Khalsa with historic gurudwaras and festivals',
                image: '⚔️'
            },
            {
                name: 'Qila Mubarak',
                description: 'Historic fort in Patiala with museums and royal artifacts',
                image: '🏰'
            },
            {
                name: 'Wagah Border',
                description: 'Ceremonial border crossing with daily flag ceremony',
                image: '🇮🇳'
            }
        ],
        culture: [
            {
                name: 'Sikh Traditions',
                description: 'Rich religious heritage with community service and equality',
                image: '☬'
            },
            {
                name: 'Bhangra Dance',
                description: 'Energetic folk dance celebrating harvest and joy of life',
                image: '💃'
            },
            {
                name: 'Punjabi Music',
                description: 'Folk songs and modern Punjabi pop spreading worldwide',
                image: '🎵'
            }
        ],
        arts: [
            {
                name: 'Phulkari Embroidery',
                description: 'Floral embroidery on traditional dupattas by Punjabi women',
                image: '🌸'
            },
            {
                name: 'Jutti Making',
                description: 'Traditional leather footwear crafts with intricate designs',
                image: '👡'
            },
            {
                name: 'Punjabi Suits',
                description: 'Traditional dress with intricate designs and mirror work',
                image: '👗'
            }
        ],
        food: [
            {
                name: 'Butter Chicken',
                description: 'Creamy tomato-based chicken curry, globally famous dish',
                image: '🍛'
            },
            {
                name: 'Sarson da Saag',
                description: 'Mustard greens with makki di roti, winter specialty',
                image: '🥬'
            },
            {
                name: 'Chole Bhature',
                description: 'Spiced chickpeas with fried bread, popular breakfast',
                image: '🫓'
            }
        ]
    }
};

// Community quotes for each state
const communityQuotes = {
    'jammu-kashmir': [
        {
            text: "Kashmir is not just a place, it's a feeling that touches your soul with its divine beauty.",
            author: "Rashid Ahmad, Local Guide"
        },
        {
            text: "Our Pashmina shawls carry the warmth of Kashmir's love woven by our skilled artisans.",
            author: "Meera Devi, Artisan"
        }
    ],
    'uttarakhand': [
        {
            text: "In the lap of Himalayas, we find both divinity and the strength of our ancestors.",
            author: "Priya Negi, Local Guide"
        },
        {
            text: "The mountains have taught us that spirituality and nature are inseparable.",
            author: "Ravi Tiwari, Pilgrimage Coordinator"
        }
    ],
    'uttar-pradesh': [
        {
            text: "The Taj Mahal teaches us that true love creates monuments that last forever.",
            author: "Amit Sharma, Heritage Guide"
        },
        {
            text: "From Varanasi's ghats to Lucknow's tehzeeb, UP preserves India's cultural soul.",
            author: "Dr. Sunita Singh, Historian"
        }
    ],
    'rajasthan': [
        {
            text: "Rajasthan teaches us that true royalty lies in preserving our heritage for future generations.",
            author: "Meera Sharma, Heritage Enthusiast"
        },
        {
            text: "Every fort here whispers tales of valor and every haveli speaks of artistic excellence.",
            author: "Dr. Amit Kumar, Historian"
        }
    ],
    'haryana': [
        {
            text: "From Kurukshetra's wisdom to Olympic medals, Haryana shows strength in tradition and modernity.",
            author: "Geeta Phogat, Wrestler"
        },
        {
            text: "Our Phulkari embroidery blooms like the fields of Haryana, colorful and full of life.",
            author: "Kamla Devi, Embroiderer"
        }
    ],
    'himachal-pradesh': [
        {
            text: "The mountains of Himachal teach us patience, resilience and the beauty of simplicity.",
            author: "Laxmi Thakur, Hill Woman"
        },
        {
            text: "From Shimla's colonial charm to Spiti's Buddhist wisdom, we embrace all cultures.",
            author: "Tenzin Norbu, Monk"
        }
    ],
    'punjab': [
        {
            text: "The Golden Temple shows us that true wealth lies in serving humanity with love.",
            author: "Gurpreet Singh, Volunteer"
        },
        {
            text: "Punjab's spirit is like our Bhangra - energetic, joyful and bringing people together.",
            author: "Simran Kaur, Dancer"
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('India\'s Heritage app initializing...');
    initializeMap();
    setupNavigation();
    setupDiscoverButton();
});

// Initialize the map with heritage state markers
function initializeMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Map container not found');
        return;
    }

    console.log('Creating Leaflet map...');
    
    // Create map centered on North India to show all 7 states
    map = L.map('map', {
        center: [29.0, 77.0],
        zoom: 6,
        scrollWheelZoom: false,
        zoomControl: true
    });

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    // Add heritage state markers for only the 7 specified states
    let markerCount = 0;
    Object.keys(heritageStates).forEach(stateId => {
        const state = heritageStates[stateId];
        addStateMarker(stateId, state);
        markerCount++;
    });

    console.log(`Heritage map initialized with ${markerCount} state markers`);
}

// Add individual state marker
function addStateMarker(stateId, stateData) {
    console.log(`Adding marker for ${stateData.name}`);

    // Create marker with custom style
    const marker = L.circleMarker([stateData.lat, stateData.lon], {
        radius: 12,
        fillColor: '#8F0200',
        color: '#FFFFFF',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.9
    }).addTo(map);

    // Add tooltip on hover
    marker.bindTooltip(`<strong>${stateData.name}</strong><br>${stateData.subtitle}`, {
        permanent: false,
        direction: 'top'
    });

    // Create popup content with proper button
    const popupContent = `
        <div class="popup-content" style="text-align: center; min-width: 200px;">
            <h3 style="margin: 0 0 10px 0; color: #8F0200;">${stateData.name}</h3>
            <p style="margin: 0 0 15px 0; font-size: 0.9em; color: #333;">${stateData.subtitle}</p>
            <button onclick="exploreState('${stateId}')" style="background: #8F0200; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">Explore ${stateData.name}</button>
        </div>
    `;

    marker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'heritage-popup'
    });

    // Add direct click handler for marker
    marker.on('click', function(e) {
        console.log(`Marker clicked for ${stateData.name}`);
        // Small delay to allow popup to show, then navigate
        setTimeout(() => {
            exploreState(stateId);
        }, 100);
    });

    console.log(`Marker added for ${stateData.name} at [${stateData.lat}, ${stateData.lon}]`);
}

// Navigate to state page
function exploreState(stateId) {
    console.log(`Exploring state: ${stateId}`);
    
    currentState = stateId;
    const stateData = heritageStates[stateId];
    
    if (!stateData) {
        console.error('State data not found for:', stateId);
        return;
    }

    console.log(`Loading content for ${stateData.name}`);

    // Close any open popups
    if (map) {
        map.closePopup();
    }

    // Update state page content
    const stateTitle = document.getElementById('state-title');
    const stateSubtitle = document.getElementById('state-subtitle');
    
    if (stateTitle) stateTitle.textContent = stateData.name;
    if (stateSubtitle) stateSubtitle.textContent = stateData.subtitle;

    // Render content sections
    renderStateContent('monuments', stateData.monuments);
    renderStateContent('culture', stateData.culture);
    renderStateContent('arts', stateData.arts);
    renderStateContent('food', stateData.food);
    
    // Render community quotes
    renderCommunityQuotes(stateId);

    // Show state page and hide homepage
    showPage('state-page');
    
    // Hide nav links and show back button
    const navLinks = document.querySelector('.nav-links');
    const backBtn = document.getElementById('back-btn');
    if (navLinks) navLinks.style.display = 'none';
    if (backBtn) backBtn.classList.remove('hidden');

    console.log(`Successfully loaded ${stateData.name} page`);
}

// Render content for each section with scrolling animation
function renderStateContent(sectionType, items) {
    const container = document.getElementById(`${sectionType}-scroll`);
    if (!container) {
        console.error(`Container not found for section: ${sectionType}`);
        return;
    }

    container.innerHTML = '';
    
    // Create items with duplicates for infinite scroll effect
    const allItems = [...items, ...items, ...items];
    
    allItems.forEach((item, index) => {
        const scrollItem = document.createElement('div');
        scrollItem.className = 'scroll-item';
        
        scrollItem.innerHTML = `
            <div class="scroll-item-image">
                <span style="font-size: 2.5rem; z-index: 1; position: relative;">${item.image}</span>
                <span style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); font-size: 0.8rem; font-weight: bold; background: rgba(0,0,0,0.7); color: white; padding: 4px 8px; border-radius: 4px; max-width: 90%; text-align: center;">${item.name}</span>
            </div>
            <div class="scroll-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        container.appendChild(scrollItem);
    });

    console.log(`Rendered ${items.length} items for ${sectionType} section`);
}

// Render community quotes section
function renderCommunityQuotes(stateId) {
    const container = document.getElementById('quotes-container');
    if (!container) {
        console.error('Quotes container not found');
        return;
    }

    const quotes = communityQuotes[stateId] || [];
    container.innerHTML = '';

    if (quotes.length === 0) {
        container.innerHTML = '<p>No community quotes available for this state.</p>';
        return;
    }

    quotes.forEach(quote => {
        const quoteCard = document.createElement('div');
        quoteCard.className = 'quote-card';
        
        quoteCard.innerHTML = `
            <div class="quote-text">"${quote.text}"</div>
            <div class="quote-author">— ${quote.author}</div>
        `;
        
        container.appendChild(quoteCard);
    });

    console.log(`Rendered ${quotes.length} quotes for ${stateId}`);
}

// Page navigation
function showPage(pageId) {
    console.log(`Showing page: ${pageId}`);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
        console.log(`Successfully showed page: ${pageId}`);
    } else {
        console.error(`Page not found: ${pageId}`);
    }
}

// Setup navigation handlers
function setupNavigation() {
    // Back button
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Back button clicked');
            showPage('homepage');
            backBtn.classList.add('hidden');
            
            // Show nav links again
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) navLinks.style.display = 'flex';
            
            currentState = null;
        });
    }

    // Navigation links for smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Ensure we're on homepage
                if (currentState) {
                    showPage('homepage');
                    const backBtn = document.getElementById('back-btn');
                    if (backBtn) backBtn.classList.add('hidden');
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks) navLinks.style.display = 'flex';
                    currentState = null;
                    
                    // Wait for page transition then scroll
                    setTimeout(() => {
                        targetSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                } else {
                    // Already on homepage, just scroll
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    console.log('Navigation handlers setup complete');
}

// Setup discover button
function setupDiscoverButton() {
    const discoverBtn = document.getElementById('discover-btn');
    if (discoverBtn) {
        discoverBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Discover button clicked');
            
            const mapSection = document.getElementById('map-section');
            if (mapSection) {
                mapSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        console.log('Discover button handler setup complete');
    }
}

// Handle responsive map
window.addEventListener('resize', function() {
    if (map) {
        setTimeout(function() {
            map.invalidateSize();
        }, 100);
    }
});

// Make functions globally accessible for popup buttons
window.exploreState = exploreState;

console.log('India\'s Heritage website JavaScript loaded successfully');