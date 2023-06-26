const personFirstName = document.getElementById('firstName');
const personSurname = document.getElementById('surname');
const personGender = document.getElementById('gender');
const personBirthYear = document.getElementById('birthYear');
const personProfession = document.getElementById('profession');

window.onload = function(){
    const initPerson = personGenerator.getPerson();
    personFirstName.innerText = initPerson.firstName;
    personSurname.innerText = initPerson.lastName;
    personGender.innerText = initPerson.gender;
    personBirthYear.innerText = initPerson.birthYear;
    personProfession.innerText = initPerson.profession;
};

const resetPerson = document.querySelector('#resetPerson');
resetPerson.onclick = function(event){
    personFirstName.innerText = 'Имя';
    personSurname.innerText = 'Фамилия';
    personGender.innerText = 'не указан';
    personBirthYear.innerText = 'не указан';
    personProfession.innerText = 'не указана';
    event.preventDefault();
}