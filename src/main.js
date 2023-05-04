import data from "./data/pokemon/pokemon.js";

function showPokemon() {
  const pokeContainer = document.querySelector(".flex-container");
  for (let i = 0; i < data.pokemon.length; i++) {
    const createPokebox = document.createElement("div");
    createPokebox.className = "pokeDiv";
    createPokebox.innerHTML += data.pokemon[i].num
    createPokebox.innerHTML += "<br>"
    createPokebox.innerHTML += `<img src= "${data.pokemon[i].img}" alt= "pokeImg${data.pokemon[i].name}" class="image" id="${data.pokemon[i].id}">`;
    createPokebox.innerHTML += "<br>"
    createPokebox.innerHTML += data.pokemon[i].name
    pokeContainer.insertAdjacentElement("beforeend", createPokebox)
  }
}
showPokemon();

/*    const src =
      "https://www.serebii.net/pokemongo/pokemon/" +
      pokemon[i].num +
      ".png";
    const img = document.createElement("img");
    img.src = src;
    document.getElementById("data-output").appendChild(img);
    pokebox.innerHTML = document.getElementById("data-output").innerHTML +=
      "<br />" +
      pokemon[i].num +
      "<br />" +
      pokemon[i].name +
      "<br />" +
      pokemon[i].generation.num +
      "<br />" +
      pokemon[i].generation.name +
      "<br />";
  }
  return showPokemon();
};*/
