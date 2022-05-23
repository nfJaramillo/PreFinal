import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

var lng = (navigator.language)
lng = lng.charAt(0) + lng.charAt(1)
lng = lng.toLowerCase()
ReactDOM.render(
	<IntlProvider locale={lng} messages= {lng==="es"? localeEsMessages: localeEnMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
	
);