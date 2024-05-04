# Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Cria uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar classificar em qual nível o heróis está.
A experiência do herói é aleatória, o que torna dinâmico o resultado.

## Classificação

| Parâmetros                                                          |
|---------------------------------------------------------------------|
| Se XP for menor do que 1.000 = Ferro                                |
| Se XP for entre 1.001 e 2.000 = Bronze                             |
| Se XP for entre 2.001 e 5.000 = Prata                              |
| Se XP for entre 5.001 e 7.000 = Ouro                               |
| Se XP for entre 7.001 e 8.000 = Platina                            |
| Se XP for entre 8.001 e 9.000 = Ascendente                         |
| Se XP for entre 9.001 e 10.000= Imortal                            |
| Se XP for maior ou igual a 10.001 = Radiante                       |

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome `${nome}` está no nível de `${nivel}`"
"Seu XP atual é de `${xp}`"
"Continue farmando bravo herói..."

## Adaptações

Neste código, utilizei `Math.random()` para gerar um número aleatório entre 0 e 1, o qual é multiplicado por 11001 e arredondado para baixo com `Math.floor()`, garantindo um valor aleatório entre 0 e 11000 para a variável xp. Em seguida, utilizei um *switch case* para determinar o nível com base no valor de xp.
