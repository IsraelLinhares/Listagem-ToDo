// pegando apontamentos para os elementos que quero usar
const ul = document.querySelector("#lista");
const input = document.querySelector("input");

const tarefas = [];

function adicionar() {
  tarefas.push(input.value);
  input.value = "";
  render();
}

function render() {
  ul.innerText = null;
  tarefas.forEach((i) => {
    const li = document.createElement("li", "<button><button>");
    li.innerText = i;
    ul.appendChild(li);
    console.log(li);
  });
}
render();
