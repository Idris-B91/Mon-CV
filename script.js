const menuBtn = document.querySelector('#menu-btn');
const menuLinks = document.querySelector('#menu-links');
const overlay = document.querySelector('#overlay');
const menuAnchors = document.querySelectorAll('#menu-links a');
const nav = document.querySelector('nav');

function fermerMenu() {
    menuLinks.classList.remove('open');
    overlay.style.display = 'none';
    menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', function(){
    const estOuvert = menuLinks.classList.contains('open');

    if (estOuvert){
        fermerMenu();
    }else{
        menuLinks.classList.add('open');
        overlay.style.display = 'block';
        menuBtn.setAttribute('aria-expanded', 'true');
    }
});

overlay.addEventListener('click', fermerMenu);

menuAnchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {

        if (window.innerWidth < 768) {
            e.preventDefault(); 
            
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (menuLinks.classList.contains('open')) {

                function scrollerApresTransition() {
                    if (targetElement) {
                        const navHeight = nav.offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }

                    menuLinks.removeEventListener('transitionend', scrollerApresTransition);
                }

                menuLinks.addEventListener('transitionend', scrollerApresTransition);
                
                fermerMenu();
            } else {

                if (targetElement) {
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        } else {
            fermerMenu();
        }
    });
}); 

/* ============================================
   DARK MODE
   ============================================ */

const darkModeBtn = document.querySelector('#dark-mode-btn');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        darkModeBtn.textContent = '☀️';
        darkModeBtn.setAttribute('aria-label', 'Activer le mode clair');
    } else {
        document.body.classList.remove('dark');
        darkModeBtn.textContent = '🌙';
        darkModeBtn.setAttribute('aria-label', 'Activer le mode sombre');
    }
    // Sauvegarder le choix
    localStorage.setItem('theme', theme);
}

// Changer le thème au clic
darkModeBtn.addEventListener('click', function() {
    const estEnModeSombre = document.body.classList.contains('dark');
    if (estEnModeSombre) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// Restaurer le dernier thème choisi au chargement de la page
const themeSauvegardee = localStorage.getItem('theme');
if (themeSauvegardee) {
    setTheme(themeSauvegardee);
}
