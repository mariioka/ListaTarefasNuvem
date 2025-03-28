
async function loadTarefas() {
    const response = await fetch("/tarefas");
    const tarefas = await response.json();
    const list = document.getElementById("tarefas");
    list.innerHTML = "";

    tarefas.forEach(tarefa => {
        const li = document.createElement("li");
        li.innerHTML = `${tarefa.descricao} <button onclick="excluiTarefa(${tarefa.id})">X</button>`;
        list.appendChild(li);
    });
}

async function addTarefa() {
    const tarefaInput = document.getElementById("tarefaInput");
    const descricao = tarefaInput.value.trim();

    if (!descricao) return alert("Digite uma tarefa.");

    await fetch("/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ descricao })
    });

    tarefaInput.value = "";
    loadTarefas();
}

async function excluiTarefa(id) {
    await fetch(`${"/tarefas"}/${id}`, { method: "DELETE" });
    loadTarefas();
}

document.addEventListener("DOMContentLoaded", loadTarefas);
