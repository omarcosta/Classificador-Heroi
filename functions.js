

function interacoesUsuario(pergunta) {
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
        case xp <= 1000:
            return "Ferro";
        case xp <= 2000:
            return "Bronze";
        case xp <= 6000:
            return "Prata";
        case xp <= 7000:
            return "Ouro";
        case xp <= 8000:
            return "Platina";
        case xp <= 9000:
            return "Ascendente";
        case xp <= 10000:
            return "Imortal";
        default:
            return "Radiante";
    }

}





//export default { classificacaoRank, interacoesUsuario }; // coloca virgula para amis valores 
module.exports = { classificacaoRank, interacoesUsuario };