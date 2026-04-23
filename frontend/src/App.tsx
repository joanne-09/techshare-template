import { useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

function App() {
  const [isCracked, setIsCracked] = useState(false);
  const [fortune, setFortune] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = async () => {
    if (isCracked || isLoading) return;
    
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/draw`);
      const data = await res.json();
      
      // 稍微延遲讓動畫有節奏感
      setTimeout(() => {
        setFortune(data.fortune);
        setIsCracked(true);
        setIsLoading(false);
      }, 300);
    } catch (e) {
      setFortune("Server Connection Failed.");
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

      <div className={`cookie-container ${isCracked ? 'cracked' : ''}`} onClick={handleOpen}>
        {/* 封閉狀態的點擊核心 */}
        <div className="cookie-core">
          <span style={{ color: '#000', fontWeight: 'bold' }}>{isLoading ? '...' : ''}</span>
        </div>

        {/* 展開後的內容 */}
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
  )
}

export default App