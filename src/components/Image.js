import React, {useState, useContext} from "react"
import { Context } from "../Context"
/* import { ReactPropTypes } from "react" */

function Image(props) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    function heartIcon() {
        if (props.img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === props.img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img.id)} ></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
        }
    }
    

    return (
        <div 
            className={`${props.className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={props.img.url} alt="" className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

/* Image.ReactPropTypes = {
    className: ReactPropTypes.string,
    img: ReactPropTypes.shape({
        id: ReactPropTypes.string.isRequired,
        url: ReactPropTypes.string.isRequired,
        isFavorite: ReactPropTypes.bool
    })
} */

export default Image