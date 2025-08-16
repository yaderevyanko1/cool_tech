// ===== ДАНІ ТОВАРІВ =====
const products = [
    {
        id: 1,
        name: "Холодильник Samsung RF85K901",
        price: 45000,
        category: "fridges",
        image: "images/fridges/fridge2.webp",
        description: "Двокамерний холодильник з No Frost та енергокласом A++"
    },
    {
        id: 2,
        name: "Мультиварка Redmond RMC-M90",
        price: 3200,
        category: "cooking",
        image: "images/cooking/multicooker1.jpg",
        description: "Розумна мультиварка з 12 програмами приготування"
    },
    {
        id: 3,
        name: "Духова шафа Bosch HBG655BS1",
        price: 25000,
        category: "baking",
        image: "images/baking/oven1.jpg",
        description: "Електрична духова шафа з конвекцією та грилем"
    },
    {
        id: 4,
        name: "Блендер Vitamix A3500",
        price: 18500,
        category: "small",
        image: "images/small/blender1.jpg",
        description: "Професійний блендер з програмним управлінням"
    },
    {
        id: 5,
        name: "Кавомашина DeLonghi ECAM350.35",
        price: 32000,
        category: "small",
        image: "images/small/coffee_machine1.jpg",
        description: "Автоматична кавомашина з капучинатором"
    },
    {
        id: 6,
        name: "Сковорода Tefal Expertise",
        price: 2100,
        category: "cooking",
        image: "images/cooking/pan1.jpg",
        description: "Алюмінієва сковорода з титановим покриттям"
    },
    {
        id: 7,
        name: "Хлібопічка Panasonic SD-ZP2000",
        price: 8900,
        category: "baking",
        image: "images/baking/bread_maker1.jpg",
        description: "Хлібопічка з 33 програмами та диспенсером"
    },
    {
        id: 8,
        name: "Мікрохвильовка Samsung MS23K3513",
        price: 4500,
        category: "small",
        image: "images/small/microwave1.jpg",
        description: "Мікрохвильовка з грилем потужністю 800 Вт"
    },
    {
        id: 9,
        name: "Варильна поверхня Electrolux EHH6240",
        price: 15000,
        category: "cooking",
        image: "images/cooking/cooktop1.jpg",
        description: "Індукційна варільна поверхня з 4 конфорками"
    },
    {
        id: 10,
        name: "Посудомийна машина Bosch SMS25AI00E",
        price: 18000,
        category: "fridges",
        image: "images/fridges/dishwasher1.jpg",
        description: "Посудомийна машина на 12 комплектів посуду"
    }
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
 * Створює елемент зображення
 * @param {Object} product - Об'єкт товару
 * @param {boolean} isCart - Чи для кошика
 * @returns {string} HTML рядок
 */
function createImageElement(product, isCart = false) {
    const imageSize = isCart ? '60px' : '100%';
    const imageHeight = isCart ? '60px' : '200px';
    
    if (product.image && (product.image.includes('.jpg') || product.image.includes('.jpeg') || product.image.includes('.png') || product.image.includes('.webp'))) {
        return `
            <img 
                src="${product.image}" 
                alt="${product.name}" 
                style="width: ${imageSize}; height: ${imageHeight}; object-fit: cover; border-radius: ${isCart ? '6px' : '8px'};"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div style="display: none; width: ${imageSize}; height: ${imageHeight}; align-items: center; justify-content: center; background-color: #f5f5f5; border-radius: ${isCart ? '6px' : '8px'}; font-size: ${isCart ? '24px' : '48px'}; color: #ccc;">
                📦
            </div>
        `;
    } else {
        // Показуємо placeholder
        return `
            <div style="display: flex; width: ${imageSize}; height: ${imageHeight}; align-items: center; justify-content: center; background-color: #f5f5f5; border-radius: ${isCart ? '6px' : '8px'}; font-size: ${isCart ? '24px' : '48px'}; color: #ccc;">
                📦
            </div>
        `;
    }
}

/**
 * Показує завантажувач
 */
function showLoader() {
    if (elements.loader) {
        elements.loader.style.display = 'flex';
    }
}

/**
 * Приховує завантажувач
 */
function hideLoader() {
    if (elements.loader) {
        setTimeout(() => {
            elements.loader.style.display = 'none';
        }, 500);
    }
}

/**
 * Показує повідомлення користувачу
 * @param {string} message - Текст повідомлення
 * @param {string} type - Тип повідомлення ('success' або 'error')
 */
function showNotification(message, type = 'success') {
    if (!elements.notification) return;
    
    elements.notification.textContent = message;
    elements.notification.className = `notification ${type}`;
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

/**
 * Відображає товари на сторінці
 * @param {Array} productsToShow - Масив товарів для відображення
 */
function displayProducts(productsToShow = products) {
    if (!elements.productsGrid) return;
    
    elements.productsGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        if (elements.noProducts) {
            elements.noProducts.style.display = 'block';
        }
        return;
    }

    if (elements.noProducts) {
        elements.noProducts.style.display = 'none';
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-image">
                ${createImageElement(product, false)}
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
    });
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
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    displayProducts(filteredProducts);
}

/**
 * Додає товар до кошика
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
 * Змінює кількість товару в кошику
 * @param {number} productId - ID товару
 * @param {number} change - Зміна кількості (+1 або -1)
 */
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
        displayCartItems();
    }
}

/**
 * Оновлює UI кошика (лічильник)
 */
function updateCartUI() {
    if (!elements.cartCounter) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCounter.textContent = totalItems;
}

/**
 * Відображає товари в кошику
 */
function displayCartItems() {
    if (!elements.cartItems || !elements.totalPrice) return;

    elements.cartItems.innerHTML = '';

    if (cart.length === 0) {
        elements.cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 32px;">Ваш кошик порожній</p>';
        elements.totalPrice.textContent = '0 ₴';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <div class="cart-item-image">
                ${createImageElement(item, true)}
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()} ₴ за шт.</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
            <div class="cart-item-price">
                ${(item.price * item.quantity).toLocaleString()} ₴
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})" title="Видалити">
                ✕
            </button>
        `;

        elements.cartItems.appendChild(cartItem);
    });

    // Оновлюємо загальну суму
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    elements.totalPrice.textContent = `${total.toLocaleString()} ₴`;
}

/**
 * Очищує кошик
 */
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Ви впевнені, що хочете очистити кошик?')) {
        cart = [];
        updateCartUI();
        displayCartItems();
        showNotification('Кошик очищено');
    }
}

/**
 * Оформлення замовлення
 */
function checkout() {
    if (cart.length === 0) {
        showNotification('Кошик порожній', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    showLoader();
    
    // Імітація обробки замовлення
    setTimeout(() => {
        hideLoader();
        cart = [];
        updateCartUI();
        displayCartItems();
        closeModal();
        showNotification(`Замовлення на ${total.toLocaleString()} ₴ (${itemsCount} товарів) успішно оформлено!`);
    }, 2000);
}

/**
 * Відкриває модальне вікно
 * @param {string} modalId - ID модального вікна
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        if (modalId === 'cartModal') {
            displayCartItems();
        }
    }
}

/**
 * Закриває модальне вікно
 */
function closeModal() {
    if (elements.cartModal) {
        elements.cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Прокручує до секції
 * @param {string} sectionId - ID секції
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Перемикає видимість кнопки "Нагору"
 */
function toggleScrollTopBtn() {
    if (!elements.scrollTopBtn) return;
    
    if (window.pageYOffset > 300) {
        elements.scrollTopBtn.style.display = 'block';
    } else {
        elements.scrollTopBtn.style.display = 'none';
    }
}

/**
 * Прокручує до верху сторінки
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Перемикає мобільне меню
 */
function toggleMobileMenu() {
    if (!elements.mobileMenuBtn || !elements.navMenu) return;
    
    elements.mobileMenuBtn.classList.toggle('active');
    elements.navMenu.classList.toggle('active');
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Ховаємо завантажувач при завантаженні сторінки
    hideLoader();
    
    // Відображаємо товари
    displayProducts();
    
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
    
    // Пошук
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', function() {
            searchTerm = this.value;
            filterProducts();
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
    window.addEventListener('scroll', toggleScrollTopBtn);
    
    // ESC для закриття модального вікна
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
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
});

// Глобальні функції для доступу з HTML
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.clearCart = clearCart;
window.checkout = checkout;
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;

console.log('🎉 CoolTech готовий до роботи!');