const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const squareDiv = document.createElement("div");
  container.appendChild(squareDiv);
  squareDiv.style.cssText =
    "background-color: white; height: 30px; width: 30px; ";
  squareDiv.addEventListener("mouseover", (event) => {
    squareDiv.style.cssText =
      "background-color: black; height: 30px; width: 30px; ";
  });
}

const gridSizeButton = document.querySelector("#grid-size-btn");

gridSizeButton.addEventListener("click", (event) => {
  let size = prompt("How many squares per side should there be?");
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
      squareDiv.style.cssText = `background-color: black; height: ${
        480 / size
      }px; width: ${480 / size}px; `;
    });
  }
});
