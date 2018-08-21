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
					<Icon type="appstore" />Git Repo Search Home
				</IndexLink>
			</Menu.Item>
		</Menu>
	);
};

export default Header;
