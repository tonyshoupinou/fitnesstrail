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


// export const displayGoHome = (element) => {
//     element.innerHTML = html;

// const monAutrePage = (name) => {
//     console.log("name")

// element.submit = () => {    
//     monAutrePage("name");

// const myForm = document.querySelector(".monForm");

// myForm.onsubmit = (e) => {
//         alert('En route');
//         displayLogin(e)
//         return false;


// const additionName = (a) => {
//     const result = a;
//     return result;

// }
// const element = document.querySelector("main")
// const resultName = additionName(a);

// }


// }