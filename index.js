"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guestList = [
    "Kamran Khan Tessori",
    "Zia Khan",
    "Eeshah Hunain",
    "Hunain Umer",
    "Pervez Musharraf",
    "Pukhraj Begam",
    "Muhammad Sikandar",
    "Quaid-e-Azam",
    "Albert Einstine",
];
// message about inviting only two people.
console.log(`I can invite only two people for dinner`);
// 2nd Step.Remove guest from the list untill only two name remain.
while (guestList.length > 2) {
    let RemoveGuest = guestList.pop();
    console.log(`Sorry, ${RemoveGuest}, I can't invite you to dinner`);
}
// Step 3. print a message to each of two people still on ypur list.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`);
}
// Step 4. Remove the last two names from your list
guestList.pop();
guestList.pop();
// print empty string
console.log(`Guest list after dinner`, guestList);
