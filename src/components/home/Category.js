import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: "1"
		};
		this.handleClick = this.handleClick.bind(this);
	}	
	componentDidMount() {
		this.props.onChange(this.state.current);
	}
	handleClick(e) {
      this.setState({
        current: e.key,
      });
      this.props.onChange(e.key);
    }
    render() {
      return (
        <div className="container">
          <Menu
            onClick={this.handleClick.bind(this)}
            selectedKeys={[this.state.current]}
            mode="horizontal">
            {
              this.props.categories && this.props.categories.map((data) => {
                return (
                  <Menu.Item key={data.id}>
                    <Icon type="github" />{data.name}
                  </Menu.Item>
                );
              })
            }
            <Menu.Item key="favorite">
              <Icon type="gitlab" />Favorite
            </Menu.Item>
          </Menu>
        </div>
        );
    }
}

Categories.propTypes = {
	categories: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	index: PropTypes.int
};
export default Categories;
