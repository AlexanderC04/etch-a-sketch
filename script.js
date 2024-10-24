function removeSquares() {
  document.querySelectorAll(".square").forEach((square) => square.remove());
}

function changeColor(event) {
  const square = event.target;
  square.classList.add("hovered");
}

function createGrid(event) {
  removeSquares();
  const squareAmount = event.target.value;
  for (let index = 0; index < Math.pow(squareAmount, 2); index++) {
    const square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute(
      "style",
      `width: ${500 / squareAmount}px; height: ${500 / squareAmount}px;`
    );

    document.querySelector(".container").appendChild(square);
    square.addEventListener("mouseover", changeColor);
  }
}

document.querySelector("#grid-dimension").addEventListener("input", createGrid);
