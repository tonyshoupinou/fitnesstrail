import html from "./home.html";
export const displayHomeComponent = (selector) => {
    document.querySelector(selector).innerHTML = html;

    const goButton = document.querySelector('.btn');
    const userName = document.querySelector('#Name');

    goButton.onclick = () =>{

        console.log(userName.value);
        return false;
    }
};