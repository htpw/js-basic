const amountSelector = document.querySelector(".amount-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

const createMarkup = amount => {
  let markup = "";

  for (let i = 0; i < amount; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;    
  }

  return markup;
}

amountSelector.addEventListener("change", e => {
  const amount = e.target.value;
  const markup = createMarkup(amount);

  blocksContainer.innerHTML = markup;
})

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
}

let changed = false;

colorSelector.addEventListener("change", e => {
  const color = e.target.value;
  const items = blocksContainer.querySelectorAll(".item");

  changed = !changed;

  for (let i = 0; i < items.length; i++) {
    const currentBlock = items[i];
    const blockNumber = i + 1;
    
    if (changed) {
      if (blockNumber % 2 !== 0) {
        colorTheBlock(currentBlock, color);
      } else {
        colorTheBlock(currentBlock, "#FFF");
      }
    } else {
      if (blockNumber % 2 == 0) {
        colorTheBlock(currentBlock, color);
      } else {
        colorTheBlock(currentBlock, "#FFF");
      }
    }  
  }
})