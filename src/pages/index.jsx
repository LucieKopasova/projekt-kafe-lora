import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Banner } from '../components/banner/banner.jsx';
import { Menu } from '../components/menu/menu.jsx';
import { Footer } from '../components/footer/footer.jsx';
import { Contact } from '../components/contact/contact.jsx';
import { Gallery } from '../components/gallery/gallery.jsx';
import { Header } from '../components/header/header.jsx';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />

    <main>
      <Banner />

      <Menu />

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
