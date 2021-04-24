import React, { useState } from 'react'
import '../styles/Cart.css'
function Cart(props) {
    const {cart, updateCart} = props;
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )

    return isOpen ? (
                    <div className='lmj-cart'>
                        <button onClick={() => setIsOpen(false)}>Close Cart</button>
                        <h2>Cart</h2>
                        {cart.map(({name, price, amount}, i)=>(
                            <div key={`${name}-${i}`}>
                                {name} : {price} x {amount}

                            </div>
                        ))}
                        <h3>Total : {total }€</h3>
                        <button onClick={()=>updateCart([])}>Clear Cart</button>
                    </div>)
               :           (
                        <div className='lmj-cart-closed'>
                            <button
                                className='lmj-cart-toggle-button'
                                onClick={() => setIsOpen(true)}
                            >
                                Open Cart
                            </button>
                        </div>                      )
}


export default Cart;