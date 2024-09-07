import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      backgroundColor: '#282c34', 
      height: '100vh',  // Ekranın tamamını kapla
      margin: 0,       // Varsayılan margin'i sıfırla
      padding: 0,      // Varsayılan padding'i sıfırla
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div className="outer-box" style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '300px',
        width: '800px',
        backgroundColor: 'white',  // Ortadaki kutu beyaz
        border: '4px solid black',
        padding: '20px',
        borderRadius: 15,
      }}>

        <div className="inner-box" style={{
          width: '180px',
          height: '180px',
          backgroundColor: 'lightblue',  // İçerdeki kutular lacivert
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
        }}
          onClick={() => navigate('/Easy')}>
          <p style={{ color: 'white' }}>EASY</p>  {/* Yazılar beyaz */}
        </div>

        <div className="inner-box" style={{
          width: '180px',
          height: '180px',
          backgroundColor: 'lightblue',  // İçerdeki kutular lacivert
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
        }}
          onClick={() => navigate('/Medium')}>
          <p style={{ color: 'white' }}>MEDIUM</p>  {/* Yazılar beyaz */}
        </div>

        <div className="inner-box" style={{
          width: '180px',
          height: '180px',
          backgroundColor: 'lightblue',  // İçerdeki kutular lacivert
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
        }}
          onClick={() => navigate('/Hard')}>
          <p style={{ color: 'white' }}>HARD</p>  {/* Yazılar beyaz */}
        </div>

      </div>
    </div>
  );
}

export default QuizPage;
