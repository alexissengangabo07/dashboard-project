 let menuIcon = document.querySelector('.menu-icon');
 let menuToggleDiv = document.querySelector('#menu-toggle');
 let title = document.querySelector('.titles');

 let afficherMenu = () => {
     if (menuToggleDiv.style.visibility == 'visible') {
         menuToggleDiv.style.visibility = 'hidden';
     } else {
         menuToggleDiv.style.visibility = 'visible';
     }
 }

 //  afficherMenu();

 menuIcon.addEventListener('click', e => {
     afficherMenu();
 });