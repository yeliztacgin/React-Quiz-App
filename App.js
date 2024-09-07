import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div
        className="card"
        style={{
          
          width: 320,
          height: 220,
          borderRadius: 4,
          border: '4px solid white', // Beyaz çerçeve
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer', // Tıklanabilir olduğunu gösterir
        }}
        onClick={() => navigate('/quiz')} // Yönlendirme için doğru yolu kullanın
      >
        <div className="card-body">
          <p id="p1">QUIZ APP</p>
        </div>
      </div>
    </div>
  );
}

export default App;
