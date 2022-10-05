// const darkbtn = document.getElementsByClassName(".btn-dark");
let p=true;

function dark(){
    if(p==true){
        const  contain = document.querySelector(".container");
        console.log(contain);
        contain.classList.remove("white");
        contain.classList.add("black");
        const text = document.querySelector(".btn-dark");
        text.innerHTML="btn-light"
        p=false;
    }
    else{
        const contain = document.querySelector(".container");
        contain.classList.add("white");
        contain.classList.remove("black");
        const text = document.querySelector(".btn-dark");
        text.innerHTML="btn-dark"
        p=true;        
    }
}