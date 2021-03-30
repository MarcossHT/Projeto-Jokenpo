/* DESAFIO JOKENPO

Criar dois player e aplicar a regra do jokenpo para retornar um vencedor

Criar pagina HTML com dois player aonde vamos inserir um  dropdown com o valor escolhido por cada player
Criar um botão com resultado do jogo
Criar a regra do jokenpo em JS obtendo os valores escolhido pelos player e aplicando a regra do jogo para retornar o vencedor


REGRA DE NEGÓCIO
Jogadores poderão escolher apenas 3 opções
Pedra
Papel
Tesoura

como definir um vencedor:
Pedra -> Tesoura
Tesoura -> Papel
Papel -> Pedra*/

console.log(jogar('Papel'))

function jogar(player1) {
    
    const vencedor1 = "Player 1 ganhou!"
    const vencedor2 = "Player 2 ganhou!"
    let ganhador
    let opcoes = ['Pedra', 'Papel', 'Tesoura']
    let placar1 = 0
    let placar2 = 0
    let empate = 0
    let vencedorGeral 
    
    
    for(let i = 0; i < 10; i++) {

        let vencedorDaRodada
        const indiceAleatorio = Math.floor(Math.random() * 3)
        const player2 = opcoes[indiceAleatorio]

        if(player1 == "Pedra") {
            if(player2 === "Tesoura") {
                ganhador = vencedor1
                vencedorDaRodada = 1
            } else if(player2 === "Papel") {
                ganhador = vencedor2
                vencedorDaRodada = 2
            }
        }
        
            if(player1 == "Tesoura") {
                if(player2 === "Papel") {
                    ganhador = vencedor1
                    vencedorDaRodada = 1
                } else if(player2 === "Pedra") {
                    ganhador = vencedor2
                    vencedorDaRodada = 2
                }
            }

            if(player1 == "Papel") {
                if(player2 === "Pedra") {
                    ganhador = vencedor1
                    vencedorDaRodada = 1
                } else if(player2 === "Tesoura") {
                    ganhador = vencedor2
                    vencedorDaRodada = 2
                }
            }
        

        if(vencedorDaRodada === 1) {
            placar1++
        }else if(vencedorDaRodada === 2) {
            placar2++
        }else { 
            empate++
        }
    } 

    if(placar1 > placar2) {
        vencedorGeral = 'Player1!'
    } else if(placar2 > placar1) { 
        vencedorGeral = 'Player2!'
    }else {
        vencedorGeral = 'Empate'
    }

    return `placar do player1: ${placar1} e placar do player2: ${placar2}, número de empates ${empate}. Vencedor: ${vencedorGeral}` 
}