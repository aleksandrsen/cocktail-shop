import React, {useState} from 'react';
import './search-cocktails-form.scss';
// Components
import {Input} from 'antd';
const {Search} = Input;

function SearchCocktailsForm(props) {
    let [searchText, setSearchText] = useState('');

    return (
        <form className='search-cocktails-form'>
            <Input/>
            <button type="submit">Search</button>
        </form>
    );

    function handleSearch(value, event) {
        setSearchText(value);
        console.log(value, event);
    }
}

export default SearchCocktailsForm;