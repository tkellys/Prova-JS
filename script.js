
//  # Prova Lógica 
//  Dupla: Kelly e Savio

//  ### questao 1 - a


//     // questao 2
// console.log("resposta a");

//     // questao 3
// console.log("resposta a");
    
//     //questao 4
// console.log("resposta a");

//     //questao 5
// console.log("resposta a");

//   //questao 6
// console.log("resposta a");

//  //questao 7
//  console.log("resposta a");

//  //questao 8
//  console.log("resposta b");

//   //questao 9
//   console.log("resposta b");

//     //questao 10 - Atribuição de subtração	x += y	x = x + y
//    // let arr = [1,2,3,4,5];
//     //let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr [i];
//     }
//     //console.log(sum);
//    // console.log("resposta a");

//     //questao 11 

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// function greetAll(names){
//     for (let i =0; i<names.length; i++) {
//         greet(names[i]);
//     }
// }
// let namesArr = ["Alice","Bob","Charlie"];
// greetAll(namesArr);
// // console.log("resposta a")



    //questao 12

function calcular(altura,peso){
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    let textoresultado = (`O seu IMC é:${(altura*altura)/peso}`) ;
    console.log(textoresultado);
    document.getElementsByTagName('p')[0].innerHTML = textoresultado;
}
function limpar() {
    document.getElementsByTagName('p')[0].innerHTML = '';
}


    