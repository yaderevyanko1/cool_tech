// ===== ДАНІ ТОВАРІВ =====
const products = [
    {
        id: 1,
        name: "Холодильник Bosch KGN36VL326901",
        price: 55000,
        category: "fridges",
        image: "images/fridges/fridge1.jpg",
        description: "Двокамерний холодильник з No Frost та енергокласом A++"
    },
    {
        id: 2,
        name: "Холодильник Indesit LI7S1EW",
        price: 18000,
        category: "fridges",
        image: "images/fridges/fridge2.jpg",
        description: "Двокамерний холодильник з No Frost та енергокласом A+"
    },
    {
        id: 3,
        name: "Холодильник LG GC-B459SECL",
        price: 24000,
        category: "fridges",
        image: "images/fridges/fridge3.png",
        description: "Двокамерний холодильник з No Frost та енергокласом A+"
    },
    {
        id: 4,
        name: "Холодильник MPM MPM-434-SBF-04",
        price: 30000,
        category: "fridges",
        image: "images/fridges/fridge4.png",
        description: "Двокамерний холодильник з No Frost та енергокласом A+"
    },
    {
        id: 5,
        name: "Холодильник LG GC-Q257CBFV",
        price: 67000,
        category: "fridges",
        image: "images/fridges/fridge5.png",
        description: "Двокамерний холодильник з No Frost та енергокласом A+"
    },
    {
        id: 6,
        name: "Холодильник Bosch KGN33NL206",
        price: 27000,
        category: "fridges",
        image: "images/fridges/fridge6.jpg",
        description: "Двокамерний холодильник з No Frost та енергокласом A+"
    },
    {
        id: 7,
        name: "Холодильник Edler ED-400IN",
        price: 21000,
        category: "fridges",
        image: "images/fridges/fridge7.jpg",
        description: "Двокамерний холодильник з No Frost та енергокласом A+"
    },
    {
        id: 8,
        name: "Холодильник Midea MDRB521MGE01",
        price: 23000,
        category: "fridges",
        image: "images/fridges/fridge8.png",
        description: "Двокамерний холодильник з No Frost та енергокласом E"
    },
    {
        id: 9,
        name: "Холодильник Samsung RB38C600ES9/UA",
        price: 23000,
        category: "fridges",
        image: "images/fridges/fridge9.png",
        description: "Двокамерний холодильник з No Frost та енергокласом A+"
    },
    {
        id: 10,
        name: "Холодильник Bosch KGN39UW316",
        price: 23000,
        category: "fridges",
        image: "images/fridges/fridge10.jpg",
        description: "Двокамерний холодильник з No Frost та енергокласом A++"
    },
    {
        id: 11,
        name: "Мікрохвильова піч Grunhelm 20MX711-W",
        price: 2000,
        category: "microwave",
        image: "images/microwave/microwave1.png",
        description: "Мікрохвильова пічь потужністю 700Вт"
    },
    {
        id: 12,
        name: "Мікрохвильова піч Samsung MS20A3010AL/UA",
        price: 3000,
        category: "microwave",
        image: "images/microwave/microwave2.png",
        description: "Мікрохвильова пічь потужністю 700Вт"
    },
    {
        id: 13,
        name: "Мікрохвильова піч Gorenje MO20A4X",
        price: 4000,
        category: "microwave",
        image: "images/microwave/microwave3.jpg",
        description: "Мікрохвильова пічь потужністю 800Вт"
    },
    {
        id: 14,
        name: "Мікрохвильова піч LG MS 2042 DY",
        price: 4200,
        category: "microwave",
        image: "images/microwave/microwave4.jpg",
        description: "Мікрохвильова пічь потужністю 700Вт"
    },
    {
        id: 15,
        name: "Мікрохвильова піч Samsung MG23K3614AW/UA",
        price: 5700,
        category: "microwave",
        image: "images/microwave/microwave5.png",
        description: "Мікрохвильова пічь потужністю 800Вт"
    },
    {
        id: 16,
        name: "Мікрохвильова піч Toshiba MW-MM-20P (WH)-Р",
        price: 3000,
        category: "microwave",
        image: "images/microwave/microwave6.jpg",
        description: "Мікрохвильова пічь потужністю 800Вт"
    },
    {
        id: 17,
        name: "Мікрохвильова піч Bomann MW6014CB silver",
        price: 8200,
        category: "microwave",
        image: "images/microwave/microwave7.jpg",
        description: "Мікрохвильова пічь потужністю 700Вт"
    },
    {
        id: 18,
        name: "Мікрохвильова піч Bosch BFL623MW3",
        price: 13700,
        category: "microwave",
        image: "images/microwave/microwave8.jpg",
        description: "Мікрохвильова пічь потужністю 800Вт"
    },
    {
        id: 19,
        name: "Мікрохвильова піч Bosch BFL7221B1",
        price: 42000,
        category: "microwave",
        image: "images/microwave/microwave9.png",
        description: "Мікрохвильова пічь потужністю 900Вт"
    },
    {
        id: 20,
        name: "Мікрохвильова піч Electrolux EMT25203OC",
        price: 18800,
        category: "microwave",
        image: "images/microwave/microwave10.jpg",
        description: "Мікрохвильова пічь потужністю 900Вт"
    },
    {
        id: 21,
        name: "Варильна поверхня Beko HIAW 64225 SX",
        price: 7500,
        category: "hobs",
        image: "images/hobs/hob1.jpg",
        description: "Газова.Нержавіюча сталь"
    },
    {
        id: 22,
        name: "Варильна поверхня Beko HIC 64403 T",
        price: 8130,
        category: "hobs",
        image: "images/hobs/hob2.jpg",
        description: "Електрична. Склокераміка"
    },
    {
        id: 23,
        name: "Варильна поверхня Electrolux EGS6436SX",
        price: 9300,
        category: "hobs",
        image: "images/hobs/hob3.jpg",
        description: "Газова.Нержавіюча сталь"
    },
    {
        id: 24,
        name: "Варильна поверхня Electrolux KGG64362K",
        price: 11100,
        category: "hobs",
        image: "images/hobs/hob4.png",
        description: "Газова.Загартоване скло"
    },
    {
        id: 25,
        name: "Варильна поверхня Eleyus INGA 60 BG CF",
        price: 6500,
        category: "hobs",
        image: "images/hobs/hob5.jpg",
        description: "Газова.Загартоване скло"
    },
    {
        id: 26,
        name: "Варильна поверхня Hansa BHCI 66306",
        price: 8200,
        category: "hobs",
        image: "images/hobs/hob6.jpg",
        description: "Електрична. Склокераміка"
    },
    {
        id: 27,
        name: "Варильна поверхня Hansa BHGI 6515506",
        price: 7800,
        category: "hobs",
        image: "images/hobs/hob7.png",
        description: "Газова.Нержавіюча сталь"
    },
    {
        id: 28,
        name: "Варильна поверхня Hansa FCGI69329",
        price: 19500,
        category: "hobs",
        image: "images/hobs/hob8.png",
        description: "Газова.Нержавіюча сталь"
    },
    {
        id: 29,
        name: "Варильна поверхня Beko HII 64200 FMT (199128)",
        price: 12000,
        category: "hobs",
        image: "images/hobs/hob9.jpg",
        description: "Електрична. Склокераміка"
    },
    {
        id: 30,
        name: "Варильна поверхня Bosch PCH6A5B90R",
        price: 21100,
        category: "hobs",
        image: "images/hobs/hob10.jpg",
        description: "Газова.Нержавіюча сталь"
    },
    {
        id: 31,
        name: "Духова шафа Bosch HBJ558YB0Q",
        price: 17700,
        category: "ovens",
        image: "images/ovens/oven1.jpg",
        description: "Електричний. Електронне управління"
    },
    {
        id: 32,
        name: "Духова шафа Ventolux BOSTON",
        price: 9200,
        category: "ovens",
        image: "images/ovens/oven2.jpg",
        description: "Електричний. Механічне управління"
    },
    {
        id: 33,
        name: "Духова шафа Ventolux EO60TC-6P BK",
        price: 11000,
        category: "ovens",
        image: "images/ovens/oven3.png",
        description: "Електричний. Електронне управління"
    },
    {
        id: 34,
        name: "Духова шафа Ventolux Dublin",
        price: 9820,
        category: "ovens",
        image: "images/ovens/oven4.jpg",
        description: "Електричний. Механічне управління"
    },
    {
        id: 35,
        name: "Духова шафа Beko BIM24400GCS",
        price: 18600,
        category: "ovens",
        image: "images/ovens/oven5.jpg",
        description: "Електричний. Сенсорне управління"
    },
    {
        id: 36,
        name: "Духова шафа Bosch HIJ517YB0R",
        price: 24800,
        category: "ovens",
        image: "images/ovens/oven6.jpg",
        description: "Електричний. Механічне, сенсорне управління"
    },
    {
        id: 37,
        name: "Духова шафа Bosch HBJ559YW6R",
        price: 24000,
        category: "ovens",
        image: "images/ovens/oven7.png",
        description: "Електричний. Cенсорне управління"
    },
    {
        id: 38,
        name: "Духова шафа Electrolux EOD3C40BX",
        price: 12500,
        category: "ovens",
        image: "images/ovens/oven8.jpg",
        description: "Електричний. Електронне управління"
    },
    {
        id: 39,
        name: "Духова шафа Electrolux EOE8P39WV",
        price: 30300,
        category: "ovens",
        image: "images/ovens/oven9.png",
        description: "Електричний. Сенсорне управління"
    },
    {
        id: 40,
        name: "Духова шафа Electrolux OPEB2520R",
        price: 17110,
        category: "ovens",
        image: "images/ovens/oven10.jpg",
        description: "Електричний. Механічне управління"
    },
    {
        id: 41,
        name: "Кавомашина Delonghi ECAM 220.21.B",
        price: 17000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee1.png",
        description: "Тип кави Зернова; Мелена"
    },
    {
        id: 42,
        name: "Кавомашина Philips EP3343/50",
        price: 27000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee2.png",
        description: "Тип кави Зернова; Мелена"
    },
    {
        id: 43,
        name: "Кавомашина Delonghi ECAM 350.50 B",
        price: 23000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee3.jpg",
        description: "Тип кави Зернова; Мелена"
    },
    {
        id: 44,
        name: "Кавомашина Krups EA890810",
        price: 23500,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee4.png",
        description: "Тип кави Зернова"
    },
    {
        id: 45,
        name: "Кавомашина Nivona CafeRomatica NICR799",
        price: 37000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee5.png",
        description: " Тип кави Зернова; Мелена "
    },
    {
        id: 46,
        name: "Кавомашина Nivona NICR790",
        price: 30000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee6.png",
        description: " Тип кави Зернова; Мелена "
    },
    {
        id: 47,
        name: "Кавомашина Philips EP1223/00",
        price: 17000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee7.jpg",
        description: " Тип кави Зернова; Мелена "
    },
    {
        id: 48,
        name: "Кавомашина Philips EP3347/90",
        price: 27000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee8.png",
        description: " Тип кави Зернова; Мелена "
    },
    {
        id: 49,
        name: "Кавомашина PHILIPS EP4349/70",
        price: 41000,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee9.png",
        description: " Тип кави Зернова; Мелена "
    },
    {
        id: 50,
        name: "Кавомашина JURA E4 piano black (EA)",
        price: 44400,
        category: "coffee_machines",
        image: "images/coffee_machines/coffee10.png",
        description: " Тип кави Зернова; Мелена "
    },
    
    {
        id: 51,
        name: "Електричний чайник Grunhelm EKS 7518",
        price: 200,
        category: "kettles",
        image: "images/kettles/kettle1.jpg",
        description: "  Об`єм 1.8 л  Потужність 1500 Вт  "
    },

    {
        id: 52,
        name: "Електричний чайник Delfa DK 3530 X жовтий",
        price: 400,
        category: "kettles",
        image: "images/kettles/kettle2.png",
        description: "  Об`єм 1.8 л  Потужність 1500 Вт  "
    },

    {
        id: 53,
        name: "Електричний чайник Gorenje K17XG",
        price: 600,
        category: "kettles",
        image: "images/kettles/kettle3.png",
        description: "  Об`єм 1.7 л  Потужність 2200 Вт  "
    },

    {
        id: 54,
        name: "Електричний чайник Rotex RKT75-S",
        price: 830,
        category: "kettles",
        image: "images/kettles/kettle4.png",
        description: "  Об`єм 1.7 л  Потужність 2200 Вт  "
    },

    {
        id: 55,
        name: "Чайник диск Magio MG 977",
        price: 1150,
        category: "kettles",
        image: "images/kettles/kettle5.jpg",
        description: "  Об`єм 1.7 л  Потужність 1800 Вт  "
    },

    {
        id: 56,
        name: "Чайник диск Magio MG-988",
        price: 1200,
        category: "kettles",
        image: "images/kettles/kettle6.jpg",
        description: "  Об`єм 1.7 л  Потужність 1200 Вт  "
    },
    
    {
        id: 57,
        name: "Чайник диск Tefal BI520D10",
        price: 1200,
        category: "kettles",
        image: "images/kettles/kettle7.jpg",
        description: "  Об`єм 1.7 л  Потужність 2200 Вт  "
    },
    
    {
        id: 58,
        name: "Чайник диск Tefal KI740B30",
        price: 2000,
        category: "kettles",
        image: "images/kettles/kettle8.png",
        description: "  Об`єм 1.7 л  Потужність 2200 Вт  "
    },

    {
        id: 59,
        name: "Чайник диск Tefal KO299130",
        price: 1300,
        category: "kettles",
        image: "images/kettles/kettle9.png",
        description: "  Об`єм 1.7 л  Потужність 2200 Вт  "
    },
    {
        id: 60,
        name: "Електричний чайник Ardesto EKL-F200",
        price: 1100,
        category: "kettles",
        image: "images/kettles/kettle10.png",
        description: "  Об`єм 1.7 л  Потужність 2150 Вт  "
    },
    {
        id: 61,
        name: "Блендер Bosch MSM 14200",
        price: 1300,
        category: "small",
        image: "images/blenders/blender1.jpg",
        description: "   Потужність 400 Bт  "
    },
    {
        id: 62,
        name: "Блендер Bosch MSM 2620 B",
        price: 2000,
        category: "small",
        image: "images/blenders/blender2.jpg",
        description: "   Потужність 600 Bт  "
    },
    
    {
        id: 63,
        name: "Блендер Edler EDSB-9877",
        price: 1400,
        category: "small",
        image: "images/blenders/blender3.png",
        description: "   Потужність 800 Bт  "
    },


    

];

// ===== ГЛОБАЛЬНІ ЗМІННІ =====
let cart = [];
let currentCategory = 'all';
let searchTerm = '';

// ===== DOM ЕЛЕМЕНТИ =====
const elements = {
    productsGrid: document.getElementById('productsGrid'),
    cartBtn: document.getElementById('cartBtn'),
    cartCounter: document.getElementById('cartCounter'),
    cartModal: document.getElementById('cartModal'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartItems: document.getElementById('cartItems'),
    totalPrice: document.getElementById('totalPrice'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    searchInput: document.getElementById('searchInput'),
    noProducts: document.getElementById('noProducts'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    navMenu: document.querySelector('.nav-menu'),
    scrollTopBtn: document.getElementById('scrollTopBtn'),
    loader: document.getElementById('loader'),
    notification: document.getElementById('notification')
};

// ===== ОСНОВНІ ФУНКЦІЇ =====

/**
 * Створює HTML для зображення товару з покращеною обробкою помилок
 * @param {Object} product - Об'єкт товару
 * @returns {string} HTML рядок
 */
function createImageElement(product) {
    const hasValidImage = product.image && 
        (product.image.includes('http') || 
         product.image.includes('.jpg') || 
         product.image.includes('.jpeg') || 
         product.image.includes('.png') || 
         product.image.includes('.webp'));
    
    if (hasValidImage) {
        return `
            <img 
                src="${product.image}" 
                alt="${product.name}" 
                loading="lazy"
                onerror="handleImageError(this)"
            >
            <div class="image-placeholder" style="display: none;">📦</div>
        `;
    } else {
        return `<div class="image-placeholder">📦</div>`;
    }
}

/**
 * Обробляє помилки завантаження зображень
 * @param {HTMLImageElement} img - Елемент зображення
 */
function handleImageError(img) {
    img.style.display = 'none';
    const placeholder = img.nextElementSibling;
    if (placeholder && placeholder.classList.contains('image-placeholder')) {
        placeholder.style.display = 'flex';
    }
}

/**
 * Показує завантажувач з анімацією
 */
function showLoader() {
    if (elements.loader) {
        elements.loader.style.display = 'flex';
        // Додаємо невелику затримку для плавної анімації
        setTimeout(() => {
            elements.loader.style.opacity = '1';
        }, 10);
    }
}

/**
 * Приховує завантажувач з анімацією
 */
function hideLoader() {
    if (elements.loader) {
        elements.loader.style.opacity = '0';
        setTimeout(() => {
            elements.loader.style.display = 'none';
        }, 300);
    }
}

/**
 * Показує повідомлення користувачу з покращеними анімаціями
 * @param {string} message - Текст повідомлення
 * @param {string} type - Тип повідомлення ('success' або 'error')
 */
function showNotification(message, type = 'success') {
    if (!elements.notification) return;
    
    // Очищуємо попередні класи
    elements.notification.className = 'notification';
    elements.notification.textContent = message;
    
    // Додаємо нові класи
    elements.notification.classList.add(type, 'show');
    
    // Автоматично приховуємо через 4 секунди
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 4000);
}

/**
 * Відображає товари на сторінці з покращеною анімацією
 * @param {Array} productsToShow - Масив товарів для відображення
 */
function displayProducts(productsToShow = products) {
    if (!elements.productsGrid) return;
    
    // Додаємо анімацію зникнення
    elements.productsGrid.style.opacity = '0';
    elements.productsGrid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        elements.productsGrid.innerHTML = '';

        if (productsToShow.length === 0) {
            if (elements.noProducts) {
                elements.noProducts.style.display = 'block';
            }
            elements.productsGrid.style.opacity = '1';
            elements.productsGrid.style.transform = 'translateY(0)';
            return;
        }

        if (elements.noProducts) {
            elements.noProducts.style.display = 'none';
        }

        productsToShow.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.style.opacity = '0';
            productCard.style.transform = 'translateY(30px)';

            productCard.innerHTML = `
                <div class="product-image">
                    ${createImageElement(product)}
                </div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price.toLocaleString()} ₴</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        🛒 Додати в кошик
                    </button>
                </div>
            `;

            elements.productsGrid.appendChild(productCard);

            // Анімація появи з затримкою
            setTimeout(() => {
                productCard.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                productCard.style.opacity = '1';
                productCard.style.transform = 'translateY(0)';
            }, index * 100 + 50);
        });

        // Анімація появи контейнера
        setTimeout(() => {
            elements.productsGrid.style.transition = 'all 0.4s ease';
            elements.productsGrid.style.opacity = '1';
            elements.productsGrid.style.transform = 'translateY(0)';
        }, 100);
    }, 200);
}

/**
 * Фільтрує товари за категорією та пошуковим запитом
 */
function filterProducts() {
    let filteredProducts = products;

    // Фільтр за категорією
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentCategory
        );
    }

    // Фільтр за пошуковим запитом
    if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase().trim();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower)
        );
    }

    displayProducts(filteredProducts);
}

/**
 * Додає товар до кошика з анімацією
 * @param {number} productId - ID товару
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`Збільшено кількість "${product.name}" в кошику`);
    } else {
        cart.push({ ...product, quantity: 1 });
        showNotification(`"${product.name}" додано до кошика`);
    }

    updateCartUI();
    
    // Анімація кнопки після додавання
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '✅ Додано!';
    button.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
    }, 1500);
}

/**
 * Видаляє товар з кошика
 * @param {number} productId - ID товару
 */
function removeFromCart(productId) {
    const product = products.find(p => p.id === productId);
    cart = cart.filter(item => item.id !== productId);
    
    if (product) {
        showNotification(`"${product.name}" видалено з кошика`);
    }
    
    updateCartUI();
    displayCartItems();
}

/**
 * Змінює кількість товару в кошику з валідацією
 * @param {number} productId - ID товару
 * @param {number} change - Зміна кількості (+1 або -1)
 */
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    const newQuantity = item.quantity + change;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else if (newQuantity > 99) {
        showNotification('Максимальна кількість товару - 99 шт.', 'error');
    } else {
        item.quantity = newQuantity;
        updateCartUI();
        displayCartItems();
    }
}

/**
 * Оновлює UI кошика (лічильник) з анімацією
 */
function updateCartUI() {
    if (!elements.cartCounter) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const currentCount = parseInt(elements.cartCounter.textContent) || 0;
    
    if (totalItems !== currentCount) {
        // Анімація збільшення лічильника
        elements.cartCounter.style.transform = 'scale(1.3)';
        elements.cartCounter.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
        
        setTimeout(() => {
            elements.cartCounter.textContent = totalItems;
            elements.cartCounter.style.transform = 'scale(1)';
            elements.cartCounter.style.background = '';
        }, 150);
    }
}

/**
 * Відображає товари в кошику з покращеним UI
 */
function displayCartItems() {
    if (!elements.cartItems || !elements.totalPrice) return;

    elements.cartItems.innerHTML = '';

    if (cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #6c757d;">
                <div style="font-size: 64px; margin-bottom: 20px;">🛒</div>
                <h3 style="margin-bottom: 10px; color: #2c3e50;">Ваш кошик порожній</h3>
                <p style="margin: 0;">Додайте товари, щоб продовжити покупки</p>
            </div>
        `;
        elements.totalPrice.textContent = '0 ₴';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.style.opacity = '0';
        cartItem.style.transform = 'translateX(-20px)';

        cartItem.innerHTML = `
            <div class="cart-item-image">
                ${createImageElement(item)}
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()} ₴ за шт.</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="changeQuantity(${item.id}, -1)" title="Зменшити кількість">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)" title="Збільшити кількість">+</button>
            </div>
            <div class="cart-item-price">
                ${(item.price * item.quantity).toLocaleString()} ₴
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})" title="Видалити товар">
                ✕
            </button>
        `;

        elements.cartItems.appendChild(cartItem);

        // Анімація появи
        setTimeout(() => {
            cartItem.style.transition = 'all 0.4s ease';
            cartItem.style.opacity = '1';
            cartItem.style.transform = 'translateX(0)';
        }, index * 100 + 50);
    });

    // Оновлюємо загальну суму
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    elements.totalPrice.textContent = `${total.toLocaleString()} ₴`;
}

/**
 * Очищає кошик з підтвердженням
 */
function clearCart() {
    if (cart.length === 0) {
        showNotification('Кошик вже порожній', 'error');
        return;
    }
    
    if (confirm('Ви впевнені, що хочете очистити кошик?')) {
        cart = [];
        updateCartUI();
        displayCartItems();
        showNotification('Кошик успішно очищено');
    }
}

/**
 * Оформлення замовлення з покращеною симуляцією
 */
function checkout() {
    if (cart.length === 0) {
        showNotification('Кошик порожній. Додайте товари для оформлення замовлення.', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Показуємо підтвердження
    const confirmMessage = `
        Підтвердити замовлення?\n
        Товарів: ${itemsCount} шт.\n
        Сума: ${total.toLocaleString()} ₴
    `;
    
    if (!confirm(confirmMessage)) {
        return;
    }
    
    showLoader();
    
    // Симуляція обробки замовлення
    setTimeout(() => {
        hideLoader();
        cart = [];
        updateCartUI();
        displayCartItems();
        closeModal();
        showNotification(`🎉 Замовлення на ${total.toLocaleString()} ₴ успішно оформлено! Дякуємо за покупку!`);
    }, 2500);
}

/**
 * Відкриває модальне вікно з анімацією
 * @param {string} modalId - ID модального вікна
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Анімація появи
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    if (modalId === 'cartModal') {
        displayCartItems();
    }
}

/**
 * Закриває модальне вікно з анімацією
 */
function closeModal() {
    if (!elements.cartModal) return;
    
    elements.cartModal.style.opacity = '0';
    
    setTimeout(() => {
        elements.cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

/**
 * Плавно прокручує до секції
 * @param {string} sectionId - ID секції
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const headerHeight = document.querySelector('.header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight - 20;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/**
 * Управляє видимістю кнопки "Нагору"
 */
function toggleScrollTopBtn() {
    if (!elements.scrollTopBtn) return;
    
    const scrolled = window.pageYOffset;
    const shouldShow = scrolled > 500;
    
    if (shouldShow && elements.scrollTopBtn.style.display === 'none') {
        elements.scrollTopBtn.style.display = 'block';
        setTimeout(() => {
            elements.scrollTopBtn.style.opacity = '1';
            elements.scrollTopBtn.style.transform = 'translateY(0)';
        }, 10);
    } else if (!shouldShow && elements.scrollTopBtn.style.display === 'block') {
        elements.scrollTopBtn.style.opacity = '0';
        elements.scrollTopBtn.style.transform = 'translateY(20px)';
        setTimeout(() => {
            elements.scrollTopBtn.style.display = 'none';
        }, 300);
    }
}

/**
 * Плавно прокручує до верху сторінки
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Перемикає мобільне меню з анімацією
 */
function toggleMobileMenu() {
    if (!elements.mobileMenuBtn || !elements.navMenu) return;
    
    elements.mobileMenuBtn.classList.toggle('active');
    elements.navMenu.classList.toggle('active');
    
    // Анімація гамбургера
    const spans = elements.mobileMenuBtn.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (elements.mobileMenuBtn.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = '';
            span.style.opacity = '1';
        }
    });
}

/**
 * Ініціалізація додатку
 */
function initializeApp() {
    console.log('🚀 Ініціалізація CoolTech...');
    
    // Ховаємо завантажувач
    hideLoader();
    
    // Відображаємо товари
    displayProducts();
    
    // Ініціалізуємо кнопку прокрутки
    if (elements.scrollTopBtn) {
        elements.scrollTopBtn.style.display = 'none';
        elements.scrollTopBtn.style.opacity = '0';
        elements.scrollTopBtn.style.transform = 'translateY(20px)';
    }
    
    console.log('✅ CoolTech успішно ініціалізовано!');
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM завантажено, ініціалізуємо додаток...');
    
    // Ініціалізуємо додаток
    initializeApp();
    
    // Кошик
    if (elements.cartBtn) {
        elements.cartBtn.addEventListener('click', () => openModal('cartModal'));
    }
    
    if (elements.closeCartBtn) {
        elements.closeCartBtn.addEventListener('click', closeModal);
    }
    
    if (elements.clearCartBtn) {
        elements.clearCartBtn.addEventListener('click', clearCart);
    }
    
    if (elements.checkoutBtn) {
        elements.checkoutBtn.addEventListener('click', checkout);
    }
    
    // Закриття модального вікна при кліку поза ним
    if (elements.cartModal) {
        elements.cartModal.addEventListener('click', function(e) {
            if (e.target === elements.cartModal) {
                closeModal();
            }
        });
    }
    
    // Фільтри категорій
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Видаляємо активний клас з усіх кнопок
            elements.filterBtns.forEach(b => b.classList.remove('active'));
            // Додаємо активний клас до поточної кнопки
            this.classList.add('active');
            
            currentCategory = this.dataset.category;
            filterProducts();
        });
    });
    
    // Пошук з debounce
    if (elements.searchInput) {
        let searchTimeout;
        elements.searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchTerm = this.value.trim();
                filterProducts();
            }, 300);
        });
    }
    
    // Мобільне меню
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Кнопка "Нагору"
    if (elements.scrollTopBtn) {
        elements.scrollTopBtn.addEventListener('click', scrollToTop);
    }
    
    // Відстеження прокрутки
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(toggleScrollTopBtn, 10);
    });
    
    // Керування клавіатурою
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'Escape':
                closeModal();
                if (elements.mobileMenuBtn && elements.mobileMenuBtn.classList.contains('active')) {
                    toggleMobileMenu();
                }
                break;
            case '/':
                if (elements.searchInput && e.ctrlKey) {
                    e.preventDefault();
                    elements.searchInput.focus();
                }
                break;
        }
    });
    
    // Закриття мобільного меню при кліку на посилання
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (elements.navMenu && elements.navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Додаємо ripple ефект до кнопок
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                background-color: rgba(255, 255, 255, 0.5);
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Глобальні функції для доступу з HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.clearCart = clearCart;
window.checkout = checkout;
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.handleImageError = handleImageError;

// CSS для ripple анімації
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🎉 CoolTech готовий до роботи!');