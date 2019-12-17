import React from 'react';
import './aside-cocktails.scss';
// Components
import { Checkbox } from 'antd';

function AsideCocktails(props) {

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    const alcoholic = [
        { label: 'Alcoholic', value: 'Alcoholic' },
        { label: 'Non alcoholic', value: 'Non_Alcoholic' },
        { label: 'Optional alcohol', value: 'Optional_alcohol' },
    ];

    const categories = [
        { label: 'Ordinary Drink', value: 'Ordinary_Drink' },
        { label: 'Cocktail', value: 'Cocktail' },
        { label: 'Milk / Float / Shake', value: 'Milk_Float_Shake' },
        { label: 'Cocoa', value: 'Cocoa' },
        { label: 'Shot', value: 'Shot' },
        { label: 'Coffee / Tea', value: 'Coffee_Tea' },
        { label: 'Homemade Liqueur', value: 'Homemade_Liqueur' },
        { label: 'Punch / Party Drink', value: 'Punch_Party_Drink' },
        { label: 'Beer', value: 'Beer' },
        { label: 'Soft Drink / Soda', value: 'Soft Drink_Soda' },
    ];

    let ingredients = [
        { label: "Light rum", value: 'Light rum'},
        { label: "Applejack", value: 'Applejack'},
        { label: "Gin", value: 'Gin'},
        { label: "Dark rum", value: 'Dark rum'},
        { label: "Sweet Vermouth", value: 'Sweet Vermouth'},
        { label: "Strawberry schnapps", value: 'Strawberry schnapps'},
        { label: "Scotch", value: 'Scotch'},
        { label: "Apricot brandy", value: 'Apricot brandy'},
        { label: "Triple sec", value: 'Triple sec'},
        { label: "Southern Comfort", value: 'Southern Comfort'},
        { label: "Orange bitters", value: 'Orange bitters'},
        { label: "Brandy", value: 'Brandy'},
        { label: "Lemon vodka", value: 'Lemon vodka'},
        { label: "Blended whiskey", value: 'Blended whiskey'},
        { label: "Dry Vermouth", value: 'Dry Vermouth'},
        { label: "Amaretto", value: 'Amaretto'},
        { label: "Tea", value: 'Tea'},
        { label: "Champagne", value: 'Champagne'},
        { label: "Coffee liqueur", value: 'Coffee liqueur'},
        { label: "Bourbon", value: 'Bourbon'},
        { label: "Tequila", value: 'Tequila'},
        { label: "Vodka", value: 'Vodka'},
        { label: "Añejo rum", value: 'Añejo rum'},
        { label: "Bitters", value: 'Bitters'},
        { label: "Sugar", value: 'Sugar'},
        { label: "Kahlua", value: 'Kahlua'},
        { label: "demerara Sugar", value: 'demerara Sugar'},
        { label: "Dubonnet Rouge", value: 'Dubonnet Rouge'},
        { label: "Lime juice", value: 'Lime juice'},
        { label: "Irish whiskey", value: 'Irish whiskey'},
        { label: "Apple brandy", value: 'Apple brandy'},
        { label: "Carbonated water", value: 'Carbonated water'},
        { label: "Cherry brandy", value: 'Cherry brandy'},
        { label: "Creme de Cacao", value: 'Creme de Cacao'},
        { label: "Grenadine", value: 'Grenadine'},
        { label: "Port", value: 'Port'},
        { label: "Coffee brandy", value: 'Coffee brandy'},
        { label: "Red wine", value: 'Red wine'},
        { label: "Rum", value: 'Rum'},
        { label: "Grapefruit juice", value: 'Grapefruit juice'},
        { label: "Ricard", value: 'Ricard'},
        { label: "Sherry", value: 'Sherry'},
        { label: "Cognac", value: 'Cognac'},
        { label: "Sloe gin", value: 'Sloe gin'},
        { label: "Apple juice", value: 'Apple juice'},
        { label: "Pineapple juice", value: 'Pineapple juice'},
        { label: "Lemon juice", value: 'Lemon juice'},
        { label: "Sugar syrup", value: 'Sugar syrup'},
        { label: "Milk", value: 'Milk'},
        { label: "Strawberries", value: 'Strawberries'},
        { label: "Chocolate syrup", value: 'Chocolate syrup'},
        { label: "Yoghurt", value: 'Yoghurt'},
        { label: "Mango", value: 'Mango'},
        { label: "Ginger", value: 'Ginger'},
        { label: "Lime", value: 'Lime'},
        { label: "Cantaloupe", value: 'Cantaloupe'},
        { label: "Berries", value: 'Berries'},
        { label: "Grapes", value: 'Grapes'},
        { label: "Kiwi", value: 'Kiwi'},
        { label: "Tomato juice", value: 'Tomato juice'},
        { label: "Cocoa powder", value: 'Cocoa powder'},
        { label: "Chocolate", value: 'Chocolate'},
        { label: "Heavy cream", value: 'Heavy cream'},
        { label: "Galliano", value: 'Galliano'},
        { label: "Peach Vodka", value: 'Peach Vodka'},
        { label: "Ouzo", value: 'Ouzo'},
        { label: "Coffee", value: 'Coffee'},
        { label: "Spiced rum", value: 'Spiced rum'},
        { label: "Water", value: 'Water'},
        { label: "Espresso", value: 'Espresso'},
        { label: "Angelica root", value: 'Angelica root'},
        { label: "Orange", value: 'Orange'},
        { label: "Cranberries", value: 'Cranberries'},
        { label: "Johnnie Walker", value: 'Johnnie Walker'},
        { label: "Apple cider", value: 'Apple cider'},
        { label: "Everclear", value: 'Everclear'},
        { label: "Cranberry juice", value: 'Cranberry juice'},
        { label: "Egg yolk", value: 'Egg yolk'},
        { label: "Egg", value: 'Egg'},
        { label: "Grape juice", value: 'Grape juice'},
        { label: "Peach nectar", value: 'Peach nectar'},
        { label: "Lemon", value: 'Lemon'},
        { label: "Firewater", value: 'Firewater'},
        { label: "Lemonade", value: 'Lemonade'},
        { label: "Lager", value: 'Lager'},
        { label: "Whiskey", value: 'Whiskey'},
        { label: "Absolut Citron", value: 'Absolut Citron'},
        { label: "Pisco", value: 'Pisco'},
        { label: "Irish cream", value: 'Irish cream'},
        { label: "Ale", value: 'Ale'},
        { label: "Chocolate liqueur", value: 'Chocolate liqueur'},
        { label: "Midori melon liqueur", value: 'Midori melon liqueur'},
        { label: "Sambuca", value: 'Sambuca'},
        { label: "Cider", value: 'Cider'},
        { label: "Sprite", value: 'Sprite'},
        { label: "7-Up", value: '7-Up'},
        { label: "Blackberry brandy", value: 'Blackberry brandy'},
        { label: "Peppermint schnapps", value: 'Peppermint schnapps'},
        { label: "Creme de Cassis", value: 'Creme de Cassis'},
        { label: "Jack Daniels", value: 'Jack Daniels'}
    ];

    return (
        <aside className="aside-cocktails">
            <div className="aside-item">
                <h2>Alcoholic</h2>
                <Checkbox.Group options={alcoholic} onChange={onChange} />
            </div>
            <div className="aside-item">
                <h2>Categories</h2>
                <Checkbox.Group options={categories} onChange={onChange} />
            </div>
            <div className="aside-item">
                <h2>Ingredients</h2>
                <Checkbox.Group options={ingredients} onChange={onChange} />
            </div>
        </aside>
    );
}

export default AsideCocktails;




{/*<Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />*/}
{/*<br />*/}
{/*<br />*/}
{/*<Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />*/}
{/*<br />*/}
{/*<br />*/}
{/*<Checkbox.Group*/}
{/*    options={optionsWithDisabled}*/}
{/*    disabled*/}
{/*    defaultValue={['Apple']}*/}
{/*    onChange={onChange}*/}
{/*/>*/}