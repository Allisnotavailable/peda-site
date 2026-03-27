/**
 * PEDA FOOD FACTORY - Unified Production Script
 */

// --- 1. CONFIG & DATA ---
const API_URL = 'https://peda-backend-ppi0.onrender.com/api/contact'.trim();

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
    card_title_moreno: "Moreno Cafe",
    card_desc_moreno: "Moreno Cafe is an authentic Italian café and restaurant operating in both Erbil and Duhok, bringing Napoli flavors to Iraq.",
    footer_about: "Committed to delivering industrial and food solutions across the Kurdistan region.",
    footer_location: "Duhok Industrial City",
    current_name: "English",
    ph_name: "Full Name",
    ph_phone: "Phone Number",
    ph_msg: "How can we help?",
    contact_subject: "Select Subject",
    opt_question: "General Question",
    opt_delivery: "Delivery Inquiry",
    send_btn: "Send Message",
    alert_success: "Success! Your message has been sent to the factory.",
    alert_error: "Error: Could not connect to the server. Please try again later.",
    form_error: "Please fill in all boxes before sending."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_contact: "اتصل بنا",
    hero_1: "إنتاج عالي الجودة",
    hero_2: "التميز الصناعي",
    section_title: "علاماتنا التجارية",
    card_title_peda: "بيدا فود",
    card_desc_peda: "نحن نقدم أعلى جودة لتجهيز الحبوب المحلية وتغليف المواد الغذائية.",
    card_title_moreno: "مورينو كافيه",
    card_desc_moreno: "مورينو كافيه هو مقهى ومطعم إيطالي أصيل يعمل في كل من أربيل ودهوك، وينقل نكهات نابولي إلى العراق.",
    footer_about: "ملتزمون بتقديم الحلول الصناعية والغذائية في جميع أنحاء إقليم كردستان.",
    footer_location: "مدينة دهوك الصناعية",
    current_name: "العربية",
    ph_name: "الاسم الكامل",
    ph_phone: "رقم الهاتف",
    ph_msg: "كيف يمكننا مساعدتك؟",
    contact_subject: "اختر الموضوع",
    opt_question: "سؤال عام",
    opt_delivery: "استفسار عن التوصيل",
    send_btn: "إرسال الرسالة",
    alert_success: "تم بنجاح! تم إرسال رسالتك إلى المصنع.",
    alert_error: "خطأ: تعذر الاتصال بالسيرفر. يرجى المحاولة لاحقاً.",
    form_error: "يرجى ملء جميع الحقول قبل الإرسال."
  },
  ku: {
    nav_home: "سەرەکی",
    nav_services: "خزمەتگوزارییەکان",
    nav_contact: "پەیوەندی",
    hero_1: "بەرهەمهێنانی کوالێتی",
    hero_2: "نایابی پیشەسازی",
    section_title: "براندەکانی ئێمە",
    card_title_peda: "پێدا فود",
    card_desc_peda: "ئێمە بەرزترین کوالێتی پرۆسێسکردنی دانەوێڵەی ناوخۆیی و بەستەکردنی خۆراک دابین دەکەین.",
    card_title_moreno: "مۆرینۆ کافێ",
    card_desc_moreno: "مۆرینۆ کافێ کافێ و چێشتخانەیەکی ئیتاڵیی ڕەسەنە لە هەولێر و دهۆک، تامی ناپۆلی دەهێنێتە عێراق.",
    footer_about: "پابەندین بە پێشکەشکردنی چارەسەری پیشەسازی و خۆراک لە سەرانسەری هەرێمی کوردستان.",
    footer_location: "شاری پیشەسازی دهۆک",
    current_name: "Kurdî",
    ph_name: "ناوی تەواو",
    ph_phone: "ژمارەی مۆبایل",
    ph_msg: "چۆن دەتوانین یارمەتیت بدەین؟",
    contact_subject: "بابەت هەڵبژێرە",
    opt_question: "پسیاری گشتی",
    opt_delivery: "داواکاری گەیاندن",
    send_btn: "ناردنی نامە",
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

    // --- BRAND CARD NAVIGATION ---
    const pedaCard = document.getElementById('card-peda');
    const morenoCard = document.getElementById('card-moreno');

    pedaCard?.addEventListener('click', () => {
        pedaCard.classList.add('scale-95', 'opacity-50');
        setTimeout(() => window.location.href = 'peda.html', 200);
    });

    morenoCard?.addEventListener('click', () => {
        morenoCard.classList.add('scale-95', 'opacity-50');
        setTimeout(() => window.location.href = 'moreno.html', 200);
    });
});

// --- 4. BACKEND CONNECTION ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const lang = localStorage.getItem('selectedLang') || 'en';
        const t = translations[lang];
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        const nameVal = document.getElementById('name')?.value.trim();
        const phoneVal = document.getElementById('phone')?.value.trim();
        const subjectVal = document.getElementById('subject')?.value;
        const messageVal = document.getElementById('message')?.value.trim();

        if (!nameVal || !phoneVal || !subjectVal || !messageVal) {
            alert(t.form_error || "Please fill all boxes.");
            return;
        }

        submitBtn.disabled = true;
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerText = "...";

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: nameVal,
                    phone: "+964 " + phoneVal,
                    subject: subjectVal,
                    message: messageVal
                })
            });

            if (response.ok) {
                alert(t.alert_success);
                contactForm.reset();
            } else {
                throw new Error("Backend rejection");
            }
        } catch (error) {
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