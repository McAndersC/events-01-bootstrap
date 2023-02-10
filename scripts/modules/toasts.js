export const toaster = () => {

    const toast = document.querySelector('.toast');

    const clearMessage = () => {
        toast.classList.remove('active');
    };

    const printMessage = (message) => {

            toast.textContent = message;
            toast.classList.add('active');
            setTimeout(() => clearMessage(), 3000);
    };



    console.log('Toast');

    return {
        show: printMessage
    };

};