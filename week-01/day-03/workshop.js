'use strict';

// Strings
console.log("================= Strings : ex 01 ==================")
var example = "In a dishwasher far far away";

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
example = example.replace('dishwasher', 'galaxy');

console.log(example)
console.log();

console.log("================= Strings : ex 02 ==================")
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse (input) {
    // time: O(input.length) 
    let reversed_input = '';
    for (let i = input.length - 1; i >= 0 ; i--) {
        reversed_input += input.charAt(i);
    }
    return reversed_input;
}

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
console.log(reverse(reversed));

module.exports = reverse;
console.log();

console.log("================= Strings : ex 03 ==================")
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
var url = "https//www.reddit.com/r/nevertellmethebots";

url = url.replace('bots', 'odds');
url = url.replace('https', 'https:');

console.log(url);
console.log();


console.log("================= Strings : ex 04 ==================")
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
quote = quote.replace('It you', 'It takes longer than you');

console.log(quote);
console.log();

console.log("================= Strings : ex 05 ==================")
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
todoText = "My todo:\n" + todoText;
todoText += " - Download\n";
todoText += "\t- Diablo\n";  

console.log(todoText);
console.log();

// Data Structures
console.log("================= Data Structures : ex 01 ==================")
// Map introduction 1

// We are going to play with maps. Feel free to use the built-in methods where possible.
// Create an empty map where the keys are integers and the values are characters
let map = {}
// Print out whether the map is empty or not
console.log(map);
// Add the following key-value pairs to the map
// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
map[97] = 'a';
map['98'] = 'b';
map['99'] = 'c';
map['65'] = 'A';
map['66'] = 'B';
map['67'] = 'C';

// Print all the keys
console.log('keys : ', Object.keys(map));
// Print all the values
console.log('values : ', Object.values(map));
// Add value D with the key 68
map['68'] = 'D';
// Print how many key-value pairs are in the map
console.log('key-value pairs length : ', Object.entries(map).length);
// Print the value that is associated with key 99
console.log(map[99]);
// Remove the key-value pair where with key 97
delete map[97];
console.log(map);
// Print whether there is an associated value with key 100 or not
console.log(map[100] == undefined ? false : true);
// Remove all the key-value pairs
console.log(map);


console.log("================= Data Structures : ex 02 ==================")
// Map introduction 2
// Create a map where the keys are strings and the values are strings with the following initial values

// Key	Value
// 978-1-60309-452-8	A Letter to Jo
// 978-1-60309-459-7	Lupus
// 978-1-60309-444-3	Red Panda and Moon Bear
// 978-1-60309-461-0	The Lab
let ISBN = {
    '978-1-60309-452-8':	'A Letter to Jo',
    '978-1-60309-459-7':	'Lupus',
    '978-1-60309-444-3':	'Red Panda and Moon Bear',
    '978-1-60309-461-0':	'The Lab'
}
// Print all the key-value pairs in the following format
let ISBN_entries = Object.entries(ISBN);

ISBN_entries.forEach(element => {
    console.log(element[1], '(ISBN: ', element[0], ')');
});
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)


// Remove the key-value pair with key 978-1-60309-444-3
delete ISBN['978-1-60309-444-3'];
// Remove the key-value pair with value The Lab
delete ISBN[Object.keys(ISBN).find(key => ISBN[key] === 'The Lab')];
console.log(ISBN);
// Add the following key-value pairs to the map

// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?
ISBN['978-1-60309-450-4'] = 'They Called Us Enemy';
ISBN['978-1-60309-453-5'] = 'Why Did We Trust Him?';

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(ISBN['478-0-61159-424-8'] == undefined ? false : true);
// Print the value associated with key 978-1-60309-453-5
console.log(ISBN['978-1-60309-453-5']);
console.log();
