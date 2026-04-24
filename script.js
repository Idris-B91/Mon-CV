
const menuBtn = document.querySelector('#menu-btn');
const menuLinks = document.querySelector('#menu-links');
const overlay = document.querySelector('#overlay');
const menuAnchors = document.querySelectorAll('#menu-links a');

menuBtn.addEventListener('click', function(){
    const estOuvert = menuLinks.classList.contains('open');

    if (estOuvert){
        menuLinks.classList.remove('open');
        overlay.style.display = 'none';
        menuBtn.setAttribute('aria-expanded', 'false');
    }else{
        menuLinks.classList.add('open');
        overlay.style.display = 'block';
        menuBtn.setAttribute('aria-expanded', 'true');
    }
});

overlay.addEventListener('click', function() {
    menuLinks.classList.remove('open');
    overlay.style.display = 'none';
    menuBtn.setAttribute('aria-expanded', 'false');
});

menuAnchors.forEach(function(anchor) {
    anchor.addEventListener('click', function() {
        menuLinks.classList.remove('open');
        overlay.style.display = 'none';
        menuBtn.setAttribute('aria-expanded', 'false');
    });
});