let separador_1 = '⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘';


const mensagem = {
    saudacao: `${separador_1}\n                                 Olá, herói! \n                            Bem-vindo ao jogo!\n${separador_1} \n`,
    introducao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.`,
    nome: "\nQual seu nome de herói?: ",
    x_0003: (nome, rank, xp) => `
    ===========================================================
    --> O Herói de nome ${nome} está no nível de ${rank}
    --> Seu XP atual é de ${xp}
    --> Continue farmando bravo herói...
    ============================================================`
};

module.exports = mensagem;
//module.exports = { mensagem };