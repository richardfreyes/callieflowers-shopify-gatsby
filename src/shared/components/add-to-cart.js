import * as React from "react"
import { StoreContext } from "../context/store-context"

export function AddToCart({ variantId, quantity, available, addOns, ...props }) {
  const { addVariantToCart, loading } = React.useContext(StoreContext)
  
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