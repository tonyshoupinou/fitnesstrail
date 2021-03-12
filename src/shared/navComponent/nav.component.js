import template from './nav.component.html';

export const displayNav = () => {
    document.querySelector('header').innerHTML = template;
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
}