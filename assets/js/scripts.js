const form = document.getElementById('formulario');
const taskList = document.getElementById('tarefas');

form.onsubmit = function (e){
    e.preventDefault();
    const inputField = document.getElementById('task-entrada'); //pega o valor da entrada e joga na variavel
    addTask(inputField.value); // ogapara afunção deadicionar tarefas
    form.reset(); //reseta o formulário
};

function addTask(descricao){
    const taskConteudo = document.createElement('div'); // cria uma seção div
    const novaTarefa = document.createElement('input');
    const rotulo = document.createElement('label');
    const descricaoTarefa = document.createTextNode(descricao); //bota o nomeda tarefa passado como parametro

    //agora vamos setar os atributos do input
    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', descricao);
    novaTarefa.setAttribute('id', descricao);

    
    rotulo.setAttribute('for', descricao); //setando atributo de label
    rotulo.appendChild(descricaoTarefa); // adicionando na lista cada descrição por ultimo

    taskConteudo.classList.add('tarefa-item');
    taskConteudo.appendChild(novaTarefa);
	taskConteudo.appendChild(rotulo);

    taskList.appendChild(taskConteudo);

	taskList.appendChild(taskConteudo); 
}

