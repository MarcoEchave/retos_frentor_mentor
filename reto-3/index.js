const lista= ['lista 1','lista 2','lista 3','lista 4','lista 5','lista 6']

const manipulion= document.querySelector(".manipulacion")

for(i=0;i<lista.length;i++){
    const list =document.createElement('li')
    list.innerHTML = lista[i]
    manipulion.appendChild(list)
}