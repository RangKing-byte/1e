// Mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuButton.querySelector("svg"); // бургер иконкасын аламыз

menuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');

    if (mobileMenu.classList.contains('hidden')) {
        // Егер жабық болса – бургер иконка
        menuIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path>`;
    } else {
        // Егер ашық болса – крестик
        menuIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path>`;
    }
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
                
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
                    
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});


// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
            
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const id = section.getAttribute('id');
                
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});


// Send WhatsApp contact
function sendContact() {
    var phoneNumber = "77763333536"; // '+' белгісін алып тастаңыз, wa.me оны қажет етпейді

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var message = document.querySelector("#message").value;

    var url = "https://wa.me/" + phoneNumber + "?text="
        + "📌 *Новое сообщение!* %0a%0a"
        + "👤 *Имя:* " + name + "%0a"
        + "📧 *Email:* " + email + "%0a"
        + "📱 *Телефон:* " + phone + "%0a"
        + "💬 *Сообщение:* %0a" + message + "%0a%0a"
        + "🕒 *Отправлено:* " + new Date().toLocaleString();

    window.open(url, '_blank').focus();
    return false;
}


// Send WhatsApp signup
function sendSignup() {
    var phoneNumber = "77763333536";

    var name = document.querySelector("#signup-name").value;
    var phone = document.querySelector("#signup-phone").value;
    var course = document.querySelector("#signup-course").value;
    var branch = document.querySelector("#signup-branch").value;

    var url = "https://wa.me/" + phoneNumber + "?text="
        + "📌 *Новая заявка на курс!* %0a%0a"
        + "👤 *Имя:* " + name + "%0a"
        + "📱 *Телефон:* " + phone + "%0a"
        + "📚 *Курс:* " + course + "%0a"
        + "🏫 *Филиал:* " + branch + "%0a";
        + "🕒 *Отправлено:* " + new Date().toLocaleString();
    
    window.open(url, '_blank').focus();
    return false;
}


// кнопканы алу
const backToTop = document.getElementById("backToTop");

// scroll кезінде көрсету/жасыру
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

// басқанда бет басына апару
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Функция для смены анимации
function changeAnimation(animationType) {
    const style = document.createElement('style');
    style.id = 'customAnimation';
    document.head.appendChild(style);
            
    if (animationType === 'takeOff') {
        style.innerHTML = `
            .camp-button:hover .plane-icon {
                animation: takeOff 1.2s ease-in-out;
            }
                    
            @keyframes takeOff {
                0% { transform: translateX(0) translateY(0) rotate(0); }
                25% { transform: translateX(8px) translateY(-6px) rotate(-5deg); }
                50% { transform: translateX(15px) translateY(-12px) rotate(0); }
                75% { transform: translateX(22px) translateY(-6px) rotate(5deg); }
                100% { transform: translateX(0) translateY(0) rotate(0); }
            }
        `;
    } else if (animationType === 'flyAround') {
        style.innerHTML = `
            .camp-button:hover .plane-icon {
                animation: flyAround 1.5s ease-in-out;
            }
                    
            @keyframes flyAround {
                0% { transform: translateX(0) rotate(0); }
                25% { transform: translateX(10px) translateY(-5px) rotate(-10deg); }
                50% { transform: translateX(5px) translateY(-10px) rotate(0); }
                75% { transform: translateX(10px) translateY(-5px) rotate(10deg); }
                100% { transform: translateX(0) rotate(0); }
            }
        `;
    }
}
        
// Функция для смены цвета самолета
function changeColor() {
    const planeIcon = document.querySelector('.plane-icon');
    const colors = ['#ffd700', '#00ff00', '#00ffff', '#ff00ff', '#ffffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    planeIcon.style.color = randomColor;
}
        
// Добавляем эффект изменения цвета при наведении
document.querySelector('.camp-button').addEventListener('mouseenter', function() {
    this.querySelector('.plane-icon').style.color = '#ffd700';
});
        
document.querySelector('.camp-button').addEventListener('mouseleave', function() {
    this.querySelector('.plane-icon').style.color = '';
});


// Функционал чат-бота
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const quickButtons = document.querySelectorAll('.quick-btn');
    
    // Открытие/закрытие чата
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('hidden');
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.classList.add('hidden');
    });
    
    // Отправка сообщения
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatbotInput.value = '';
            
            // Имитация ответа бота
            setTimeout(() => {
                botResponse(message);
            }, 1000);
        }
    }
    
    chatbotSend.addEventListener('click', sendMessage);
    
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Быстрые кнопки
    quickButtons.forEach(button => {
        button.addEventListener('click', function() {
            const message = this.getAttribute('data-msg');
            addMessage(message, 'user');
            
            // Имитация ответа бота
            setTimeout(() => {
                botResponse(message);
            }, 1000);
        });
    });
    
    // Добавление сообщения в чат
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
        
        const messageContent = document.createElement('div');
        messageContent.textContent = text;
        
        messageDiv.appendChild(messageContent);
        chatbotMessages.appendChild(messageDiv);
        
        // Прокрутка к последнему сообщению
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Простые ответы бота
    function botResponse(userMessage) {
        let response = '';
        
        if (userMessage.toLowerCase().includes('курс')) {
            response = 'У нас есть различные курсы: для начинающих, продвинутых, подготовка к IELTS. Какой уровень у вас?';
        } else if (userMessage.toLowerCase().includes('цена') || userMessage.toLowerCase().includes('стоимость')) {
            response = 'Стоимость зависит от выбранного курса и формата обучения. Базовый курс стоит 29 500 ₸ в месяц. Хотите узнать подробнее?';
        } else if (userMessage.toLowerCase().includes('филиал')) {
            response = 'У нас два филиала в Шымкенте: в районе Янги Шахар и на Севере. Какой вам удобнее?';
        } else if (userMessage.toLowerCase().includes('запис') || userMessage.toLowerCase().includes('занят')) {
            response = 'Чтобы записаться, оставьте заявку на сайте или позвоните по номеру +7 776 333 35 36. Можете указать удобное время для звонка?';
        } else {
            response = 'Извините, я еще учусь. Для получения подробной информации позвоните по номеру +7 776 333 35 36 или оставьте заявку на сайте.';
        }
        
        addMessage(response, 'bot');
    }
});