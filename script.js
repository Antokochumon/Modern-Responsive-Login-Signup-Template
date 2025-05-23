
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#a29bfe",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Toggle between login and signup forms
    const authForms = document.getElementById('authForms');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        authForms.classList.add('flipped');
    });
    
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        authForms.classList.remove('flipped');
    });

    // Password visibility toggle
    function setupPasswordToggle(buttonId, inputId) {
        const toggleBtn = document.getElementById(buttonId);
        const passwordInput = document.getElementById(inputId);
        
        toggleBtn.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleBtn.classList.remove('fa-eye');
                toggleBtn.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                toggleBtn.classList.remove('fa-eye-slash');
                toggleBtn.classList.add('fa-eye');
            }
        });
    }
    
    setupPasswordToggle('toggleLoginPassword', 'password');
    setupPasswordToggle('toggleSignupPassword', 'signup-password');
    setupPasswordToggle('toggleConfirmPassword', 'confirm-password');

    // Form validation
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to your server
        console.log('Login attempt with:', { email, password });
        
        // Animation for successful login
        const glassCard = document.querySelector('.login-card');
        glassCard.style.transform = 'translateY(-20px)';
        glassCard.style.opacity = '0';
        
        setTimeout(() => {
            alert('Login successful! (This is a demo)');
            glassCard.style.transform = 'translateY(0)';
            glassCard.style.opacity = '1';
        }, 1000);
    });
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        // Here you would typically send the data to your server
        console.log('Signup attempt with:', { name, email, password });
        
        // Animation for successful signup
        const glassCard = document.querySelector('.signup-card');
        glassCard.style.transform = 'translateY(-20px)';
        glassCard.style.opacity = '0';
        
        setTimeout(() => {
            alert('Account created successfully! (This is a demo)');
            glassCard.style.transform = 'translateY(0)';
            glassCard.style.opacity = '1';
        }, 1000);
    });

    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.classList.contains('google') ? 'Google' :
                            this.classList.contains('apple') ? 'Apple' :
                            this.classList.contains('github') ? 'GitHub' :
                            this.classList.contains('facebook') ? 'Facebook' : 'Twitter';
            
            alert(`You chose to login with ${service} (This is a demo)`);
        });
    });

    // Floating label effect
    const inputs = document.querySelectorAll('.floating input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.querySelector('label').classList.add('active');
            this.parentNode.querySelector('.underline').style.width = '100%';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.querySelector('label').classList.remove('active');
            }
            this.parentNode.querySelector('.underline').style.width = '0';
        });
        
        // Check if input has value on page load
        if (input.value) {
            input.parentNode.querySelector('label').classList.add('active');
        }
    });
});
