import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import countriesArray from '../countries.json';

const CountriesList = () => {
  const [countries, setCountries] = useState(countriesArray);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((el) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={el.alpha3Code}
            >
              {el.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
