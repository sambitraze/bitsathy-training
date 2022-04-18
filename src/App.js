import { Container, Button } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { HomeScreen } from './Screens/HomeScreen';
import './App.css';

function App() {
  return (
    <><Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>

  );
}

export default App;
