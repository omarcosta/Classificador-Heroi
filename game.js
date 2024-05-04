// IMPORTS
const { classificacaoRank, interacoesUsuario, combate, ajusteValor } = require('./functions.js');
const msg = require('./mensagens-br.js');

async function main() {

    console.log(msg.saudacao + msg.introducao);

    // Personagem
    let nome = "Zodia";
    //let nome = await interacoesUsuario(msg.nome);
    let vida = 200;
    let maxVida = 200;
    let vigor = 100;
    let nivel = 1;
    let batalha;
    let batalhas = 0;
    let acao;
    let erroAcao = 0;

    let maxXP = 1000; // Valor máximo de xp
    let minXP = 50; // Valor minimo de xp
    let xp = Math.floor(Math.random() * maxXP); // Gerando um número aleatório entre 0 e xpMax
    xp = ajusteValor(minXP, maxXP, xp); // Balanceamento de XP inicial
    
    // Game
    const stage = [ // 0 = nome, 1 = inimigos encontrados, 2 = final da mensagem, 3 = minXP, 5 = maxXP, 5 = dano, 
        // A frase será: ${nome}, você chegou ${local} e encontrou ${inimigos} no caminho.
        ['a entrada da aldeia'  , "globins raivosos"      , "invadindo as casas"  , 75   , 150  , 50  ],
        ['a aldeia em chamas'   , "orks"                  , "matando aldeões"     , 175  , 300  , 100 ],
        ['a floresta nebulosa'  , "fantasmas"             , "por toda parte"      ,100   , 400  , 80  ],
        ['ao final da floresta' , "um acampamento elfico" , "em paz e harmonia"   ,1500  , 3000 , 1000],
        ['a um lago'            , "criatuaras aquáticas"  , "pescando"            ,220   , 500  , 135 ],
        ['a um caverna escura'  , "criaturas sombrias"    , "no caminho"          ,450   , 800  , 180 ],
        ['as planices douradas' , "criatuaras selvagens"  , "apostando corrida"   ,550   , 800   , 200 ],
        ['ao monte dos deuses'  , "o verdadeiro vazio"    , "consumindo a vida"   ,600   , 1000  , 220 ],
        ['a cidade sagrada'     , "seres divinos"         , "praticando magia"    , 750   , 1150 , 280 ],
        ['ao palácio dos Deus'  , "Omega, o fim "         , "da jornada a frente" , 1200  , 2000 , 400 ]
    ]

    let i = 0;
    while (i < stage.length) {
        
        console.log(hud = msg.hud(nome, xp,vida,vigor, i+1)); // HUD 
        
        let acaoOpcao = false;
        let contadorOpcaoInvalida = 0;
        while (acaoOpcao === false) {
            acao = await interacoesUsuario(msg.action(nome, stage[i][0], stage[i][1], stage[i][2])); // Escolha de ação
            
            if (acao === "0" || acao === "1" || acao === "2" || acao === "3") {
                acaoOpcao = true;
            } else {
                if(contadorOpcaoInvalida < 3) {
                    console.log(msg.actionInvalida);
                } else {
                    console.log(msg.actionInvalidaPercistente);
                }
                contadorOpcaoInvalida++
            }
        }

        // minXP, maxXP, dano
        batalha = combate(stage[i][3], stage[i][4], stage[i][5]);
        xp = xp + Math.floor(batalha[0]);
        vida = vida - Math.ceil(batalha[1]);

        i++
    }

    let rank = classificacaoRank(xp); // Classifica o rank com base no XP

    // OUTPUTS
    console.log(
        msg.depedida(nome, nivel, rank, xp, vida, vigor, batalhas)
    );
}

main()   