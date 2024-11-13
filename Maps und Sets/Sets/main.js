"use strict";

// sets haben nur Werte und jeder Wert ist einmal vorhanden

let mein_set = new Set();

mein_set.add("Test");
mein_set.add("Test");
mein_set.add(13);
mein_set.add([]);
mein_set.add([]);
mein_set.add(function(){});
mein_set.add(function(){});
mein_set.add({});
mein_set.add({});
// {} === {} --> false (sowie functionen, arrays...)

console.log(mein_set.has("Test"));
console.log(mein_set.has("Beispiel"));
console.log(mein_set.has({}));
console.log(mein_set.has([]));
console.log(mein_set.has(7+6));

mein_set.delete("Test");
//mein_set.clear();

console.log(mein_set.size);

console.log(mein_set);
