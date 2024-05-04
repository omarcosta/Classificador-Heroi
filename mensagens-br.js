let separador = '⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘';


const mensagem = {
    saudacao: `${separador}\n                                 Olá, herói! \n                            Bem-vindo ao jogo!\n${separador} \n`,
    introducao: "Das humildes origens surgem os mais nobres destinos.\nHoje, um aldeão, amanhã, um herói... e por que não até mesmo um Deus?",
    nome: `\nComeça aqui sua nova jornada.
    Qual é o seu nome?: `,
    hud: (nome, xp, vida, vigor) => `${separador}
    𖠋  ${nome} | ❤︎  ${vida} | ⚡︎${vigor} | XP ${xp}`,
    action:(nome, local, inimigos, acontecimento) => `
    ===============================================================
    ${nome}, você chegou ${local} e encontrou ${inimigos} ${acontecimento}.\n    O que você fará?
    ===============================================================
    0 | Vou meter o pé...                         三三ᕕ( ⌓̈ )ᕗ 
    1 | Posso enfrentar os inimigos menores...    ᕙ( •̀ ᗜ •́ )ᕗ      
    2 | Lutarei bravamente...                     ദി(˵ •̀ ᴗ - ˵) ✧   
    3 | Pode da ruim, mas vou para cima...        (  ◡̀_◡́)ᕤ        
    ===============================================================
    ==> Digite o número para tomar a ação: `,
    actionInvalida: `( -_•)╦̵̵̿╤─ Você digitou uma ação invalida...`,
    actionInvalidaPercistente: `༼ つ ◕_◕ ༽つ Colabora ae... Na boa...`,
    depedida: (nome, nivel, rank, xp, vida, vigor, batalhas ) => `${separador}\n
    O Herói ${nome} alcançou os seguintes resultados: 
    Lv : ${nivel} | 🎖 : ${rank} | XP : ${xp} | ❤︎ : ${vida} | ⚡︎ : ${vigor} | ⚔ : ${batalhas}\n
    Que novas aventuras o aguarde! 
    (૭ ｡•̀ ᵕ •́｡ )૭ 
    \n${separador}`
};

module.exports = mensagem;
//module.exports = { mensagem };