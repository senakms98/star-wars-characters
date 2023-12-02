 let characters = [
      {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
      },
      {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
      },
      {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
      },
      {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
      },
      {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
      },
      {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
      },
      {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
      },
      {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
      },
      {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
      },
      {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
      },
      {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
      },
      {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
      },
      {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
      },
      {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
      },
      {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
      },
      {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
      },
      {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
      },
      {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
      }
    ];

    const homeworldsRaw = [];
    for (const character of characters) {
      homeworldsRaw.push(character.homeworld ?? "other");
    }

    const homeworldsUnique = [...new Set(homeworldsRaw)];

    const homeworldsLowercase = [];

    for (const uniqueHomeworld of homeworldsUnique) {
      homeworldsLowercase.push(uniqueHomeworld.toLowerCase());
    }


    const homeworlds = homeworldsLowercase;

    const filters_element = document.getElementById("filters");

    for (const homeworld of homeworlds) {
      const RadioElement = ` 
      <div class="form-check">
      <input value="${homeworld}" class="form-check-input" type="radio" name="homeworld-radio" id="radio-${homeworld}">
      <label class="form-check-label" for="radio-${homeworld}">${homeworld}</label>
      </div>
      `;

filters_element.innerHTML += RadioElement;
    }


let radios = document.querySelectorAll('#filters input[type="radio"]');
let filter_value = null;

for (const radio of radios) {
  radio.addEventListener("change", function (e) {
  
filter_value = e.target.value;
removeCharacters();
renderCharacters();
  });
}



    const content_wrapper = document.getElementById("content");
    const toggle_button = document.getElementById("toggle-button");
    toggle_button.onclick = renderCharacters;


    function renderCharacters() {
      const row_element = document.createElement("div");
      row_element.classList.add("row");
    for (const character of characters) {
      const homeworld_name = character.homeworld ?? "other";
      const homeworld_name_lowercase = homeworld_name.toLowerCase();

      if (homeworld_name_lowercase === filter_value || filter_value === null) { 
      const CharacterCard = `
      <div class="col-4">
      <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${character.pic}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${character.name}</h5>
    <p class="card-text">${homeworld_name_lowercase}</p>
  </div>
  </div>
</div>`;
row_element.innerHTML = row_element.innerHTML + CharacterCard;
}
    
toggle_button.innerHTML = "Karakterleri Gizle";
toggle_button.style.backgroundColor = "red";
toggle_button.onclick = removeCharacters;
}
content_wrapper.appendChild(row_element); 
  }
    function removeCharacters() {
      content_wrapper.innerHTML = "";
      toggle_button.onclick = renderCharacters;
      toggle_button.style.backgroundColor ="green";
      toggle_button.innerText = "Karakterleri Göster";
    }