"use strict";
// Question1
// Installation complete
// Question2
let myFriend = '"Hey Bisma,';
let message = "How's life treating you these days?";
console.log(myFriend + "" + message);
// Question3
let person_Name = '"Ayesha"';
//in tolowerCase
console.log("lowerCase :" + person_Name.toLowerCase());
//in toupperCase
console.log("upperCase :" + person_Name.toUpperCase());
//in titleCase
console.log("titleCase : " + person_Name.replace(/\b\w/g, c => c.toUpperCase()));
// Question4
let Author = "Allama Muhammad Iqbal";
let quote = '"Be aware of your own worth, use all of your power to achieve it."';
console.log(Author + " once said, " + quote);
// //Question5
let famous_person = "Allama Muhammad Iqbal: ";
let msg = famous_person + '"Poet of the East, Philosopher of the Muslim World."';
console.log(msg);
// Question6
let personName = '\t\n  "Allama Iqbal"  \n\t';
console.log("Stripped: " + personName.trim());
// Question7 + Question8
console.log(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Question9
let favNumber = 8;
console.log("My favourite number is " + favNumber);
// Question10
// Commment1
// Name : "Amna Naseer Ahmed"
// Date : Sunday , 25 feburary, 2024.
// Commment2
// Question9 :printing my favourite number in console.
//let favNumber = 8;
console.log("My favourite number is " + favNumber);
// Question11
let names = ["Bisma", "Ayesha", "Saba", "Shumail"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Question12
let names2 = ["Bisma", "Ayesha", "Saba", "Shumail"];
let message2 = " let's plan something fun soon.";
console.log(names2[0] + message2);
console.log(names2[1] + message2);
console.log(names2[2] + message2);
console.log(names2[3] + message2);
// Question13
let transpotation = ["BMW", "Audi", "Civic Honda"];
transpotation.map((item) => console.log('"I would like to own a ' + item + '"'));
// Question14
//let guestArray = ["Bisma","Saba","Shumail","Ayesha"];
//guestArray.map((item) => console.log("Dear " + item + ", You are invited to dinner."));
// Question15
let guestArray = ["Bisma", "Saba", "Shumail", "Ayesha"];
let canNotAttend = "Ayesha";
console.log(canNotAttend + " can not attend the dinner.");
let newGuest = "Amna";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map((item) => console.log("Dear " + item + ", You are invited to dinner."));
// Question16
// //task1
// let guestArray = ["Bisma","Saba","Shumail","Amna"];
//  guestArray.map((item) => console.log("Dear " + item + ",I found a bigger dinner table.so i am invited more peoples for dinner"));
// //task2
// let guestBeg = "Nazia";
// guestArray.unshift(guestBeg);
// console.log(guestArray);
// //task3
// let guestMid = "Aroosh";
// let middleIndex = guestArray.length/2;
// guestArray.splice(middleIndex,0,guestMid);
// console.log(guestArray);
// //task4
// let guestEnd = "Asma";
// guestArray.push(guestEnd);
// console.log(guestArray);
//  Question17
//  let guests = ["Umer","Arsh","Zawiyan","Riasat"];
//  console.log("Due to limited space, only two people can be invited for dinner.");
//  while(guests.length > 2){
//     let removeGuest = guests.pop();  
//     console.log("Sorry " + removeGuest +" you are no longer invited to dinner.");
//  }
//  guests.forEach((guest) => {
//       console.log("Dear " + guest + " you are still invited to dinner.")
//  });
//  guests.pop();
//  guests.pop();
//  console.log("Final guest list : " , guests);
//Question18
// let placeToVisit = ["Saudi Arabia","Turkey","Russia","America","England"];
// console.log("Original order : " , placeToVisit);
// console.log("Alphabetical order : ", [...placeToVisit].sort());
// console.log("Original order after sorting : " , placeToVisit);
// console.log("Reverse alphabetical order : ", [...placeToVisit].sort().reverse());
// console.log("Original order after reverse sorting: " , placeToVisit);
// placeToVisit.reverse();
// console.log("Reverse order : " , placeToVisit);
// placeToVisit.reverse();
// console.log("Back to original order : ",placeToVisit);
// placeToVisit.sort();
// console.log("Sorted in alphabetical order : ",placeToVisit);
// placeToVisit.sort((a,b) => b.localeCompare(a));
//  console.log("Sorted in reverse alphabetical order : ",placeToVisit);
// // Question19
// let invited = ["Umer","Arsh"];
// let countInvited = invited.length
// console.log(countInvited + " " +"people will come to the dinner.");
// //Question20
// let cities = ["Karachi","Lahore" ,"Islamabad","Peshawar","Quetta"];
// console.log("List of Cities : ",cities);
//Question21
// let myInfo = {
//     name : "Amna",
//     fatherName :"Naseer Ahmed",
//     age : 20,
// };
// console.log(myInfo);
//Question22
// let provinces = ["Sindh","Punjab","KPK","Balochistan"];
// console.log(provinces(0));
// console.log(provinces[0]);
//Question23
// let car = "subaru";
//pair of true and false
// //1
// console.log("car == subaru ? I predict true");
// console.log(car == "subaru");
// console.log("car != subaru ? I predict false");
// console.log(car != "subaru");
// //2
// console.log("car == 'honda city' I predict true");
// console.log(car == "subaru");
// console.log("car != 'honda city' I predict false");
// console.log(car != "subaru");
// //3
// console.log("car != 'Subaru' ? I predict true");
// console.log(car != "Subaru");
// console.log("car == Subaru ? I predict false");
// console.log(car == "Subaru");
// //4
// console.log("car != 'SUBARU' ? I predict true");
// console.log(car != "SUBARU");
// console.log("car == SUBARU ? I predict false");
// console.log(car == "SUBARU");
// //5
// console.log(" is car length = 6 ? I predict true");
// console.log(car.length == 6);
// console.log(" is car length != 6 ? I predict false");
// console.log(car.length != 6);
//Question24
// let name1 = "Amna"
// let name2 = "Amna Naseer"
// let name3 = "Amna Naserer Ahmed";
// //equality and unequality.
// if (name1 === name3) {
//     console.log("Names are equal")
// } else {
//     console.log("Names are not equal")
// }
// if (name1 !== name2) {
//     console.log("Names are equal")
// } else {    
// };
// lowercase function
// if (name1 !== name3) {
//          console.log("Names are equal")
//  } else {    
//  };
// //Numerical test
//  let age_1 = 18;
//  let age_2 = 20;
//  if(age_1 == 18){
//     console.log("eligible for vote");
//  }
//  if(age_1 != 22){
//     console.log("eligible for vote in older category");
//  }
//  if(age_1 <= age_2){    //less
//     console.log("younger");
//  }
//  if(age_2 >= age_1){    //greater
//     console.log("older");
//  }
// if(age_1 === 18 && age_2 === 20){
//     console.log("person is eligible for vote");
// }
// if(age_1 === 18 || age_2 !== 20){
//     console.log("person is  not eligible for vote");
// }
// let country = ["Pakistan","USA","China","Turkey"];
// if(country.includes("Pakistan")){
//     console.log("Pakistan is include in the list");
// }
// if(!country.includes("Japan")){
//     console.log("Japan is not includes in an array");
// }
//Question25
// let alien_color = "red";
// if(alien_color == "red"){
//     console.log("You earn 5 points");
// }
// let alien_color = "green";
// if(alien_color == "red"){
//     console.log("no output");
// }
//Question26
// let alien_color = "red";
// if(alien_color == "red"){
//     console.log("player just earn 5 points to shooting the alien. ");
// }else{
//     console.log("player just earn 10 points")
// }
// let alien_color2 = "green";
// if(alien_color2 == "red"){
//     console.log("player just earn 5 points to shooting the alien. ");
// }else{
//     console.log("player just earn 10 points")
// }
//Question27
// let alien_color = "green";
// if(alien_color == "green"){
//     console.log("player earn 5 points. ");
// }
// let alien_color = "yellow";
// if(alien_color == "yellow"){
//     console.log("player earn 10 points. ");
// }
// let alien_color = "red";
// if(alien_color == "red"){
//     console.log("player earn 15 points. ");
// }
//Question28
// let age = 70;
// if (age <= 2) {
//     console.log("person is a baby");
// }
// else if (age >= 2 && age <= 4) {
//     console.log("person is a toddler");
// }
// else if (age >= 2 && age <= 13) {
//     console.log("person is a kid");
// }
// else if (age >= 13 && age <= 20) {
//     console.log("person is a teenager");
// }
// else if (age >= 20 && age <= 65) {
//     console.log("person is an adult");
// } else if (age >= 65) {
//     console.log("person is an elder");
// };
//Question29
// let favourite_fruits = ["Mango","Apple","Orange","Banana","Kivi"];
// if(favourite_fruits.includes("Mango")){
//     console.log("You really like Mangoes!");
// }
// if(favourite_fruits.includes("Apple")){
//     console.log("You really like Apples!");
// }
// if(favourite_fruits.includes("Orange")){
//     console.log("You really like Oranges!");
// }
// if(favourite_fruits.includes("Banana")){
//     console.log("You really like Bananas!");
// }
// if(favourite_fruits.includes("Kivi")){
//     console.log("You really like kivis!");
// }
//Question30
// let users = ["Admin","Amna","Umer","Arsh"];
// for(let user of users){
//     if(user == "Admin"){
//         console.log("Hello admin, would you like to see a status report?")
//     }else{
//         console.log(`Hello ${user}, thank you for logging in again.`)
//     }
// }
//Question31
// let users = ["Admin", "Amna", "Umer", "Arsh"];
// if (users.length === 0) {
//     console.log("we need to find some users");
// } else {
//     for (let user of users) {
//         if (user === "Admin") {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${user}, thank you for logging in again.`);
//         }
//     }
// }
// users = [];
// if (users.length === 0) {
//          console.log("we need to find some users")}
//Question32
// let current_users = ["Aroosh", "Amna", "Umer", "Arsh"];
// let new_users = ["Aroosh", "Amna", "Saba", "Bisma","Asma"];
// let current_users_lower = current_users.map(user => user.toLowerCase())
// for(let new_user of new_users){
//     if(current_users_lower.includes(new_user.toLowerCase())){
//         console.log("Sorry", new_user +", that name is taken.")
//     }else{
//         console.log("Yes",new_user+"," + " this username is available." )
//     }
// }
//Question33
// let numbers = [1,2,3,4,5,6,7,8,9];
// for(let number of numbers){
//     if(number === 1){
//     console.log(number + "st");
//     }
//  else if(number === 2){
//     console.log(number + "nd");
//     }
//     else if(number === 3){
//         console.log(number + "rd");
//         }
//     else{
//         console.log( number + "th");
//     }
// }
//Question34
// let fav_pizza = ["pepperoni","chicken","veg"];
// for(let pizza of fav_pizza){
//     console.log(pizza);
// }
// console.log("\n")
// for(let pizza of fav_pizza){
//     console.log("I love " + pizza + " pizza.");
// }
// console.log("\n")
// console.log("I really like to eat pizza.");
//Question35
// let animals = ["dog","cat","horse"];
// for(let animal of animals){
//     console.log(animal);
// }
// console.log("\n")
// for(let animal of animals){
//     console.log("A " + animal + " has a tail.");
// }
// console.log("\n")
// console.log("All of these are pet animals.");
//Question36
// function makeShirt( size : string,text: string):void{
//     console.log("\n You order a " + size + " shirt that says" + text);
// }
// makeShirt("large"," 'I love Pakistan.'");
// makeShirt("medium"," 'I love typescript.'");
//Question37
// function make_shirt(size = "large",text = "I love Pakistan"){
//     console.log(`You order a ${size} size shirt that says ${text}`);
// }
// make_shirt()
// make_shirt("medium");
// //different message
// make_shirt("small", " I want a big shirt");
//Question38
// function describe_city(city : string = 'karachi',country: string = 'pakistan'){
//    console.log(city + " is in " + country);
// }
// describe_city("karachi")
// describe_city("istanbul","turkey")
// describe_city("lahore","punjab")
//Question39
// function city_country(city : string,country : string){
//     return (city + " , " + country)
// }
// let c1 = city_country("karachi" ,"pakistan");
// let c2 = city_country("istanbul" ,"turkey");
// let c3 = city_country("london" ,"england");
// console.log(c1);
// console.log(c2);
// console.log(c3);
//Question40
// function make_album(artist :string, title :string, tracks=null) {
//     let album = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== null) {
//         album = tracks;
//     }
//     return album;
// }
// let album1 = make_album('Michael Jackson', 'Thriller');
// let album2 = make_album('Ali zafar', 'Jhoom');
// let album3 = make_album('Junoon', 'Junoon',);
// console.log(album1);
// console.log(album2);
// console.log(album3);
//Question41
// function show_magicians(magicians : string[]):void{
//   for(const magician of magicians){
//     console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
//   }
// }
// const magician = ["amna", "umer", "arsh"];
// show_magicians(magician);
//Question42
// function make_great(magicians : string[]):void{
//     for (let i = 0;i < magicians.length;i++ ){
//         magicians[i] = magicians [i] + " is the great magician."
//     }
// }
// const magician2 = ["amna", "umer", "arsh"];
// make_great(magician2);
// show_magicians(magician2);
//Question43
// function make_great2(magicians : string[]){
//     const greatMagician = []
//     for (let i = 0;i < magicians.length;i++ ){
//         greatMagician.push(magicians [i] + " is the great magician.")
//     }
//     return greatMagician;
// }
// const magicians3 = ["amna", "umer", "arsh"];
// const greatMagician2 = make_great2(magicians3)
// show_magicians(magicians3);
// show_magicians(greatMagician2);
//Question44
// function sandwich(...item : string []):void{
//   console.log("sandwich order:");
//   for (let i = 0;i < item.length;i++ ){
//     console.log( " - " + item[i]);
// }
// }
// console.log("enjoy your sandwich");
// sandwich("tomato " , "chicken");
// sandwich("beef " , "cheese");
// sandwich("garlic chicken " ,"mayo saus");
//Question45
// type car = {
//     manufacture: string,
//     model :string,
//     [key : string]: any;
// }
// function creatCar(manufacture: string, model :string , optional:Record<string,any>): car{
//     return {
//         manufacture,
//         model,
//         optional,
//     }
// }
//     const mycar: car = creatCar("toyota","carola",{color :" black", year : "2024"}); 
// console.log(mycar);
//======================================Complete=====================================================
