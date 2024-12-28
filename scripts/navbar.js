const navbar = ()=>{
let card = ` <nav class="menu">
          <div style="display: flex
;justify-content:space-between"> <h1>Ecommerce App</h1>
           <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="wishlist.html">wishlist</a></li>
          <li><a href="cart.html">cart</a></li>
        </ul></div>   
       
      </nav>`;

      document.getElementById("nav").innerHTML =card;


}
navbar()