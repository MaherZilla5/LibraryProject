function Checkout(){
    return(
        <div>
            <div id="header"><h1 id="checkout">Checkout</h1></div>
        <div id="checkoutBox">
               <div id="itemBox">
               <img src="images/gotBook.jpg"></img>
               <h2>A song of ice and fire, game of thrones</h2>
               <button>Add More</button>

               </div>
        </div>
        
        </div>
    )
}



ReactDOM.render(<Checkout/>, document.getElementById('root'));