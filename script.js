/**
 * Peda Group & Alif Chemicals - Main JavaScript Controller
 * Includes: Multi-language Engine, Theme Switcher, Interactive Maps, and API Integration
 * Backend: Render (Node/Express)
 */

// --- 0. CONFIGURATION ---
const API_ENDPOINT = "https://peda-backend-ppi0.onrender.com/api/contact";

// --- 1. THE COMPLETE TRANSLATION DICTIONARY ---
const translations = {
    en: {
        // Navigation & Global
        nav_home: "Home",
        nav_services: "Our Brands",
        nav_contact: "Contact Us",
        nav_info: "Info",
        section_title: "Home",
        footer_about: "Committed to delivering industrial and food solutions across the Kurdistan region.",
        footer_location: "Duhok Industrial City",
        
        // Index Page Cards
        card_title_peda: "Peda Food Factory",
        card_desc_peda: "We provide the highest quality local grain processing and food packaging.",
        card_title_moreno: "Coffee Service",
        card_desc_moreno: "Professional coffee equipment, premium beans, and maintenance for offices.",
        card_title_clean: "Alif Chemical",
        card_desc_clean: "High-performance industrial detergents and professional cleaning solutions.",

        // Chemical Page (Alif)
        chem_page_tag: "Professional Formulation",
        chem_page_title: "Chemical Solutions",
        chem_page_subtitle: "Engineered in Kurdistan for exceptional purity and performance across industrial sectors.",
        prod_1_title: "Heavy-Duty Degreaser",
        prod_1_desc: "A high-performance solvent engineered to break down complex greases and industrial contaminants.",
        prod_2_title: "Multi-Surface Cleaner",
        prod_2_desc: "Our flagship versatile detergent. Concentrated formula lifts grime effectively without residues.",
        prod_3_title: "Medical Disinfectant",
        prod_3_desc: "Hospital-grade disinfectant formulated for critical sterilization in medical environments.",
        prod_request_info: "Request Formulation Specs",

        // Info & Maps Page
        info_title: "Find Us",
        info_subtitle: "Our headquarters and distribution centers are located in the heart of Duhok.",
        map_current: "Current Location",
        delivery_title: "Delivery Zones",
        delivery_desc: "Full coverage across Duhok, Zakho, and Erbil. Weekly trips to Sulaymaniyah.",

        // Contact Form
        ph_name: "Full Name",
        ph_phone: "Phone Number",
        ph_msg: "Your Message",
        contact_subject: "Select Subject",
        opt_question: "General Question",
        opt_delivery: "Delivery Inquiry",
        send_btn: "Send Message",
        card_title_dogtas: "Doğtaş Duhok",
    card_desc_dogtas: "Discover sleek, modern Turkish furniture. Now open in Duhok.",
footer_about: "Committed to delivering industrial and food solutions across the Kurdistan region."
    },
    ar: {
        // Navigation & Global
        nav_home: "الرئيسية",
        nav_services: "علاماتنا التجارية",
        nav_contact: "اتصل بنا",
        nav_info: "معلومات",
        section_title: "الرئيسية",
        footer_about: "ملتزمون بتقديم الحلول الصناعية والغذائية في جميع أنحاء إقليم كوردستان.",
        footer_location: "مدينة دهوك الصناعية",

        // Index Page Cards
        card_title_peda: "بيدا للمواد الغذائية",
        card_desc_peda: "نحن نقدم أعلى جودة في معالجة الحبوب المحلية وتغليف المواد الغذائية.",
        card_title_moreno: "خدمة القهوة",
        card_desc_moreno: "معدات قهوة احترافية، حبوب ممتازة، وصيانة للمكاتب والفعاليات.",
        card_title_clean: "الحلول الكيميائية",
        card_desc_clean: "منظفات صناعية عالية الأداء وحلول تنظيف احترافية لجميع القطاعات.",

        // Chemical Page (Alif)
        chem_page_tag: "تركيبات احترافية",
        chem_page_title: "الحلول الكيميائية",
        chem_page_subtitle: "تم تصميمها في كوردستان لضمان نقاء وأداء استثنائيين في القطاعات الصناعية.",
        prod_1_title: "مزيل الشحوم القوي",
        prod_1_desc: "مذيب عالي الأداء مصمم لتفكيك الشحوم والزيوت والملوثات الصناعية المعقدة.",
        prod_2_title: "منظف متعدد الأسطح",
        prod_2_desc: "منظفنا الرائد لجميع الأسطح الصلبة. تركيبة مركزة تزيل الأوساخ بفعالية.",
        prod_3_title: "مطهر طبي",
        prod_3_desc: "مطهر عالي الجودة مصمم للتعقيم الدقيق في البيئات الطبية والعيادات.",
        prod_request_info: "طلب مواصفات التركيبة",

        // Info & Maps Page
        info_title: "جدنا هنا",
        info_subtitle: "يقع مقرنا الرئيسي ومراكز التوزيع في قلب مدينة دهوك.",

        // Contact Form
        ph_name: "الاسم الكامل",
        ph_phone: "رقم الهاتف",
        ph_msg: "رسالتك",
        contact_subject: "اختر الموضوع",
        send_btn: "إرسال الرسالة",
        card_title_dogtas: "دوغتاش دهوك",
card_desc_dogtas: "اكتشف الأثاث التركي العصري والأنيق. مفتوح الآن في دوهوك.",
footer_about: "ملتزمون بتقديم الحلول الصناعية والغذائية في جميع أنحاء إقليم كوردستان."
    },
    ku: {
        // Navigation & Global
        nav_home: "سەرەکی",
        nav_services: "براندەکانی مە",
        nav_contact: "پەیوەندی",
        nav_info: "پێزانین",
        section_title: "سەرەکی",
        footer_about: "پابەندین ب پێشکێشکرنا چارەسەریێن پیشەسازی و خۆراک ل سەرانسەری هەرێما کوردستانێ.",
        footer_location: "شاری پیشەسازی دهۆک",

        // Index Page Cards
        card_title_peda: "پێدا فود",
        card_desc_peda: "ئێمە بەرزترین کوالێتی چارەسەرکردنی دانەوێڵەی ناوخۆیی و بەستەکردنی خۆراک دابین دەکەین.",
        card_title_moreno: "خزمەتگوزاری قاوە",
        card_desc_moreno: "ئامێری قاوەی پیشەگەرانە، دەنکە قاوەی نایاب، و چاککردنەوە بۆ ئۆفیسان.",
        card_title_clean: "چارەسەریێن کیمیاوی",
        card_desc_clean: "پاقژکەرێن پیشەسازی یێن ب هێز و چارەسەریێن پاقژکرنێ یێن پرۆفیشناڵ.",

        // Chemical Page (Alif)
        chem_page_tag: "داڕشتنا پرۆفیشناڵ",
        chem_page_title: "چارەسەریێن کیمیاوی",
        chem_page_subtitle: "ل کوردستان هاتییە ئەندازیارکرن بۆ پاقژی و ئەنجامێن نایاب د کەرتێن پیشەسازیدا.",
        prod_1_title: "چەوریبەرێ بهێز",
        prod_1_desc: "حەلالکەرەکێ پرۆفیشناڵ بۆ ژناڤبرنا چەوری و رۆن و پیسیێن پیشەسازی لسەر ئامێران.",
        prod_2_title: "پاقژکەرێ گشتی",
        prod_2_desc: "بەرهەمێ مە یێ سەرەکی بۆ هەمی جورێن ڕوویان. فۆرمولەکا خەست کە پیسیێ ب ساناهی لادەت.",
        prod_3_title: "دژەپەیداکەرێ پزیشکی",
        prod_3_desc: "پاقژکەر و دژەپەیداکەرێ تایبەت بۆ نەخۆشخانە و تاقیگەهان لدیڤ پیڤەرێن بلند.",
        prod_request_info: "داواکرنا زانیاریێن فۆرمولەی",

        // Info & Maps Page
        info_title: "مە ببینە",
        info_subtitle: "بارەگایێ مە یێ سەرەکی و سەنتەرێن بەلاڤکرنێ ل دلێ دهۆکێ نە.",

        // Contact Form
        ph_name: "ناوی تەواو",
        ph_phone: "ژمارەی مۆبایل",
        ph_msg: "ناما تە",
        contact_subject: "بابەت هەڵبژێرە",
        send_btn: "نامە بنێرە",
        card_title_dogtas: "دۆغتاش دهۆک",
card_desc_dogtas: "کەلوپەلێن تورکی یێن مۆدێرن ببینە. نوکه ل دوهوكى ڤەکرییە.",
footer_about: "پاپەندین ب پێشکێشکرنا چارەسەریێن پیشەسازی و خارنێ ل سەرتاسەری هەرێما کوردستانێ."
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

// --- 3. LOCATION DATA & MODAL LOGIC ---
const locationData = {
    'duhok_factory': {
        title: "Peda Food Factory",
        desc: "Our primary industrial processing unit for grains and food packaging in the Duhok Industrial Zone.",
        maps: "https://www.google.com/maps/contrib/100082280556290457690/reviews",
        tiktok: "https://www.tiktok.com/@pedagroup",
        insta: "https://www.instagram.com/pedagroup",
        color: "blue"
    },
    'duhok_moreno': {
        title: "Moreno Coffee - Duhok",
        desc: "Premium coffee, fresh bakery, and a relaxed atmosphere. Located on Malta Street.",
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103138.38466186414!2d43.92138139599544!3d36.18911578330089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722fe13443461%3A0x3e01d633a109407!2sErbil!5e0!3m2!1sen!2siq!4v17000000000005",
        tiktok: "https://www.tiktok.com/@morenocoffee",
        insta: "https://www.instagram.com/moreno.duhok",
        color: "amber"
    },
    'erbil_moreno': {
        title: "Moreno Caffe - Erbil",
        desc: "Our flagship Erbil location in Naznaz. International cuisine and specialty coffee until 2:00 AM.",
        maps: "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT205WU5qRnNjVmRMVG5oeGEzQmxSSE42V0Y4d05GRRAB!2m1!1s0x40072380c3c27e91:0x22fddd854953d4d0",
        tiktok: "https://www.tiktok.com/@morenoerbil",
        insta: "https://www.instagram.com/moreno.erbil",
        color: "amber"
    },
    'erbil_alif': {
        title: "Alif Chemical Solutions",
        desc: "Specialized industrial detergent and chemical formulation center serving the Erbil district.",
        maps: "https://www.google.com/maps/contrib/100082266622551552104/reviews",
        tiktok: "#",
        insta: "https://www.instagram.com/alif.chemicals",
        color: "slate"
    }
};

function openLocationPopup(key) {
    const data = locationData[key];
    if (!data) return;

    // Get translations for buttons
    const lang = localStorage.getItem('preferredLang') || 'en';
    const btnMaps = translations[lang].btn_directions || "Open Maps";

    // Inject data into Modal
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-maps-link').href = data.maps;
    document.getElementById('modal-tiktok').href = data.tiktok;
    document.getElementById('modal-insta').href = data.insta;
    
    // Change Button Color based on brand
    const mainBtn = document.getElementById('modal-maps-link');
    mainBtn.className = `w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
        data.color === 'amber' ? 'bg-amber-700 hover:bg-amber-800 text-white' : 
        data.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
        'bg-slate-800 hover:bg-slate-900 text-white'
    }`;

    // Show Modal
    const modal = document.getElementById('location-modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('.modal-content').classList.remove('scale-95');
    }, 10);
}

function closePopup() {
    const modal = document.getElementById('location-modal');
    modal.classList.add('opacity-0');
    modal.querySelector('.modal-content').classList.add('scale-95');
    setTimeout(() => modal.classList.add('hidden'), 300);
}


// --- 4. CORE UI & THEME INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // 4a. Universal Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // 4b. Language Dropdown Logic
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => { 
            e.stopPropagation(); 
            langDropdown.classList.toggle('hidden'); 
        });
        document.addEventListener('click', () => langDropdown.classList.add('hidden'));
    }

    // 4c. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => navMenu.classList.toggle('hidden'));
    }

    // 4d. Manual Page Redirects (For Cards)
    const cardSelectors = {
        'card-peda': 'peda.html',
        'card-moreno': 'moreno.html',
        'card-clean': 'chemical.html'
    };
    Object.entries(cardSelectors).forEach(([id, url]) => {
        const el = document.getElementById(id);
        if (el) el.onclick = () => window.location.href = url;
    });

    // 4e. Load Saved Preferences
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    translatePage(savedLang);
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');
    
    // Back to top button logic
    const backToTopBtn = document.getElementById('backToTop');
    if(backToTopBtn){
        backToTopBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});

// --- 5. CONTACT FORM HANDLER ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.onsubmit = async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        const formData = {
            name: document.getElementById('name').value,
            phone: "+964" + document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Sending...';

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Success! Your message has been sent to the factory.");
                contactForm.reset();
            } else {
                throw new Error("Server Error");
            }
        } catch (err) {
            alert("Error: Could not connect. Please try again in a few seconds.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    };
}

// --- 6. SCROLL EFFECTS ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('shadow-xl', 'bg-white/95', 'dark:bg-slate-900/95');
        } else {
            nav.classList.remove('shadow-xl');
        }
    }
    
    const backToTopBtn = document.getElementById('backToTop');
    if(backToTopBtn){
        if (window.scrollY > 400) {
            backToTopBtn.classList.remove('opacity-0', 'translate-y-10');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTopBtn.classList.add('opacity-0', 'translate-y-10');
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
    }
});

// --- 7. HERO SLIDER LOGIC ---
let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.getElementById('slider');
    if (!slider) return; // Prevents errors on pages without a slider
    
    const slides = slider.children;
    const totalSlides = slides.length;
    
    // Calculate the new slide index (loops back to start/end)
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Move the slider track
    // If the page is in RTL (Arabic/Kurdish), we move positive, otherwise negative
    const isRTL = document.documentElement.dir === 'rtl';
    const moveAmount = isRTL ? (currentSlide * 100) : -(currentSlide * 100);
    
    slider.style.transform = `translateX(${moveAmount}%)`;
}

// Auto-play the slider every 2 seconds (as you had set it)
setInterval(() => {
    const slider = document.getElementById('slider');
    if (slider) {
        moveSlide(1);
    }
}, 2000);
