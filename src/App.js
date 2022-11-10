import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Component/Footer/Footer';
import Team from './Component/Meet the team/Team';
import Navwidcaro from './Component/Navbarwithcarosal/Navwidcaro';
import Services from './Component/Services/Services';
import Watchapllication from './Component/Watchapplication/Watchaplication';

function App() {
  return (
    <div className="App">
      <Navwidcaro />
      <Watchapllication />
      <Team />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
