import React, {useContext, useState} from "react";
import { FormattedDate, FormattedNumber, useIntl } from 'react-intl';





export const DetailContext = React.createContext(
  {
  des: "aaa"
});


const Job = (props) => {

  const [state, setState] = useState({});
  
  var { description } = useContext(DetailContext);

  function setDetail(des){
    setState({
    description: des,
  });
}  
  description = state
  
  
  var lng = useIntl().locale;
  return (
    <tr onClick={()=> setDetail(props.offer.description)}>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.directed}</td>
      <td>{props.offer.country}</td>
      <td><FormattedNumber value={props.offer.budget}/></td>
      <td><FormattedDate
        value={new Date(props.offer.relase)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      /></td>
      <td><FormattedNumber value={props.offer.views} thousandSeparator={true} /></td>
    </tr>
  );
};





export default Job
