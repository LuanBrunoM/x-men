const characters = document.querySelectorAll('.character');

characters.forEach(character => {
  character.addEventListener('mouseenter', () => { 
    changeClassSelected(character);
    changeCharacter(character);
  })
})

function changeClassSelected(character){
  const selectedCharacter = document.querySelector('.selected');
  selectedCharacter.classList.remove('selected');
  character.classList.add('selected');
}

function changeCharacter(character){
  changeImgSelected(character);
  changeName(character);
  changeDescription(character);
}

function changeImgSelected(character){
  const imgSectionCaracter = document.querySelector('.selected-character-img'); 
  imgSectionCaracter.src = `./src/img/card-${character.id}.png`
}

function changeName(character){
  const characterName = document.querySelector('.character-name');
  const name = character.getAttribute('data-name');
  characterName.innerHTML = name
}

function changeDescription(character){
  const characterDescription = document.querySelector('.character-description')
  const description = character.getAttribute('data-description')
  characterDescription.innerHTML = description
}