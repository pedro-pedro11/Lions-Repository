let campoIdade;
let campoFantasia;
let campoAventura;
let campoDrama;
let campoFiccao;
let campoAnimacao;

function setup() {
  createCanvas(800, 400);
  createElement("h1", "Projeto Filminho");
  createSpan("Sua idade:");
  campoIdade = createInput("0");
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoAventura = createCheckbox("Gosta de Aventura?");
  campoDrama = createCheckbox("Gosta de Drama?");
  campoFiccao = createCheckbox("Gosta de Ficção?");
  campoAnimacao = createCheckbox("Gosta de Animação?");
}

function draw() {
  background("rgb(9,7,7)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeFiccao = campoFiccao.checked();
  let gostaDeAnimacao = campoAnimacao.checked();
  let recomendacao = geraRecomendacao(
    idade,
    gostaDeFantasia,
    gostaDeAventura,
    gostaDeDrama,
    gostaDeFiccao,
    gostaDeAnimacao
  );

  fill(color(100, 100, 120));
  textAlign(CENTER, CENTER);
  textSize(25);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(
  idade,
  gostaDeFantasia,
  gostaDeAventura,
  gostaDeDrama,
  gostaDeFiccao,
  gostaDeAnimacao
) {
  if (idade >= 10) {
    if (idade >= 14) {
      if (gostaDeFiccao) {
      }
      return "O Círculo de Fogo";
    } else {
      if (idade >= 12) {
        if (gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";
        } else {
          return "A Lenda dos Guardiões";
        }
      } else {
        if (gostaDeFiccao) {
          return "WALL-E";
        } else {
          return "O Rei Leão";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Os Cavaleiros do Zodíaco: A Lenda do Santuário";
    } else {
      return "Uma Aventura LEGO";
    }
  }
}
