let nome = "ZodiaGames";
let xpMax = 11001; // Valor máximo de xp
let xp = Math.floor(Math.random() * xpMax); // Gerando um número aleatório entre 0 e xpMax
let nivel = "";

switch (true) {
  case xp <= 1000:
    nivel = "Ferro";
    break;
  case xp <= 2000:
    nivel = "Bronze";
    break;
  case xp <= 6000:
    nivel = "Prata";
    break;
  case xp <= 7000:
    nivel = "Ouro";
    break;
  case xp <= 8000:
    nivel = "Platina";
    break;
  case xp <= 9000:
    nivel = "Ascendente";
    break;
  case xp <= 10000:
    nivel = "Imortal";
    break;
  default:
    nivel = "Radiante";
}

console.log(`--> O Herói de nome ${nome} está no nível de ${nivel}
--> Seu XP atual é de ${xp}
--> Continue farmando bravo herói...`);

