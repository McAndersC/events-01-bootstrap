export const debug = () => {

    /*
    
        Debug til udskrivning af beskeder i bunden af vores side.

        Husk den arbejde lidt sammen med voes css i debugger.css filen.
    
    */
    const debuggerMessage = document.querySelector('.debugger-menssage');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let breakPoint = 'SMALL';

    debuggerMessage.innerHTML = `Breakpoint: ${breakPoint} Width: ${width}, Height: ${height}`;

    // Vi tilføjer en envent listener for resize.
    window.addEventListener('resize', (e) => {

        width = e.target.innerWidth;
        height = e.target.innerHeight;

   
        if(width < 727)
        {
            // Hvis vi ikker over 727 så er vi i "SMALL""
            breakPoint = 'SMALL';

        } else if (width > 728 && width < 1023) {

            // Hvis vi ikker over 727 og vi er under 1023 så er vi i "MEDIUM"
            breakPoint = 'MEDIUM';

        } else if (width > 1024) {

            // Alt over 1024 er "LARGE" 
            breakPoint = 'LARGE';

        }

        // Ud skriver i debuggeren Breakpoint, bredde og højde.
        debuggerMessage.innerHTML = `Breakpoint: ${breakPoint} Width: ${width}, Height: ${height}`;

    });
};