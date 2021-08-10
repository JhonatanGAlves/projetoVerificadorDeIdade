function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Macho'
            if (idade >= 0 && idade < 1) {
                img.setAttribute('src', 'filhote.png')
            } else if ( idade < 2) {
                img.setAttribute('src', 'criança.png')
            } else if (idade < 3) {
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'adulto.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Femea'
            if (idade >= 0 && idade < 1) {
                img.setAttribute('src', 'femfilhote.png')
            } else {
                img.setAttribute('src', 'femadulta.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}