//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
//formarem uma data real (meses de 28–31 dias, ano bissexto para
//fevereiro) e false caso contrário.


let flag = 0;

function ehDataValida(dia, mes, ano){
   if (dia <= 0 && dia >31)
    flag = 1

   if (mes <= 0 && mes > 12)
    flag = 1

   if (ano < 0)
    flag = 1

   if (flag == 1)
    return false

   else 
   return true
}

console.log(ehDataValida(12,12,2000))
