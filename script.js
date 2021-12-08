const ul = document.querySelector("ul");
const input = document.querySelector("input");
const tarefas = [];

function add() {
  if (!input.value) {
    alert("escreva uma tarefa man");
  } else {
    const textOfTask = input.value;
    tarefas.push(textOfTask);
    input.value = "";
  }
  render();
}

function render() {
  ul.innerHTML = "";
  for (tarefa of tarefas) {
    const li = document.createElement("li");
    const TextOfTask = document.createTextNode(tarefa);

    const deletar = document.createElement("button");
    const pos = tarefas.indexOf(tarefa);

    const deletarText = document.createTextNode("X");
    deletar.appendChild(deletarText);

    deletar.setAttribute("onclick", `deletTask(${pos})`);
    deletar.setAttribute("id", "delet");

    li.appendChild(TextOfTask);
    ul.appendChild(li);
    li.appendChild(deletar);
  }
}
render();

function deletTask(pos) {
  tarefas.splice(pos, 1);
  render();
}
