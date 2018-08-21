import React from 'react';
import PropTypes from 'prop-types';
import { Input,Row, Col } from 'antd';

const SearchText = ({ user, onChange, onSave }) => {
	return (
		<div className="container">
			<form onSubmit={onSave}>
				<Row style={{ marginBottom: 28 }}>
				<Col span={4}></Col>
				<Col span={8}>
						<i className="fa fa-search material-icons prefix red-text text-darken-4" aria-hidden="true" />
						<Input id="icon_prefix" type="text" className="validate" placeholder="Github username" value={user} onChange={onChange} />
				</Col>
				</Row>
			</form>
		</div>
	);
};

SearchText.propTypes = {
	user: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default SearchText;
