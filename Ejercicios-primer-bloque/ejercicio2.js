// Recibir dos números usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos


const numero4=window.prompt("dinos tu numero 1");
const numero3=window.prompt("dinos tu numero 2");

const numero1=parseInt(numero4);
const numero2=parseInt(numero3);





  const suma=numero1+numero2;
 const resta=numero1-numero2;
  const multicacion=numero1*numero2;
  const division=numero1/numero2;
  const modulo=numero1%numero2;


 alert(`sumar de ${numero1}+${numero2}=:${suma}`);
 alert(`resta de ${numero1}-${numero2}=:${resta}`);
  alert(`multiplicar de ${numero1}*${numero2}=:${multicacion}`); alert(`division de ${numero2}/${numero1}=:${division}`);
alert(`modulo de ${numero1}%${numero2}=:${modulo}`);