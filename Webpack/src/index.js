import './homework14/style/style.css'
import isPalyndrom from './homework3/functions';
import marksProject from './homework4/array';
import getModa from './homework7/arrayMethods';
import getStudentsNames from './homework8/object'
import { Student } from './homework10/Prototype';

const mainImage = document.getElementById("mainImage")
mainImage.classList.add('stylePlanet');

isPalyndrom("Я несу гусеня");
const andry = new Student("КНУТД - м.Київ", "Бакалавр - Дизайнер сайтів", "Сусик Андрій Олексійович");
console.log(andry.getInfo());




