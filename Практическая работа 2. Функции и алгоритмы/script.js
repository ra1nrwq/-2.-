console.log("=== Задание 1: Сражение с драконом ===");

const hero = {
  name: prompt("Введите имя героя:"),
  age: Number(prompt("Введите ваш возраст:")),
  hasSwordLicense: prompt("Есть ли у вас лицензия на меч? (true/false):") === "true",
  hasArmor: prompt("Есть ли у вас броня? (true/false):") === "true",
  powerLevel: Number(prompt("Введите уровень вашей силы (1-100):")),

  canFight: function () {
    return this.age >= 18 && this.powerLevel >= 50 && this.hasSwordLicense;
  },

  getBattleResult: function () {
    if (!this.canFight()) {
      return `${this.name}, вы слишком слабы и не можете участвовать в бою!`;
    }
    if (this.powerLevel > 70 && this.hasArmor) {
      return "Поздравляем! Вы победили дракона!";
    } else {
      return "К сожалению, вы проиграли дракона...";
    }
  },

  calculatePoints: function () {
    let points = this.powerLevel;
    if (this.hasArmor) points += 20;
    if (this.hasSwordLicense) points += 20;
    return points;
  },

  getTitle: function () {
    const points = this.calculatePoints();
    if (points >= 120) return "Легендарный герой";
    if (points >= 80) return "Опытный воин";
    return "Новичок";
  }
};

if (hero.canFight()) {
  console.log(`${hero.name}, вы допущены к бою с драконом!`);
  console.log(hero.getBattleResult());
} else {
  console.log(`${hero.name}, вы слишком слабы и не можете участвовать в бою!`);
}

console.log("Ваши очки героя:", hero.calculatePoints());
console.log("Ваш титул:", hero.getTitle());

console.log("=== Задание 2: Выполнение квестов ===");

hero.level = 1;
hero.gold = 0;
hero.completedQuests = [];

hero.addQuest = function (questName, reward) {
  this.completedQuests.push(questName);
  this.gold += reward;
  console.log(`Квест выполнен: ${questName} (+${reward} золота)`);
  if (this.gold >= 50) {
    this.levelUp();
  }
};

hero.levelUp = function () {
  this.level++;
  console.log("🎉 Герой повышает уровень!");
};

hero.showStats = function () {
  console.log("--- Результат ---");
  console.log(`Имя: ${this.name}`);
  console.log(`Возраст: ${this.age}`);
  console.log(`Уровень: ${this.level}`);
  console.log(`Уровень силы: ${this.powerLevel}`);
  console.log(`Золото: ${this.gold}`);
  console.log(`Количество выполненных квестов: ${this.completedQuests.length}`);
};

const quests = [
  { name: "Убить крыс в подвале", reward: 5 },
  { name: "Спасти кота из дерева", reward: 10 },
  { name: "Сопроводить торговца", reward: 20 },
  { name: "Победить гоблинов", reward: 50 },
  { name: "Разгадать древнюю загадку", reward: 70 }
];

console.log("--- Герой приступает к квестам ---");

for (let quest of quests) {
  hero.addQuest(quest.name, quest.reward);
}

hero.showStats();
