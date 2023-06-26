window.onload = function(){
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstName').innerText = initPerson.firstName;
    document.getElementById('surname').innerText = initPerson.lastName;
    document.getElementById('gender').innerText = initPerson.gender;
    document.getElementById('birthYear').innerText = initPerson.birthYear;
    document.getElementById('profession').innerText = initPerson.profession;
};