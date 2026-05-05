
                                    // Exercise 1 //
// let day = 3;

// switch(day){
//     case 1 :console.log("monday");
//         break;
//     case 2 :console.log("tuesday");
//         break;
//     case 3 :console.log("wednesday");
//         break;
//     case 4 :console.log("thursday");
//         break;
//     case 5 :console.log("friday");
//         break;
//     case 6 :console.log("saturday");
//         break;
//     case 7 :console.log("sunday");
//         break;
//     default: console.log("Invalid day");
// }

                                                     
// let num1 = 10;
// let num2 = 5;
// operator = "**";
// switch(operator){
//     case "-": console.log(num1 - num2);
//         break;
//     case "+": console.log(num1 + num2);
//         break;
//     case "*": console.log(num1 * num2);
//         break;
//     case "%": console.log(num1 % num2);
//         break;
//     case "/": console.log(num1 / num2);
//         break;
//     case "**": console.log(num1 ** num2);
//         break;
//     default: console.log("Undefind");
// }

                                                        

    // let month = 6;
    // switch(month) {
    //     case 1: console.log("January");
    //         break;
    //     case 2: console.log("February");
    //         break; 
    //     case 3: console.log("March");
    //         break; 
    //     case 4: console.log("April");
    //         break; 
    //     case 5: console.log("May");
    //         break; 
    //     case 6: console.log("June");
    //         break; 
    //     case 7: console.log("July");
    //         break; 
    //     case 8: console.log("August");
    //         break; 
    //     case 9: console.log("September");
    //         break; 
    //     case 10: console.log("October");
    //         break; 
    //     case 11: console.log("November");
    //         break; 
    //     case 12: console.log("December");
    //         break;
    //     default: console.log("Undefind Month");
    // }


                        
    



















// let count = 1;
// while(count<11){
//     console.log(count);
// //     count++;
// // }




// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }


// let count = 1;

// do{
//     console.log(count);
//     count++;
// } while(count<11);



// for (let i = 1; i <= 10; i++){
//     if(i==6)continue;
//     console.log(i);
// }
// console.log("End")



// for (let i = 1; i <= 10; i++){
//     if(i==6)break;
//     console.log(i);
// }
// console.log("End")

// function fname(finame , lname){
//     console.log("Hello, " + finame + " " + lname);
// }
// fname("jake", "ma");



// function jake(name){
//     return "hello, " + name;
// }
// console.log(jake("Jake Ma"));


// function setprice(price){
//     let value = 1000;
//     return price + value;
// }
// let a = setprice(500);
// console.log("result = "+a);


// function jake(name){
//     let num = "jum";
//     return num +" "+name;
// }
// console.log(jake("Kai"))



// function lang(velage, province, countries="no  country"){
//     console.log("I live in "+velage+" velage "+province+" province and from "+countries);
// }
// lang("kampong kdei", "siemreab", "cambodia");
// lang("kdei beng", "kampong thom")

// let color = ["white", "black", "yellow"];
// color.push("gray");
// let setColor = color.length;
// console.log(color);
// console.log(setColor);


// let fruit = ["orange", "lemon", "apple"];
// fruit.pop();
// let setFruit = fruit.sort();
// console.log(setFruit);
// console.log(setFruit[setFruit.length-1]);

// let item = ["computer", "phone", "lamp"];
// let setItem = item.reverse();
// console.log(setItem);
// console.log(setItem[0]);

// let animal = ["lion", "dog", "cat", "fish", "zebra", "elephant"];

// for(i = 0;i<animal.length;i++){
//     console.log("Number", (i+1) ,"=",animal[i]);
// }

// let rolls = ["fullstack", "frontend", "backend", "security"];
// rolls.forEach(myjob);
// function myjob(rolls){
//     console.log(rolls);
// }

// let color = ["black", "white", "green", "blue", "orange"];
// let x = color.join("*");
// console.log(x);


// let color = ["black", "white", "green", "blue", "orange"];
// let x = color.toString();
// console.log(x);


// let color = ["black", "white", "green", "blue", "orange"];
// let fruit = ["mango", "lemon", "apple", "phinaple", "turian"];
// let item = ["computer", "phone", "router", "mouse", "cpu"];

// max = color.concat(color, fruit, item);
// console.log(max);


// let points = [209, 87, 29002, 3847, 42, 12937];
// points.sort(function(a,b){
//     return a-b;
// })
// console.log(points);
// points.sort(function(a,b){
//     return b-a;
// })
// console.log(points);


// let product = {
//     name: "mouse",
//     price: 30,
//     color: "black",
//     size: "M"
// };
// console.log("item =",product.name);
// console.log("color =",product.color);

// let product = {
//     name: "mouse",
//     price: 30,
//     color: "black",
//     size: "M",
//     displayProduct:function(){
//         return "item =" + this.name + "price =",this.price+"color"+this.color  ; 
//     },
//     discount:function(){
//         return this.price - 10;
//     }
// };
// document.write();
// console.log()

// function deleteData(){
//     let result = confirm("Would you want to delete");
//     if(result){
//         console.log("Confirm data");
//     } else{
//         console.log("cencel data");
//     }
// }


// const menu = document.getElementById('menu');
// let count = 1;


// function addItem(){
//     const item = document.createElement('li');
//     item.innerText = "Item"+count++;
//     menu.appendChild(item);

// }






// let hour = "13";
// switch(true){
//     case (hour >= 5 && hour < 12):
//         console.log("goodmornig");
//             break;
//     case (hour >= 12 && hour < 17):
//         console.log("goodafternoon");
//             break;
//     case (hour >= 17 && hour < 20):
//         console.log("goodevening");
//             break;
//     default: 
//         console.log("goodnigth");
// }




// let item = 2;
//     switch(item){
//         case 1 : console.log("Coke");
//             break;
//         case 2 : console.log("Pepsi");
//             break;
//         case 3 : console.log("Water");
//             break;
//         case 4 : console.log("Coffee");
//             break;
//         default : console.log("Invalid Selection");
//     }



// let score = -120;
// switch(true){         
//     case (score <= 100 && score >= 80):
//         console.log("Grade A");
//             break;
//     case (score <= 79 && score >= 70):
//         console.log("Grade B");
//             break;
//     case (score <= 69 && score >= 60):
//         console.log("Grade C");
//             break;
//     case ( score < 60 && score >= 0):
//         console.log("Grade F");
//             break;
//     default:console.log("Invalid score");
// }


// const message = ["goodnigth","goodnigth","goodnigth","goodnigth","goodnigth","goodnigth",
//                 "goodmornig","goodmornig","goodmornig","goodmornig","goodmornig","goodmornig",
//                 "goodafternoon","goodafternoon","goodafternoon","goodafternoon","goodafternoon","goodafternoon",
//                 "goodevening","goodevening","goodevening","goodevening","goodevening","goodevening",
//                 ];
// let hour = 10;
// console.log(message[hour]);




// let baseDemage = 100;
// let weaponType = "staff";
// let isCritical = true;
// let mutiplier = 0;
// switch(weaponType){
//     case "sword" :
//         mutiplier = 1.2;
//         break;
//     case "bow" : 
//         mutiplier = 1.5;
//         break;
//     case "staff" : 
//         mutiplier = 0.8;
//         break;
//     default : 
//         mutiplier = 1.0;
// }
// let finalDemage = baseDemage*mutiplier;
// if(isCritical == true){
//     finalDemage *= 2;
// }
// console.log("Final Demage is: " + finalDemage);


// let cart = [
//     { name: "shirt", price: 300, amount: 2},
//     { name: "leggings", price: 1200, amount: 1},
//     { name: "shock", price: 50, amount: 5}
// ];
// let totalPrice = 0;
// cart.forEach(function(item) {
//     totalPrice += (item.price * item.amount);
// })
// console.log(totalPrice);

// let fruitShop = [
//     { fruit: "orange", price: 20, amount:2},
//     { fruit: "apple", price: 10, amount:3},
//     { fruit: "lemon", price: 24, amount:8}
// ];
// let total = 0;
// fruitShop.forEach(function(counter){
//     total += (counter.price * counter.amount);
// })
// console.log(total);

// let priceItem = [
//     { name: "computer", price: 200, amount:3},
//     { name: "phone", price: 190, amount:5},
//     { name: "glasses", price: 60, amount:10},
//     { name: "lamp", price: 40, amount:20}
// ];
// let total = 0;
// let order = 5;
// priceItem.forEach(function(couter) {
//     total += couter.price * couter.amount;
// })
// total -= order;
// console.log(total);

// let employees = [
//     { name: "ZASK", score: 95, department:"IT"},
//     { name: "MICK", score:70, department:"Marketing"},
//     { name: "JANE", score:60, department:"Design"}
// ];
// let bonusCount = 0;
// employees.forEach(function(person) {
//     if (person.department === "IT" && person.score > 80){
//         bonusCount++;
//     }
// })
// console.log(bonusCount);

// let  techer = [
//     { name: "Tra", subject:"Math", level: "Pro"},
//     { name: "Tom", subject:"English", level: "Pro"},
//     { name: "Kai", subject:"Biology", level: "low"},
//     { name: "Jake", subject:"sport", level: "low"},
//     { name: "Theara", subject:"Physic", level: "Meduim"}
// ];
// let bonus = 0;
// techer.forEach(function(person) {
//     if(person.level === "Pro" || person.level === "Meduim"){
//         bonus++;
//     }
// })
// console.log(bonus);



















