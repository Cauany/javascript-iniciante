//All the scripts

//RECEBENDO OS DADOS DOS BUTTONS
const buttonAdc = document.getElementById('adc'),
      buttonFin = document.getElementById('fin')
const num = document.querySelector('input')

//CRIANDO O ARRAY
let numbers = []

//CRIANDO A FUNCÃO DE ATUALIZAR DADOS
const atualizar = function(){
    if(adicionar === true){
        document.getElementById('mostrar').innerHTML = ''
        finalizar()
    }
}
//CRIANDO A FUNÇÃO DOS EVENTOS DO BUTTON ADICIONAR
const adicionar = buttonAdc.addEventListener('click', () => {

    document.getElementById('mostrar').innerHTML = ''
    
    let numAdc = Number(num.value)
    let comp = numbers.includes(numAdc)
    const shower = document.getElementById('count')

    if(numAdc == ''){

        alert('Digite um número o campo não pode estar vazio')

    }else if(numAdc < 1 || numAdc > 100){

        alert(' [ERRO] Número inválido! Por favor, insira um número de 1 até 100')
    
    }else if(comp != false){

        alert('Já existe um número no array igual a este, insira outro numero')
    
    }else{
        numbers.push(numAdc)
        shower.innerHTML = `O número ${numbers} foi adicionado`
    }  
})
//CRIANDO A FUNÇÃO DOS EVENTOS DO BUTTON FINALIZAR
const finalizar = buttonFin.addEventListener('click', () => {
    const show = document.querySelector('p#mostrar')
    let numAdc = Number(num.value)
    let soma = 0,
    quant = 0,
    media = 0,
    maior = 0

    if(numAdc == ''){
        alert(' Insira um número antes'
        )
    }else if(numAdc >=1 || numAdc <= 100){

        for(let x = 0; x < numbers.length; x++){
            
            let menor = numbers[x]
            soma += numbers[x]
            quant = numbers.length
            media = soma/quant

            if(numbers[x] < menor){
                menor = numbers[x]
                console.log(numbers[x])
            }else if(numbers[x] > maior){
                maior = numbers[x]
                console.log(numbers[x])
            }
            show.innerHTML = `O total de números no array é ${quant},
                                O maior número no array é ${maior},
                                O menor número no array é ${menor},
                                A soma de todos os números do array é ${soma},
                                A média de todos os números do array é ${media}`
            
        }
        
    } 
})
