import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Home } from './Views';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route component={Home} path='/index' exact />
					<Redirect to='/index' from='/' />
        		</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;