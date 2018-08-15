'use strict';

class Person {
  constructor(name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

//   constructor() {
//     this.name = 'Jane Doe';
//     this.age = 30;
//     this.gender = 'female';
//   }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person{
  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

//   constructor() {
//     super();
//     this.previousOrganization = 'The School of Life';
//     this.skippedDays = 0;
//   }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person{
  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }
 
//   constructor() {
//     super();
//     this.level = 'intermediate';
//   }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

class Sponsor extends Person{
  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }
     
//   constructor() {
//     super();
//     this.company = 'Google';
//     this.hiredStudents = 0;
//   }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire() {
    this.hiredStudents++;
  }
}

class Cohort {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  addMentor(mentor) {
    this.mentors.push(mentor);
  }

  info() {
    console.log(`Then ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
