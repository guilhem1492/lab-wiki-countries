// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path=":countryId" element={<CountryDetails />} />
            {/* NOT CONVENIENT I GUESS: <Route path=":countryId/:countryId" element={<CountryDetails />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
