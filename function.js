function School(name, minYears) {
  if (!name || !name.trim()) {
    throw new Error("Не указано название школы");
  }

  if (!minYears || !parseInt(minYears)) {
    throw new Error("Не указано минимальное количество лет");
  }

  this.MIN_YEARS = minYears;
  this.SCHOOL_NAME = name;

  this.checkAge = function (age) {
    if (age < this.MIN_YEARS) {
      return false
    } else {
      return true
    }
  };

  getTeacherList = function () {
    return [
      "А. С. Иванов",
      "В. С. Петров",
      "И. А. Сидоров",
    ];
  }

  getTeacher = function () {
    let id = Math.floor(Math.random() * Math.floor(this.getTeacherList().length))
    return getTeacherList()[id];
  };

  this.welcome = function (name, years) {
    const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

    name = name || prompt('Как вас зовут?');

    if (!name) {
      alert('Вы не указали имя!');
      return this.welcome(name, years);
    }
    if ( Number(name)) {
      alert('Укажите верное значение')
      return this.welcome()
    }

    years = years || Math.abs(parseInt(prompt('Укажите ваш возраст')));

    if (!years) {
      alert('Вы не указали возраст!');
      return this.welcome(name, years);
    }

    if (this.checkAge(years)) {
      alert(`Добро пожаловать в автошколу ${this.SCHOOL_NAME}, ${name}`);
    } else {
      return alert(`Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше`);
    }

    const TEACHER_NAME = getTeacher();

    alert(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`);
  };
}

var autoSchool = new School('Парус', 18);

autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);
