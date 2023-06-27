const personFirstName = document.getElementById('firstName');
const personSurname = document.getElementById('surname');
const personPatronymic = document.getElementById('patronymic');
const personGender = document.getElementById('gender');
const personBirthYear = document.getElementById('birthYear');
const personProfession = document.getElementById('profession');

window.onload = function(){
    const initPerson = personGenerator.getPerson();
    personFirstName.innerText = initPerson.firstName;
    personSurname.innerText = initPerson.lastName;
    personPatronymic.innerText = initPerson.patronymic;
    personGender.innerText = initPerson.gender;
    personBirthYear.innerText = initPerson.birthYear;
    personProfession.innerText = initPerson.profession;
};

const resetPerson = document.querySelector('#resetPerson');
resetPerson.onclick = function(event){
    personFirstName.innerText = 'Имя';
    personSurname.innerText = 'Фамилия';
    personPatronymic.innerText = 'Отчество';
    personGender.innerText = 'не указан';
    personBirthYear.innerText = 'не указан';
    personProfession.innerText = 'не указана';
    event.preventDefault();
}