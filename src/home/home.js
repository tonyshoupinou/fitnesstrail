import html from "./home.html";

export const displayHomeComponent = (selector) => {
    
    document.querySelector(selector).innerHTML = html;
};

