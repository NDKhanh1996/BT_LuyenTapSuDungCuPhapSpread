let customerOrder = []

function recordOrders(time, ...birds) {
    customerOrder.push({time, birds})
}

recordOrders(new Date, "coffee", "yaourt", "pizza")
console.log(customerOrder)