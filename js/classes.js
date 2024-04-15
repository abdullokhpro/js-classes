export class Car {
  constructor(brand, type, year, color, distance) {
    this._brand = brand;
    this._type = type;
    this._year = year;
    this._color = color;
    this._distance = distance;
  }

  setBrand(newBrand) {
    this._brand = newBrand;
    return `"brand muvaffaqiyatli o'zgartirildi"`;
  }

  getBrand() {
    return `Brandning nomi -- ${this._brand}`;
  }

  setType(newType) {
    this._type = newType;
    return `"type muvaffaqiyatli o'zgartirildi"`;
  }

  getType() {
    return `typning nomi -- ${this._type}`;
  }

  setYear(newYear) {
    this._type = newYear;
    return `"year muvaffaqiyatli o'zgartirildi"`;
  }

  getYear() {
    return `yearnin nomi -- ${this._type}`;
  }

  setColor(newColor) {
    this._type = newColor;
    return `"color muvaffaqiyatli o'zgartirildi"`;
  }

  getColor() {
    return `colornin nomi -- ${this._type}`;
  }

  setDistance(newDistance) {
    this._type = newDistance;
    return `"distance muvaffaqiyatli o'zgartirildi"`;
  }

  getDistance() {
    return `distancening nomi -- ${this._type}`;
  }
}

export class Nation {
  constructor(name, nation1, color, address, motherland) {
    this._name = name;
    this._nation1 = nation1;
    this._color = color;
    this._address = address;
    this._motherland = motherland;
  }

  setName(newName) {
    this._name = newName;
    return `"name muvaffaqiyatli o'zgartirildi"`;
  }

  getName() {
    return `namening nomi -- ${this._name}`;
  }

  setNation1(newNation1) {
    this._nation1 = newNation1;
    return `"nation1 muvaffaqiyatli o'zgartirildi"`;
  }

  getNation1() {
    return `nation1ing nomi -- ${this._nation1}`;
  }

  setColor(newColor) {
    this._color = newColor;
    return `color muvaffaqiyatli o'zgartirildi`;
  }

  getColor() {
    return `colorning nomi -- ${this._color}`;
  }

  setAddress(newAddress) {
    this._address = newAddress;
    return `address muvaffaqiyatli o'zgartirildi`;
  }

  getAddress() {
    return `addressning nomi -- ${this._address}`;
  }

  setMotherland(newMotherland) {
    this._motherland = newMotherland;
    return `motherland muvaffaqiyatli o'zgartirildi`;
  }

  getMotherland() {
    return `motherlandning nomi -- ${this._motherland}`;
  }
}

export class Flower {
  constructor(name, sort, height, color, quality) {
    this._name = name;
    this._sort = sort;
    this._height = height;
    this.color = color;
    this.quality = quality;
  }

  setName(newName) {
    this._name = newName;
    return `"name muvaffaqiyatli o'zgartirildi"`;
  }

  getName() {
    return `namening nomi -- ${this._name}`;
  }

  setSort(newSort) {
    this._sort = newSort;
    return `"sort ning muvaffaqiyatli o'zgartirildi"`;
  }

  getSort() {
    return `sort ning nomi -- ${this._sort}`;
  }

  setHeight(newHeight) {
    this._height = newHeight;
    return `"height ning muvaffaqiyatli o'zgartirildi"`;
  }

  getHeight() {
    return `height ning nomi -- ${this._height}`;
  }

  setColor(newColor) {
    this._color = newColor;
    return `"color ning muvaffaqiyatli o'zgartirildi"`;
  }

  getColor() {
    return `color ning nomi -- ${this._color}`;
  }
}

export class Country {
  constructor(name, population, avarageAge, wealth, ranking) {
    this._name = name;
    this._population = population;
    this._avarageAge = avarageAge;
    this._wealth = wealth;
    this._ranking = ranking;
  }

  setName(newName) {
    this._name = newName;
    return `"name muvaffaqiyatli o'zgartirildi"`;
  }

  getName() {
    return `namening nomi -- ${this._name}`;
  }

  setPopulation(newPopulation) {
    this._population = newPopulation;
    return `"population muvaffaqiyatli o'zgartirildi"`;
  }

  getPopulation() {
    return `population nomi -- ${this._population}`;
  }

  setAvarageAge(newAvarageAge) {
    this._avarageAge = newAvarageAge;
    return `"avarage age muvaffaqiyatli o'zgartirildi"`;
  }

  getAvarageAge() {
    return `avarage age nomi -- ${this._avarageAge}`;
  }

  setWealth(newWealth) {
    this._wealth = newWealth;
    return `"wealth age muvaffaqiyatli o'zgartirildi"`;
  }

  getWealth() {
    return `wealth age nomi -- ${this._wealth}`;
  }

  setRanking(newRanking) {
    this._ranking = newRanking;
    return `"ranking age muvaffaqiyatli o'zgartirildi"`;
  }

  getRanking() {
    return `ranking age nomi -- ${this._ranking}`;
  }
}

export class Teacher {
  constructor(name, age, address, qualification, experience) {
    this._name = name;
    this._age = age;
    this._address = address;
    this._qualification = qualification;
    this._experience = experience;
  }

  setName(newName) {
    this._name = newName;
    return `"name muvaffaqiyatli o'zgartirildi"`;
  }

  getName() {
    return `namening nomi -- ${this._name}`;
  }

  setAge(newAge) {
    this._age = newAge;
    return `"age muvaffaqiyatli o'zgartirildi"`;
  }

  getAge() {
    return `age nomi -- ${this._age}`;
  }

  setAddress(newAddress) {
    this._address = newAddress;
    return `"address muvaffaqiyatli o'zgartirildi"`;
  }

  getAddress() {
    return `address nomi -- ${this._address}`;
  }

  setQualification(newQualification) {
    this._qualification = newQualification;
    return `"qualification muvaffaqiyatli o'zgartirildi"`;
  }

  getQualification() {
    return `qualification nomi -- ${this._qualification}`;
  }

  setExperience(newExperience) {
    this._experience = newExperience;
    return `"experience muvaffaqiyatli o'zgartirildi"`;
  }

  getExperience() {
    return `experience nomi -- ${this._experience}`;
  }
}
