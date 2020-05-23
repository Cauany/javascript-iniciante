let amigo = {
    name: 'João',
    idade: 12,
    peso: 80,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`Meu amigo é: ${amigo.name} e pesa ${amigo.peso}`)