function validaProc() {

    let i=1;
    let numero;
    let num=0;

    while(i<=3) {
        numero = parseInt(prompt("Digite um número: "));
        i++;
        console.log("O número informado é: " +numero)

        if(numero > num) {
            num = numero;
        }
    }
    console.log("Maior número: " + num);
    return false;
}