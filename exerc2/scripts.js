//All the scripts of the Tabuadas

const button = document.querySelector('button')

button.addEventListener('click', function(){

    const number = document.getElementById('num')
    const num = Number(number.value)
    const tabu = document.getElementById('tab')
    let show = document.createElement('option')
    

    if(num == ''){
        alert(' Impossível contar, insira um número')
        tabu.innerHTML = 'Erro'
    }else{
        for(let x = 0; x <=10 ; x++){
            
            let calc = x * num
           show.text = `(${x} x ${num}) = ${calc}`

        }
    }
    tabu.appendChild(show)
})
