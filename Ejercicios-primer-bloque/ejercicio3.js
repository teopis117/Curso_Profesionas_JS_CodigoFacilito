// Imprimir la sucesión fibonacci el número de veces que indicó el usuario

const numero=parseInt(window.prompt("dime tu numero"));
const fibo=[0,1];

for(let i=2;i<numero;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}

console.log(fibo);

fibo.forEach(numero => {

    const ul=document.getElementById("fibonacci");
    const li=document.createElement("li");
    li.textContent=numero;
    ul.appendChild(li);


});

