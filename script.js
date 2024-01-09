let rangeSliderProgress = document.querySelector(".range-slider__progress");
let squareSize = document.querySelector(".range-slider__bar");

function removeGrid() {
  document.querySelectorAll(".square").forEach((square) => square.remove());
}

function createGrid() {
  removeGrid();
  let squareSizeValue = parseInt(squareSize.value);
  rangeSliderProgress.textContent = `${squareSizeValue} x ${squareSizeValue}`;
  for (let i = 0; i < Math.pow(squareSizeValue, 2); i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    let squarePX = 500 / squareSizeValue + "px";
    square.setAttribute("style", `width: ${squarePX}; height: ${squarePX}`);
    document.querySelector(".container").appendChild(square);
    square.addEventListener("mouseover", () => {
      square.setAttribute("class", "square square__hovered");
    });
  }
}

createGrid();
squareSize.addEventListener("input", createGrid);
