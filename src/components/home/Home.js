import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'antd';
import * as categoryAction from '../../actions/categoryAction';
import * as catsAction from '../../actions/catsAction';
import * as favAction from '../../actions/favAction';
import Cats from './Cats';
import Categories from './Category';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryId: "",
			catList:[]
		};
		this.updateCategory = this.updateCategory.bind(this);
		this.pickFavorite = this.pickFavorite.bind(this);
		this.repoRow = this.repoRow.bind(this);
	}
	updateCategory(e) {
		let cat = e;
		this.setState({ categoryId: cat });
		if(e !== 'favorite') {
			this.props.actions.loadCats(cat);
			this.setState({catList:'cat'});
		} else {
			this.props.actions.loadFavoriteCats();
			this.setState({catList:'fav'});
		}

	}

	pickFavorite(id) {
		this.props.actions.postFavorite(id);
		// this.props.actions.loadCats(this.state.user);
	}

	repoRow(cat, index) {
		return (
			<List.Item key={index} ><Cats key={this.state.catList==='cat'?cat.id:cat.image.id} cat={this.state.catList==='cat'?cat:cat.image} onClick={this.pickFavorite}/></List.Item>
		);
	}

	render() {
		return (
			<div className="container" style={{marginLeft:'260px'}}>
			<Categories
					categories={this.props.categories}
					onChange={this.updateCategory}
				/>
				<List
					header={<div>Cat Images</div>}
					bordered
					dataSource={this.state.catList==='cat'?this.props.cats:this.props.fav}
					renderItem={this.repoRow}
				/>
				
			</div>
		);
	}
}

Home.propTypes = {
	categories: PropTypes.array.isRequired,
	cats: PropTypes.array.isRequired,
	fav: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		repos: state.repos,
		categories: state.categories,
		cats: state.cats,
		fav: state.fav
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, categoryAction, catsAction, favAction), dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
