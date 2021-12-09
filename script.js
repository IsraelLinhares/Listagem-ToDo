const ul = document.querySelector("ul");
const input = document.getElementById("inpute");
let tarefas = [];
let info = "";

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
addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    add();
  }
});
function deletarAll() {
  tarefas = [];
  render();
  console.log(tarefas);
}
function render() {
  ul.innerHTML = "";
  for (tarefa of tarefas) {
    const li = document.createElement("li");
    const TextOfTask = document.createTextNode(tarefa);

    const deletar = document.createElement("button");
    const pos = tarefas.indexOf(tarefa);

    const deletarText = document.createTextNode("✘");
    deletar.appendChild(deletarText);
    const makeInfoText = document.createTextNode("ℹ");

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
