import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/header/header.jsx';
import { Footer } from '../components/footer/footer.jsx';
import { Order } from '../components/order/order.jsx';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const items = await response.json();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false} />
      {/*       <header>
        <div className="container header__content">
          <div className="site-logo"></div>

          <nav className="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>

        </div>
      </header> */}
      <Order items={items} />
      {/*   <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          <p className="empty-order">Zatím nemáte nic objednáno</p>
          <div className="order__items">
                   <div className="order-item">
              <img src="/cups/espresso.png" className="order-item__image" />
              <div className="order-item__name">Espresso</div>
            </div>

            <div className="order-item">
              <img src="/cups/doppio.png" className="order-item__image" />
              <div className="order-item__name">Doppio</div>
            </div> 
          </div>
        </div>
      </main> */}

      <Footer />
      {/*  <footer>
        <div className="container">
          <div className="footer__content">
            Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
          </div>
        </div>
      </footer> */}
    </div>
  </div>,
);
