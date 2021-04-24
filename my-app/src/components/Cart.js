import React, { useState, useEffect } from 'react'
import '../styles/Cart.css'
function Cart(props) {
    const {cart, updateCart} = props;
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0
    )
    /*
    useEffect(()=>{
        alert(`You have ${total} to pay`)
    }, [total])

     */


    return isOpen ? (
                    <div className='lmj-cart'>
                        <button onClick={() => setIsOpen(false)}>Close Cart</button>
                        {cart.length > 0 ? (
                            <div>
                                <h2>Cart</h2>
                                <ul>
                                {cart.map(({name, price, amount}, i)=>(
                                        <div key={`${name}-${i}`}>
                                            {name} : {price} x {amount}

                                        </div>
                                    ))}
                                </ul>
                                <h3>Total : {total }€</h3>
                                <button onClick={()=>updateCart([])}>Clear Cart</button>
                            </div>
                        )
                            : (
                            <div>Your Cart is empty</div>
                            )}

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