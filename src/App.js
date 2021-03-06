import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import ProductScreen from './components/screens/ProductScreen';
import HomeScreen from './components/screens/HomeScreen';

function App() {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/product/:id' component={ProductScreen} />
				</Container>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
