$(function () {
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
      $("#" + selectedProduct).css("visibility", "visible");
    }
    $("#" + product).css("visibility", "visible");
    $(".overview-grid").css("display", "none");
    selectedProduct = product;
  });
}

$(window).on("message", function (m) {
  $("#shoppingCart").click(function () {
    console.log("Clicked: ");
  });
  const message = JSON.parse(m.originalEvent.data);
  if (message.attr == "style") {
    const prop = message.value.split(":")[0]
    const value = message.value.split(":")[1]
    $(message.item).css(prop, value);
  } else if (message.attr == "html") {
    $(message.item).html(message.value);
  } else {
    $(message.item).attr(message.attr, message.value);
  }
});