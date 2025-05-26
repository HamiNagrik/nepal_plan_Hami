
// Language Toggle Functionality
        const englishBtn = document.getElementById('englishBtn');
        const nepaliBtn = document.getElementById('nepaliBtn');
        
        function setLanguage(lang) {
            if (lang === 'nepali') {
                document.body.classList.add('nepali');
                englishBtn.classList.remove('active');
                nepaliBtn.classList.add('active');
                // Store preference in localStorage
                localStorage.setItem('language', 'nepali');
            } else {
                document.body.classList.remove('nepali');
                englishBtn.classList.add('active');
                nepaliBtn.classList.remove('active');
                // Store preference in localStorage
                localStorage.setItem('language', 'english');
            }
        }
        
        // Event listeners for buttons
        englishBtn.addEventListener('click', () => setLanguage('english'));
        nepaliBtn.addEventListener('click', () => setLanguage('nepali'));
        
        // Check for saved language preference
        document.addEventListener('DOMContentLoaded', () => {
            const savedLanguage = localStorage.getItem('language') || 'english';
            setLanguage(savedLanguage);
        });
        // Initialize Chart.js
        const ctx = document.getElementById('developmentChart').getContext('2d');
        const developmentChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [
                    document.body.classList.contains('nepali') ? 'ऊर्जा' : 'Energy', 
                    document.body.classList.contains('nepali') ? 'यातायात' : 'Transport',
                    document.body.classList.contains('nepali') ? 'शिक्षा' : 'Education',
                    document.body.classList.contains('nepali') ? 'स्वास्थ्य' : 'Health',
                    document.body.classList.contains('nepali') ? 'कृषि' : 'Agriculture',
                    document.body.classList.contains('nepali') ? 'पर्यटन' : 'Tourism'
                ],
                datasets: [{
                    label: document.body.classList.contains('nepali') ? 'वर्तमान स्थिति' : 'Current Status',
                    data: [35, 28, 72, 65, 58, 45],
                    backgroundColor: 'rgba(220, 20, 60, 0.7)',
                    borderColor: 'rgba(220, 20, 60, 1)',
                    borderWidth: 1
                }, {
                    label: document.body.classList.contains('nepali') ? '२०३५ लक्ष्य' : '2035 Target',
                    data: [100, 100, 100, 100, 100, 100],
                    backgroundColor: 'rgba(0, 0, 128, 0.7)',
                    borderColor: 'rgba(0, 0, 128, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: 'white'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000
                }
            }
        });

        // Update chart labels when language changes
        function updateChartLanguage() {
            developmentChart.data.labels = [
                document.body.classList.contains('nepali') ? 'ऊर्जा' : 'Energy', 
                document.body.classList.contains('nepali') ? 'यातायात' : 'Transport',
                document.body.classList.contains('nepali') ? 'शिक्षा' : 'Education',
                document.body.classList.contains('nepali') ? 'स्वास्थ्य' : 'Health',
                document.body.classList.contains('nepali') ? 'कृषि' : 'Agriculture',
                document.body.classList.contains('nepali') ? 'पर्यटन' : 'Tourism'
            ];
            developmentChart.data.datasets[0].label = document.body.classList.contains('nepali') ? 'वर्तमान स्थिति' : 'Current Status';
            developmentChart.data.datasets[1].label = document.body.classList.contains('nepali') ? '२०३५ लक्ष्य' : '2035 Target';
            developmentChart.update();
        }

        // Animate progress bars
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const target = bar.getAttribute('data-target');
            bar.style.width = target + '%';
        });

        // Scroll to section
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize animations
        window.addEventListener('load', () => {
            animateTimeline();
        });

        window.addEventListener('scroll', () => {
            animateTimeline();
        });

        // Animate timeline items on scroll
        function animateTimeline() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            const windowHeight = window.innerHeight;
            
            timelineItems.forEach(item => {
                const itemPosition = item.getBoundingClientRect().top;
                
                if (itemPosition < windowHeight - 100) {
                    item.classList.add('active');
                }
            });
        }

        // Additional JavaScript functionality would continue here...
