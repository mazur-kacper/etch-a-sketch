const container = document.querySelector("#container");

function colorGen() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

for (let i = 0; i < 256; i++) {
  const squareDiv = document.createElement("div");
  container.appendChild(squareDiv);
  squareDiv.style.cssText =
    "background-color: white; height: 30px; width: 30px; ";
  squareDiv.addEventListener("mouseover", (event) => {
    squareDiv.style.cssText = `background-color: ${colorGen()}; height: 30px; width: 30px; `;
  });
}

const gridSizeButton = document.querySelector("#grid-size-btn");

gridSizeButton.addEventListener("click", (event) => {
  let size;

  while (true) {
    size = prompt("How many squares per side should there be?");
    if (size < 1 || size > 100) {
      alert("Incorrect input. The number must be between 1 and 100.");
      continue;
    }
    break;
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  let fields = size * size;
  for (let i = 0; i < fields; i++) {
    const squareDiv = document.createElement("div");
    container.appendChild(squareDiv);
    squareDiv.style.cssText = `background-color: white; height: ${
      480 / size
    }px; width: ${480 / size}px; `;
    squareDiv.addEventListener("mouseover", (event) => {
      squareDiv.style.cssText = `background-color: ${colorGen()}; height: ${
        480 / size
      }px; width: ${480 / size}px; `;
    });
  }
});
