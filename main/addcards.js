let cards = [
    ["Chat Groups","chat.jpg","Programa de Chat"],
    ["E-commerce","ecommerce.jpg","Venda online"],
    ["Teamslike","teams.jpg","Comunicação da empresa"],
    ["Musicas","appmusic.png","Ouça musicas"],
    ["CPD","logo.png","AQUI O CPD"],
  ];

for(var i=0;i<cards.length;i++){

    const createCard = document.createElement("div");
    createCard.classList.add('card');
    createCard.classList.add('servCard');
    const cardRow = document.getElementById("card-row");

    for(var b=0;b<3;b++){
        if(b==0){
            const header = document.createElement("div");
            header.classList.add('card-header');
            header.append(cards[i][b])
            createCard.appendChild(header);
        } else if (b==1){
            const body = document.createElement("div");
            body.classList.add('card-body');
            var img = document.createElement("img");
            img.src = "../img/"+cards[i][b];
            body.appendChild(img);
            createCard.appendChild(body);
        } else if (b==2){
            const footer = document.createElement("div");
            footer.classList.add('card-footer');
            footer.append(cards[i][b])
            createCard.appendChild(footer);
        } else {
            console.log("Erro na estrutura condiconal - Fora de tamanho");
        }
    }

    cardRow.appendChild(createCard);

}

const cardContainer = document.getElementById("card-container");
const cardArrow = document.createElement("img");
cardArrow.src = "../img/arrow.png";
cardArrow.classList.add('card-arrow');
cardContainer.appendChild(cardArrow);