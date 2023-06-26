var personGenerator = {
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
    dates: `{
        "count": 12,
        "list": {
            "1": "Январь",
            "2": "Февраль",
            "3": "Март",
            "4": "Апрель",
            "5": "Май",
            "6": "Июнь",
            "7": "Июль",
            "8": "Август",
            "9": "Сентябрь",
            "10": "Октябрь",
            "11": "Ноябрь",
            "12": "Декабрь"
        }
    }`,
    maleProfessions: `{
        "count": 18,
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
    femaleProfessions: `{
        "count": 18,
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

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomMaleName: function() {
        return this.randomValue(this.maleNames);
    },

    randomFemaleName: function() {
        return this.randomValue(this.femaleNames);
    },

    randomSurname: function() {
        return this.randomValue(this.surnames);
    },

    getPerson: function () {
        this.person = {};
        if (this.randomIntNumber()) {
            this.person.firstName = this.randomMaleName();
            this.person.gender = this.GENDER_MALE;
        } else {
            this.person.firstName = this.randomFemaleName();
            this.person.gender = this.GENDER_FEMALE;
        }
        this.person.surName = this.randomSurname();
        console.log(this.person.gender);
        return this.person;
    }
};










// const saxli = {
//     surNames: `{
//         "count": 10,
//         "list": {
//             "1": "Иванов",
//             "2": "Смирнов",
//             "3": "Кузнецов"
//         }
//     }`
// }

// const obj = JSON.parse(saxli.surNames);
// console.log(obj.list);