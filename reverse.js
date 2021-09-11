function FirstReverse() {
  
  
  let person = document.getElementById("fname").value;
    cadenaorig = person.length;
    
     cadenainver = " ";
    if (cadenaorig > 0){

    
     for (i=0; i <= person.length; i++){
      cadenainver = cadenainver + person.charAt(cadenaorig);
      cadenaorig--;
       
      }
     
    } else {
      cadenainver = " Escriba una palabra";
    }
    return document.getElementById("demo").innerHTML =`${ cadenainver } `;
      // code goes here  
     
    }
       
    // keep this function call here 
    //console.log(FirstReverse(readline()))
    //alert("Hello! I am an alert box!!");

    //let n1 = prompt("Please enter number1", );
    //let n2 = prompt("Please enter number 2", );
    //let suma2= (parseInt(n1,10) + parseInt(n2,10));
    //let suma = 3 + 5 ;
    //document.write(`Hello World! ${suma} `);
    


    const Mayor = () => {

   
     let number1 = document.getElementById("mayor1").value;
     let number2 = document.getElementById("mayor2").value;
     let number3 = document.getElementById("mayor3").value;
     if(number1 > number2 && number1 > number3) {
       return document.getElementById("demo2").innerHTML =
       `${number1} es mayor que ${number2} y ${number3} `
     } else if (number2 > number1 && number2 > number3){
      return document.getElementById("demo2").innerHTML =
      `${number2} es mayor que ${number1}y ${number3}`
    
     }else {
      return document.getElementById("demo2").innerHTML =
      `${number3} es mayor que ${number2} y${number1}`
     }
     
  }

  const DosNumerosDivisible = ()=>{
    
    let number = document.getElementById("divisible").value;
    if (number % 2 === 0){
      return document.getElementById("demo3").innerHTML = `${number} es divisible entre dos`;
    } else return document.getElementById("demo3").innerHTML = ` ${number} no es divisile entre dos`; 
  }


  const Frase = () => {

    let frase = document.getElementById("frasea").value;
  
    let total = [...frase].filter(c => c==='a') ;
    
   return document.getElementById("demo4").innerHTML = `${frase} tiene ${total.length} As`; 
  }


  const FraseBocales = () => {

    let frase = document.getElementById("frasevoca").value;
   let total = [...frase].filter(c => c==='a' || c==='e' || c==='i' || c==='o' || c==='u');

   var bocales = [...new Set(total)]

   return document.getElementById("demo5").innerHTML = `${frase} tiene estas bocales :" ${bocales}"  
   y tiene estas cantidad de bocales : ${total.length}`; 
  }

  const TotalBocales = () => {

    let frase = document.getElementById("frasevocadife").value;
   let A = [...frase].filter(c => c==='a' );
  let  E = [...frase].filter(c => c==='e' );
  let  I = [...frase].filter(c =>   c==='i' );
  let  O = [...frase].filter(c =>  c==='o' );
  let  U = [...frase].filter(c =>  c==='u');
   //var bocales = [...new Set(total)]

   return document.getElementById("demo6").innerHTML = `${frase} tiene estas cantidad de bocales :
   A :${A.length}, 
   E :${E.length}, 
   I :${I.length}, 
   O :${O.length}, 
   U :${U.length} `; 
  }



  const Divisible = () => {

    
    let number1 = document.getElementById("divisile1").value;
    //var bocales = [...new Set(total)]
   for (let i = number1; i <= number1; i++) {
    let divisibles = [];
   
    if (i % 2 === 0 ) {
      divisibles.push(2);
  
    }  if (i % 3 === 0 ) {
      divisibles.push(3); 
 
    }
     if (i % 5 === 0 ) {
      divisibles.push(5);
  
    }
     if (i % 7 === 0 ) {
      divisibles.push(7);
    }
    let hay = divisibles.length >= 1 ? ` es divisible entre ${divisibles}` : " no es divisible por 2 3 5 y 7";
    return document.getElementById("demo7").innerHTML = `${number1}   ${hay}  `; 

  } 
  }
  
  const DivisibleNumerDado = () => {

    let number1 = document.getElementById("divisile2").value;
    let divisibles = [];
   
    //var bocales = [...new Set(total)]
   for (let i = 0; i <= number1; i++) {
   
    if (number1 % i === 0 ) {
      divisibles.push(i);
    }  

  }
  return document.getElementById("demo8").innerHTML = `${number1}  es divisible entre ${divisibles} `; 

   
  }


  const DivisibleNumerDadoEntreDos = () => {

    let number1 = document.getElementById("divisile3").value;
    let number2 = document.getElementById("divisile4").value;
    
    let divisibles1 = [];
    let divisibles2 = [];
  
    let iguales = [];
   for (let i = 0; i <= number1; i++) {
   
    if (number1 % i === 0 ) {
      divisibles1.push(i);
    }  

  }
 
  for (let i = 0; i <= number2; i++) {
   
    if (number2 % i === 0 ) {
      divisibles2.push(i);
    }  

  }
  
  
  for(let i=0;i <= divisibles1.length;i++)
  {
	for(let j=0;j <= divisibles2.length;j++)
  {
		if(divisibles1[i]==divisibles2[j])
			iguales.push(divisibles1[i]);
	}
 
}
 
return document.getElementById("demo9").innerHTML = `${number1} y ${number2} tienen 
divisores comunes ${iguales} `; 

  }


  const Primo = () => {

    let number1 = document.getElementById("primo").value;
    let primo = [];
   
    //var bocales = [...new Set(total)]
   for (let i = 0; i <= number1; i++) {
   
    if (number1 % i === 0 ) {
      primo.push(i);
    }  

  }
  let Esprimo = primo.length <= 2 ? "es primo" : " no es primo";
                                         
   
   return  document.getElementById("demo10").innerHTML = `${number1} ${Esprimo} `;
   
  }



  const  cambiarModo = () => { 
        $('.container>.box').addClass("dark");
        $('.container>.box .article').addClass("dark");
        $('#show').hide();
        $('#hide').show();
     
}


const  volverModo = () => { 
      $('.container>.box').removeClass("dark");
      $('.container>.box .article').removeClass("dark");
      $('#hide').hide();
      $('#show').show();
  
}


const lafoo = () => {
  
    let number1 = document.getElementById("lafoo").value;
    lafoobar= [];
  for (let i = 0; i <= number1; i++) {
      if (i % 5 == 0 && i % 3 == 0) {
        lafoobar.push("foobar");
           }
      else if (i % 3 == 0) {
        lafoobar.push("foo");
      }
      else if (i % 5 == 0) {
        lafoobar.push("bar");
      }
      else {
        lafoobar.push(i);
       
      }
  }

  return document.getElementById("demo11").innerHTML = `${lafoobar} `; 

}


const mascota = () => {
  const suma = (ns) => {

    let iterador = 0;
    
    for(i = 0; i < ns.length; i++ ){
    iterador += ns[i];
    
    }
    return iterador;
  }
 
  const mascota =[
    {nombre: "pelusa",edad:4,tipo:"perro"},
    {nombre: "limon",edad:3,tipo:"perro"},
    { nombre: "nina",edad:7,tipo:"gato"},
    { nombre: "mumusu",edad:6,tipo:"gato",}
];


const edad_mascotas = mascota.map(x => x.edad)

const resutlado_suma = suma(edad_mascotas)
//console.log(resutlado_suma);

const promedio = resutlado_suma / edad_mascotas.length;
//console.log(promedio);

return document.getElementById("demo12").innerHTML = `el promedio de edad de las mascotas es : ${promedio} `; 


}

const ordenarMascota = () =>{
  const mascota =[
    {nombre: "pelusa",edad:4,tipo:"perro"},
    {nombre: "limon",edad:3,tipo:"perro"},
    { nombre: "nina",edad:7,tipo:"gato"},
    { nombre: "mumusu",edad:6,tipo:"gato",}
];
const reduce_index = mascota.reduce((acc,ma)=> ({...acc,[ma.nombre]:ma.tipo,}),{} )
console.log(reduce_index);


return document.getElementById("demo13").innerHTML = ` ${Object.entries(reduce_index)} en la consola se observa mejor`; 

}

const CodelandUsernameValidation =() =>{ 

  let str = document.getElementById("validator").value;

  let expreg = /^[A-Za-z]{1}[A-Za-z0-9-_-]{2,23}[A-Za-z0-9]{1}$/;
  matricula= [];
 if(expreg.test(str))
 matricula.push("La matrícula es correcta");
 else 
 matricula.push("La matrícula NO es correcta");   
return document.getElementById("demo14").innerHTML = ` ${matricula}`; 

}






const longestword =() => { 
  let sen = document.getElementById("cadena").value;
  arr = sen.replace(/[^a-zA-Z0-9 ]/ig,'');
  word = arr.split(" ");
   longestW = word[0]

  for ( i = 0; i < word.length ; i ++ ){
      if (word[i].length > longestW.length) {
        longestW = word[i]
    
    }
  } 

  
  return document.getElementById("demog").innerHTML = `la palabra mas larga es: ${longestW}`;  
}