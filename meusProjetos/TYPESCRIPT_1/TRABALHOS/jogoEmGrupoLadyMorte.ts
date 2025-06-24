// Início do jogo

alert('Bem Vindo(a) ao Show da Lady Morte!');

alert('30 de abril de 2025.\nFaltam apenas 4 dias para o maior evento da sua vida: o show da estrela pop mundial Lady Gaga, em plena praia de Copacabana, no Rio de Janeiro.');

alert('Você está em contagem regressiva, mas tem um probleminha... está completamente atrasado nos preparativos. Passou o mês inteiro tentando juntar dinheiro pro show, e agora percebe que nem passagem de ida - quanto mais de volta - você tem. Avião? Esquece. Você é pobre e nem sonhar pode com isso.');

alert('Mas então, como num milagre, aparece A CHANCE DA SUA VIDA: um anúncio misterioso oferece uma passagem coletiva de van, direto para o Rio, com 70% de desconto, e só para hoje, dia 30.\n\nPerfeito, né?... Ou será que não?');

// Escolha 1 – entrar ou não na van
let escolha1: string;
escolha1 = String(String('Você entra na van?\nA) Não, isso tá com cara de cilada.\nB) Sim, é minha única chance de ver a Gaga!'));

if (escolha1 == 'A' || escolha1 == 'a') {
    alert('Você pensa que vai assistir ao show pela TV, mas uma tempestade derruba o sinal e a energia. Você termina a noite chorando no escuro , vestindo uma camiseta escrita Lady Gaga Rainha do Pop.');
    alert("FINAL 1: Arrependido no escuro.");

} else if (escolha1 == 'B' || escolha1 == 'b') {
    alert('Você entra na van e começa a aventura.');

    // Escolha 2 – reagir à parada suspeita
    let escolha2: string;
    escolha2 = String(String('A van faz uma parada estranha. Um passageiro desce e nunca mais volta. O motorista finge que nada aconteceu.\nA) Tenta sair da van e pedir carona.\nB) Ignora e segue viagem.'));

    if (escolha2 == 'A' || escolha2 == 'a') {
        alert('Você tenta fugir por uma floresta na beira da estrada, mas é capturado por dois canibais no matagal.');
        alert('FINAL 2: Virou lanchinho.');

    } else if (escolha2 == 'B' || escolha2 == 'b') {
        alert('Mais um passageiro some. O mistério só aumenta...');

        // Escolha 3 – aceitar ou recusar lanche suspeito
        let escolha3: string;
        escolha3 = String(prompt('O motorista distribui lanches suspeitos. Você aceita?\nA) Aceita o lanche.\nB) Recusa.'));

        if (escolha3 == 'A' || escolha3 == 'a') {
            alert('Você desmaia e acorda num culto hippie na Floresta Encantada deles. Sem roupas, sem sinal e sem Gaga.');
            alert('FINAL 3: A Mãe Natureza escolheu você.');

        } else if (escolha3 == 'B' || escolha3 == 'b') {
            alert('Você vê outros passageiros passando mal. Precisa agir rápido.');

            // Escolha 4 – fugir ou confrontar o motorista
            let escolha4: string;
            escolha4 = String(('A) Foge pela janela da van.\nB) Confronta o motorista.'));

            if (escolha4 == 'A' || escolha4 == 'a') {
                alert('Você bate a cabeça num poste e morre na hora.');
                alert('FINAL 4: Morte de desespero.');

            } else if (escolha4 == 'B' || escolha4 == 'b') {

                // Escolha 5 – lutar ou tentar conversar com o motorista
                let escolha5: string;
                escolha5 = String(('Você está frente a frente com o motorista. Há uma faca do lado. O que faz?\nA) Lutar.\nB) Tentar conversar.'));

                if (escolha5 == 'A' || escolha5 == 'a') {
                    alert('Você vence o motorista, mas não sabe dirigir. A van para no meio do caminho.');

                    // Escolha 6 – aceitar ou recusar carona com o senhor da carroça
                    let escolha6: string;
                    escolha6 = String(('Depois de horas andando, um senhor com uma carroça puxada por uma mula chamada Lady Burra te oferece uma carona. O que você faz?\nA) Aceita, é melhor do que ir de pé.\nB) Recusa, espera por uma moto ou carro pra chegar mais rápido no show.'));

                    if (escolha6 == 'A' || escolha6 == 'a') {
                        alert('Você chega na última música do show. Quando tenta filmar, seu celular é roubado num arrastão.');
                        alert('FINAL 5: Você viu a Gaga, mas ninguém vai acreditar.');

                    } else if(escolha6=='B'|| escolha6== 'b'){
                        alert('Você recusa a carona. A moto vem, mas em forma de morte. Vc é atropelado por uma moto desenfreada que estava atrasada pro show da gaga.');
                        alert('FINAL 6: Encontrou o que procurava.');
                    }

                } else if (escolha5 == 'B' || escolha5 == 'b') {
                    alert('Você grita: "EU TENHO UM CD AUTOGRAFADO DA GAGA!" \nO motorista paralisa, emocionado. Você percebe que ele é fã da Gaga. O que faz?');

                    // Escolha 7 – negociar com o CD ou tentar fugir
                    let escolha7: string;
                    escolha7 = String(('A) Usa o CD como moeda de troca.\nB) Recua e foge.'));

                    if (escolha7 == 'A' || escolha7 == 'a') {
                        alert('Você propõe o CD em troca da sua segurança. Ele aceita e te leva com cuidado até Copacabana.');
                        alert('Durante o show, Gaga te chama pra subir no palco. Você arrasa e revela a verdade sobre o motorista no meio de todo o público.');
                        alert('A polícia o prende. Gaga te chama de herói.');
                        alert('FINAL 7 (PERFEITO!): Você é o melhor fã do mundo!');

                    } else {
                        alert('Você tenta fugir, mas o motorista te apunhala pelas costas.');
                        alert('FINAL 8: Gaga não merece um fã covarde como você.');
                    }
                }
            }
        }
    }
} else {
    alert('Escolha inválida. Recarregue a página e digite A ou B.');
}