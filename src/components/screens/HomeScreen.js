import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../products';
import Product from '../products/Product';
const HomeScreen = () => {
	return (
		<>
			<h1>Lastest Product</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} key={product._id}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
