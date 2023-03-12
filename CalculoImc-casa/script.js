
  // Forma de chamar a função usando o return //

// function calcular(){
//   const mensagem = calcularImc();
//   let resposta = `Seu imc é , você está ${mensagem} `;
//    document.getElementsByTagName("p")[0].innerHTML = resposta;
// }

function calcularImc(){
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let imc = (peso/(altura*altura)).toFixed(2);
  let mensagem = "";
  let mensagem2 = "";

  if(altura.length >=1 && peso.length >=1){
    if(imc < 18.5){
      console.log(`Abaixo do Peso`);
      mensagem = `Abaixo do peso`;

    }else if(imc > 18.5 && imc <= 24.9){
      console.log(`Peso está normal`);
      mensagem = `Peso está normal`; 

    }else if(imc > 24.9 && imc <= 29.9){
      console.log(`Sobrepeso`);
      mensagem = `Sobrepeso`;

    } else if(imc > 29.9 && imc <= 34.9){
      console.log(`Obesidade grau I`);
      mensagem = `Obesidade grau I`;

    } else if(imc > 34.9 && imc <= 39.9){
      console.log(`Obesidade grau II`);
      mensagem = `Obesidade grau II`;

    } else if(imc > 39.9){
      console.log(`Obesidade grau III`);
      mensagem = `Obesidade grau III`;
    }

  let resposta = `Seu imc é ${imc}, você está ${mensagem} `;
  document.getElementsByTagName("p")[0].innerHTML = resposta;

}else{
    console.log(`Insira os dados.`);
    mensagem2 = `Insira os dados.`;

  let resposta = `${mensagem2} `;
  document.getElementsByTagName("p")[0].innerHTML = resposta;

}

}
 



