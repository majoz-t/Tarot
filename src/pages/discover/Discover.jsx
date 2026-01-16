import { useLocation, useNavigate } from 'react-router-dom';
import './discover.css';

const Discover = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const { selectedCards } = location.state || { selectedCards: [] };

  if (selectedCards.length === 0) {
    return (
      <div className="Discover-container">
        <div className="reveal-table">
          <p style={{ color: 'white' }}>No has seleccionado cartas todavía.</p>
          <div className="button-wrapper">
            <button onClick={() => navigate('/')}>Volver al Inicio</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="Discover-container">
      <section className="reveal-table">
        <h1 className="reveal-title">Pasaso, Presente, Futuro .</h1>

        <div className="reveal-grid">
          {selectedCards.map((card, index) => (
            <div
              key={card.id}
              className="reveal-card-item"
              style={{ "--delay": `${index * 0.2}s` }}
            >
              <div className="card-image-wrapper">
               
                <img src={card.image} alt={card.englishName} />
              </div>
              <div className="card-details">
               
                <h3>{card.englishName}</h3>
                <p><strong>Significado:</strong> {card.meaning}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="button-wrapper">
          <button onClick={() => navigate('/')}>Guardar Lectura</button>
        </div>
      </section>
    </main>
  );
};

export default Discover;