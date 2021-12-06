const ul = document.querySelector("#lista");
const input = document.querySelector("input");

const tarefas = [];

function adicionar() {
  if (!input.value) {
    alert("Cade tua tarefa man?");
  } else {
    tarefas.push(input.value);
    input.value = "";
    render();
  }
}

function render() {
  ul.innerText = null;
  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li");
    li.innerText = tarefa;
    ul.appendChild(li);
  });
}
render();
