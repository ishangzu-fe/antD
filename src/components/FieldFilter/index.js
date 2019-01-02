import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button, Icon, Checkbox } from 'antd';

export default class FieldFilter extends Component {
  static defaultProps = {
    data: [],
    config: {
      label: 'label',
      value: 'value',
      description: 'description',
    },
  };

  static propTypes = {
    data: PropTypes.array,
    config: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleMenuClick = flag => {
    this.setState({
      visible: flag,
    });
  };

  render() {
    const { config, data, onChange } = this.props; // 页面传入的属性值
    const { visible } = this.state;
    // console.log(data);
    const menu = (
      <Menu>
        {data.map((item, index) => {
          // const title = item[config.label]; // 标题
          const value = item[config.value]; // 值
          // const description = item[config.description]; // 描述
          // console.log(title, value, description);
          const items = item;
          return (
            <Menu.Item key={value}>
              <Checkbox
                onChange={() => {
                  if (items.checked === false) {
                    items.checked = true;
                  } else {
                    items.checked = false;
                  }
                  // console.log(value, item, index);
                  onChange(value, item, index); // 把值回传到页面上
                }}
                defaultChecked={item.checked}
              >
                {item.title}
              </Checkbox>
            </Menu.Item>
          );
        })}
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        trigger={['click']}
        visible={visible}
        onVisibleChange={this.handleMenuClick}
      >
        <Button>
          隐藏显示列 <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}
