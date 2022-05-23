import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage, useIntl } from 'react-intl';
import  './joblist.css';

const JobsList = () => {
  const [offers] = useState([
    {
      id: "1",
      name: "Casablanca",
      directed: "Michael Curtiz",
      country: "United States",
      budget: 1,
      relase: "1942-05-01",
      views: 1256000
    },
    {
      id: "2",
      name: "El abarazo de la serpiente",
      directed: "Ciro Guerra",
      country: "Colombia",
      budget: 2,
      relase: "2015-12-23",
      views: 7256000
    },
    {
      id: "3",
      name: "Die Welle",
      directed: "Denis Gansel",
      country: "Germany",
      budget: 3,
      relase: "2001-04-28",
      views: 856000
    },
  ]);

  const [ofertas] = useState([
    {
      id: "1",
      name: "Casablanca",
      directed: "Michael Curtiz",
      country: "Estados Unidos",
      budget: 1,
      relase: "1942-05-01",
      views: 1256000
    },
    {
      id: "2",
      name: "El abarazo de la serpiente",
      directed: "Ciro Guerra",
      country: "Colombia",
      budget: 2,
      relase: "2015-12-23",
      views: 7256000
    },
    {
      id: "3",
      name: "Die Welle",
      directed: "Denis Gansel",
      country: "Alemania",
      budget: 3,
      relase: "2001-04-28",
      views: 856000
    },
  ]);

  var lng = useIntl().locale;

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr id={lng==="es"?"headerEs":"headerEn"}>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Name"/></th>
            <th scope="col"><FormattedMessage id="Directed"/></th>
            <th scope="col"><FormattedMessage id="Country"/></th>
            <th scope="col"><FormattedMessage id="Budget"/></th>
            <th scope="col"><FormattedMessage id="Release"/></th>
            <th scope="col"><FormattedMessage id="Views"/></th>
          </tr>
        </thead>
        <tbody>
        
          {lng==="es"?ofertas.map((e, i) => (
            <Job key={i} offer={e} />
          )):
          offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
