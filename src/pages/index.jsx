import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Banner } from '../components/banner/banner.jsx';
import { Menu } from '../components/menu/menu.jsx';
import { Footer } from '../components/footer/footer.jsx';
import { Contact } from '../components/contact/contact.jsx';
import { Gallery } from '../components/gallery/gallery.jsx';
import { Header } from '../components/header/header.jsx';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drinks = data.data;
console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />

    <main>
      <Banner />

      <Menu drinks={drinks} />

      <Gallery />

      <Contact />
    </main>
    <Footer />
  </div>,
);

document.querySelector('.nav-btn').addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
});

document.querySelector('.rollout-nav').addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.add('nav-closed');
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const dataId = form.dataset.id;
    console.log(dataId);

    const controlOrder = drinks.find(
      (napoj) => napoj.id === Number(dataId),
    )?.ordered;
    const valueOrder = !controlOrder ? true : false;

    console.log(controlOrder);

    fetch(`http://localhost:4000/api/drinks/${dataId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { op: 'replace', path: '/ordered', value: valueOrder },
      ]),
    }).finally(() => {
      window.location.reload();
    });
  });
});
