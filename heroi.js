let Heroi = "Mago da DIO";
let xp = 0;
let nivel = "Noob";
let mensagemNivel = 'level ';

// Crie uma variavel para armazenar o nome e a quantidade de experiência(XP) de um heroi, depois utilize uma estrutura de dicisão para apresentar alguma mensagem.
console.log("<------------------------HORA DE AVENTURA--------------------->");
console.log(`Seja bem vindo: ${Heroi}`);
console.log(`Atualmente você tem ${xp} xp.`);
console.log(`Você está no nivel ${nivel}`)

console.log("<-------------------- HABILIDADES -------------------------->");


function Aventura(pontos){

  xpAtual  = pontos;
  console.log(`Após lutar com monstros e ganhar ${xpAtual} de xp você atingiu: `)

  if(xpAtual <= 1000){
    nivel = "Ferro"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }
  else if(xpAtual >= 1001 && xpAtual <= 2000){
    nivel = "Bronze"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }
  else if(xpAtual >= 2001 && xpAtual <= 5000){
    nivel = "Prata"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }
  else if(xpAtual >= 5001 && xpAtual <= 7000){
    nivel = "Ouro"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }
  else if(xpAtual >= 7001 && xpAtual <= 8000){
    nivel = "Platina"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }
  else if(xpAtual >= 8001 && xpAtual <= 9000){
    nivel = "Ascendente"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }
  else if(xpAtual >= 9001 && xpAtual <= 10000){
    nivel = "Imortal"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }
  else if(xpAtual >= 10001){
    nivel = "Radiante"
    console.log(mensagemNivel + nivel + "!");
    xp += xpAtual; 
  }

  console.log(`Olá, ${Heroi}, Atualmente você está no nivel ${nivel} e tem ${xp} de xp, deseja subir de nivel?`)
  
}

Aventura(100);