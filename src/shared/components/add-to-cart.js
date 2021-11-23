import * as React from "react"
import { StoreContext } from "../context/store-context"
import { useHistory } from "react-router-dom";

export function AddToCart({ variantId, quantity, available, addOns, ...props }) {
  const { addVariantToCart, loading, didJustAddToCart } = React.useContext(StoreContext)
  let history = useHistory()

  if(loading || didJustAddToCart) {
    if(didJustAddToCart) {
      history.push("/cart");
    }
  }
  
  function addToCart(e) {
    e.preventDefault()
    addVariantToCart(variantId, addOns, quantity)
  }

  return (
    <button
      type="submit"
      className="btn-add-cart"
      onClick={addToCart}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </button>
  )
}