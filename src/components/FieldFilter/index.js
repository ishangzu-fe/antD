import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Dropdown, Button, Icon, Checkbox } from 'antd';
import styles from './index.less';

export default class FieldFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
    }

    static defaultProps = {
        data: [],
        config: {
            label: "label",
            value: "value",
            description: "description",
        },
    }

    static propTypes = {
        data: PropTypes.array,
        config: PropTypes.object,
    }

    componentDidMount() { }

    componentWillUnmount() { }

    onChangeEvent(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
        const { config, data, onChange } = this.props; // 页面传入的属性值
        const { value } = this.state
        // console.log(data);
        const menu = (
            <Menu>
                {data.map((item, index) => {
                    const title = item[config.label]; // 标题
                    const value = item[config.value]; // 值
                    const description = item[config.description]; // 描述
                    // console.log(title, value, description);
                    return (
                        <Menu.Item key={index}>
                            <Checkbox
                                onChange={(e) => {
                                    if (item.checked === false) {
                                        item.checked = true;
                                    } else {
                                        item.checked = false;
                                    }
                                    // console.log(value, item, index);
                                    onChange(value, item, index); // 把值回传到页面上
                                }}
                                defaultChecked={item.checked}
                            >
                                {item.title}
                            </Checkbox>
                        </Menu.Item>
                    )
                })}
            </Menu>
        );
        return (
            <Dropdown overlay={menu} placement="bottomLeft">
                <Button>隐藏显示列 <Icon type="down" /></Button>
            </Dropdown>
        )
    }
}