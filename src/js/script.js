

function escolher() {
    var pok = document.getElementsByName('radpok')
    var res = document.querySelector('div#res')


    var img = document.createElement('img')
    img.setAttribute('id', 'img')

        if(pok [0].checked) {
            
            res.innerHTML = `Você escolheu <strong>CHARMANDER</strong>, boa sorte na sua jornada!<br>`   
            img.setAttribute('src', 'src/charmander.png')
                
        } else if (pok [1].checked) {
            
            res.innerHTML = `Você escolheu <strong>SQUIRTLE</strong>, boa sorte na sua jornada!<br>`
            img.setAttribute('src', 'src/Squirtle.png')
            
        } else if(pok [2].checked) {
            
            res.innerHTML = `Você escolheu <strong>BULBASAUR</strong>, boa sorte na sua jornada!<br>`
            img.setAttribute('src', 'src/Bullbasaur.png')
            
        }
            res.style.textAlign = 'center'
            img.style.width = '80px'
            res.appendChild(img)
}


