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
