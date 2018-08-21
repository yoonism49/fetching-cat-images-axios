import React from 'react';
import PropTypes from 'prop-types';
import { Input,Row, Col, Button, Form } from 'antd';

const SearchText = ({ user, onChange, onSave }) => {
	return (
		<div className="container">
			<Form onSubmit={onSave}>
				<Row style={{ marginBottom: 28 }}>
				<Col span={4}></Col>
				<Col span={6}>
						<Input id="icon_prefix" type="text" className="validate" placeholder="Github username" value={user} onChange={onChange} />
				</Col>
				<Col style={{ marginLeft: 8 }} span={4}>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Search
					</Button>
				</Col>
				</Row>
			</Form>
		</div>
	);
};

SearchText.propTypes = {
	user: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default SearchText;
