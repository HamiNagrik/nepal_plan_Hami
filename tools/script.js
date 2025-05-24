let activeDropdown = null;

// Language translations object
const translations = {
    english: {
        'page-title': 'Hami-Nepali | Plan Nepal -Hamro Nepal',
        'login-title': 'Login',
        'login-button': 'Login',
        'register-title': 'Register',
        'register-button': 'Register',
        'social-login-title': 'Social Login',
        'google-login': 'Login with Google',
        'facebook-login': 'Login with Facebook',
        'nav-home': '🇳🇵 My Nepal 🇳🇵',
        'nav-beauty': '🌈 Beauty on Eye',
        'mero-plan': '🇳🇵🎯 My Plan 🌸',
        'nav-positivity': '🇳🇵 Nepal\'s Positivity 🌸',
        'nav-hope': '🕊️ But Hope Remains',
        'nav-youth': '👩‍🎓 Educated & Skilled Youth',
        'nav-plan': '🎯 My Plan',
        'nav-education': '📚 Education Plan',
        'nav-jobs': 'Jobs Available',
        'nav-homes': '🏠 Housing and Education',
        'nav-child-protection': 'Child Protection & Education',
        'nav-corruption': 'Corruption',
        'nav-corruption-how': '🇳🇵 How Nepal Became a Corrupt Nation? 🕳️',
        'nav-corruption-wealth': '🚫 Leaders\' Wealth',
        'nav-corruption-stop': '🚫 End Corruption',
        'nav-health': 'Healthcare Services 🩺',
        'nav-food': 'Food Security',
        'nav-stop-corruption': '🚫 Control Corruption',
        'nav-contact': 'Contact',
        'hero-title': '🇳🇵 Nepal: Land of Himalayas, Abode of Peace 🇳🇵',
        'hero-subtitle': 'Home to the majestic Himalayas, birthplace of Buddha, and rich in diverse cultures and traditions. Nepal\'s natural beauty, cultural heritage, and spiritual significance are unique in the world.',
        'myhero-title': '🇳🇵 Please Contact Us सम्पर्क गर्नुहोस् 🇳🇵',
        'myhero-subtitle': 'Home to the majestic Himalayas, birthplace of Buddha, and rich in diverse cultures and traditions. Nepal\'s natural beauty, cultural heritage, and spiritual significance are unique in the world.',
        'myhero-description': ' Please fill the form below to contact us !!! हामीलाई सम्पर्क गर्नको लागि तलको फारम भर्नुहोस्।',
        'hero-description': 'Discover Nepal\'s journey towards food security and sustainable agriculture. Learn about innovative farming systems, food distribution networks, and initiatives to eliminate hunger while promoting agricultural self-sufficiency across urban and rural areas.',
        'nepal-title': '🇳🇵 Nepal: Nature\'s Precious Gift and Humanity\'s Heritage 🇳🇵',
        'nepal-subtitle': 'Rich in mountains, rivers, forests, and biodiversity - Preserving Nepal\'s natural wealth and cultural heritage is our shared responsibility',
        'sector-nature': '1. Mountains and Natural Beauty',
        'stat-peaks': 'Himalayan Peaks',
        'stat-peaks-desc': 'Above 8,000 meters',
        'stat-parks': 'National Parks',
        'stat-parks-desc': 'Protected Areas',
        'stat-biodiversity': 'Biodiversity',
        'stat-biodiversity-desc': 'Plant Species',
        'nature-description': 'Nepal is nature\'s precious gift. Its mountains, rivers, forests, and biodiversity are unique worldwide. Sagarmatha (Everest) is the world\'s highest peak, which has enhanced Nepal\'s glory.',
        'nature-progress': '100% Natural Resources',
        'nature-features': 'Natural Features',
        'nature-feature-1': 'Himalayan Mountain Range: Sagarmatha, Kanchenjunga, Dhaulagiri, Annapurna',
        'nature-feature-2': 'Sacred Lakes: Tilicho, Rara, Phewa, Begnas',
        'nature-feature-3': 'World Heritage Sites: Lumbini, Chitwan National Park, Kathmandu Valley',
        'nature-feature-4': 'Diverse Climate: From Tropical to Himalayan Regions',
        'nature-feature-5': 'World-Famous Trekking Routes',
        'nature-special': 'Special Natural Features',
        'nature-special-1': 'Kali Gandaki Gorge: World\'s Deepest Gorge',
        'nature-special-2': 'Rara Lake: Nepal\'s Largest Lake',
        'nature-special-3': 'Mustang: Living Museum of Ancient Tibetan Culture',
        'nature-special-4': 'Annapurna Conservation Area: World\'s Most Visited Trekking Area',
        'footer-title': 'MERO NEPAL',
        'footer-quote': '"Natural resources are Nepal\'s invaluable assets — conservation and wise use is the path to prosperity." 🇳🇵',
        'footer-description': 'Nepal is a beautiful country rich in natural resources. Mountains, rivers, forests, minerals, water resources, wildlife, and biodiversity are Nepal\'s most important assets.',
        'footer-design': 'Designed with ❤️ by Subash',
        'footer-copyright': '© 2025 News--War. All rights reserved.',
        'nepal-hope-title': '1. Direction of Nepal\'s Hope and Future',
        'nepal-opportunities-title': '2. Development Opportunities',
        'nepal-education-title': '3. Education and Capacity Building',
        'nepal-health-title': '4. Healthcare and Wellness',
        'nepal-culture-title': '5. Cultural Heritage and Tourism',
        'stat-farmers': '3M+',
        'stat-farmers-label': 'Farming Families',
        'stat-production': '85%',
        'stat-production-label': 'Food Production',
        'stat-land': '21%',
        'stat-land-label': 'Arable Land',
        'nepal-positivity-title': '🇳🇵 Nepal\'s Positivity 🌸',
        'nepal-positivity-subtitle': 'Nepal is a beautiful Himalayan nation in Asia. The world\'s highest peak, Mount Everest (Sagarmatha), is located in this country. Nepal is a land rich in diverse cultures, ethnicities, languages, and traditions.'
    },
    nepali: {
        'page-title': 'हामी-नेपाली | प्लान नेपाल -हाम्रो नेपाल',
        'login-title': 'लग इन',
        'login-button': 'लग इन',
        'register-title': 'दर्ता',
        'register-button': 'दर्ता',
        'social-login-title': 'सामाजिक लग इन',
        'google-login': 'गुगलबाट लग इन',
        'facebook-login': 'फेसबुकबाट लग इन',
        'nav-home': '🇳🇵 मेरो नेपाल 🇳🇵',
        'nav-beauty': '🌈 सौन्दर्य आँखाले देखिन्छ',
        'mero-plan': '🇳🇵 🎯 मेरो योजना 🌸',
        'nav-positivity': '🇳🇵 नेपालको सकारात्मकता 🌸',
        'nav-hope': '🕊️ तर आशा बाँकी छ',
        'nav-youth': '👩‍🎓 शिक्षित र सीपयुक्त युवा पुस्ता',
        'nav-plan': '🎯 मेरो योजना',
        'nav-education': '📚 शिक्षा योजना',
        'nav-jobs': 'रोजगारी उपलब्ध',
        'nav-homes': '🏠 आवास र शिक्षा',
        'nav-child-protection': 'बाल संरक्षण र शिक्षा',
        'nav-corruption': 'भ्रष्टाचार',
        'nav-corruption-how': '🇳🇵 नेपाल कसरी भ्रष्ट राष्ट्र बन्दै गयो? 🕳️',
        'nav-corruption-wealth': '🚫 नेताको सम्पत्ति',
        'nav-corruption-stop': '🚫 भ्रष्टाचार अन्त्य गर्ने',
        'nav-health': 'स्वास्थ्य सेवा 🩺',
        'nav-food': 'आहार सुनिश्चित',
        'nav-stop-corruption': '🚫 भ्रष्टाचार नियन्त्रण',
        'nav-contact': 'सम्पर्क',
        'hero-title': '🇳🇵 नेपाल: हिमालको भूमि, शान्तिको धाम 🇳🇵',
        'hero-subtitle': 'हिमालको गौरव, बुद्धको जन्मस्थान, र विविध संस्कृति र परम्पराको धनी नेपाल। यहाँको प्राकृतिक सौन्दर्य, सांस्कृतिक विरासत र आध्यात्मिक महत्त्व विश्वभरमा अद्वितीय छ।',    'myhero-title': ' 🇳🇵 Please Contact Us सम्पर्क गर्नुहोस् 🇳🇵',
        'myhero-subtitle': 'हिमालको गौरव, बुद्धको जन्मस्थान, र विविध संस्कृति र परम्पराको धनी नेपाल। यहाँको प्राकृतिक सौन्दर्य, सांस्कृतिक विरासत र आध्यात्मिक महत्त्व विश्वभरमा अद्वितीय छ।',
        'myhero-description': 'नेपालको खाद्य सुरक्षा र टिकाऊ कृषिको यात्रा पत्ता लगाउनुहोस्। नवीन कृषि प्रणाली, खाद्य वितरण नेटवर्क, र शहरी र ग्रामीण क्षेत्रहरूमा कृषि आत्मनिर्भरतालाई बढावा दिने कार्यक्रमहरूको बारेमा जान्नुहोस्।',
        'nepal-title': '🇳🇵 नेपाल: प्रकृतिको अमूल्य उपहार र मानवताको धरोहर 🇳🇵',
        'nepal-subtitle': 'हिमाल, नदी, जंगल र जैविक विविधताको धनी - नेपालको प्राकृतिक सम्पदा र सांस्कृतिक विरासतको संरक्षण हाम्रो साझा जिम्मेवारी',
        'stat-farmers': '३० लाख+',
        'stat-farmers-label': 'कृषक परिवार',
        'stat-production': '८५%',
        'stat-production-label': 'खाद्य उत्पादन',
        'stat-land': '२१%',
        'stat-land-label': 'कृषि योग्य जमिन',
        'footer-title': 'मेरो नेपाल',
        'footer-quote': '"प्राकृतिक स्रोतहरू नेपालको अमूल्य सम्पत्ति हो — संरक्षण र बुद्धिमत्तापूर्ण उपयोग समृद्धिको मार्ग हो।" 🇳🇵',
        'footer-description': 'नेपाल प्राकृतिक स्रोतहरूले भरिपूर्ण सुन्दर देश हो। हिमाल, नदी, जंगल, खनिज, जलस्रोत, वन्यजन्तु र जैविक विविधता नेपालको सबैभन्दा महत्वपूर्ण सम्पत्ति हो।',
        'footer-design': 'सुबासद्वारा ❤️ संग डिजाइन गरिएको',
        'footer-copyright': '© २०२५ न्युज--युद्ध। सर्वाधिकार सुरक्षित।',
        'nepal-positivity-title': '🇳🇵 नेपालको सकारात्मकता 🌸',
        'nepal-positivity-subtitle': 'नेपाल एशियाको एक सुन्दर हिमाली राष्ट्र हो। विश्वको सर्वोच्च शिखर सगरमाथा (Mount Everest) यही देशमा अवस्थित छ। नेपाल विविध संस्कृति, जातजाति, भाषा र परम्पराले भरिएको देश'
    },
    hindi: {
        'page-title': 'हमी-नेपाली | प्लान नेपाल -हमारा नेपाल',
        'login-title': 'लॉग इन',
        'login-button': 'लॉग इन',
        'register-title': 'पंजीकरण',
        'register-button': 'पंजीकरण',
        'social-login-title': 'सामाजिक लॉग इन',
        'google-login': 'गूगल से लॉग इन',
        'facebook-login': 'फेसबुक से लॉग इन',
        'nav-home': '🇳🇵 मेरा नेपाल 🇳🇵',
        'nav-beauty': '🌈 आँखों में सौंदर्य',
        'mero-plan': '🇳🇵 🎯 मेरी योजना 🌸',
        'nav-positivity': '🇳🇵 नेपाल की सकारात्मकता 🌸',
        'nav-hope': '🕊️ लेकिन आशा बाकी है',
        'nav-youth': '👩‍🎓 शिक्षित और कुशल युवा पीढ़ी',
        'nav-plan': '🎯 मेरी योजना',
        'nav-education': '📚 शिक्षा योजना',
        'nav-jobs': 'रोजगार उपलब्ध',
        'nav-homes': '🏠 आवास और शिक्षा',
        'nav-child-protection': 'बाल संरक्षण और शिक्षा',
        'nav-corruption': 'भ्रष्टाचार',
        'nav-corruption-how': '🇳🇵 नेपाल कैसे भ्रष्ट राष्ट्र बन गया? 🕳️',
        'nav-corruption-wealth': '🚫 नेताओं की संपत्ति',
        'nav-corruption-stop': '🚫 भ्रष्टाचार को अंत',
        'nav-health': 'स्वास्थ्य सेवाएं 🩺',
        'nav-food': 'खाद्य सुरक्षा',
        'nav-stop-corruption': '🚫 भ्रष्टाचार नियंत्रण',
        'nav-contact': 'संपर्क',
        'hero-title': '🇳🇵 नेपाल: हिमालय की भूमि, शांति का धाम 🇳🇵',
        'hero-subtitle': 'महान हिमालय का घर, बुद्ध की जन्मभूमि, और विविध संस्कृतियों और परंपराओं से समृद्ध नेपाल। यहां की प्राकृतिक सुंदरता, सांस्कृतिक विरासत और आध्यात्मिक महत्व दुनिया में अद्वितीय है।',
        'hero-description': 'नेपाल की खाद्य सुरक्षा और स्थायी कृषि की यात्रा की खोज करें। नवीन कृषि प्रणालियों, खाद्य वितरण नेटवर्क, और शहरी और ग्रामीण क्षेत्रों में कृषि आत्मनिर्भरता को बढ़ावा देने वाले कार्यक्रमों के बारे में जानें।',
        'nepal-title': '🇳🇵 नेपाल: प्रकृति का अनमोल उपहार और मानवता की धरोहर 🇳🇵',
        'nepal-subtitle': 'पहाड़ों, नदियों, जंगलों और जैव विविधता से समृद्ध - नेपाल की प्राकृतिक संपदा और सांस्कृतिक विरासत का संरक्षण हमारी साझा जिम्मेदारी है',
        'stat-farmers': '३० लाख+',
        'stat-farmers-label': 'किसान परिवार',
        'stat-production': '८५%',
        'stat-production-label': 'खाद्य उत्पादन',
        'stat-land': '२१%',
        'stat-land-label': 'कृषि योग्य भूमि',
        'footer-title': 'मेरा नेपाल',
        'footer-quote': '"प्राकृतिक संसाधन नेपाल की अमूल्य संपत्ति हैं — संरक्षण और बुद्धिमान उपयोग समृद्धि का मार्ग है।" 🇳🇵',
        'footer-description': 'नेपाल प्राकृतिक संसाधनों से भरपूर सुंदर देश है। पहाड़, नदियाँ, जंगल, खनिज, जल संसाधन, वन्यजीव और जैव विविधता नेपाल की सबसे महत्वपूर्ण संपत्ति हैं।',
        'footer-design': 'सुबास द्वारा ❤️ के साथ डिज़ाइन किया गया',
        'footer-copyright': '© २०२५ न्यूज़--युद्ध। सर्वाधिकार सुरक्षित।',
        'nepal-positivity-title': '🇳🇵 नेपाल की सकारात्मकता 🌸',
        'nepal-positivity-subtitle': 'नेपाल एशिया का एक सुंदर हिमालयी राष्ट्र है। विश्व की सबसे ऊंची चोटी माउंट एवरेस्ट (सागरमाथा) इस देश में स्थित है। नेपाल विविध संस्कृतियों, जातियों, भाषाओं और परंपराओं से भरा देश है।'
    }
};

// Hero section content
const heroContent = {
    english: {
        title: "🇳🇵 Nepal: Where Nature's Beauty Meets Human Spirit 🇳🇵",
        subtitle: "Discover the magic of Nepal - where majestic mountains touch the sky, ancient traditions whisper through valleys, and every sunrise brings new hope.",
        quote: "In the heart of the Himalayas, Nepal stands as a testament to nature's grandeur and human resilience."
    },
    nepali: {
        title: "🇳🇵 नेपाल: प्रकृतिको सौन्दर्य र मानव आत्माको मिलनस्थल 🇳🇵",
        subtitle: "नेपालको जादु पत्ता लगाउनुहोस् - जहाँ गौरवशाली हिमाल आकाशलाई छुन्छ, प्राचीन परम्पराहरू उपत्यकाहरूमा फुस्कन्छन्, र हरेक सूर्योदयले नयाँ आशा ल्याउँछ।",
        quote: "हिमालको मुटुमा, नेपाल प्रकृतिको वैभव र मानव सहनशीलताको प्रमाणको रूपमा उभिएको छ।"
    },
    hindi: {
        title: "🇳🇵 नेपाल: जहां प्रकृति की सुंदरता मानव आत्मा से मिलती है 🇳🇵",
        subtitle: "नेपाल के जादू की खोज करें - जहां भव्य हिमालय आकाश को छूते हैं, प्राचीन परंपराएं घाटियों में फुसफुसाती हैं, और हर सूर्योदय नई आशा लाता है।",
        quote: "हिमालय के हृदय में, नेपाल प्रकृति की भव्यता और मानव लचीलेपन का प्रमाण है।"
    }
};

// Nepal container content
const nepalContainerContent = {
    english: {
        title: "🇳🇵 Nepal: Nature's Precious Gift and Humanity's Heritage 🇳🇵",
        subtitle: "Rich in mountains, rivers, forests, and biodiversity - Preserving Nepal's natural wealth and cultural heritage is our shared responsibility"
    },
    nepali: {
        title: "🇳🇵 नेपाल: प्रकृतिको अमूल्य उपहार र मानवताको धरोहर 🇳🇵",
        subtitle: "हिमाल, नदी, जंगल र जैविक विविधताको धनी - नेपालको प्राकृतिक सम्पदा र सांस्कृतिक विरासतको संरक्षण हाम्रो साझा जिम्मेवारी"
    },
    hindi: {
        title: "🇳🇵 नेपाल: प्रकृति का अनमोल उपहार और मानवता की विरासत 🇳🇵",
        subtitle: "पहाड़ों, नदियों, जंगलों और जैव विविधता से समृद्ध - नेपाल की प्राकृतिक संपदा और सांस्कृतिक विरासत का संरक्षण हमारी साझा जिम्मेदारी है"
    }
};

// Function to update hero content
function updateHeroContent(language) {
    const heroSection = document.querySelector('.hero');
    const heroContentDiv = document.querySelector('.hero-content');
    
    if (heroSection && heroContentDiv) {
        const content = heroContent[language];
        
        // Create hero content structure
        heroContentDiv.innerHTML = `
            <h1 class="hero-title">${content.title}</h1>
            <p class="hero-subtitle">${content.subtitle}</p>
            <div class="hero-quote">${content.quote}</div>
        `;
        
        // Add animation classes
        heroContentDiv.classList.add('fade-in');
    }
}



// Function to update Nepal container content
function updateNepalContainer(language) {
    const nepalHeader = document.querySelector('.nepal-header');
    const nepalContainer = document.querySelector('.nepal-container');
    
    if (nepalHeader && nepalContainer) {
        const content = nepalContainerContent[language];
        
        // Update Nepal container content
        nepalContainer.innerHTML = `
            <h1 class="nepal-title">${content.title}</h1>
            <h2 class="nepal-subtitle">${content.subtitle}</h2>
        `;
        
        // Add animation classes
        nepalContainer.classList.add('fade-in');
    }
}

// Function to handle language switching
function switchLanguage(language) {
    updateHeroContent(language);
    updateNepalContainer(language);
    
    // Update other language-dependent content
    updateAllContent(language);
}

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    const defaultLanguage = 'nepali';
    switchLanguage(defaultLanguage);
    
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    // Observe elements for scroll animations
    document.querySelectorAll('.hero-content, .nepal-container').forEach(el => {
        observer.observe(el);
    });
});

function switchLanguage(language) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            // Handle different types of elements
            if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = translations[language][key];
            } else if (el.tagName === 'INPUT' && el.type === 'text') {
                el.placeholder = translations[language][key];
            } else if (el.querySelector('img')) {
                // If there's a <font> after the <img>, update its text
                const font = el.querySelector('font');
                if (font) {
                    font.textContent = translations[language][key];
                } else {
                    // Otherwise, update the text node after the <img>
                    const img = el.querySelector('img');
                    let next = img.nextSibling;
                    // Find the first text node or element node after the image
                    while (next && (next.nodeType !== Node.TEXT_NODE && next.nodeType !== Node.ELEMENT_NODE)) {
                        next = next.nextSibling;
                    }
                    if (next && next.nodeType === Node.TEXT_NODE) {
                        next.textContent = translations[language][key];
                    } else if (next && next.nodeType === Node.ELEMENT_NODE) {
                        next.textContent = translations[language][key];
                    }
                }
            } else {
                el.textContent = translations[language][key];
            }
        }
    });

    // Update page title
    document.title = translations[language]['page-title'] || document.title;

    // Update language selector
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        languageSelector.value = language;
    }

    // Store the language preference
    localStorage.setItem('preferredLanguage', language);

    // Update font family based on language
    document.body.style.fontFamily = language === 'nepali' || language === 'hindi' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif';

    // Update footer content visibility
    const footerContents = document.querySelectorAll('.nepali-content, .english-content, .hindi-content');
    footerContents.forEach(content => {
        content.style.display = 'none';
    });
    
    const selectedContent = document.querySelector(`.${language}-content`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Set initial language based on stored preference or default to Nepali
document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('preferredLanguage') || 'nepali';
    switchLanguage(storedLanguage);
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    if (activeDropdown) {
        hideDropdown(activeDropdown);
    }
}

function toggleSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const backdrop = document.getElementById('side-menu-backdrop');
    sideMenu.classList.toggle('active');
    backdrop.classList.toggle('active');
}

function showDropdown(dropdownId) {
    if (activeDropdown === dropdownId) return;
    if (activeDropdown) {
        hideDropdown(activeDropdown);
    }

    const dropdown = document.getElementById(dropdownId);
    const backdrop = document.getElementById('dropdown-backdrop');
    if (dropdown) {
        // Ensure all images in the dropdown have proper sources
        const dropdownImages = dropdown.querySelectorAll('img');
        dropdownImages.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                // Only fix the path if it's a relative path
                if (!src.startsWith('http') && !src.startsWith('/')) {
                    const imageName = src.split('/').pop();
                    img.src = `images/${imageName}`;
                }
            }
        });

        dropdown.classList.add('active');
        backdrop.classList.add('active');
        document.getElementById('navbar').classList.add('active');
        activeDropdown = dropdownId;

        // Animate dropdown items
        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });
    }
}

function hideDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const backdrop = document.getElementById('dropdown-backdrop');
    if (dropdown) {
        dropdown.classList.remove('active');
        backdrop.classList.remove('active');
        document.getElementById('navbar').classList.remove('active');
        activeDropdown = null;

        // Reset animation for dropdown items
        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach(item => {
            item.classList.remove('animate');
        });
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const messageDiv = document.getElementById('login-message');

    // Basic validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Please enter a valid email.';
        return;
    }
    if (password.length < 6) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Password must be at least 6 characters.';
        return;
    }

    // Mock login success
    messageDiv.className = 'success';
    messageDiv.textContent = 'Login successful!';
    document.getElementById('login-form').reset();
    setTimeout(() => {
        toggleSideMenu();
        messageDiv.textContent = '';
    }, 1500);
}

function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const messageDiv = document.getElementById('register-message');

    // Basic validation
    if (username.length < 3) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Username must be at least 3 characters.';
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Please enter a valid email.';
        return;
    }
    if (password.length < 6) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Password must be at least 6 characters.';
        return;
    }
    if (password !== confirmPassword) {
        messageDiv.className = 'error';
        messageDiv.textContent = 'Passwords do not match.';
        return;
    }

    // Mock register success
    messageDiv.className = 'success';
    messageDiv.textContent = 'Registration successful!';
    document.getElementById('register-form').reset();
    setTimeout(() => {
        toggleSideMenu();
        messageDiv.textContent = '';
    }, 1500);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        if (activeDropdown) {
            hideDropdown(activeDropdown);
        }
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Handle dropdown interactions
document.querySelectorAll('.nav-link').forEach(link => {
    const dropdownId = link.getAttribute('data-dropdown');
    if (window.innerWidth > 768) {
        link.addEventListener('mouseenter', () => showDropdown(dropdownId));
        link.addEventListener('mouseleave', () => setTimeout(() => {
            if (!document.querySelector(`#${dropdownId}:hover`)) {
                hideDropdown(dropdownId);
            }
        }, 300));
        document.getElementById(dropdownId).addEventListener('mouseenter', () => {
            showDropdown(dropdownId);
        });
        document.getElementById(dropdownId).addEventListener('mouseleave', () => {
            hideDropdown(dropdownId);
        });
    } else {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showDropdown(dropdownId);
        });
    }
});

// Close dropdown when clicking backdrop
document.getElementById('dropdown-backdrop').addEventListener('click', () => {
    if (activeDropdown) {
        hideDropdown(activeDropdown);
    }
});

// Close side menu when clicking backdrop
document.getElementById('side-menu-backdrop').addEventListener('click', () => {
    toggleSideMenu();
});

// Show more details (simulated)
function showMore(sectorId) {
    const sector = document.getElementById(sectorId);
    const newContent = document.createElement("div");
    newContent.innerHTML = `
        <h3 style="margin-top:20px;color:#1a5276">अतिरिक्त विवरण</h3>
        <p>यस योजनाको कार्यान्वयनका लागि निम्न कदमहरू अपनाइनेछ:</p>
        <ul>
            <li>त्रैमासिक प्रगति मूल्याङ्कन</li>
            <li>स्थानीय सरकार संग समन्वय</li>
            <li>निजीक्षेत्रको सहभागिता</li>
        </ul>
        <button class="btn" onclick="closeDetails(this)">बन्द गर्नुहोस्</button>
    `;
    sector.appendChild(newContent);
}

function closeDetails(button) {
    button.parentElement.remove();
}

// Initialize - animate first sector
document.addEventListener("DOMContentLoaded", function() {
    // Open first sector by default
    document.querySelector(".sector h2").click();
    
    // Add animation to list items
    const items = document.querySelectorAll("li");
    items.forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
        item.style.opacity = "0";
    });
});

// Fade-in animation for sections
const sections = document.querySelectorAll('.section-hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Toggle detailed content
const buttons = document.querySelectorAll('.btn-animate');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('open');
    });
});

function toggleNepalSector(contentId) {
    const content = document.getElementById(contentId);
    const icon = content.previousElementSibling.querySelector('.nepal-toggle-icon');
    
    // Toggle content visibility
    content.classList.toggle('nepal-content-active');
    
    // Toggle icon
    icon.textContent = content.classList.contains('nepal-content-active') ? '−' : '+';
    
    // Animate action items if content is being shown
    if (content.classList.contains('nepal-content-active')) {
        const actionItems = content.querySelectorAll('.nepal-action-item');
        actionItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });
        
        // Animate progress bar if it exists
        const progressBar = content.querySelector('.nepal-progress-bar');
        if (progressBar) {
            animateNepalProgressBar(progressBar.id);
        }
    } else {
        // Remove animation classes when hiding
        const actionItems = content.querySelectorAll('.nepal-action-item');
        actionItems.forEach(item => {
            item.classList.remove('animate');
        });
    }
}

function animateNepalProgressBar(progressId) {
    const progressBar = document.getElementById(progressId);
    if (!progressBar) return;
    
    const targetWidth = progressBar.getAttribute('data-progress') || '100%';
    progressBar.style.width = '0%';
    
    setTimeout(() => {
        progressBar.style.width = targetWidth;
    }, 100);
}

// Add hover effect for action items
document.addEventListener('DOMContentLoaded', function() {
    const actionItems = document.querySelectorAll('.nepal-action-item');
    
    actionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(220, 61, 61, 0.05)';
        });
    });
    
    // Initialize first sector
    const firstSector = document.querySelector('.nepal-sector');
    if (firstSector) {
        const contentId = firstSector.querySelector('.nepal-sector-content').id;
        toggleNepalSector(contentId);
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };




    
    // Here you would typically send the form data to your server
    // For now, we'll just show a success message
    alert('धन्यवाद! तपाईंको सन्देश सफलतापूर्वक पठाइयो।');
    
    // Reset the form
    document.getElementById('contactForm').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        // Clear previous errors
        clearErrors();
        
        // Validate form
        if (!validateForm()) {
            e.preventDefault();
        }
    });
    
    function validateForm() {
        let isValid = true;
        
        // Validate name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            showError(name, 'कृपया आफ्नो नाम लेख्नुहोस्');
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            showError(email, 'कृपया इमेल ठेगाना लेख्नुहोस्');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'कृपया वैध इमेल ठेगाना लेख्नुहोस्');
            isValid = false;
        }
        
        // Validate subject
        const subject = document.getElementById('subject');
        if (subject.value === '') {
            showError(subject, 'कृपया विषय छान्नुहोस्');
            isValid = false;
        }
        
        // Validate message
        const message = document.getElementById('message');
        if (message.value.trim() === '') {
            showError(message, 'कृपया सन्देश लेख्नुहोस्');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'सन्देश धेरै छोटो छ (कम्तिमा १० अक्षर)');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.textContent = message;
        formGroup.appendChild(errorElement);
        input.style.borderColor = '#e74c3c';
    }
    
    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
        
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
        });
    }
});

//handle form submission

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Disable submit button during submission
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Show success message
            alert(data.message);
            form.reset();
        } else {
            // Show error messages
            if (data.errors) {
                for (const field in data.errors) {
                    const input = form.querySelector(`[name="${field}"]`);
                    if (input) {
                        input.style.borderColor = 'red';
                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'error-message';
                        errorDiv.style.color = 'red';
                        errorDiv.textContent = data.errors[field];
                        input.parentNode.appendChild(errorDiv);
                    }
                }
            }
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'पठाउनुहोस्';
    });
});

 // Responsive adjustments
        function adjustLayout() {
            const contactGrid = document.querySelector('.contact-grid');
            if (window.innerWidth < 768) {
                // Mobile-specific adjustments if needed
            } else {
                // Desktop layout
            }
        }
        
        // Run on load and resize
        window.addEventListener('load', adjustLayout);
        window.addEventListener('resize', adjustLayout);



        // Only for Video section


                // Toggle functionality for the sector
        document.querySelector('.mero-nepal-sector-header').addEventListener('click', function() {
            const content = document.querySelector('.mero-nepal-sector-content');
            const icon = document.querySelector('.mero-nepal-toggle-icon');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                icon.textContent = '-';
            } else {
                content.style.display = 'none';
                icon.textContent = '+';
            }
        });
        
        // Video modal functionality
        const videoModal = document.getElementById('videoModal');
        const videoPlayer = document.getElementById('videoPlayer');
        
        // Open modal with selected video
        document.querySelectorAll('.mero-nepal-video-card').forEach(card => {
            card.addEventListener('click', function() {
                const videoSrc = this.getAttribute('data-video');
                videoPlayer.src = videoSrc;
                videoModal.style.display = 'flex';
                videoPlayer.play();
            });
        });
        
        // Close modal
        function closeVideoModal() {
            videoModal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
        
        // Close when clicking outside video
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });




       