import { useState } from 'react'

// TODO: add backend API URL
const API_URL = 'http://localhost:8000';

function App() {
  const [isCracked, setIsCracked] = useState(false);
  const [fortune, setFortune] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const handleOpen = async () => {
    if (isCracked || isLoading) return;
    
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/draw`);
      const data = await res.json();

      // TODO: fetch and update history list
      
      setTimeout(() => {
        setFortune(data.fortune);
        setIsCracked(true);
        setIsLoading(false);
      }, 300);
    } catch (e) {
      setFortune(`Server Connection Failed ${e}`);
      setIsCracked(true);
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsCracked(false);
    setTimeout(() => setFortune(''), 500);
  };

  return (
    <div className="app-wrapper">
      <h1 className="title">Insight.</h1>

      <div className="content">
        <div className="coockie-section">
          <div className={`cookie-container ${isCracked ? 'cracked' : ''}`} onClick={handleOpen}>
            <div className="cookie-core">
              <span style={{ color: '#000', fontWeight: 'bold' }}>{isLoading ? '...' : ''}</span>
            </div>

            <div className="fortune-paper">
              <p className="fortune-text">{fortune}</p>
            </div>
          </div>

          <button 
            className="action-btn" 
            onClick={isCracked ? handleReset : handleOpen}
            disabled={isLoading}
          >
            {isCracked ? 'Next One' : 'Explore'}
          </button>
        </div>
        
        <div className="history-list">
          {/* TODO: display history list (reference to style.css) */}
        </div>
      </div>
    </div>
  )
}

export default App