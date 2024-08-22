import "../CartPage/CartPage.css";
import "../CheckOut/checkOutPage.css";

function CheckOutPage() {


  return (
    <>
      <div className="mt-24 px-5">
        <div class="box">
          <div class="checkout-page md:flex">
            <div>
              <h2>Enter your address</h2>
              <form>
                <label for="street" class="label-checkout">
                  Street:{" "}
                </label>
                <input
                  id="street"
                  type="text"
                  placeholder="Enter your street"
                  name="street"
                  class="input-checkout"
                />
                <br />
                <label for="city" class="label-checkout">
                  City:{" "}
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  name="city"
                  class="input-checkout"
                />
                <br />
                <label for="state" class="label-checkout">
                  State:{" "}
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="Enter your state"
                  name="state"
                  class="input-checkout"
                />
                <br />
                <label for="country" class="label-checkout">
                  Country:{" "}
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Enter your country"
                  name="country"
                  class="input-checkout"
                />
                <br />
                <label for="zipCode" class="label-checkout">
                  Zipcode:{" "}
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="Enter your Zipcode"
                  name="zipCode"
                  class="input-checkout"
                />
                <br />
                <button class="checkout-btn">Save Address</button>
              </form>
            </div>
            <div>
              <h2>Enter Credit Card Details</h2>
              <form>
                <div>
                  <label for="cardNumber" class="label-checkout">
                    Card Number:
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="0000-0000-0000-0000"
                    class="input-checkout"
                    maxlength="19"
                    value=""
                  />
                </div>
                <div>
                  <label for="expiryDate" class="label-checkout">
                    Expiry Date (MM/YY):
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="mm/yy"
                    class="input-checkout"
                    maxlength="5"
                    value=""
                  />
                </div>
                <div>
                  <label for="cvv" class="label-checkout">
                    CVV:
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="000"
                    name="cvv"
                    class="input-checkout"
                    maxlength="3"
                    value=""
                  />
                </div>
                <button class="checkout-btn" type="submit" >
                  Pay Now
                </button>
              </form>
            </div>
            <div>
              <div
                class="total-price"
                style={{ backgroundColor: "rgb(29, 29, 29)", color: "white" }}
              >
                <h3 style={{ marginBottom: "10px" }}>
                  Order Summary ( 1 items)
                </h3>
                <div class="order-summary">
                  <div>Original Price</div>
                  <div>₹ 169,999.00</div>
                </div>
                <div class="order-summary">
                  <div>Savings</div>
                  <div>-₹ 0.00 </div>
                </div>
                <div class="order-summary">
                  <div>Delivery</div>
                  <div>Free</div>
                </div>
                <div class="order-summary">
                  <div>Total</div>
                  <div>₹ 169,999.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
