/* Ejercicio 3
Concatenar dos arrays A y B de la siguiente forma: 
A0, B0, A1, B1, A2, B2, …, An, Bn. 
Los vectores tendrán la misma longitud.*/
let resolucion = <HTMLParagraphElement>document.getElementById("resolucion");
let result = <HTMLElement>document.getElementById("result");

let A: string[] = new Array(11);
let B :string[] = new Array(11);
B=["A5,B5,A6,B6,A7,B7,A8,B8,A9,B9"]
for(let i=0 ; i<A.length ; i++){
  A[i]="A0,B0,A1,B1,A2,B2,A3,B3,A4,B4," 
  // {console.log(A[i].concat(B))}


  resolucion.addEventListener("click" , () =>{
  let resultado = A.concat(B)
  resolucion.innerHTML= "resolucion: " + resultado }