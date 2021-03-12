import html from './trailselect.html';
export const displayTrailSelectComponent = (selector) => {
    document.querySelector(selector).innerHTML = html;
};

