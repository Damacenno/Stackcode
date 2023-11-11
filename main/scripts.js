const card  = document.querySelectorAll('.servCard');

card.forEach(element => {
    element.addEventListener("click",function(){
        window.location.href = "produtos.html?=";
    });
});