let discountPercentage = Number(prompt("How much discount are you willing to give? Note: the figure provided is in %. e.g. if you input 10, this will mean 10%", 10))
let purchaseAmount = Number(prompt("How much is the total cost of good sold and service rendered?"))


let discount = (discountPercentage / 100) * purchaseAmount
let finalCost = purchaseAmount - discount
alert(`The total cost of your goods and service is ${purchaseAmount} and you have been given a discount of ${discountPercentage}% which is $${discount}. Now, you are to pay are total cost of $${finalCost}.`)