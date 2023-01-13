const input = document.getElementById('addon')
const add = document.getElementById('add')
const supr = document.getElementById('delete')
const out = document.getElementById('out')
const sort = document.getElementById('sort')
const list = document.getElementById('list')
const number = document.getElementById('number')
let product
let products = [];

console.log('test')

input.addEventListener('change', function (){
    product = input.value
})

add.addEventListener('click', addToArray)
supr.addEventListener('click', deleteOfArray)
out.addEventListener('click', outArray)
sort.addEventListener('click', sortArray)


function affichage (){
    list.innerHTML = ''
    if(products.length !== 0){
        number.innerText = 'il y a :' + products.length + 'produits'
    }
    else {
        number.innerText = 'La liste est vide'
    }
    products.forEach(element => {
        list.insertAdjacentHTML("beforeend", '<li><input type="checkbox" class="product" id="'+element+'" name="'+element+'" value="'+element+'"><label class="product" for="'+element+'">'+element+'</label></li>')
    });
}

function addToArray(){
    input.value = ''
    product = product.toLowerCase()
    if(products.indexOf(product) === -1){
        products.push(product)
    }
    affichage()
}

function deleteOfArray(){
    let checked = document.querySelectorAll('input:checked')
    console.log(checked)
    checked.forEach(element => {
        let id = element.value
        products = products.filter((prod) => prod != id)
    })
    affichage()
}

function outArray() {
    products = []
    affichage()
}

function sortArray(){
    products = products.sort()
    affichage()
}