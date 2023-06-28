var personGenerator = {
    // фамилии
    surnames: `{
        "count": 15,
        "list": {
            "1": "Иванов",
            "2": "Смирнов",
            "3": "Кузнецов",
            "4": "Васильев",
            "5": "Петров",
            "6": "Михайлов",
            "7": "Новиков",
            "8": "Федоров",
            "9": "Кравцов",
            "10": "Николаев",
            "11": "Семёнов",
            "12": "Славин",
            "13": "Степанов",
            "14": "Павлов",
            "15": "Александров",
            "16": "Морозов"
        }
    }`,
    // мужские имена
    maleNames: `{
        "count": 10,
        "list": {
            "1": "Александр",
            "2": "Максим",
            "3": "Иван",
            "4": "Артем",
            "5": "Дмитрий",
            "6": "Никита",
            "7": "Михаил",
            "8": "Даниил",
            "9": "Егор",
            "10": "Андрей"
        }
    }`,
    // женские имена
    femaleNames: `{
        "count": 10,
        "list": {
            "1": "Анастасия",
            "2": "Диана",
            "3": "Ольга",
            "4": "Виктория",
            "5": "Елена",
            "6": "Марина",
            "7": "Света",
            "8": "Наталья",
            "9": "София",
            "10": "Екатерина"
        }
    }`,
    // список месяцев
    dates: `{
        "count": 12,
        "list": {
            "1": "Января",
            "2": "Февраля",
            "3": "Марта",
            "4": "Апреля",
            "5": "Мая",
            "6": "Июня",
            "7": "Июля",
            "8": "Августа",
            "9": "Сентября",
            "10": "Октября",
            "11": "Ноября",
            "12": "Декабря"
        }
    }`,
    // мужские профессии
    maleProfessions: `{
        "count": 9,
        "list": {
            "1": "Учитель",
            "2": "Продавец",
            "3": "Воспитатель",
            "4": "Уборщик",
            "5": "Домработник",
            "6": "Акушер",
            "7": "Стюард",
            "8": "Санитар",
            "9": "Гувернер"
        }
    }`,
    // женские профессии
    femaleProfessions: `{
        "count": 9,
        "list": {
            "1": "Учительница",
            "2": "Продавщица",
            "3": "Воспитательница",
            "4": "Уборщица",
            "5": "Домработница",
            "6": "Акушерка",
            "7": "Стюардесса",
            "8": "Санитарка",
            "9": "Няня"
        }
    }`,
    // женские отчества
    femaleProfessions: `{
        "count": 9,
        "list": {
            "1": "Учительница",
            "2": "Продавщица",
            "3": "Воспитательница",
            "4": "Уборщица",
            "5": "Домработница",
            "6": "Акушерка",
            "7": "Стюардесса",
            "8": "Санитарка",
            "9": "Няня"
        }
    }`,

    // Выбор пола
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    // генератор random значений
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    // преобразование из json строки в js объект
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // получаем random'ные мужские имена
    randomMaleName: function() {
        return this.randomValue(this.maleNames);
    },

    // получаем random'ные женские имена
    randomFemaleName: function() {
        return this.randomValue(this.femaleNames);
    },

    // получаем random'ные фимилии
    randomSurname: function() {
        return this.randomValue(this.surnames);
    },

    // получаем random'ные даты
    randomDates: function() {
        return this.randomValue(this.dates);
    },

    // получаем random'ные мужские профессии
    randomMaleProf: function() {
        return this.randomValue(this.maleProfessions);
    },

    // получаем random'ные женские профессии
    randomFemaleProf: function() {
        return this.randomValue(this.femaleProfessions);
    },

    // Формирование персонажа, передача данных для последующих преобразований
    getPerson: function (){
        this.person = {};

        // групируем условие по полам, "если 1 то М" - "если 0 то Ж"
        if(this.randomIntNumber()){
            this.person.firstName = this.randomMaleName(); // рандомное мужское имя
            this.person.lastName = this.randomSurname(); // рандомное мужское фамилие

            // генерируем окончания для мужского отчества
            let whileName = this.randomMaleName();
            this.person.patronymic = whileName+"ович";
            if (whileName.slice(-2) === 'ий') {this.person.patronymic = whileName.replace('ий', 'иевич')};
            if (whileName.slice(-2) === 'ей') {this.person.patronymic = whileName.replace('ей', 'еевич')};
            if (whileName.slice(-2) === 'та') {this.person.patronymic = whileName.replace('та', 'тович')};
            if (whileName.slice(-2) === 'ем') {this.person.patronymic = whileName.replace('ем', 'емович')};

            this.person.gender = this.GENDER_MALE; // пол мужской
            this.person.profession = this.randomMaleProf(); // мужская профессия
        } else {
            this.person.firstName = this.randomFemaleName(); // рандомное женское имя
            this.person.lastName = `${this.randomSurname()}a`; // рандомное женское фамилие

            // генерируем окончания для женского отчества
            let whileName = this.randomMaleName();
            this.person.patronymic = whileName+"овна";
            if (whileName.slice(-2) === 'ий') {this.person.patronymic = whileName.replace('ий', 'иевна')};
            if (whileName.slice(-2) === 'ей') {this.person.patronymic = whileName.replace('ей', 'еевна')};
            if (whileName.slice(-2) === 'та') {this.person.patronymic = whileName.replace('та', 'товна')};
            if (whileName.slice(-2) === 'ем') {this.person.patronymic = whileName.replace('ем', 'емовна')};

            this.person.gender = this.GENDER_FEMALE; // пол женский
            this.person.profession = this.randomFemaleProf(); // женская профессия
        }

        // Дата рождения. Получаем рандомные числа от 0 до 30, затем список месяцев и далее рандомное число от 1970 до 2015
        this.person.birthYear = `${this.randomIntNumber(30, 1)} ${this.randomDates()} ${this.randomIntNumber(2015, 1970)}`;
        return this.person; // Возвращаем данные о персонаже
    }
};