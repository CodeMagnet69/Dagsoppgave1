let brukerListe = [];



document.querySelector("#submitButton").addEventListener("click", function(event){
    event.preventDefault();

    let userName = document.querySelector("#userName").value;
    brukerListe.push(userName);

    const ul = document.querySelector("#brukerListe");
    const li = `<li> Takk til: ${brukerListe[brukerListe.length - 1]}</li>`;
    ul.insertAdjacentHTML("afterbegin", li);


    document.querySelector("#title").innerHTML = "Velkommen til siden, " + userName;

});