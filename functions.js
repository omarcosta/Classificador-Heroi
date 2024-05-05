

function interacoesUsuario(pergunta) { // Interações de input de dados pelo jogador
    return new Promise((resolve, reject) => {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pergunta, (resposta) => {
            // Resposta
            //console.log(`Você digitou: ${resposta}`);
            rl.close();
            resolve(resposta);
        });
    });
}

function classificacaoRank(xp) { // Faz a classificação do rank (elo) do personagem

    switch (true) {
        case xp <= 500:
            return "Ferro";
        case xp <= 1000:
            return "Bronze";
        case xp <= 2000:
            return "Prata";
        case xp <= 4000:
            return "Ouro";
        case xp <= 8000:
            return "Platina";
        case xp <= 9000:
            return "Ascendente";
        case xp <= 10000:
            return "Imortal";
        default:
            return "Deus";
    }

}

function combate(minXP, maxXP, dano, acao){ // Rodomiza XP e Dano com base em parametros de ação escolhida
   
    let randomValue = Math.random();
    let xp = ajusteValor(minXP, maxXP, randomValue * maxXP);

    switch (true) {
        case acao === "1":                                     // Easy
            randomValue = ajusteValor(0.4, 0.65, randomValue) // 40% a 65%
            return [xp * randomValue, dano * randomValue];
        case acao === "2":                                  // Normal
            randomValue = ajusteValor(0.7, 1, randomValue) // 65% a 100%
            return [xp * randomValue, dano * randomValue];
        case acao === "3":                                    // Hard
            randomValue = ajusteValor(0.9, 1.35, randomValue) // 90% a 135%
            return [xp * randomValue, dano * randomValue];
        default:                                                  // Run
            randomValue = ajusteValor(-0.05, 0.40, randomValue) // -5% a 40%
            return [xp * randomValue, 0];
    }
}

function ajusteValor(min, max, x = 0) { // Ajusta o valor randomico considerando um valor minimo e maximo
    if ((x + min) <= max) {
        x = x + min;
    } else {
        x = max;
    }
    return x;
}
 
module.exports = { classificacaoRank, interacoesUsuario, combate, ajusteValor };