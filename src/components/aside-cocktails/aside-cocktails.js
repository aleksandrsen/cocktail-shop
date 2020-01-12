import React from 'react';
import './aside-cocktails.scss';
import {connect} from 'react-redux';
// Components
import {Checkbox} from 'antd';
import {Collapse} from 'antd';

const {Panel} = Collapse;

function AsideCocktails(props) {
    let {setFilter} = props;

    const alcoholic = [
        {label: 'Alcoholic', value: 'Alcoholic'},
        {label: 'Non alcoholic', value: 'Non Alcoholic'},
        {label: 'Optional alcohol', value: 'Optional alcohol'},
    ];

    const categories = [
        {label: 'Ordinary Drink', value: 'Ordinary Drink'},
        {label: 'Cocktail', value: 'Cocktail'},
        {label: 'Milk / Float / Shake', value: 'Milk Float Shake'},
        {label: 'Cocoa', value: 'Cocoa'},
        {label: 'Shot', value: 'Shot'},
        {label: 'Coffee / Tea', value: 'Coffee Tea'},
        {label: 'Homemade Liqueur', value: 'Homemade Liqueur'},
        {label: 'Punch / Party Drink', value: 'Punch Party Drink'},
        {label: 'Beer', value: 'Beer'},
        {label: 'Soft Drink / Soda', value: 'Soft Drink Soda'},
    ];

    let ingredients = [
        {"label": "7-Up", "value": "7-Up"},
        {"label": "Absolut Citron", "value": "Absolut Citron"},
        {"label": "Ale", "value": "Ale"},
        {"label": "Amaretto", "value": "Amaretto"},
        {"label": "Angelica root", "value": "Angelica root"},
        {"label": "Apple brandy", "value": "Apple brandy"},
        {"label": "Apple cider", "value": "Apple cider"},
        {"label": "Apple juice", "value": "Apple juice"},
        {"label": "Applejack", "value": "Applejack"},
        {"label": "Apricot brandy", "value": "Apricot brandy"},
        {"label": "Añejo rum", "value": "Añejo rum"},
        {"label": "Berries", "value": "Berries"},
        {"label": "Bitters", "value": "Bitters"},
        {"label": "Blackberry brandy", "value": "Blackberry brandy"},
        {"label": "Blended whiskey", "value": "Blended whiskey"},
        {"label": "Bourbon", "value": "Bourbon"},
        {"label": "Brandy", "value": "Brandy"},
        {"label": "Cantaloupe", "value": "Cantaloupe"},
        {"label": "Carbonated water", "value": "Carbonated water"},
        {"label": "Champagne", "value": "Champagne"},
        {"label": "Cherry brandy", "value": "Cherry brandy"},
        {"label": "Chocolate", "value": "Chocolate"},
        {"label": "Chocolate liqueur", "value": "Chocolate liqueur"},
        {"label": "Chocolate syrup", "value": "Chocolate syrup"},
        {"label": "Cider", "value": "Cider"},
        {"label": "Cocoa powder", "value": "Cocoa powder"},
        {"label": "Coffee", "value": "Coffee"},
        {"label": "Coffee brandy", "value": "Coffee brandy"},
        {"label": "Coffee liqueur", "value": "Coffee liqueur"},
        {"label": "Cognac", "value": "Cognac"},
        {"label": "Cranberries", "value": "Cranberries"},
        {"label": "Cranberry juice", "value": "Cranberry juice"},
        {"label": "Creme de Cacao", "value": "Creme de Cacao"},
        {"label": "Creme de Cassis", "value": "Creme de Cassis"},
        {"label": "Dark rum", "value": "Dark rum"},
        {"label": "Demerara Sugar", "value": "Demerara Sugar"},
        {"label": "Dry Vermouth", "value": "Dry Vermouth"},
        {"label": "Dubonnet Rouge", "value": "Dubonnet Rouge"},
        {"label": "Egg", "value": "Egg"},
        {"label": "Egg yolk", "value": "Egg yolk"},
        {"label": "Espresso", "value": "Espresso"},
        {"label": "Everclear", "value": "Everclear"},
        {"label": "Firewater", "value": "Firewater"},
        {"label": "Galliano", "value": "Galliano"},
        {"label": "Gin", "value": "Gin"},
        {"label": "Ginger", "value": "Ginger"},
        {"label": "Grape juice", "value": "Grape juice"},
        {"label": "Grapefruit juice", "value": "Grapefruit juice"},
        {"label": "Grapes", "value": "Grapes"},
        {"label": "Grenadine", "value": "Grenadine"},
        {"label": "Heavy cream", "value": "Heavy cream"},
        {"label": "Irish cream", "value": "Irish cream"},
        {"label": "Irish whiskey", "value": "Irish whiskey"},
        {"label": "Jack Daniels", "value": "Jack Daniels"},
        {"label": "Johnnie Walker", "value": "Johnnie Walker"},
        {"label": "Kahlua", "value": "Kahlua"},
        {"label": "Kiwi", "value": "Kiwi"},
        {"label": "Lager", "value": "Lager"},
        {"label": "Lemon", "value": "Lemon"},
        {"label": "Lemon juice", "value": "Lemon juice"},
        {"label": "Lemon vodka", "value": "Lemon vodka"},
        {"label": "Lemonade", "value": "Lemonade"},
        {"label": "Light rum", "value": "Light rum"},
        {"label": "Lime", "value": "Lime"},
        {"label": "Lime juice", "value": "Lime juice"},
        {"label": "Mango", "value": "Mango"},
        {"label": "Midori melon liqueur", "value": "Midori melon liqueur"},
        {"label": "Milk", "value": "Milk"},
        {"label": "Orange", "value": "Orange"},
        {"label": "Orange bitters", "value": "Orange bitters"},
        {"label": "Ouzo", "value": "Ouzo"},
        {"label": "Peach nectar", "value": "Peach nectar"},
        {"label": "Peach Vodka", "value": "Peach Vodka"},
        {"label": "Peppermint schnapps", "value": "Peppermint schnapps"},
        {"label": "Pineapple juice", "value": "Pineapple juice"},
        {"label": "Pisco", "value": "Pisco"},
        {"label": "Port", "value": "Port"},
        {"label": "Red wine", "value": "Red wine"},
        {"label": "Ricard", "value": "Ricard"},
        {"label": "Rum", "value": "Rum"},
        {"label": "Sambuca", "value": "Sambuca"},
        {"label": "Scotch", "value": "Scotch"},
        {"label": "Sherry", "value": "Sherry"},
        {"label": "Sloe gin", "value": "Sloe gin"},
        {"label": "Southern Comfort", "value": "Southern Comfort"},
        {"label": "Spiced rum", "value": "Spiced rum"},
        {"label": "Sprite", "value": "Sprite"},
        {"label": "Strawberries", "value": "Strawberries"},
        {"label": "Strawberry schnapps", "value": "Strawberry schnapps"},
        {"label": "Sugar", "value": "Sugar"},
        {"label": "Sugar syrup", "value": "Sugar syrup"},
        {"label": "Sweet Vermouth", "value": "Sweet Vermouth"},
        {"label": "Tea", "value": "Tea"},
        {"label": "Tequila", "value": "Tequila"},
        {"label": "Tomato juice", "value": "Tomato juice"},
        {"label": "Triple sec", "value": "Triple sec"},
        {"label": "Vodka", "value": "Vodka"},
        {"label": "Water", "value": "Water"},
        {"label": "Whiskey", "value": "Whiskey"},
        {"label": "Yoghurt", "value": "Yoghurt"}
    ];

    return (
        <aside className="aside-cocktails">
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="Alcoholic" key="1">
                    <Checkbox.Group options={alcoholic} onChange={(checkedValue) => setFilter("strAlcoholic", checkedValue)}/>
                </Panel>
                <Panel header="Categories" key="2">
                    <Checkbox.Group options={categories} onChange={(checkedValue) => setFilter("strCategory", checkedValue)}/>
                </Panel>
                <Panel header="Ingredients" key="3">
                    <Checkbox.Group options={ingredients} onChange={(checkedValue) => setFilter("ingredients", checkedValue)}/>
                </Panel>
            </Collapse>
        </aside>
    );
}

export default AsideCocktails;