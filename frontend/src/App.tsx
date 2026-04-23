import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || 'http://localhost:8000';

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

      const newHistory = await fetch(`${API_URL}/history`).then(res => res.json());
      setHistory(newHistory.history);
      
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
          {history.map((item, index) => (
            <div key={index} className="history-item">{item}</div> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default App