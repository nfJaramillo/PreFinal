import React from 'react';
import ReactDOM from 'react-dom/client';
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

var lng = (navigator.language)
lng = lng.charAt(0) + lng.charAt(1)
lng = lng.toLowerCase()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<IntlProvider locale={lng} messages= {lng==="es"? localeEsMessages: localeEnMessages}>
		<JobsList/>
</IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
