import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Footer } = Layout;
import Header from './common/Header';

class App extends Component {
	render() {
		return (
			<Layout className="layout">
				<Header />
				{this.props.children}
				<Footer style={{ textAlign: 'center' }}>
					By Daniel Yoon
				</Footer>
			</Layout>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

export default App;
