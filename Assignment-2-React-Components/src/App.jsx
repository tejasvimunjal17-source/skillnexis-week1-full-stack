// App.jsx
//
// This is the "assembly point" of the whole practice project. It
// imports all 5 required components and puts them together on one
// page, passing each one the props it needs.

import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Form from './components/Form';
import { cardsData } from './data/cardsData';
import './App.css';

// Sample nav data passed into Header as a prop (see Header.jsx).
const navLinks = [
  { id: 1, label: 'Cards', href: '#cards' },
  { id: 2, label: 'Contact Form', href: '#contact' },
];

function App() {
  return (
    <div className="app">
      <Header siteTitle="React Components Practice" navLinks={navLinks} />

      <main>
        <section id="cards" className="section">
          <h2>Cards</h2>
          <p className="section-note">
            The 3 cards below are all rendered by the SAME reusable Card
            component - only the data (props) passed to each one is
            different. Click "Like" on any card to see its own state
            change independently.
          </p>
          <div className="cards-grid">
            {cardsData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                tag={card.tag}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Practice Form</h2>
          <p className="section-note">
            Type in the fields below and submit - this demonstrates React
            state (tracking what you type) and events (onChange, onSubmit).
          </p>
          <Form />
        </section>
      </main>

      <Footer author="Tejasvi Munjal" year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
