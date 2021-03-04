// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Index } from './Views';
import './style.scss';


const App: React.FC = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route component={Index} path='/index' exact />
					<Redirect to='/index' from='/' />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;