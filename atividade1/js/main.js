function validaProc() {

    let i=1;
    let acumulador=0;
    let numero;
    while(i<=3) {
        numero = parseInt(prompt("Digite o "+ i +"º número: "));
        i++;
        acumulador = numero + acumulador;
        console.log("O número informado é: " +numero)
    }
    console.log("A soma dos números é: " + acumulador);
    return false;
}