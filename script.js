let barca_img = document.querySelector('#barca_img');
let real_img = document.querySelector('#real_img');
let milan_img = document.querySelector('#milan_img');


barca.addEventListener('click', barcaFunction);
real.addEventListener('click', realFunction);
milan.addEventListener('click', milanFunction);

function barcaFunction() {
    barca_img.classList.toggle('hidden');
    real_img.classList.add('hidden');
    milan_img.classList.add('hidden');
}
function realFunction() {
    real_img.classList.toggle('hidden');
    barca_img.classList.add('hidden');
    milan_img.classList.add('hidden');
}
function milanFunction() {
    milan_img.classList.toggle('hidden');
    barca_img.classList.add('hidden');
    real_img.classList.add('hidden');
}
