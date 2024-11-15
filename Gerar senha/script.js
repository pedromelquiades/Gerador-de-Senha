function senha (){
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0213456789@#$"

const aleatorio = math.floor(math.rando() * 10)
for (let i=0; <texto.lenght; i++){
    let pos = letras.indexOf(texto.toUppercase())

}

}

function copiar(){
    const valor = document.getElementById("senha").value
    if(valor){
    navigator.clipboard.writeText(valor)
    mostrarMensagem("Senha Copiada")
    }else{
    mostrarMensagem("Nenhuma senha foi gerada")
    }
    }
    function mostrarMensagem(texto){
    document.getElementById("mensagem").innerHTML = texto
    }