/**
 * Peda Company & Moreno Coffee 
 * Main JavaScript Controller
 * Backend: Render (Node/Express)
 */

// --- 0. API CONFIGURATION ---
const API_ENDPOINT = "https://peda-backend-ppi0.onrender.com/api/contact";

// --- 1. TRANSLATION DICTIONARY ---
const translations = {
    en: {
        chem_page_tag: "Professional Formulation",
        chem_page_title: "Chemical Solutions",
        chem_page_subtitle: "Engineered in Duhok for exceptional purity and performance across industrial, commercial, and residential sectors.",
        prod_1_title: "Heavy-Duty Degreaser",
        prod_1_desc: "A high-performance solvent engineered to break down complex greases, oils, and industrial contaminants from machinery, automotive surfaces, and factory flooring.",
        prod_2_title: "Multi-Surface Cleaner",
        prod_2_desc: "Our flagship versatile detergent for all hard surfaces. Concentrated formula lifts grime effectively without residues, suitable for commercial maintenance and janitorial use.",
        prod_3_title: "Medical Disinfectant",
        prod_3_desc: "Hospital-grade disinfectant formulated for critical sterilization. Meets high purity standards for eliminate pathogens in medical environments, clinics, and laboratories.",
        prod_request_info: "Request Formulation Specs",
        card_title_clean: "Chemical",
        card_desc_clean: "High-performance industrial detergents and professional cleaning solutions for all sectors.",
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
        ph_name: "Full Name",
        ph_phone: "Phone Number",
        ph_msg: "Message",
        contact_subject: "Select Subject",
        opt_question: "General Question",
        opt_delivery: "Delivery Inquiry",
        send_btn: "Send Message"
    },
    ar: {
chem_page_tag: "تركيبات احترافية",
chem_page_title: "الحلول الكيميائية",
chem_page_subtitle: "تم تصميمها في دهوك لضمان نقاء وأداء استثنائيين في القطاعات الصناعية والتجارية والسكنية.",
prod_1_title: "مزيل الشحوم القوي",
prod_1_desc: "مذيب عالي الأداء مصمم لتفكيك الشحوم والزيوت والملوثات الصناعية المعقدة من الآلات والمركبات وأرضيات المصانع.",
prod_2_title: "منظف متعدد الأسطح",
prod_2_desc: "منظفنا الرائد لجميع الأسطح الصلبة. تركيبة مركزة تزيل الأوساخ بفعالية دون ترك رواسب، مناسبة للاستخدام التجاري وعمال النظافة.",
prod_3_title: "مطهر طبي",
prod_3_desc: "مطهر عالي الجودة مصمم للتعقيم الدقيق. يلبي معايير النقاء العالية للقضاء على مسببات الأمراض في البيئات الطبية والعيادات والمختبرات.",
prod_request_info: "طلب مواصفات التركيبة",
        card_title_clean: "كيميائية",
        card_desc_clean: "پاککەرەوەی پیشەسازی بەهێز و چارەسەری پاککردنەوەی پرۆفیشناڵ بۆ هەموو کەرتەکان.",
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
        ph_name: "الاسم الكامل",
        ph_phone: "رقم الهاتف",
        ph_msg: "الرسالة",
        contact_subject: "اختر الموضوع",
        opt_question: "سؤال عام",
        opt_delivery: "استفسار عن التوصيل",
        send_btn: "إرسال الرسالة"
    },
    ku: {
        chem_page_tag: "داڕشتنا پرۆفیشناڵ",
chem_page_title: "چارەسەریێن کیمیاوی",
chem_page_subtitle: "ل دهۆکێ هاتییە ئەندازیارکرن بۆ پاقژی و ئەنجامێن نایاب د کەرتێن پیشەسازی، بازرگانی و نیشتەجێبوونێدا.",
prod_1_title: "چەوریبەرێ بهێز",
prod_1_desc: "حەلالکەرەکێ پرۆفیشناڵ بۆ ژناڤبرنا چەوری و رۆن و پیسیێن پیشەسازی لسەر ئامێر و ترۆمبێل و عەردێ کارگەهان.",
prod_2_title: "پاقژکەرێ گشتی",
prod_2_desc: "بەرهەمێ مە یێ سەرەکی بۆ هەمی جورێن عەرد و ڕوویان. فۆرمولەکا خەست کە پیسیێ ب ساناهی لادەت بەێ لێهێلانا شوینەواران.",
prod_3_title: "دژەپەیداکەرێ پزیشکی",
prod_3_desc: "پاقژکەر و دژەپەیداکەرێ تایبەت بۆ نەخۆشخانە و تاقیگەهان. گونجایە بۆ ستەرلیزەکرنا ژینگەهێن پزیشکی لدیڤ پیڤەرێن بلند.",
prod_request_info: "داواکرنا زانیاریێن فۆرمولەی",
        card_title_clean: "کیمیایی",
        card_desc_clean: "منظفات صناعية عالية الأداء وحلول تنظيف احترافية لجميع القطاعات.",
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
    const isRTL = (lang === 'ar' || lang === 'ku');
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            const translation = translations[lang][key];
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    const langDisplay = document.getElementById('current-lang');
    if (langDisplay) {
        const names = { en: 'English', ar: 'العربية', ku: 'Kurdî' };
        langDisplay.textContent = names[lang];
    }

    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
}

// --- 3. CORE UI FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // Language Dropdown
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => { e.stopPropagation(); langDropdown.classList.toggle('hidden'); });
        document.addEventListener('click', () => langDropdown.classList.add('hidden'));
    }

    // Mobile Menu
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => navMenu.classList.toggle('hidden'));
    }

    // Page Navigation (Home Cards)
    const pedaCard = document.getElementById('card-peda');
    const morenoCard = document.getElementById('card-moreno');
    if (pedaCard) pedaCard.onclick = () => window.location.href = 'peda.html';
    if (morenoCard) morenoCard.onclick = () => window.location.href = 'moreno.html';

    // Back To Top Button
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

    // Load Saved Preferences
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    translatePage(savedLang);
});

// --- 4. SLIDER LOGIC ---
let currentSlide = 0;
function moveSlide(direction) {
    const slider = document.getElementById('slider');
    if (!slider) return;
    const slides = slider.children.length;
    currentSlide = (currentSlide + direction + slides) % slides;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// --- 5. CONTACT FORM HANDLER (WITH BACKEND SYNC) ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.onsubmit = async (e) => {
        e.preventDefault();
        
        const submitBtn = document.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        
        // Collect Data
        const formData = {
            name: document.getElementById('name').value,
            phone: "+964" + document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Loading State UI
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Success!
                alert("Thank you! Your message has been sent to Peda Factory.");
                contactForm.reset();
            } else {
                // If the backend exists but returns an error (like 404 or 500)
                const errorData = await response.json();
                console.error("API Error:", errorData);
                alert("Server error. Please try again later.");
            }
        } catch (error) {
            // If the backend is down (Render spins down after inactivity)
            console.error("Connection Failed:", error);
            alert("Could not connect to the server. Please check your internet or try in 30 seconds.");
        } finally {
            // Restore Button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    };
}
