import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MobileBurgerView from "./components/MobileBurgerView";
import ActivityBar from './components/ActivityBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="py-4 px-10 bg-gradient-to-b from-white to-blue-100">
      <Header/>
      <MobileBurgerView/>
      <ActivityBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
