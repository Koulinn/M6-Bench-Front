import React from 'react'
import CartItem from './CartItem'
import { useEffect, useState } from 'react'
import { getRequest } from '../../lib/requests'
import TableHeader from './TableHeader'

function Cart({toggleCart, setToggleCart, setUpdatedCart, updateCart}) {
    const [cartBasket, setCartBasket] = useState(false)

    useEffect(()=>setCartBasket(cartBasket),[updateCart])


    useEffect(() => {
        try {
            getServerBasket()
            
        } catch (error) {
            console.log(error)
        }
    }, [updateCart])

    const getServerBasket = async()=>{
        const serverBasket = await getRequest(`cart/1`)
        setCartBasket(serverBasket.data)
    }

    return (
        <div id="cart" className={toggleCart? 'cart--show' : 'cart--hidden'}>
            <h4 onClick={()=>setToggleCart(!toggleCart)}>Shopping Cart</h4>
            {!cartBasket ? <h6>Shpping basket empty</h6> :
            <>
                <div className="mt-4">
                    {cartBasket? <TableHeader/> : <></>}
                    {cartBasket.prodByGroups.map((group, i)=><CartItem key={i}  group={group} setUpdatedCart={setUpdatedCart} updateCart={updateCart}/>)}
                </div>
                <div className="mt-5">
                    <p className="text-right">Total: £ {cartBasket.sumTotal}</p>
                </div>
            </>
            }
        </div>
    )
}

export default Cart
