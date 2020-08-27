var resposta = document.getElementById('resposta')
function bh(){
    var tn1 = document.getElementById('tn1')
    var tn2 = document.getElementById('tn2')
    var tn3 = document.getElementById('tn3')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var delta = (n2 ** 2) - 4 * (n1 * n3)
    var raizdelta = Math.sqrt(delta)
    var bha1 = (-n2 + raizdelta) / (2 * n1)
    var bha2 = (-n2 - raizdelta) / (2 * n1)
    resposta.innerHTML += `bhaskar = -b +- √Δ / 2.a<br>`
    resposta.innerHTML += 'Δ = b² - 4.a.c<br><br>'

    resposta.innerHTML += `Δ = ${n2}² - 4.${n1}.${n3}<br>`
    resposta.innerHTML += `Δ = ${n2**2} - 4.${n1*n3}<br>`
    resposta.innerHTML += `Δ = ${delta}<br><br>`

    resposta.innerHTML += `x1 = ${-n2} + √${delta} / 2.${n1}<br>`
    resposta.innerHTML += `x1 = ${-n2} + ${raizdelta} / ${2*n1}<br>`
    resposta.innerHTML += `x1 = ${-n2+raizdelta} / ${2*n1}<br><br>`

    resposta.innerHTML += `x1 = ${-n2} - √${delta} / 2.${n1}<br>`
    resposta.innerHTML += `x1 = ${-n2} - ${raizdelta} / ${2*n1}<br>`
    resposta.innerHTML += `x1 = ${-n2-raizdelta} / ${2*n1}<br><br>`

    resposta.innerHTML += `x1 = ${bha1}<br>`
    resposta.innerHTML += `x2 = ${bha2}<br>`
    }