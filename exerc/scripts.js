//All the scripts
const button = document.querySelector('button')

button.addEventListener('click', function(){
    const begin = document.getElementById('begin')
    const end = document.getElementById('end')
    const pass = document.getElementById('pass')
    let y = Number(pass.value)
    const show = document.getElementById('count')


    if(pass.value == '' || begin.value == '' || end.value == ''){
        alert('Algum campo está vazio, por favor preencha todos os campos')

    }else if(pass.value == '' || pass.value == 0){
        alert('Informação inválida, a contagem vai dar passo com o valor 1')
        let y = 1
        //caso o valor informado do passo seja 0 ou vazio
        for(let x = Number(begin.value); x <= end.value; x+=y){
            show.innerHTML += `${x} \u{1F449}`
         }

    }else if(end.value > begin.value){
        //repetidor de numeros se ele for decrescente
        for(let x = Number(begin.value); end.value <= x; x-=y){
            show.innerHTML += `${x} \u{1F449}`
        }
    }else if(begin.value < end.value){
        //repetidor de numeros se ele for crescente
        for(let x = Number(begin.value); x <= end.value; x+=y){
            show.innerHTML += `${x} \u{1F449}`
         }
    }
    
})