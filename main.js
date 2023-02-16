fetch('https://picsum.photos/v2/list')
.then(response => response.json())
.then(liste => {
    console.log(liste)
    for(let list of liste) {
        console.log(list)
    }
})


