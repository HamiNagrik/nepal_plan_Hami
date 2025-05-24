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
        'hero-title': 'Welcome to Nepal - The Land of Himalayas',
        'hero-subtitle': 'Discover the rich tapestry of Nepal\'s 3000-year history, from the ancient Kirat dynasty to the modern federal democratic republic. Home to Mount Everest, birthplace of Buddha, and a melting pot of diverse cultures, traditions, and natural wonders.',
        'nepal-title': 'Nepal: Nature\'s Precious Gift',
        'nepal-subtitle': 'Rich in Mountains, Rivers, Forests, and Biodiversity - Nepal\'s Natural Resources',
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
        'footer-copyright': ' News--War. All rights reserved.',
        'nepal-hope-title': '1. Direction of Nepal\'s Hope and Future',
        'nepal-opportunities-title': '2. Development Opportunities',
        'nepal-education-title': '3. Education and Capacity Building',
        'nepal-health-title': '4. Healthcare and Wellness',
        'nepal-culture-title': '5. Cultural Heritage and Tourism'
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
        'hero-title': 'नेपालमा स्वागत छ - हिमालको भूमि',
        'hero-subtitle': '३००० वर्षको इतिहास भएको नेपालको समृद्ध परम्परा, प्राचीन किरात राजवंशदेखि आधुनिक संघीय लोकतान्त्रिक गणतन्त्रसम्म। सगरमाथा, बुद्धको जन्मस्थान, र विविध संस्कृति, परम्परा र प्राकृतिक आश्चर्यहरूको मिश्रण।',
        'nepal-title': 'नेपाल: प्रकृतिको अमूल्य उपहार',
        'nepal-subtitle': 'हिमाल, नदी, जंगल र जैविक विविधताको धनी - नेपालको प्राकृतिक सम्पदा'
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
        'hero-title': 'नेपाल में आपका स्वागत है - हिमालय की भूमि',
        'hero-subtitle': 'नेपाल के 3000 वर्ष के इतिहास की समृद्ध परंपरा, प्राचीन किरात राजवंश से लेकर आधुनिक संघीय लोकतांत्रिक गणराज्य तक। माउंट एवरेस्ट, बुद्ध की जन्मभूमि, और विविध संस्कृतियों, परंपराओं और प्राकृतिक आश्चर्यों का मिश्रण।',
        'nepal-title': 'नेपाल: प्रकृति का अनमोल उपहार',
        'nepal-subtitle': 'पहाड़ों, नदियों, जंगलों और जैव विविधता से समृद्ध - नेपाल के प्राकृतिक संसाधन'
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
            } else {
                // For elements that might contain both text and images
                const img = el.querySelector('img');
                if (img) {
                    // Keep the image and update only the text content
                    const textContent = el.childNodes[1] || el.childNodes[0];
                    if (textContent && textContent.nodeType === Node.TEXT_NODE) {
                        textContent.textContent = translations[language][key];
                    }
                } else {
                    el.textContent = translations[language][key];
                }
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
    document.body.style.fontFamily = language === 'nepali' ? 'Noto Sans Devanagari, sans-serif' : 'Poppins, sans-serif';
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
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
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

// News API configuration
const NEWS_API_KEY = 'ea7aa6a353674a7db3b41f858155ed74'; // Replace with your actual News API key
const NEWS_API_URL = 'https://newsapi.org/v2';

// Fallback news data in case API fails
const FALLBACK_NEWS = {
    world: [
        {
            title: "Global Economy Shows Signs of Recovery",
            description: "Major economies report positive growth indicators as markets stabilize.",
            url: "https://www.rt.com/news/",
            urlToImage: "images/world-economy.jpg",
            source: { name: "Global News" },
            publishedAt: new Date().toISOString()
        },
        {
            title: "International Peace Talks Progress",
            description: "Diplomatic efforts lead to breakthrough in regional conflicts.",
            url: "https://www.rt.com/news/",
            urlToImage: "images/peace-talks.jpg",
            source: { name: "World Affairs" },
            publishedAt: new Date().toISOString()
        }
    ],
    nepal: [
        {
            title: "नेपालको अर्थतन्त्रमा सकारात्मक संकेत",
            description: "पर्यटन र कृषि क्षेत्रमा वृद्धि देखिएको छ",
            url: "#",
            urlToImage: "images/nepal-economy.jpg",
            source: { name: "नेपाल समाचार" },
            publishedAt: new Date().toISOString()
        },
        {
            title: "नेपालमा नयाँ विकास परियोजना",
            description: "सरकारले नयाँ विकास योजना सुरु गर्ने",
            url: "#",
            urlToImage: "images/nepal-development.jpg",
            source: { name: "नेपाल समाचार" },
            publishedAt: new Date().toISOString()
        }
    ]
};

// Load news when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize news tabs
    const newsTabs = document.querySelectorAll('.news-tab');
    newsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            newsTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            // Load news for selected category
            loadNews(tab.dataset.tab);
        });
    });

    // Load initial news (world news by default)
    loadNews('world');
});

async function loadNews(type) {
    const newsGrid = document.getElementById('news-grid');
    const loadingElement = newsGrid.querySelector('.news-loading');
    
    try {
        // Show loading state
        loadingElement.style.display = 'flex';
        
        // Fetch news from our API
        const response = await fetch('/api/news');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.length > 0) {
            displayNews(data);
        } else {
            // Use fallback data if API returns no articles
            console.warn('No articles found from API, using fallback data');
            displayNews(FALLBACK_NEWS[type]);
        }
    } catch (error) {
        console.error('Error loading news:', error);
        // Use fallback data on error
        displayNews(FALLBACK_NEWS[type]);
    } finally {
        loadingElement.style.display = 'none';
    }
}

function displayNews(articles) {
    const newsGrid = document.getElementById('news-grid');
    
    // Remove loading element
    const loadingElement = newsGrid.querySelector('.news-loading');
    if (loadingElement) {
        loadingElement.remove();
    }
    
    // Display news articles
    newsGrid.innerHTML = articles.map(article => `
        <div class="news-card">
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <div class="news-meta">
                    <span class="news-source">${article.source.name}</span>
                    <span class="news-date">${new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
                <a href="${article.url}" target="_blank" class="news-link">Read More</a>
            </div>
        </div>
    `).join('');
}

// News handling functions
async function fetchNews() {
    try {
        const response = await fetch('/api/news');
        const news = await response.json();
        displayNews(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('news-grid').innerHTML = '<div class="news-error">Failed to load news. Please try again later.</div>';
    }
}

function displayNews(news) {
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = ''; // Clear loading spinner

    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h3>${item.title}</h3>
            <div class="source">${item.source}</div>
            <div class="timestamp">${item.timestamp}</div>
        `;
        newsGrid.appendChild(newsItem);
    });
}

// Initialize news when page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    // Refresh news every 5 minutes
    setInterval(fetchNews, 300000);
});

