// IMPORTS
const { classificacaoRank, interacoesUsuario } = require('./functions.js');
const msg = require('./mensagens-br.js');

async function main() {

    console.log(msg.saudacao + msg.introducao);

    // Personagem
    //let nome = "Zodia";
    let nome = await interacoesUsuario(msg.nome);
    let vida = 200;
    let vigor = 100;
    let nivel = 1;

    // XP randomico
    let maxXP = 2000; // Valor máximo de xp
    let minXP = 200; // Valor minimo de xp
    let xp = Math.floor(Math.random() * maxXP); // Gerando um número aleatório entre 0 e xpMax
    // Balanceamento de XP inicial
    // Com sorte pega rank bronze
    if ( (xp + minXP) < maxXP) {
        xp = xp + minXP;
    } else {
        xp = maxXP;
    }
    // console.log(xp);
    
    // PROCESS
    let rank = classificacaoRank(xp);
    
    // OUTPUTS
    console.log(`
    ===========================================================
    --> O Herói de nome ${nome} está no nível de ${rank}
    --> Seu XP atual é de ${xp}
    --> Continue farmando bravo herói...
    ============================================================`);
}

main()   