import React, {Component} from "react";
import Container from "../common-components/container";
import {Col, Row} from "antd";
import Section from "../common-components/section";
import AsideCocktails from "../aside-cocktails";
import CocktailsList from "../cocktails-list";
import SearchCocktailsForm from "../search-cocktails-form";
import SelectCocktails from "../select-cocktails";

class CocktailsPage extends Component {
    state = {
        strAlcoholic: null,
        strCategory: null,
        ingredients: null
    };

    setFilter = (param, value) => {
        if (value.length) {
            this.setState({
                [param]: value
            })
        } else if (!value.length) {
            this.setState({
                [param]: null
            })
        }
    };

    render() {
        return (
            <Section>
                <Container>
                    <Row type="flex" gutter={24} justify="space-between">
                        <Col span={6}>
                            <AsideCocktails setFilter={this.setFilter}/>
                        </Col>
                        <Col span={18}>
                            <Row type="flex" gutter={24} justify="space-between" align="middle" style={{marginBottom: "40px"}}>
                                <Col span={12}>
                                    <SelectCocktails/>
                                </Col>
                                <Col span={12}>
                                    <SearchCocktailsForm/>
                                </Col>
                            </Row>
                            <CocktailsList params={this.state}/>
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}

export default CocktailsPage;