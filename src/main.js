fetch("./data/pokemon/pokemon.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (pokemon) {
    for (var i = 0; i < pokemon.pokemon.length; i++) {
      var src =
        "https://www.serebii.net/pokemongo/pokemon/" +
        pokemon.pokemon[i].num +
        ".png";
      var img = document.createElement("img");
      img.src = src;
      document.getElementById("data-output").innerHTML +=
        +pokemon.pokemon[i].num +
        "<br />" +
        pokemon.pokemon[i].name +
        "<br />" +
        pokemon.pokemon[i].generation.num +
        "<br />" +
        pokemon.pokemon[i].generation.name +
        "<br />";
      document.body.appendChild(img);
    }
  })
  .catch(function (err) {
    console.log(err);
  });
