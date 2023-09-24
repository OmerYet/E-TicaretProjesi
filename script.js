function increaseValue(productId){
    let valueElement = document.getElementById("value" + productId);
    let value = parseInt(valueElement.innerHTML);
    value++;
    valueElement.innerHTML = value;
    updateSubtotal(productId)
    calculateTotal();
    calculateEcoTax();
    calculateResult();
}

function decreaseValue(productId){
    let valueElement = document.getElementById("value" + productId);
    let value = parseInt(valueElement.innerHTML);
    if(value > 1){
        value--;
        valueElement.innerHTML = value;
        updateSubtotal(productId)
        calculateTotal();
        calculateEcoTax();   
        calculateResult();
    }

}

function updateSubtotal(productId){
    let valueElement = document.getElementById("value" + productId);
    let value = parseInt(valueElement.innerHTML);
    let priceElement = document.querySelector("#product" + productId + " .price");
    let price = parseInt(priceElement.innerHTML);
    let subtotalElement = document.getElementById("subtotal" + productId);
    let subtotal = (value * price) + "$";
    subtotalElement.innerHTML = subtotal;
}

function calculateTotal(){
    let subtotals = document.getElementsByClassName("subtotal");
    let total = 0;
    for (let i = 0; i < subtotals.length; i++){
        total += parseInt(subtotals[i].innerHTML);
    }

    let totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = total + "$";

}

function calculateEcoTax(){
    let totalPrice = document.getElementById("totalPrice");
    let ecoTax = document.getElementById("ecoTax");
    let tax = parseInt(totalPrice.innerHTML) * 0.18;
    ecoTax.innerHTML = tax.toFixed(2) + "$";
}



function calculateResult(){
    let totalPrice = document.getElementById("totalPrice");
    let ecoTax = document.getElementById("ecoTax");
    let result = document.getElementById("result");
    let totalResult = parseInt(totalPrice.innerHTML) + parseInt(ecoTax.innerHTML);
    result.innerHTML = totalResult.toFixed(2) + "$";
    

}

function removeProduct(productId) {
    var productElement = document.getElementById("product" + productId);
    productElement.parentElement.remove();
    calculateTotal();
  }

