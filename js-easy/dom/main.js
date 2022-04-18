//window.alert('これはwindow.alert()で表示したアラートです')
//alert('これはwindow.alert()で表示したアラートです')
//console.log(document.doctype)
//console.log(document.title)

const elem = document.querySelector('.list')
//console.log(elem.textContent)
//console.log(elem.innerHTML)

/*for (let i = 0; i < elem.children.length; i++) {
    console.log(elem.children[i])
}*/

//console.log(elem.lastElementChild)
console.log(elem.parentElement)

const elem2 = document.querySelector('img')
console.log(elem2.getAttribute('src'))

elem2.setAttribute('src', 'https://placehold.it/400x200')
