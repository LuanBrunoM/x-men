fetch('./src/data/characters.json')
  .then(response => response.json())
  .then(data => {
    const characters = document.querySelectorAll('.character');

    const firstCharacter = characters[0];
    changeCharacter(firstCharacter, data);

    characters.forEach(character => {
      character.addEventListener('mouseenter', () => { 
        changeClassSelected(character);
        changeCharacter(character, data);
      })
    });
  })

function changeClassSelected(character){
  const selectedCharacter = document.querySelector('.selected');
  selectedCharacter.classList.remove('selected');
  character.classList.add('selected');
}

function changeCharacter(character, data){
  changeImgSelected(character);
  changeName(character, data);
  changeDescription(character, data);
}

function changeImgSelected(character){
  const imgSectionCharacter = document.querySelector('.selected-character-img'); 
  imgSectionCharacter.src = `./src/img/card-${character.id}.png`;
}

function changeName(character, data){
  const characterName = document.querySelector('.character-name');
  const name = data[character.id].name;
  characterName.innerHTML = name;
}

function changeDescription(character, data){
  const characterDescription = document.querySelector('#character-description');
  const description = data[character.id].description;
  characterDescription.innerHTML = description;
}
