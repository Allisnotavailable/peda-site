/**
 * Peda Company & Moreno Coffee 
 * Main JavaScript Controller
 * Features: Multi-language, Dark Mode, UI Animations, and Form Handling
 */

// --- 1. TRANSLATION DICTIONARY ---
const translations = {
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_contact: "Contact Us",
        hero_1: "Quality Production",
        hero_2: "Industrial Excellence",
        section_title: "Our Brands",
        card_title_peda: "Peda Food",
        card_desc_peda: "We provide the highest quality local grain processing and food packaging.",
        card_title_moreno: "Coffee Service",
        card_desc_moreno: "Professional coffee equipment, premium beans, and maintenance for offices and events.",
        footer_about: "Committed to delivering industrial and food solutions across the Kurdistan region.",
        footer_location: "Duhok Industrial City",
        // Contact Form
        ph_name: "Full Name",
        ph_phone: "Phone Number",
        ph_msg: "Message",
        contact_subject: "Select Subject",
        opt_question: "General Question",
        opt_delivery: "Delivery Inquiry",
        send_btn: "Send Message"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_services: "خدماتنا",
        nav_contact: "اتصل بنا",
        hero_1: "إنتاج عالي الجودة",
        hero_2: "التميز الصناعي",
        section_title: "علاماتنا التجارية",
        card_title_peda: "بيدا للمواد الغذائية",
        card_desc_peda: "نحن نقدم أعلى جودة في معالجة الحبوب المحلية وتغليف المواد الغذائية.",
        card_title_moreno: "خدمة القهوة",
        card_desc_moreno: "معدات قهوة احترافية، حبوب ممتازة، وصيانة للمكاتب والفعاليات.",
        footer_about: "ملتزمون بتقديم الحلول الصناعية والغذائية في جميع أنحاء إقليم كوردستان.",
        footer_location: "مدينة دهوك الصناعية",
        // Contact Form
        ph_name: "الاسم الكامل",
        ph_phone: "رقم الهاتف",
        ph_msg: "الرسالة",
        contact_subject: "اختر الموضوع",
        opt_question: "سؤال عام",
        opt_delivery: "استفسار عن التوصيل",
        send_btn: "إرسال الرسالة"
    },
    ku: {
        nav_home: "سەرەکی",
        nav_services: "خزمەتگوزارییەکان",
        nav_contact: "پەیوەندی",
        hero_1: "بەرهەمهێنانی کوالێتی",
        hero_2: "ناوازەیی پیشەسازی",
        section_title: "براندەکانی ئێمە",
        card_title_peda: "پێدا فود",
        card_desc_peda: "ئێمە بەرزترین کوالێتی چارەسەرکردنی دانەوێڵەی ناوخۆیی و بەستەکردنی خۆراک دابین دەکەین.",
        card_title_moreno: "خزمەتگوزاری قاوە",
        card_desc_moreno: "ئامێری قاوەی پیشەگەرانە، دەنکە قاوەی نایاب، و چاککردنەوە بۆ ئۆفیس و بۆنەکان.",
        footer_about: "پابەندین بە پێشکەشکردنی چارەسەری پیشەسازی و خۆراک لە سەرانسەری هەرێمی کوردستان.",
        footer_location: "شاری پیشەسازی دهۆک",
        // Contact Form
        ph_name: "ناوی تەواو",
        ph_phone: "ژمارەی مۆبایل",
        ph_msg: "نامە",
        contact_subject: "بابەت هەڵبژێرە",
        opt_question: "پرسیاری گشتی",
        opt_delivery: "پرسیاری گەیاندن",
        send_btn: "نامە بنێرە"
    }
};

// --- 2. TRANSLATION ENGINE ---
function translatePage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;
    
    // Set text direction
    const isRTL = (lang === 'ar' || lang === 'ku');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Find all elements with a data-key and update them
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            const translation = translations[lang][key];
            
            // Handle placeholders for input/textarea
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Update Language Button Display
    const langDisplay = document.getElementById('current-lang');
    if (langDisplay) {
        const names = { en: 'English', ar: 'العربية', ku: 'Kurdî' };
        langDisplay.textContent = names[lang];
    }

    // Close dropdown after selection
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
}

// --- 3. CORE UI FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Theme
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Language Dropdown Toggle
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
        // Close if clicking outside
        document.addEventListener('click', () => langDropdown.classList.add('hidden'));
    }

    // Mobile Navigation Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
    }

    // Card Click Redirects (Home Page)
    const pedaCard = document.getElementById('card-peda');
    const morenoCard = document.getElementById('card-moreno');
    if (pedaCard) pedaCard.onclick = () => window.location.href = 'peda.html';
    if (morenoCard) morenoCard.onclick = () => window.location.href = 'moreno.html';

    // Back To Top Button visibility
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btt.style.opacity = '1';
            btt.style.transform = 'translateY(0)';
        } else {
            btt.style.opacity = '0';
            btt.style.transform = 'translateY(40px)';
        }
    });
    if (btt) btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // Load saved language or default to English
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    translatePage(savedLang);
});

// --- 4. SLIDER LOGIC (For Index Page) ---
let currentSlide = 0;
function moveSlide(direction) {
    const slider = document.getElementById('slider');
    if (!slider) return;
    const slides = slider.children.length;
    currentSlide = (currentSlide + direction + slides) % slides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Auto-slide every 6 seconds on the main page
if (document.getElementById('slider')) {
    setInterval(() => moveSlide(1), 6000);
}

// --- 5. CONTACT FORM HANDLER ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: "+964" + document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        console.log("Form Submitted Successfully:", formData);
        
        // Show success message (can be translated if needed)
        alert("Success! We will contact you at " + formData.phone + " shortly.");
        contactForm.reset();
    };
}
