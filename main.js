$(function(){
});
function login() {
      var tmp = document.getElementById('login').innerHTML;
      if (tmp == "Ausloggen") {
        document.getElementById('login').innerHTML = "Einloggen";
      } else {
        document.getElementById('login').innerHTML = "Ausloggen";
      }
    }

    function updateShoppingCart(amount) {
      if (amount == 0) {
        document.getElementById('shoppingCart').src = "img/shoppingcart.jpeg";
      } else if (amount == 1) {
        document.getElementById('shoppingCart').src = "img/shoppingcart_1.jpeg";
      } else if (amount == 2) {
        document.getElementById('shoppingCart').src = "img/shoppingcart_2.jpeg";
      } else if (amount == 3) {
        document.getElementById('shoppingCart').src = "img/shoppingcart_3.jpeg";
      } else {
        document.getElementById('shoppingCart').src = "img/shoppingcart_x.jpeg";
      }
    }

    
    var selectedProduct = null

    function showDetailView(product) {
      $(function () {
        if (selectedProduct) {
          $("#" + selectedProduct).css("display", "none");
        }
        $("#" + product).css("display", "block");
        $(".overview-grid").css("display", "none");
        $(".filter-area").css("display", "none");
        selectedProduct = product;
      });
    }

    $(window).on("message", function (m) {
      $("#shoppingCart").click(function () {
        console.log("Clicked: ");
      });
      const message = JSON.parse(m.originalEvent.data);
      $(message.item).attr(message.attr, message.value);
    });