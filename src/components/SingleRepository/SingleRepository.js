import React, { Component } from 'react';import PropTypes from 'prop-types';
import { Icon } from 'antd';
import * as singleAction from '../../actions/singleAction';
import { connect } from 'react-redux';
class SingleRepository extends Component {
	constructor(props) {
		super(props);
		this.state = {
			repo: ""
		};
		console.log('singleName'+this.props.params.singleName);
		//this.boundActionCreators = bindActionCreators(reposAction, dispatch);
		singleAction.loadSingleRepo(this.props.params.singleName);
	}
	componentWillMount(){

		//his.props.loadSingleRepo();
		this.props.loadSingleRepo(this.props.params.singleName);
		this.setState({repo:this.props.single})
	
	}
	render() {
		let singleRep=this.props.single?this.props.single.items[0]:undefined;
		return (
					<div style={{fontSize:'25px', marginLeft:'260'}}>
					<img src={singleRep?singleRep.owner.avatar_url:''} alt="avatar" className="circle" />
					<p className="title">
						{singleRep? singleRep.name:''}
					</p>
					<p className="title">
						{singleRep? singleRep.description:''}
					</p>
					<p>
						<a href={singleRep?singleRep.html_url:''} className="black-text"><Icon type="github" /></a>
					</p>
					<p><i className="fa fa-star material-icons" aria-hidden="true" /> {singleRep? singleRep.stargazers_count : ''} {"  |  "}<i className="fa fa-eye material-icons" aria-hidden="true" /> {singleRep? singleRep.watchers_count: ''}</p>
					</div>
		);
	}
}


SingleRepository.propTypes = {
	singleName: PropTypes.string.isRequired,
	repo: PropTypes.object
};

SingleRepository.propTypes = {
	singleName: PropTypes.string.isRequired
};



export default connect(
  (state) => {return state},singleAction)(SingleRepository)