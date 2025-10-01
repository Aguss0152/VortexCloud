document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // 1. FUNCIONALIDAD DEL MENÚ HAMBURGUESA
    // ==========================================================
    const burgerContainer = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burgerContainer && navLinks) {
        const toggleButton = burgerContainer.querySelector('button');

        // Manejar el clic para abrir/cerrar
        toggleButton.addEventListener('click', () => {
            burgerContainer.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });

        // Cerrar el menú al hacer clic en cualquier enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerContainer.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }


    // ==========================================================
    // 2. EFECTO TYPEWRITER (MÁQUINA DE ESCRIBIR)
    // ==========================================================
    const words = ["negocio", "emprendimiento"];
    const targetElement = document.getElementById('typewriter');
    
    if (targetElement) { 
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 60;
        const pauseTime = 1000;

        function typeWriterEffect() {
            const currentWord = words[wordIndex];
            let timeout = typingSpeed;

            if (isDeleting) {
                targetElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                timeout = deletingSpeed;

                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length; 
                    timeout = typingSpeed * 2;
                }
            } else {
                targetElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentWord.length) {
                    isDeleting = true;
                    timeout = pauseTime;
                }
            }
            setTimeout(typeWriterEffect, timeout);
        }

        typeWriterEffect();
    }


    // ==========================================================
    // 3. VALIDACIÓN DEL FORMULARIO DE CONTACTO
    // ==========================================================
    const form = document.getElementById('contactForm');
    const statusMessage = document.getElementById('formStatus');

    if (form) { 
        form.addEventListener('submit', function (event) {
            
            let isValid = true;
            statusMessage.textContent = '';

            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');

            function setError(input, message) {
                const errorSpan = document.getElementById(`error-${input.id}`);
                const targetInput = document.getElementById(input.id); // Usamos el ID directamente
                if (errorSpan && targetInput) {
                    errorSpan.textContent = message;
                    targetInput.classList.add('input-error');
                    isValid = false;
                    event.preventDefault();
                }
            }

            function clearError(input) {
                const errorSpan = document.getElementById(`error-${input.id}`);
                const targetInput = document.getElementById(input.id);
                if (errorSpan && targetInput) {
                    errorSpan.textContent = '';
                    targetInput.classList.remove('input-error');
                }
            }
            
            // Limpieza de errores
            if(nombre) clearError(nombre);
            if(email) clearError(email);
            if(mensaje) clearError(mensaje);

            // Validación de Nombre
            if (nombre && nombre.value.trim() === '') {
                setError(nombre, 'Por favor, introduce tu nombre.');
            }
            
            // Validación de Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && email.value.trim() === '') {
                setError(email, 'El correo electrónico es obligatorio.');
            } else if (email && !emailPattern.test(email.value)) {
                setError(email, 'Introduce un formato de correo electrónico válido.');
            }

            // Validación de Mensaje
            if (mensaje && mensaje.value.trim() === '') {
                setError(mensaje, 'Necesitas detallar tu proyecto.');
            } else if (mensaje && mensaje.value.trim().length < 20) {
                setError(mensaje, 'El mensaje debe tener al menos 20 caracteres.');
            }

            if (!isValid) {
                statusMessage.textContent = 'Por favor, corrige los errores antes de enviar.';
                statusMessage.style.color = 'red';
            }
        });
    }


    // ==========================================================
    // 4. MANEJO DE EVENTOS (Redes y Proyectos)
    // ==========================================================
    
    // NOTA: Los botones #empezar, #cotizacion y los CTA de planes
    // funcionan con el atributo 'href' del HTML, no necesitan JS.

    const instagram = document.getElementById('instagram');
    const facebook = document.getElementById('facebook');
    const github = document.getElementById('github'); // Agregamos GitHub para completar la lista
    const studiotresd = document.getElementById('studiotresd'); 
    const aromabakery = document.getElementById('aromabakery');

    // Redes Sociales (Abren en nueva pestaña)
    if (instagram) {
        instagram.addEventListener('click', () => {
            window.open('https://www.instagram.com/vortexcloud_?igsh=MW0zMnVtdmc4MjZnag==', '_blank');
        });
    }
    if (facebook) {
        facebook.addEventListener('click', () => {
            window.open('https://www.facebook.com/share/1NsC2pTmVe/', '_blank');
        });
    }
    if (github) {
        // Asumiendo que quieres que GitHub abra en nueva pestaña
        github.addEventListener('click', () => {
            window.open('https://github.com/TuUsuarioDeGitHub', '_blank'); 
        });
    }
    // Proyecto Studio 3D
    if (studiotresd) {
        studiotresd.addEventListener('click', () => {
            window.open('https://studio3dshop.vercel.app', '_blank');
        });
    }
    // Proyecto Aroma Bakery
    if (aromabakery) {
        aromabakery.addEventListener('click', () => {
            window.open('https://aromabakery.netlify.app', '_blank');
        });
    }    
});