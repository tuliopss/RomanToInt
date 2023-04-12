const map = {
    I: 1,
    IV: 4,
    V: 5,
    X: 10
}

function calc_valor(alg) {
    let arabicNum = 0;

    for (let i = 0; i < alg.length; i++) {

        let char_atual = alg[i]

        let valor_char = map[char_atual];
        let next_char = alg[i + 1];
        let next_valor_char = map[next_char]

        if(next_valor_char > valor_char) {
            arabicNum -= valor_char;

        } else {
            arabicNum += valor_char;
        }
    }
    return arabicNum

}


console.log(calc_valor('II'))
console.log(calc_valor('VX'))


function minuscula(text) {
    return /[a-z]/.test(text)

}

console.log(minuscula('OIII'))

function maiusculo(txt) {
    let txtStr = txt.toString()
    if(minuscula(txtStr)) {
        return txtStr.toUpperCase()
    }
}

console.log(maiusculo('testeee'))