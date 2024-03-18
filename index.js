function Calculator(a,b,cal)
{
   if(cal=="Add")
   {
      return a+b;
   }
   else if(cal=="Sub")
   {
      return a-b;
   }
   else if(cal=="Multi")
   {
      return a*b;
   }
   else if(cal=="Divide")
   {
      return a/b;
   }
   else if(cal=="Modulo")
   {
      return a%b;
   }
}

console.log(Calculator(5,5,"Add"));
console.log(Calculator(5,3,"Sub"));
console.log(Calculator(2,5,"Multi"));
console.log(Calculator(3,2,"Divide")); 
console.log(Calculator(2,3,"Modulo"));



