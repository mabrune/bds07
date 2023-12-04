import CarImage from 'assets/images/car-header.png';
import Navbar from 'components/Navbar';

import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-container">
        <div className="home-card">
          <div className="home-card-content">
            <h5>O carro perfeito para você</h5>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-card-image">
            <img src={CarImage} alt="Imagem do carro" />
          </div>
        </div>

        <div className="home-card-2">
          <div className="home-card-2-content">
            <div className="home-card-2-button">
              <ButtonIcon />
            </div>
            <div className="home-card-2-text">
              <p>Comece agora a navegar</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
