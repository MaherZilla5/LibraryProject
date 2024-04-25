function TestFunction(){
    return (
    <div>
        <div id="topBar">
        <h1 id="testElement">Maher Library Homepage</h1>
        

         </div>
                  <div id = "mainBoxDiv">
                  <BookList src="images/gotBook.jpg" caption="Game Of Thrones Book" alt="Picture of game of thrones book"/>
                  <BookList src="images/gotBook.jpg" caption="Game Of Thrones Book" alt="Picture of game of thrones book"/>
                  <BookList src="images/gotBook.jpg" caption="Game Of Thrones Book" alt="Picture of game of thrones book"/>

                  </div>
                      
    </div>)
}

/*
function BookList(props){
       return(<div className="bookListing">
             <img src={props.pic} alt={props.alt}></img><figcaption>{props.caption}</figcaption>
       </div>)
}
*/
// <BookList pic={"images/gotPic.jpg"} alt={"got book"}/>
function BookList(props){
    return(<div className="bookListing">
             <img src={props.src} alt={props.alt}></img><figcaption>{props.caption}</figcaption>
             <button className="cartBtns">Add To List</button>
    </div>)
}

ReactDOM.render(<TestFunction/>, document.getElementById('root'));