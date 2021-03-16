export const homeRedirection = () => {
    const homeLink = document.querySelector('.home-link');

    homeLink.onclick = (e) => {
        e.preventDefault();
        console.log('ok')
    }
}
