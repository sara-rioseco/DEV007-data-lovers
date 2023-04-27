fetch("./data/pokemon/pokemon.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (pokemon) {
    let placeholder = document.querySelector("#dataoutput");
    let out = "";
    for (let poke of pokemon) {
      out += `
         <tr>
            <td> <img src='${poke.img}'> </td>
            <td>${poke.num}</td>
            <td>${poke.name}</td>
            <td>${poke.pokemon-rarity}</td>
            <td>${poke.type}</td>
         </tr>
      `;
    }
    placeholder.innerHTML = out;
  });
