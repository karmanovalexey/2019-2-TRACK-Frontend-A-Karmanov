import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './CitiesList/List'
import City from './City/City'

function App() {
  return (
		<Router>
			<Switch>
				<Route path="/">
					<List/>
				</Route>
				<Route path="/city">
					<City/>
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
