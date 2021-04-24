import React, { useState} from 'react'
import {plantList} from "../datas/plantList";
import PlantItem from "./PlantItem";
import '../styles/ShoppingList.css'
import Categories from './Categories'
function ShoppingList(props) {

    const [activeCategory, setActiveCategory] = useState('')
    const {cart, updateCart} = props;

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )


    function addToCart(name, price) {
        const current = cart.find((p)=>p.name === name )
        if (current){
            const cartFiltered = cart.filter(p => p.name !== name)
            updateCart([...cartFiltered, {name,price,amount: current.amount+1}])
        }else {
            updateCart([...cart, {name, price, amount:1}])
        }
    }
    return(
        <div className='lmj-shopping-list'>
           <Categories
               categories={categories}
               setActiveCategory={setActiveCategory}
               activeCategory={activeCategory}

           />

            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light,price, category }) =>
                    !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                        <button onClick={()=>addToCart(name,price)}>add to cart</button>
                    </div> ) : null

                )}
            </ul>

        </div>
    )

}

export default ShoppingList;