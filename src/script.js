const cards = document.querySelectorAll(".card");
console.log(cards);
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart({target}) {
  dropzones.forEach((dropzone) => dropzone.classList.add("light"));
  target.classList.add('isdraggin')
}

function drag() {
  console.log("aqui drag");
}

function dragend({target}) {

  dropzones.forEach((dropzone) => dropzone.classList.remove("light"));
  target.classList.remove('isdraggin')
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {
  console.log("aqui enter");
}

function dragover({target}) {
    target.classList.add('isover')
    console.log(target.className)
    const cardInDragged = document.querySelector('.isdraggin')
    if(target.className == 'dropzone light isover'){
        target.appendChild(cardInDragged)
    }
}

function dragleave({target}) {
  target.classList.remove('isover')
}

function drop() {
  console.log("aqui drop");
}
