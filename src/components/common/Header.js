import React from 'react';
import { IndexLink } from 'react-router';
import { Menu, Icon } from 'antd';

const Header = () => {
	return (
		<Menu
        mode="horizontal"
		>
			<Menu.Item key="app">
				<IndexLink to="/">
					<Icon type="appstore" />Cat API Example!
				</IndexLink>
			</Menu.Item>
		</Menu>
	);
};

export default Header;
