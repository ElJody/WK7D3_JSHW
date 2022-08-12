function shoppingCart(action, item, cart=[]){
    let shop = cart.slice()
    switch(action){
        case "add":
            shop.push(item)
            return shop;
        case "remove":
            itemIndex = shop.indexOf(item)
            shop.splice(itemIndex,1)
            return shop;
        case "remove_items":
            while(shop.includes(item)){
                itemIndex = shop.indexOf(item)
                shop.splice(itemIndex,1)
            };
            return shop;
        case "empty":
            return [];
        }
}

let item = [
     {
      id: 1,
      name : "Chainsaw",
      desc : "Portable power tool used to cut down trees or chop up bodies.",
      price : 333.99
    },
    {
        id: 2,
      name : "Sledgehammer",
      desc : "When a hammer just isn't enough.",
      price : 49.99
    },
    {   
        id: 3,
      name : "Duct Tape",
      desc : "The real mans go to for just about everything.",
      price : 9.99
    },
    {   
        id: 4,
      name : "Shovel",
      desc : "Used after chainsaw in some cases to dispose of bodies.",
      price : 39.99
    },
    {   
        id: 5,
      name : "Lye",
      desc : "It's either this or you'll need to find a hog farm.",
      price : 59.99
    },
    
];

Cart = shoppingCart("add", item[0]);
Cart = shoppingCart("add", item[1], Cart);
Cart = shoppingCart("add", item[2], Cart);
Cart = shoppingCart("add", item[2], Cart);
Cart = shoppingCart("add", item[2], Cart);
Cart = shoppingCart("add", item[2], Cart);
Cart = shoppingCart("add", item[4], Cart);
Cart = shoppingCart("add", item[4], Cart);
Cart = shoppingCart("add", item[1], Cart);
Cart = shoppingCart("add", item[4], Cart);
Cart = shoppingCart("add", item[4], Cart);
console.table(Cart)
console.log("*** After Adding Items ***")

Cart = shoppingCart("remove", item[1], Cart);
Cart = shoppingCart("remove", item[3], Cart);
console.table(Cart)
console.log("*** After Removing One Item ***")

Cart = shoppingCart("remove_items", item[2], Cart);
Cart = shoppingCart("remove_items", item[4], Cart);
console.table(Cart);
console.log("*** After Removing Multiples of a Specific Item ***")

Cart = shoppingCart("empty", null, Cart);
console.table(Cart);
console.log("*** Empty Cart. ***")