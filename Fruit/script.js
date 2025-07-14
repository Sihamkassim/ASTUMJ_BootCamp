const input = document.getElementById("fruitInput");
const add = document.getElementById("addbtn");
const highlight = document.getElementById("highlightbtn");
const fruitList = document.getElementById("fruitList");
add.addEventListener("click", () => {
  const fruit = input.value.trim();
  if (!fruit) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="fruit-text">${fruit}</span>
    <span class="delete-btn">×</span>
  `;

  
  li.querySelector(".fruit-text").addEventListener("click", () => {
    li.classList.toggle("highlighted");
  });


  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  fruitList.appendChild(li);
  input.value = "";
});


highlight.addEventListener("click", () => {
  const items = fruitList.querySelectorAll("li");
  items.forEach((li) => {
    const fruitName = li.querySelector(".fruit-text").textContent.toLowerCase();
    if (fruitName.includes("a")) {
      li.classList.add("highlighted");
    } else {
      li.classList.remove("highlighted");
    }
  });
});
