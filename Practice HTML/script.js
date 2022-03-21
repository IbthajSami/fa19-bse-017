let btnGet = document.querySelector('button');
let input = document.querySelector('input');
let result = document.querySelector('h1');

btnGet.addEventListener('click',() =>{
    result.innerText = input.value.length;
});
