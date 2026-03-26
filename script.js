/**
 * PEDA FOOD FACTORY - Unified Production Script
 * Handles: Live Cloud API, Translations, Theme, Mobile Nav, & Slider
 */

// --- 1. CONFIG & DATA ---
// .trim() ensures no accidental spaces break the connection
const API_URL = 'https://peda-backend-ppi0.onrender.com/api/contact'.trim();

const translations = {
    en: {
        nav_home: "Home", nav_services: "Services", nav_contact: "Contact Us",
        hero_1: "Quality Production", hero_2: "Industrial Excellence",
        section_title: "Our Brands", card_title: "Peda Food",
        card_desc: "We provide the highest quality local grain processing and food packaging.",
        footer_about: "Committed to delivering industrial and food solutions across the Kurdistan region.",
        footer_location: "Duhok Industrial City",
        current_name: "English", ph_name: "Full Name", ph_email: "Email", ph_msg: "How can we help?",
        contact_subject: "Select Subject", opt_question: "General Question", 
        opt_delivery: "Delivery Inquiry", send_btn: "Send Message",
        alert_success: "Success! Your message has been sent to the factory.",
        alert_error: "Error: Could not connect to the server. Please try again later.",
        form_error: "Please fill in all boxes before sending."
    },
    ar: {
        nav_home: "الرئيسية", nav_services: "الخدمات", nav_contact: "اتصل بنا",
        hero_1: "إنتاج عالي الجودة", hero_2: "التميز الصناعي",
        section_title: "علاماتنا التجارية", card_title: "بيدا فود",
        card_desc: "نحن نقدم أعلى جودة لتجهيز الحبوب المحلية وتغليف المواد الغذائية.",
        footer_about: "ملتزمون بتقديم الحلول الصناعية والغذائية في جميع أنحاء إقليم كردستان.",
        footer_location: "مدينة دهوك الصناعية",
        current_name: "العربية", ph_name: "الاسم الكامل", ph_email: "البريد الإلكتروني", ph_msg: "كيف يمكننا مساعدتك؟",
        contact_subject: "اختر الموضوع", opt_question: "سؤال عام", 
        opt_delivery: "استفسار عن التوصيل", send_btn: "إرسال الرسالة",
        alert_success: "تم بنجاح! تم إرسال رسالتك إلى المصنع.",
        alert_error: "خطأ: تعذر الاتصال بالسيرفر. يرجى المحاولة لاحقاً.",
        form_error: "يرجى ملء جميع الحقول قبل الإرسال."
    },
    ku: {
        nav_home: "سەرەکی", nav_services: "خزمەتگوزارییەکان", nav_contact: "پەیوەندی",
        hero_1: "بەرهەمهێنانی کوالێتی", hero_2: "نایابی پیشەسازی",
        section_title: "براندەکانی ئێمە", card_title: "پێدا فود",
        card_desc: "ئێمە بەرزترین کوالێتی پرۆسێسکردنی دانەوێڵەی ناوخۆیی و بەستەکردنی خۆراک دابین دەکەین.",
        footer_about: "پابەندین بە پێشکەشکردنی چارەسەری پیشەسازی و خۆراک لە سەرانسەری هەرێمی کوردستان.",
        footer_location: "شاری پیشەسازی دهۆک",
        current_name: "Kurdî", ph_name: "ناوی تەواو", ph_email: "ئیمەیڵ", ph_msg: "چۆن دەتوانین یارمەتیت بدەین؟",
        contact_subject: "بابەت هەڵبژێرە", opt_question: "پسیاری گشتی", 
        opt_delivery: "داواکاری گەیاندن", send_btn: "ناردنی نامە",
        alert_success: "سەرکەوتوو بوو! نامەکەت بۆ کارگەکە ناردرا.",
        alert_error: "هەڵە: ناتوانرێت پەیوەندی بە سێرڤەرەوە بکرێت. تکایە دواتر هەوڵ بدەرەوە.",
        form_error: "تکایە هەموو خانەکان پڕبکەرەوە پێش ناردن."
    }
};

// --- 2. TRANSLATION ENGINE ---
function translatePage(lang) {
    const data = translations[lang];
    if (!data) return;

    localStorage.setItem('selectedLang', lang);
    document.documentElement.dir = (lang === 'ar' || lang === 'ku') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    const langLabel = document.getElementById('current-lang');
    if (langLabel) langLabel.innerText = data.current_name;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = data[key];
            } else if (el.tagName === 'OPTION') {
                el.text = data[key];
            } else {
                el.innerText = data[key];
            }
        }
    });
}

// --- 3. UI HANDLERS ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    translatePage(savedLang);

    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const langBtn = document.getElementById('lang-btn');
    const langDrop = document.getElementById('lang-dropdown');
    const themeBtn = document.getElementById('theme-toggle');

    themeBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });

    navToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        navMenu?.classList.toggle('hidden');
        langDrop?.classList.add('hidden');
    });

    langBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        langDrop?.classList.toggle('hidden');
        navMenu?.classList.add('hidden');
    });

    document.addEventListener('click', () => {
        navMenu?.classList.add('hidden');
        langDrop?.classList.add('hidden');
    });
});

// --- 4. BACKEND CONNECTION (FIXED) ---
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const lang = localStorage.getItem('selectedLang') || 'en';
        const t = translations[lang];
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // Grab Inputs
        const nameVal = document.getElementById('name')?.value.trim();
        const emailVal = document.getElementById('email')?.value.trim();
        const subjectVal = document.getElementById('subject')?.value;
        const messageVal = document.getElementById('message')?.value.trim();

        if (!nameVal || !emailVal || !subjectVal || !messageVal) {
            alert(t.form_error || "Please fill all boxes.");
            return;
        }

        // Loading State
        submitBtn.disabled = true;
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerText = "...";

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                mode: 'cors', // Crucial for cross-domain requests
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameVal,
                    email: emailVal,
                    subject: subjectVal,
                    message: messageVal
                })
            });

            if (response.ok) {
                alert(t.alert_success);
                contactForm.reset();
            } else {
                const errText = await response.text();
                console.error("Server Response Error:", errText);
                throw new Error("Backend rejection");
            }
        } catch (error) {
            console.error("FETCH ERROR:", error);
            alert(t.alert_error);
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
        }
    });
}

// --- 5. SLIDER LOGIC ---
let slidePos = 0;
window.moveSlide = (dir) => {
    const slider = document.getElementById('slider');
    if (!slider) return;

    const totalSlides = slider.children.length;
    const isRTL = document.documentElement.dir === 'rtl';

    slidePos = (slidePos + dir + totalSlides) % totalSlides;
    const multiplier = isRTL ? 1 : -1;
    slider.style.transform = `translateX(${slidePos * multiplier * 100}%)`;
};

// --- 6. BACK TO TOP ---
const btt = document.getElementById('backToTop');
if (btt) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btt.style.opacity = "1";
            btt.style.transform = "translateY(0)";
        } else {
            btt.style.opacity = "0";
            btt.style.transform = "translateY(20px)";
        }
    });
    btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}
