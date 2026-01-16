import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSakuraCards } from '../../services/cardService';
import Card from '../../components/card/Card';
import './Home.css';


const Home = () => {
  const [allCards, setAllCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await getSakuraCards();
        const randomCards = pickRandomCards(cards, 15); 
        setAllCards(randomCards);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, []);

 
  const pickRandomCards = (cards, count) => {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleSelect = (card) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  return (
  <main className="Home-container">
    <section className="tarot-table">
      
      <div className="fan-area">
        {allCards.map((card, index) => (
          <Card
            key={card.id}
            data={card}
            index={index}
            total={allCards.length}
            onSelect={() => handleSelect(card)}
            isSelected={selectedCards.some(c => c.id === card.id)}
          />
        ))}
      </div>

     
      <div className="selection-area">
        <div className="slots-container">
          {[0, 1, 2].map((i) => (
            <div key={i} className="slot">
              {selectedCards[i] ? (
                <div className="selected-card">
                  <img src={selectedCards[i].reverseImage} alt="Tarot Card Back" />
                </div>
              ) : (
                <div className="empty-space" />
              )}
            </div>
          ))}
        </div>

        
        <div className="button-wrapper">
          {selectedCards.length === 3 && (
            <button onClick={() => navigate('/discover', { state: { selectedCards } })}>
              Discover Meaning
            </button>
          )}
        </div>
      </div>
    </section>
  </main>
);
};

export default Home;
