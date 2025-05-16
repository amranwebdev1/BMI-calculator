let height = document.getElementById('num');
let weight = document.getElementById('bmwidth');
let button = document.getElementById('button');
let scor = document.getElementById('scor');
let result = document.querySelector('.resal');

button.addEventListener('click',function () {
  //e.preventDefault()//এইভাবে করতে পড়ি আবার ফরম সিলেক্ট করে
  let newHeight = parseFloat(height.value);//parseFloat হলো একটি মেথড যা দ্বারা স্ট্রি কে নাম্বারে রূপান্তরিত করা যায়
  let newWeight = parseFloat(weight.value);
  newHeight = newHeight/100;
  let sqr = newHeight * newHeight;
  let bmi = newWeight/sqr;
  scor.textContent = bmi.toFixed(2);
  result.style.display = 'block';
  if (scor.textContent < 18.6) {
    scor.style. backgroundColor = '#FFF800';
  } else if (scor.textContent < 24.9) {
    scor.style. backgroundColor = '#35F200';
  } else {
    scor.style. backgroundColor = '#FF2626';
  }
})
document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
})