import React, {Component} from "react";
import {Col, Row} from "antd";
import AsideCocktails from "./aside-cocktails";
import CocktailsList from "./cocktails-list";
import SearchCocktailsForm from "./search-cocktails-form";
import SelectCocktails from "./select-cocktails";

class Cocktails extends Component {
    state = {
        strAlcoholic: [],
        strCategory: [],
        ingredients: [],
        sortBy: null,
        searchText: ''
    };

    setFilter = (param, value) => {
        this.setState({
            [param]: value
        });
    };

    setSortBy = (param) => {
        this.setState({
            sortBy: param
        })
    };

    setSearchText = (value) => {
        this.setState({
            searchText: value
        });
    };

    render() {
        let {sortBy, ...rest} = {...this.state};
        let params = [];
        for (let key in rest) {
            if (Array.isArray(rest[key])) {
                rest[key].forEach(item => params.push({[key]: item}));
            }
        }

        return (
            <section className="default-section">
                <div className="container">
                    <Row type="flex" gutter={24} justify="space-between">
                        <Col span={6}>
                            <AsideCocktails setFilter={this.setFilter}/>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" gutter={24} justify="space-between" align="middle"
                                 style={{marginBottom: "40px"}}>
                                <Col span={12}>
                                    <SelectCocktails setSortBy={this.setSortBy}/>
                                </Col>
                                <Col span={12}>
                                    <SearchCocktailsForm search={this.setSearchText}/>
                                </Col>
                            </Row>
                            <CocktailsList params={params} sortBy={this.state.sortBy} searchText={this.state.searchText}/>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Cocktails;