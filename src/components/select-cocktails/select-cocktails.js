import React from 'react';
import './select-cocktails.scss';
// Components
import {Select} from 'antd';
const {Option} = Select;

function SelectCocktails(props) {

    return (
        <Select className="select-cocktails"
                dropdownClassName={"select-cocktails-dropdown"}
                defaultActiveFirstOption={true}
                placeholder="Sort by name"
                optionFilterProp="children"
                onChange={props.setSortBy}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
        >
            <Option value="strDrink">By name</Option>
            <Option value="rate">By rating</Option>
            <Option value="popular">By popularity</Option>
            <Option value="price-h-to-l">By price: high to low</Option>
            <Option value="price-l-to-h">By price: low to high</Option>
        </Select>
    );
}

export default SelectCocktails;