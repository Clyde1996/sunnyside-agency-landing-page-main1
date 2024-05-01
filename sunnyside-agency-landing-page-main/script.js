// document.addEventListener('DOMContentLoaded', function() {
//     let icon = document.querySelector('.menu-toggle');
//     let menu = document.querySelector('.top-nav nav ul');

//     // Fonction pour ouvrir le menu hamburger
//     function openBurgerMenu() {
//         menu.classList.add('open');
//         icon.classList.add('open');
//     }

//     // Fonction pour fermer le menu hamburger
//     function closeBurgerMenu() {
//         menu.classList.remove('open');
//         icon.classList.remove('open');
//     }

//     function toggleResponsiveMenu() {
//         if (menu.classList.contains('open')) {
//             closeBurgerMenu();
//         } else {
//             openBurgerMenu();
//         }
//     }
    
//     // Ajoute un écouteur d'événements pour le clic sur l'icône du hamburger
//     icon.addEventListener("click", toggleResponsiveMenu);

//     // Ajoute des écouteurs d'événements pour le clic sur les liens du menu
//     document.querySelectorAll(".top-nav nav ul a").forEach(menuItem =>
//         menuItem.addEventListener("click", closeBurgerMenu)
//     );
// });