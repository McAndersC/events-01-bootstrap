export const robox = (boxElementClassName, name, stageWidth, stageHeight) => {
  
    
    /*
    
        En reference til vores den classe vi sender med som "boxElementClassName" parameter.
    
    */
    const boxElement = document.querySelector(boxElementClassName);

    /*
    
        Vi sætter navnet på boksen med "name" parametereret.

    */
    boxElement.textContent = name;

    /*
    
        Vi opretter variabler for vores box bredde og højde.
    
    */
    let width = boxElement.getBoundingClientRect().width;
    let height = boxElement.getBoundingClientRect().height;

    // Vi opretter en variable for det antal pixels vi vil flytte boksen per "step".
    let increment = 100;


    /* 
    
        setPosition er funktionen der ret praktisk sætter x og/eller y og flytter vores boks.
        Vi giver den x og y og i funktioenen undersøger vi om den kan flyttes, blandt andet.
    
    */
    const setPosition = (x, y) => {


        // Hvis x er større end 300 så farver vi boksen rød, ellers farver vi boksen grøn.
        if(x > 300) {

            boxElement.style.backgroundColor = 'red';

        } else {

            boxElement.style.backgroundColor = 'green';
        }

        // Vi undersøger bevægelsen på X-Aksen

        // Hvis vores (x + boksens bredde) er større end (bredden af vores scene)
        if((x + width)  > stageWidth) {

            // Så sætter vi x til at være kanten af vores scene minus bredden af vores boks.
            x = stageWidth - width;

        } else if(x < 0) {

            // Vi sætter x til nul da vi ikke vil gå ud af scenen til venstre
            x = 0;

        }

        // Vi undersøger bevægelsen på Y-Aksen
        if((y + height) > stageHeight) {

            // Så sætter vi x til at være kanten af vores scene minus højden af vores boks.
            y = stageHeight - height;

        } else if (y < 0) {

            // Vi sætter x til nul da vi ikke vil gå ud af scenen opad.
            y = 0; 

        }

        /*
        
            Nu bentter vi X og Y værdierne til placere vores boks.
            
            Vi sætter boksens style element left og top til x og y. 
            Vi sætter 'px' på for at angive pixels.

        */

        boxElement.style.left = x + 'px';
        boxElement.style.top = y + 'px';
    

    };

    return {

        right : () => {

            setPosition(boxElement.offsetLeft + increment, boxElement.offsetTop);
      
        },
        left : () => {

            setPosition(boxElement.offsetLeft - increment,  boxElement.offsetTop);

        },
        up : () => {

            setPosition(boxElement.offsetLeft, boxElement.offsetTop - increment);

        },
        down : () => {

            setPosition(boxElement.offsetLeft,  boxElement.offsetTop + increment);

        }

    };

};