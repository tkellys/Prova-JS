function calcular(){
   let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    let imc = ((altura*altura)/peso).toFixed(2);

    if(imc <= 18.5){
    console.log("Abaixo do peso");
     }else if(imc > 18.5 && imc <= 24.9){
    console.log("Peso esta normal");
    }else if(imc > 24.9 && imc <= 29.9){
    console.log("Sobrepeso");
    }else if(imc > 29.9 && imc <= 34.9){
    console.log("Obesidade grau I");
    }else if(imc > 34.9 && imc <= 39.9)
    console.log("Obesidade grau II");
    else if(imc > 39.9){
    console.log("Obesidade grau III");
    }
    let textoResultado = `O seu imc é:  ${imc}`;
     document.getElementsByTagName('p')[0].innerHTML = textoResultado
}




    //aqui em baixo estou incluindo o texto dentro da tag <p> do html de forma automatica. 
    // document.getElementsByTagName('p')[0].innerHTML = textoresultado;




    // console.log(textoresultado);
    // document.getElementsByTagName('p')[0].innerHTML = textoresultado;

// function limpar() {
//     document.getElementsByTagName('p')[0].innerHTML = '';
// }