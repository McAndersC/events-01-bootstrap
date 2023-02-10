export const toaster = () => {

    /*
    
        Henter Reference
    
    */
    const toast = document.querySelector('.toast');

    // Metode til at fjerne vores besked.
    const clearMessage = () => {
        toast.classList.remove('active');
    };

    // Metode til at udskriv vores besked
    const printMessage = (message) => {

            toast.textContent = message;
            toast.classList.add('active');

            // Vi kalder en timeout efter 3 sekunder.
            setTimeout(() => clearMessage(), 3000);
    };


    // Vi "udstiller" metoden "show" men kalder i virkeligheden printMessage metoden. 
    return {
        show: printMessage
    };

};