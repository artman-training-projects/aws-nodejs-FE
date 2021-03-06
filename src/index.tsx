import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import { store } from "store/store";
import App from "components/App/App";
import * as serviceWorker from "./serviceWorker";
import "index.css";

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if ([400, 401, 403].includes(error?.response?.status)) {
			alert(error.response.data?.data);
		}

		return Promise.reject(error?.response ?? error);
	}
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
