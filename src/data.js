export const pokeSearch = function() {
  const input = document.getElementById("searchbar");
  const filter = input.value.toUpperCase();
  const pokeContainer = document.getElementById("flex-container");
  const pokeDiv = pokeContainer.getElementsByTagName("div");
  for (let i=0; i<pokeDiv.length; i++) {
    const boxDiv = pokeDiv[i].getElementsByClassName("pokeDiv")[0];
    const txtValue = boxDiv.textContent || boxDiv.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      pokeDiv[i].style.display = "";
    } else {
      pokeDiv[i].style.display = "none";
    }
  }
};
