import React, {useState} from 'react';
import './select-cocktails.scss';
// Components
import {Select} from 'antd';

const {Option} = Select;

function SelectCocktails(props) {
    let [searchText, setSearchText] = useState('');

    return (
        <Select className="select-cocktails"
                showSearch
                dropdownClassName={"select-cocktails-dropdown"}
                placeholder="Sort by name"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
        >
            <Option value="price-h-to-l">By price: hight to low</Option>
            <Option value="price-l-to-h">By price: low to hight</Option>
            <Option value="rating">By rating</Option>
            <Option value="popular">By popularity</Option>
        </Select>
    );

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
}

export default SelectCocktails;