import { toaster } from './modules/toasts.js';
import { robox } from './modules/robox.js';
import { controls } from './modules/controls.js';
import { debug } from './modules/debug.js';

/* 


    Vi arbejder med Eventlistners.


*/



/* 


    Her benytter vi "load" eventen på "window". 
    
    På den måde er vi sikker på siden er loaded, lige som hvis vi bruger "defer" på vores script tag.


*/
window.addEventListener('load', () => {

    // Her skaber vi én udgave af toaster.
    let toastMaster = toaster();

    // Vi sender en besked til vores toaster.
    toastMaster.show('En Toast Besked.');



    /* 
    
        Nu arbejder vi med vores Box Stage. Altså det område den skal bevæge sig på.

        Vi opretter en reference til ".stage" elementet.
        Vi finder bredden og højden.
    
    */
    let stage = document.querySelector('.stage');
    let stageWidth = stage.getBoundingClientRect().width;
    let stageHeight = stage.getBoundingClientRect().height;

    // Nu opretter vi èn udgave af robox.
    /*
    
        1. Parameter : ".box1" er classe navnet på vores boks i html´en.
        2. Parameter : "Box Name" er navnet vi skriver i boksen.
        3. Parameter : "stageWidth" : den bredde som vi begrænser vores boks til at flytte. 
        3. Parameter : "stageHeight" : den højde som vi begrænser vores boks til at flytte. 
    
        Hvis vi ændre højde og bredde, så skal vi også ændre i css, en lige nu. (Men behøver vi det?)
    */
    let boxInstance = robox('.box1', 'Box Name', stageWidth, stageHeight);
    

    /* Her kalder vi metoderne left, right, down og up. På vores robox instance. */
    document.addEventListener('keydown', (e) => {

        switch (e.key) {
            case 'ArrowLeft':

                boxInstance.left();
                break;

            case 'ArrowRight':

                boxInstance.right();
                break;
            
            case 'ArrowDown':

                boxInstance.down();
                break;

            case 'ArrowUp':

                boxInstance.up();
                break;

            default:
                break;
        }

    });

    controls(boxInstance);
    debug();
});

