//Atividades Praticas de Javascript
//Construindo um Modal com o que  ja foi mostrado

const buttonOpenModal = document.getElementById
('openModal')

const modalWrapper = document.querySelector
('.modal-wrapper')

//função para adicionar o click ao Modal
buttonOpenModal.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

//Adicionando a função a tecla ESC

document.addEventListener('keydown', function(event){ //Evento para buscar um valor especifico
    const isEscKey = event.key === 'Escape'  //Atribui ao evento key o valor 'escape'

    if(isEscKey){ //Atribuindo o valor 'invisible' ao presionar 'ESC'
        modalWrapper.classList.add('invisible')
    }
})