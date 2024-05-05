// IMPORTS
const { classificacaoRank, interacoesUsuario, combate, ajusteValor } = require('./functions.js');
const msg = require('./mensagens-br.js');

async function main() {

    console.log(msg.saudacao + msg.introducao);

    // Personagem
    //let nome = "Zodia";
    let nome = await interacoesUsuario(msg.nome);
    let vida = 200; // vida inicial
    let vigor = 100; // Não usado nessa versão
    let nivel = 0;
    let maxNivel = 50; // nivel máximo
    let tempNivel; // Recupera o nivel antes de redefinir
    let batalha; // Resultado da batalha
    let batalhas = 0; // Quantas batalhas foram vencidas
    let acao; // Ação escolhido pelo jogador
    let erroAcao = 0; // Controla se o jogar está trolando
    let morte = false; // Contrala se a vida está maior que 0
    let maxXP = 1000; // Valor máximo de xp
    let minXP = 50; // Valor minimo de xp
    let xp = Math.floor(Math.random() * maxXP); // Gerando um número aleatório entre 0 e xpMax
    xp = ajusteValor(minXP, maxXP, xp); // Balanceamento de XP inicial

    // Cenas
    const stage = [ // 0 = Nome do lugar, 1 = Inimigo encontrados, 2 = Final da mensagem, 3 = minXP, 5 = maxXP, 5 = dano
        ['a entrada da aldeia'  , "globins raivosos"      , "invadindo as casas"  , 100   , 150  , 50  ],
        ['a aldeia em chamas'   , "orks"                  , "matando aldeões"     , 175  , 335  , 70 ],
        ['a floresta nebulosa'  , "fantasmas"             , "por toda parte"      ,100   , 450  , 90  ],
        ['ao final da floresta' , "um acampamento elfico" , "em paz e harmonia"   ,1500  , 3000 , 350],
        ['a um lago'            , "criatuaras aquáticas"  , "pescando"            ,220   , 550  , 120 ],
        ['a um caverna escura'  , "criaturas sombrias"    , "no caminho"          ,450   , 800  , 150 ],
        ['as planices douradas' , "criatuaras selvagens"  , "apostando corrida"   ,550   , 900   , 200 ],
        ['ao monte dos deuses'  , "o verdadeiro vazio"    , "consumindo a vida"   ,600   , 1000  , 225 ],
        ['a cidade sagrada'     , "seres divinos"         , "praticando magia"    , 750   , 1500 , 250 ],
        ['ao palácio dos Deus'  , "Omega, o fim "         , "da jornada a frente" , 1200  , 3000 , 300 ]
    ]

    let i = 0; // Contador do loop
    while (i < stage.length && morte === false) {
        
        let acaoOpcao = false;
        let contadorOpcaoInvalida = 0;
        
        console.log(hud = msg.hud(nome, xp, vida, vigor, i+1)); // HUD 
        
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
        batalha = combate(stage[i][3], stage[i][4], stage[i][5], acao);
        
        vida = vida - Math.ceil(batalha[1]);
        console.log(`>>>>> vida depois da balah ${vida}`)
        // cada nivel 40 de vida
        
        if (vida <= 0) {
            morte = true;
            console.log(msg.morte(nome))
            vida = 0
        } else {
            batalhas++ // Contabiliza vitoria
            xp = xp + Math.floor(batalha[0]); // Contabiliza o XP da batalha
            
            if (nivel < maxNivel){
                tempNivel = nivel;
                nivel = Math.floor(xp / 200) // Contabiliza o nivel total cada 200XP Level UP
            } else {
                nivel = maxNivel; // Define nivel maximo 
            }
            vida = vida + ((nivel - tempNivel) * 40) // Subtrai do nivel total do nivel anterior e a diferença gera vida
        }

        i++ // Variavel incremental de controle do loop
    }

    let rank = classificacaoRank(xp); // Classifica o rank com base no XP

    // OUTPUTS
    console.log(
        msg.depedida(nome, nivel, rank, xp, vida, vigor, batalhas)
    );
}

main()   