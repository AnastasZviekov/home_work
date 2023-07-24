firstNameQuery=prompt("Please print your name");
console.log(firstNameQuery);

if (firstNameQuery !==null) {
    revisedFirstName = firstNameQuery.trim();
    console.log(revisedFirstName);
};
if (isNaN(firstNameQuery)===false||firstNameQuery==undefined||firstNameQuery ===null||firstNameQuery.trim()==="") {
    firstNameQuery = prompt("Your name😌");
};


lastNameQuery=prompt("Please print your last name");
console.log(lastNameQuery);

if (lastNameQuery !==null) {
    revisedLastName = lastNameQuery.trim();
    console.log(revisedLastName);
}
if (isNaN(lastNameQuery)===false||lastNameQuery==undefined||lastNameQuery ===null||lastNameQuery.trim()==="") {
    lastNameQuery = prompt("Your last name😌");
};

fullName="";
if (isNaN(firstNameQuery)===false&&isNaN(lastNameQuery)===false) {
          fullName+="Error/Please print your name";
}

else {fullName+=firstNameQuery+lastNameQuery; }



userEmail="";
userEmail=prompt("Please enter your email");
console.log(userEmail);

if(userEmail!==null) {
      userEmail+=userEmail.trim().toLowerCase();
      console.log(userEmail);
  }
                                                               

if (!userEmail.includes("@")) {
    console.log("Not valid email / Error");
    userEmail= alert(`not valid email ${userEmail} (symbol @ not exist)`);
    userEmail=document.write(`not valid email <b>${userEmail}</b> (symbol @ is not exist`) ;
}

 emailErrorMssge="";
  if (userEmail.startsWith("@")) {
    emailErrorMssge+=alert(`not valid email ${userEmail} (symbol @ find in first place)`);
    emailErrorMssge+=`not valid email ${userEmail} (symbol @ find in first place)`;
    emailErrorMssge+=document.write(`not valid email <b>${userEmail}</b> (symbol @ find in first place)`);
}

if (userEmail.endsWith("@")) {
    emailErrorMssge+=alert(`not valid email ${userEmail} (symbol @ find in last place)`);
    emailErrorMssge+=`not valid email ${userEmail} (symbol @ find in last place)`;
    emailErrorMssge+=document.write(`not valid email <b>${userEmail}</b> (symbol @ find in last place)`);
}

console.log(`${emailErrorMssge}`) ;


userYearBirth= prompt(`Pls enter your year of birth`);
if (userYearBirth!==null) {
    userYearBirth=userYearBirth.replace(" ", "");
}
console.log(userYearBirth);

if (userYearBirth===null||userYearBirth ===""||isNaN(userYearBirth)===true) {
    alert(`Your year of birth😌`);
    console.log(`Your year of birth😌`);
}

currentYear =new Date().getFullYear();
console.log(currentYear);

userAge="";
  if (isNaN(userAge)===false) {
        userAge = currentYear - userYearBirth;
    }
  if (userAge===null||userAge ===""||isNaN(userAge)===true||userAge<0){
     userAge=`Your age😌`;
    }


document.write(`<ul> <li>Full name: ${fullName}</li>
<li>Email: ${userEmail}||${emailErrorMssge}</li>
<li>Age: ${userAge}</li>
 </ul>`)














 
 

 

 
 
 
 










                                                                                                                                                       
