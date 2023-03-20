import './App.css';
import MainLayout from './components/Layout/MainLayout';
import SideBar from './components/Layout/SideBar/SideBar';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <MainLayout>
      <SideBar />
      <Header />
    </MainLayout>
  );
}

export default App;
