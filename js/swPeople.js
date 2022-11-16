(() => {
  const peopleArr = [
    "Luke Skywalker",
    "C-3PO",
    "Darth Vader",
    "Leia Organa",
    "Owen Lars",
    "Beru Whitesun lars",
    "R5-D4",
    "Biggs Darklighter",
    "Obi-Wan Kenobi",
  ];
  //creating elements:
  const ulSWPeople = document.createElement("ul");
  const imgCharacter = document.createElement("img");

  //getting html elements:
  const divSWPeople = document.querySelector("#list");
  const divSWPhoto = document.querySelector("#photo");

  //creating ul list of names from array:
  peopleArr.forEach((name) => {
    const liCharacter = document.createElement("li");
    liCharacter.append(name);
    liCharacter.classList.add("list_item");

    //adding 'hover' effect on li elements:
    liCharacter.addEventListener("mouseover", () => {
      divSWPhoto.appendChild(imgCharacter);
      imgCharacter.src = `https://starwars-visualguide.com/assets/img/characters/${
        peopleArr.indexOf(name) + 1
      }.jpg`;
    });
    liCharacter.addEventListener("mouseout", () => {
      divSWPhoto.removeChild(divSWPhoto.firstElementChild);
    });

    ulSWPeople.appendChild(liCharacter);
  });
  divSWPeople.appendChild(ulSWPeople);
})();
