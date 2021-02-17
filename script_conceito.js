//Script do index
//DOM

//var anoAtual = 2021;
//var anoNascimento = prompt('Digite o ano do seu nascimento...'); // Solicitando uma entrada do usuário
//var idade = anoAtual - anoNascimento // Subtração das duas datas
//alert("Sua idade atual é "+ idade +" anos" ); //Resultado


/*

//GetElementById()

const element = document.getElementById('button')
console.log(button)

//getElementsByClassName() (Retorna HTMLColection)
const elements = document.getElementsByClassName('title')
console.log(elements)


//getElementsByTagName() (Retrorna HtmlCollection)

const element01 = document.getElementsByTagName('h1')
console.log(element01)


//querySelector()

const element02 = document.querySelector('src')
console.log(element02)

//querySelectorAll() ( Retorna NodeList)

const element03 = document.querySelectorAll('#one')
console.log(element03)
*/

/*
//Manipulando Conteúdo
//textContent

const element = document.querySelector('h1')

element.textContent += "  Ola! Devs!" // pode ser ou não concatenado com o valor original

console.log(element.textContent)


//Manipulando conteúdo
//innerText

const element01 = document.querySelector('h1')

element01.innerText += "  Trabalho duro em!!" //pode ser ou não concatenado com o valor original

console.log(element01.innerText) 


//Manipulando conteúdos
//innerHTML

const element02 = document.querySelector('h1')

element02.innerHTML = "Vamos com tudo em!! <small>!!!</small>" //Adiciona conteudo Html ao  conteudo do elemento.

//Manipulando conteúdos
//value

const element04 = document.querySelector('input')

console.log(element04.value) // aqui vc pega o valor

element04.value = "Temos outro valor" // Aqui vc atribui um valor


//Manipulando conteúdos
//Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header') //Atribuiu uma ID

const headerID = document.querySelector('#header') //Pesquisar pela ID atribuida

console.log(headerID) //Mostrar  o conteúdo pesquisado da ID atribuida
console.log(headerID.getAttribute('id')) //Pegar um atributo dentro do elemento

*/

/*
//Manipulando estilos e classes
//Alterando estilos

//const element05 = document.querySelector('body')

//element05.style.backgroundColor = "#f9f2D2" // Aqui vc seta uma valor style para o elemento
//console.log(element05.style.backgroundColor) // Aqui vc pega o elemento atribuido

//Alterando estilos
//classList
const element06 = document.querySelector('body')

element06.classList.add('active', 'green')
console.log(element06.classList)
element06.classList.remove('active') //Se a classe Existir ele tira
element06.classList.toggle('active') //Se a classe não existir ele adiciona
*/

/*
//Navegando pelos Elementos
//parentElement  parentNode

const body = document.querySelector('body')

console.log(body.parentElement)


//childNodes (Considera os espaços vazios)
//children (Não considera os espaços vazios)

const el = document.querySelector('body')

console.log(el.childNodes)

//firstChild (Leva em consideração os espaçoes vázios)
//fistElementChild (Não leva em consideração os espaços vázios)
console.log(el.fistChild)


//lastChild 
//lastElementChild
console.log(el.lastElementChild) //(Não leva em consideração os espaços vázios)
console.log(el.lastChild) //(Leva em consideração os espaçoes vázios)

//nextSibling (Pega o elemento irmão  considerando o espaço vázio)
//nextElementSibling (Pega o elemento irmão sem considerar os espaços vázios)
const elel = document.querySelector('header')

console.log(elel.nextElementSibling)


//previousSibling (Leva em conta os espaços vázios)
//previousElementSibling (Não leva em conta os espaços vázios)

console.log(elel.previousSibling)
*/

/*

//Criando e Adicionando Elementos na Página
//createElement
//const div = document.createElement('div');  //(é criado o elemento)
//div.innerText = "Ola Pessoal, estamos aqui!!"

//append (Adiciona o elemento apos)
//const body = document.querySelector('body') //(É adicionado o elemento ao campo)

//body.append(div)

//prepend (Adiciona o elemento antes do que se seleciona)
//const bady = document.querySelector('body')

//bady.prepend(div)


const div = document.createElement('div');  //Cria o que se quer adicionar
div.innerText = "Ola Devs!!"

//insertBefore
const body = document.querySelector('body') //seleciona os elementos em que vai se adicionar entre
const header = body.querySelector('header') //seleciona os elementos em que vai se adicionar entre
body.insertBefore(div, header.nextSibling) //para se adicionar o elemento

*/

/*
//Eventos
//Adicionando eventos via HTML
//Eventos onclick
function print(){
	console.log('print')
}

//Eventos de Teclado
const input = document.querySelector('input')

input.onkeypress = function(){
	console.log('rodei')
}

//Adicionando eventos via JS

const h1 = document.querySelector('h1'); // Indica o elemto que deve ser usado para atribuir evento

h1.addEventListener('click', print) //Seleciona o nome do evento e a função chamada por esse evento


function print(){
	console.log('print')
}
*/

//Adiconar Eventos via JS (Outro metodo)

const h1 = document.querySelector('h1');

h1.addEventListener('click', print) //Evento para adicionar mais de uma ação ao elemento.

function print(){   //Primeira ação ao clicar
	console.log('print')
}

h1.addEventListener('click', function(){ //Segunda ação
	console.log('Agora estamos em outro momento')
})

//Aguemnto event
const input = document.querySelector('input')

input.onkeydown = function(event){ //Com o argumento event consegue se pegar os valos dos elementos
	console.log(event.currentTarget)
}