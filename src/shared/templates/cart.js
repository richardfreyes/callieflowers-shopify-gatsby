import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"


export default function CartPage() {
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <Layout>
      <div>
        {emptyCart ? (
          <div>
            <h1>Your cart is empty</h1>
            <p>
              Looks like you haven’t found anything yet. We understand that
              sometimes it’s hard to chose — maybe this helps:
            </p>
            <Link to="/search?s=BEST_SELLING">
              View trending products
            </Link>
          </div>
        ) : (
          <>
            <h1>Your cart</h1>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty.</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {checkout.lineItems.map((item) => (
                  <LineItem item={item} key={item.id} />
                ))}

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Subtotal</td>
                  <td>
                    {formatPrice(
                      checkout.subtotalPriceV2.currencyCode,
                      checkout.subtotalPriceV2.amount
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Taxes</td>
                  <td>
                    {formatPrice(
                      checkout.totalTaxV2.currencyCode,
                      checkout.totalTaxV2.amount
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Shipping</td>
                  <td>Calculated at checkout</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Total Price</td>
                  <td>
                    {formatPrice(
                      checkout.totalPriceV2.currencyCode,
                      checkout.totalPriceV2.amount
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={handleCheckout}
              disabled={loading}
            
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </Layout>
  )
}
