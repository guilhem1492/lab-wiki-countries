import React from 'react';
import { useParams, Link } from 'react-router-dom';
import countriesArray from '../countries.json';

function CountryDetails(props) {
  const { countryId } = useParams();
  console.log('countryId', countryId);

  // Method .find() returns the first found matching element,
  // or `null` if no matching element is found.
  const foundCountry = countriesArray.find((el) => {
    return el.alpha3Code === countryId;
  });

  return (
    <div className="col-7">
      {!foundCountry && <h3>Country not found!</h3>}
      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/144x108/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt={foundCountry.name.official}
            style={{ width: '30%', margin: 'auto', marginTop: '1rem' }}
          />
          <h1>{foundCountry.name.official}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((el) => {
                      return (
                        <li>
                          <Link to={`/${el}`}>{el}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <Link to="/">Back home</Link>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
