<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">

<h1 style="color: #121717; background-color: #fff; padding: 10px; border-radius: 10px 0;"> Desafio de Classificador de Nível de Herói </h1>
<br>


<p style="color: #fff; background-color: #121717; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif;"> Este desafio foi proposto pelo Felipão, com o objetivo de classificar um herói pela experiência que ele possui. O objetivo final é retornar o nome do herói e o seu nível de acordo com seu XP. </p>

<p style="color: #fff; background-color: #121717; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif"> Fiz o uso de uma função, passando como argumento objetos desestruturados que possui as propriedades de nome do herói e xp do mesmo. Fiz o uso de estruturas condicionais para verificar qual o nível do herói e no final minha função tem um Output informando o nome do herói e seu nível. </p>

<details style="background-color: #121717; color: #fff; padding: 10px; border-radius: 10px;">
<summary style="color: #fff; font-size: 15px; font-family: sans-serif">EXEMPLOS:</summary>
<hr>
<p style="font-family: 'Inter', sans-serif;">O Herói de nome MrCastle está no nível de Bronze</p>
<hr>
<p style="font-family: 'Inter', sans-serif;">O Herói de nome BatMonster está no nível de Platina</p>
<hr>
<p style="font-family: 'Inter', sans-serif;">O Herói de nome Dj está no nível de Ouro</p>
<hr>
<p style="font-family: 'Inter', sans-serif;">O Herói de nome LightRobot está no nível de Ouro</p>
<hr>
<p style="font-family: 'Inter', sans-serif;">O Herói de nome Dragon está no nível de Prata</p>
</details>

<br>
<hr>

<h1 style="background-color: #29B3B3; padding: 10px; border-radius: 10px 0; color: #fff"> Calculadora de Partidas Rankeadas </h1>


<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif"> Mais um desafio proposto pelo Felipão, dessa vez com objetivo de calcular partidas rankeadas, onde devemos receber um número de vitórias e um número de derrotas e subtrai-los para obter o saldo e de acordo com esse resultado definir o nível em que o jogador vai estar. </p>

<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif"> Criei uma função que recebe dois parâmetros 'win' e 'lose' e no escopo declarei uma variável que subtraísse o valor dos dois parâmetros, e após declarei outra variável atribuindo uma função que retornasse o nível do jogador diante de estruturas condicionais. Depois declarei uma variável de saída, e usando template strings fiz o uso das varíaveis de subtração dos dois parâmetros e da variável que retornasse o nível do jogador. Minha função principal retorna a saída. </p>


<details style="background-color: #fff; color: #29b3b3; padding: 10px; border-radius: 10px"> 
<summary style="font-size: 15px; font-family: sans-serif">EXEMPLOS:</summary>
<hr style="background-color: #29b3b3; border: none">
<p style="font-family: 'Inter', sans-serif;">O Herói tem um saldo de 15 e está no nível Bronze</p>
<hr style="background-color: #29b3b3; border: none">
<p style="font-family: 'Inter', sans-serif;">O Herói tem um saldo de 54 e está no nível Ouro</p>
<hr style="background-color: #29b3b3; border: none">
<p style="font-family: 'Inter', sans-serif;">O Herói tem um saldo de 26 e está no nível Prata</p>
<hr style="background-color: #29b3b3; border: none">
<p style="font-family: 'Inter', sans-serif;">O Herói tem um saldo de 30 e está no nível Prata</p>
</details>
<hr>

<h1 style="padding: 10px; border-radius: 10px 0; color: #fff; background-color: #29B3B3">Classes de um Jogo</h1>

<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif">Esse desafio proposto pelo Felipão consiste em escrever uma classe que representa um herói e possua as seguintes propriedades:</p>
<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif"><strong>Nome</strong></p>
<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif"><strong>Idade</strong></p>
<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif"><strong>Tipo</strong> ex: (guerreiro, monge, ninja)</p>
<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif">Ele propõe criarmos um método 'atacar' que irá mostrar como saída do programas a mensagem "O {tipo} atacou usando o {ataque}".</p>
<p style="color: #29b3b3; background-color: #fff; font-size: 15px; padding: 10px; border-radius: 10px; font-family: sans-serif">Criei a classe com todas as propriedades e o método atacar e também para me divertir mais, criei outros métodos bem legais como o de missões que retorna um JSON contendo as
missões e o status delas. Criei um método de caminhar que avalia a posição do herói em X e Y e fiz este método por conta de uma das missões que definir que o herói tinha que coletar
uma porção mágica que está em tal coordenada. Depois criei um método que completa as missões e retorna a saída de quais missões foram completadas e qual o nível que o herói alcançou.</p>

<details style="background-color: #fff; color: #29b3b3; padding: 10px; border-radius: 10px"> 
<summary style="font-size: 15px; font-family: sans-serif">EXEMPLOS:</summary>
<hr style="background-color: #29b3b3; border: none">
<p style="font-family: 'Inter', sans-serif;">O monge Saulo atacou usando artes marciais<br>
O herói Saulo completou as missões:<br>
- Destrua 10 inimigos<br>
- Colete uma porção mágica no vale<br>
- Faça uma espada de diamante<br>
Subiu para o nível 2</p>
<hr style="background-color: #29b3b3; border: none">
<p style="font-family: 'Inter', sans-serif;">O ninja Nevek atacou usando shuriken<br>
O herói Nevek completou as missões:<br>
- Destrua 10 inimigos<br>
- Colete uma porção mágica no vale<br>
- Faça uma espada de diamante<br>
Subiu para o nível 2</p>
<hr style="background-color: #29b3b3; border: none">
</details>
