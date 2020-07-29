const firstName = "Adrian";
const lastName = "Jagiełło";
const age = 22;

const heading = document.querySelector(".page-header--js");

heading.innerHTML = `Cieść, nazywam się ${firstName} ${lastName} i mam ${age} lata.`;

function greet(age, firstName) {
  console.log(`Cieść, nazywam się ${firstName} i mam ${age} lata.`);
}

greet(age, firstName);



const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation');

  nav.classList.toggle('navigation--open');
});
