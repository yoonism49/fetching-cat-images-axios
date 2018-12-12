import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Cats extends Component {
	constructor(props) {
		super(props);
	this.handleClick = this.handleClick.bind(this);
	this.state = {
			favorite: ''
		};
	}

	handleClick(id) {
      if(this.state.favorite) {
        this.setState({favorite:''});
      } else {
        this.setState({favorite:'3px solid green'});
      }
      this.props.onClick(id);
    }
    render() {
		return (
					<div>
					<p>
					<Link  style={{'textDecoration':'underline', 'cursor':'pointer'}}  onClick={this.handleClick.bind(this, this.props.cat.id)}>
						<img src={this.props.cat.url} style={{width:'60%', 'height':'60%', 'border':this.state.favorite}}/>
					</Link>
					</p>
					
					</div>
		);
	}
}
Cats.propTypes = {
	cat: PropTypes.object.isRequired,
	onClick:PropTypes.func.isRequred
};

export default Cats;