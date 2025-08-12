function validaProc() {

    let i=1;
    let numero;
    let soma=0;

    while(i<=3) {
        numero = parseInt(prompt("Digite um número: "));
        i++;
        console.log("O número informado é: " +numero)

        if(numero % 5 == 0) {
            soma += numero
        }
    }
    console.log("Soma dos números divisíveis por 5: " + soma);
    return false;
}