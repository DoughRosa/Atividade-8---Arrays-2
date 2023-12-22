let lista = [1,2,3,4,5,6,7,8,9,10];
let numero = Number(prompt("Digite um número: "));
let naLista = false;

for(let i=0; i<lista.length; i++){
    if(lista[i] === numero){
        naLista=true;       
    break;
    }
}

if(naLista){
    alert("O número está na lista!");
} else {
    alert("Não está na lista!");
}

// let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let digiteNumero = Number(prompt("Digite um numero"));

// for (let numero of lista) {
//   if (digiteNumero == numero) {
//     document.write(O numero digitado ${digiteNumero} está na lista);
//     break;
//   } else {
//     document.write(O numero digitado ${digiteNumero} não está na lista);
//     break;
//   }
// }
