document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()

    let nome = document.getElementById('name').value
    let nota1= parseInt(document.getElementById('nota1')).value
    let nota2=parseInt(document.getElementById('nota2')).value
    let nota3=parseInt(document.getElementById('nota3')).value

    let media = Math.round((nota1+nota2+nota3)/3)

    let resultado = document.getElementById('resultado')
    let mensagem = document.getElementById('mensagem')
})


