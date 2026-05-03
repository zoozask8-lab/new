let month = 3;

switch(month){
    case 1 :console.log("january");
        break;
    case 2 :console.log("february");
        break;
    case 3 :console.log("march");
        break;
    case 4 :console.log("april");
        break;
    case 5 :console.log("may");
        break;
    default :console.log("Undefind data");
}


let count = 1;
while(count<11){
    console.log(count);
    count++;
}




for(let i = 1; i <= 10; i++){
    console.log(i);
}


let count = 1;

do{
    console.log(count);
    count++;
} while(count<11);



for (let i = 1; i <= 10; i++){
    if(i==6)continue;
    console.log(i);
}
console.log("End")



for (let i = 1; i <= 10; i++){
    if(i==6)break;
    console.log(i);
}
console.log("End")

function fname(finame , lname){
    console.log("Hello, " + finame + " " + lname);
}
fname("jake", "ma");



function jake(name){
    return "hello, " + name;
}
console.log(jake("Jake Ma"));


function setprice(price){
    let value = 1000;
    return price + value;
}
let a = setprice(500);
console.log("result = "+a);


function jake(name){
    let num = "jum";
    return num +" "+name;
}
console.log(jake("Kai"))



function lang(velage, province, countries="no  country"){
    console.log("I live in "+velage+" velage "+province+" province and from "+countries);
}
lang("kampong kdei", "siemreab", "cambodia");
lang("kdei beng", "kampong thom")

let color = ["white", "black", "yellow"];
color.push("gray");
let setColor = color.length;
console.log(color);
console.log(setColor);


let fruit = ["orange", "lemon", "apple"];
fruit.pop();
let setFruit = fruit.sort();
console.log(setFruit);
console.log(setFruit[setFruit.length-1]);

let item = ["computer", "phone", "lamp"];
let setItem = item.reverse();
console.log(setItem);
console.log(setItem[0]);

let animal = ["lion", "dog", "cat", "fish", "zebra", "elephant"];

for(i = 0;i<animal.length;i++){
    console.log("Number", (i+1) ,"=",animal[i]);
}

let rolls = ["fullstack", "frontend", "backend", "security"];
rolls.forEach(myjob);
function myjob(rolls){
    console.log(rolls);
}

let color = ["black", "white", "green", "blue", "orange"];
let x = color.join("*");
console.log(x);


let color = ["black", "white", "green", "blue", "orange"];
let x = color.toString();
console.log(x);


let color = ["black", "white", "green", "blue", "orange"];
let fruit = ["mango", "lemon", "apple", "phinaple", "turian"];
let item = ["computer", "phone", "router", "mouse", "cpu"];

max = color.concat(color, fruit, item);
console.log(max);


let points = [209, 87, 29002, 3847, 42, 12937];
points.sort(function(a,b){
    return a-b;
})
console.log(points);
points.sort(function(a,b){
    return b-a;
})
console.log(points);


let product = {
    name: "mouse",
    price: 30,
    color: "black",
    size: "M"
};
console.log("item =",product.name);
console.log("color =",product.color);

let product = {
    name: "mouse",
    price: 30,
    color: "black",
    size: "M",
    displayProduct:function(){
        return "item =" + this.name + "price =",this.price+"color"+this.color  ; 
    },
    discount:function(){
        return this.price - 10;
    }
};
document.write();
console.log()

function deleteData(){
    let result = confirm("Would you want to delete");
    if(result){
        console.log("Confirm data");
    } else{
        console.log("cencel data");
    }
}


const menu = document.getElementById('menu');
let count = 1;


function addItem(){
    const item = document.createElement('li');
    item.innerText = "Item"+count++;
    menu.appendChild(item);

}



const menu = document.getElementById('menu');
const item = document.getElementById('item-1');

function deleteItem(){
    menu.removeChild(item);
}






















