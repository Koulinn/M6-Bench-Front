import {Container} from 'react-bootstrap'
import './App.css';
import TopNavBar from './components/Navbar/TopNavBar';
import AppRouter from './components/routes/AppRouter';

function App() {
  return (
    
    <Container className="p-0" fluid>
      <TopNavBar/>
      <AppRouter/>
    </Container>
  );
}

export default App;
