export const controls = (roboxInstance) => {

    /* 
    
        Vi modtager en ference til den robox instance vi har skabt i index.js.
    
    */


    /*
    
        Vi henter alle knapper i controls.
    
    */
    const btns = document.querySelectorAll('.btn');

    /* 
    
    
        Her er funktionen der modtager en klik event fra en knap.

    
    */

    const onControlBtnClickHandler = (e) => {

        /*
        
            Vi finder vores dataset/data-attribut variabel.
            "direction".

            Og vi benytter nu switch til at afgøre hvilken vej vi skal gå.

        */

        switch (e.target.dataset.direction) {
            case 'left':

                roboxInstance.left();

                break;
            case 'right':

                roboxInstance.right();

                break;
            case 'up':

                roboxInstance.up();

                break;
            case 'down':

                roboxInstance.down();

            break;
            default:

                roboxInstance.down();

                break;
        }

    };

    /* 
    
        Vi loop´er, løber, over alle knap elementerne.
    
    */
    btns.forEach( (btn) => {


        /*
        
            Vi tilføjer en 'click' event til hver knap.
            og click eventen kalder 'onControlBtnClickHandler' = On Control Btn Click Handler.
        
        */
        btn.addEventListener('click', onControlBtnClickHandler);
      

    });
    
};