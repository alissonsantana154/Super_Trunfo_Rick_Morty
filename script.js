var carta1 = {
  nome: "Morty",
  imagem: "https://static.wikia.nocookie.net/ricksanchez/images/e/e8/Morty.png",
  atributos: {
    agressividade: 6,
    inteligencia: 6,
    coolness: 5
  }
};

var carta2 = {
  nome: "Evil Morty - Super Trunfo",
  imagem:
    "https://assets1.ignimgs.com/thumbs/userUploaded/2020/5/19/feat051520rickmortys4distractingthumbblogroll-1589928104326.jpg",
  atributos: {
    agressividade: 10,
    inteligencia: 10,
    coolness: 10
  }
};

var carta3 = {
  nome: "Slicky Morty",
  imagem:
    "https://pbs.twimg.com/profile_images/907723405960544256/5r9lzj-4_400x400.jpg",
  atributos: {
    agressividade: 6,
    inteligencia: 4,
    coolness: 7
  }
};

var carta4 = {
  nome: "Hammer Morty",
  imagem:
    "https://static.wikia.nocookie.net/rickandmorty/images/6/66/PM-077.png",
  atributos: {
    agressividade: 7,
    inteligencia: 3,
    coolness: 6
  }
};

var carta5 = {
  nome: "One True Morty",
  imagem:
    "https://static.wikia.nocookie.net/rickandmorty/images/b/bd/PM-082.png",
  atributos: {
    agressividade: 4,
    inteligencia: 8,
    coolness: 6
  }
};

var carta6 = {
  nome: "Lizard Morty",
  imagem: "https://i.redd.it/62tjjglqh8lz.png",
  atributos: {
    agressividade: 6,
    inteligencia: 3,
    coolness: 5
  }
};

var carta7 = {
  nome: "Citadel Morty",
  imagem: "https://i.imgur.com/E7HKGCq.png",
  atributos: {
    agressividade: 6,
    inteligencia: 5,
    coolness: 4
  }
};

var carta8 = {
  nome: "Cop Morty",
  imagem:
    "https://static.wikia.nocookie.net/rickandmorty/images/6/6d/CopMorty.png",
  atributos: {
    agressividade: 7,
    inteligencia: 7,
    coolness: 5
  }
};

var carta9 = {
  nome: "Shrimp Morty",
  imagem: "https://rickandmortyapi.com/api/character/avatar/505.jpeg",
  atributos: {
    agressividade: 4,
    inteligencia: 5,
    coolness: 7
  }
};

var carta10 = {
  nome: "Ricky Sanchez - Super Trunfo",
  imagem:
    "https://static.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png",
  atributos: {
    agressividade: 10,
    inteligencia: 10,
    coolness: 10
  }
};

//Variáveis criadas fora de funções podem ser acessadas por todas funções
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
var cartasJogador;
var cartasMaquina;
var cartaMaquina;
var cartaJogador;

function sortearBaralho() {
  for (var i = cartas.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cartas[i];
    cartas[i] = cartas[j];
    cartas[j] = temp;
  }
  cartasMaquina = [cartas[0], cartas[2], cartas[4], cartas[6], cartas[8]];
  cartasJogador = [cartas[1], cartas[3], cartas[5], cartas[7], cartas[9]];
  document.getElementById("btnBaralho").disabled = true;
  document.getElementById("btnSortear").disabled = false;
}

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartasMaquina[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 5);
  cartaJogador = cartasJogador[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var htmlResultado;

  if (atributoSelecionado != undefined) {
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
      htmlResultado =
        "<p class='resultado-final'>Você venceu, mas só nesse universo!</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
      htmlResultado = "<p class='resultado-final'>Hahaha, perdedor!</p>";
    } else {
      htmlResultado =
        "<p class='resultado-final'>Hum...um empate. Que coisa mais sem graça!</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
    document.getElementById("btnReiniciar").disabled = false;
  } else {
    window.alert("Droga, Morty! Você precisa -buurrp- escolher um atributo.");
  }
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")";
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function reiniciar() {
  document.getElementById("btnBaralho").disabled = false;
  document.getElementById("btnReiniciar").disabled = true;
  cartaMaquina = "";
  cartaJogador = "";
  exibirCartaJogador();
  exibirCartaMaquina();
  var resultadoAntigo = document.getElementById("resultado");
  resultadoAntigo.innerHTML = "";
}

//Desafios:
//Rafa: Add um baralho com várias cartas; sistema de ganhar a carta do outro jogador (bastante complexo)
//Paulo: Deixar a maquina selecionar (rodada sim, rodada não)
//Gui: Criar um função exibirCarta() passando parâmetros para exibir a carta do jogador em um momento, e a carta da máquina em outro.
