

const products = [
    {name:"laptop", price:32000, brand: "lenovo", color: "black"},
    {name:"mobile", price:33000, brand: "apple", color: "grey"},
    {name:"laptop", price:92000, brand: "hp", color: "yellow"},
    {name:"phone", price:48000, brand: "apple", color: "black"},
    {name:"iPad", price:337000, brand: "apple", color: "grey"},
    {name:"watch", price:192000, brand: "apple", color: "red"}
]

// console.log(products);

// with map function
// const names = products.map(product => product.price);
// console.log(names);


// const color = products.map(col => col.color);
// console.log(color);



// with forEach this does not return any output that is why we use Map method

// products.forEach(product => console.log(product.brand))

// console.log(brand);



// filter 
const getFiltered = products.filter(pro => pro.name.includes("p"))
const getPriceFiltered = products.filter(pro => pro.price<=32000)

console.log(getFiltered);
console.log(getPriceFiltered);


// find
const me = products.find(fin => fin.name.includes('p'));
console.log(me);
const me1 = products.find(fin => fin.price <= 72000);
console.log(me1.brand);
