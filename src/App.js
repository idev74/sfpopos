import './App.css';
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}
