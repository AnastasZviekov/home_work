
//CALCULATOR

userFigure1=Number(prompt(`Print first float figure`));
userFigure2=Number(prompt(`Print second float figure`));
console.log(userFigure1);
console.log(userFigure2);
roundFigure1=parseFloat(userFigure1.toFixed(2));
roundFigure2=parseFloat(userFigure2.toFixed(2));
console.log(roundFigure1);
console.log(roundFigure2);
min=Math.ceil(roundFigure1);
max=Math.floor(roundFigure2);
randomFigure=Math.floor(Math.random() * (max - min + 1)) + min;
randomFigureRound=parseFloat(randomFigure.toFixed(2));
console.log(randomFigure);
console.log(randomFigureRound);
alert(`Random number is: ${randomFigureRound} 🥳`);
userFigure3=Number(prompt(`Print third figure (any)`));
console.log(userFigure3);
userFigure3=parseFloat(userFigure3.toFixed(2));
console.log(userFigure3);


resSum=(randomFigureRound+userFigure3);
resSum=parseFloat(resSum.toFixed(2));
resSubstr=randomFigureRound-userFigure3;
resSubstr=parseFloat(resSubstr.toFixed(2));
resMultiply=randomFigureRound*userFigure3;
resMultiply=parseFloat(resMultiply.toFixed(2));
resDivision=randomFigureRound/userFigure3;
resDivision=parseFloat(resDivision.toFixed(2));


document.write(` <h1>Random Figure Calculator</h1>
     <table class="calculator">
         <thead>
             <tr class="upper_row">
                 <th><h3>Operation </h3></th>
                 <th><strong>Express </strong></th>
                 <th><strong>Value</strong></th>
             </tr>
         </thead>     
         <thead>
             <tr>
                 <th>Sum</th>
                 <th>${randomFigureRound}+${userFigure3}</th>
                 <th>${resSum}</th>
             </tr>
         </thead>   
          <thead>
             <tr>
                 <th>Substraction</th>
                 <th>${randomFigureRound}-${userFigure3}</th>
                 <th>${resSubstr}</th>
             </tr>
         </thead>    
          <thead>
             <tr>
                 <th>Multiplication</th>
                 <th>${randomFigureRound}*${userFigure3}</th>
                 <th>${resMultiply}</th>
             </tr>
         </thead>    
         <thead>
             <tr>
                 <th>Division</th>
                 <th>${randomFigureRound}/${userFigure3}</th>
                 <th>${resDivision}</th>
             </tr>
         </thead>       
         </table>`
 );