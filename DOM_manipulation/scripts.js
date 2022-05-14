const p = document.createElement('p');
p.textContent = "Hey I'm red!"

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!"

const div = document.createElement("div");
div.setAttribute('style', 'border-style: solid; border-color: black; background: pink;');

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"

const p1 = document.createElement("p");
p1.textContent = "ME TOO!"


div.appendChild(h1);
div.appendChild(p1);

const container = document.querySelector("#container");
container.append(p,h3, div);


const btn = document.querySelector('.btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });