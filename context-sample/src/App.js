import './App.css';
import { FavCityProvider } from './components/FavCityContext';
import { Book } from './components/Book';
import { CityForm } from './components/CityForm';
import { ThingsTodo } from './components/ThingsTodo';

function App() {

  return (

    <div className="App">
      <div>
        <h2> Let's learn about context </h2>
      </div>

      <FavCityProvider>
        <CityForm></CityForm>
        <Book></Book>
        <ThingsTodo></ThingsTodo>
      </FavCityProvider>

    </div>
  );
}

export default App;
