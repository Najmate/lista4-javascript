const prompt = require('prompt-sync')();

function imc (peso, altura){

    const imc = peso / (Math.pow(altura,2));
    console.log(`Seu IMC é: ${Math.round (imc)}`);

}

module.exports = imc;