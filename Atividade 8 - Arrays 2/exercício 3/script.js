let perfeitos = [];
let candidato = 2;

while (perfeitos.length < 4){
    let somaDivisores = 1;

    for (let i=2; i<=candidato/2; i++){
        if(candidato%i === 0) {
            somaDivisores += i;
        }
    }

    if(somaDivisores === candidato) {
        perfeitos.push(candidato);
    }

    candidato++;
}

document.write(perfeitos);
