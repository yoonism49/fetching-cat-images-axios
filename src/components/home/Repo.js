import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Link } from 'react-router';

const Repo = ({repo}) => {
	return (
				<div>
				<p>
				<Link to={`/single/${repo.name}`}  style={{fontSize:'25px','textDecoration':'underline'}}>
					{repo.name}
				</Link>
				</p>
				<p>
					<a href={repo.html_url} style={{fontSize:'18px', 'color':'#1b1d1f'}}><Icon type="github" /> go to Github</a>
				</p>
				
				</div>
	);
};
Repo.propTypes = {
	repo: PropTypes.object.isRequired
};

export default Repo;