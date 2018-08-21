import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'antd';
import * as userActions from '../../actions/userAction';
import Repo from './Repo';
import SearchText from './SearchText';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
		this.updateSearch = this.updateSearch.bind(this);
		this.saveSearch = this.saveSearch.bind(this);
	}

	updateSearch(e) {
		let user = e.target.value;
		return this.setState({ user: user });
	}

	saveSearch(e) {
		e.preventDefault();
		this.props.actions.loadUser(this.state.user);
	}

	repoRow(repo, index) {
		return (
			<List.Item key={index}><Repo key={repo.id} repo={repo} /></List.Item>
		);
	}

	render() {
		return (
			<div className="container" style={{marginLeft:'260px'}}>
			<SearchText
					user={this.state.user}
					onChange={this.updateSearch}
					onSave={this.saveSearch}
				/>
				<List
					header={<div>Repository List</div>}
					bordered
					dataSource={this.props.repos}
					renderItem={this.repoRow}
				/>
				
			</div>
		);
	}
}

Home.propTypes = {
	repos: PropTypes.array.isRequired,
	user: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		repos: state.repos,
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
