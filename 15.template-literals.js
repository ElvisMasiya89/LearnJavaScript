//Used to inject variable or and expressions in strings

let name1 = 'bob'
console.log(`hi ${name1}`);


//It also keeps the sentence structure
let sentence = `contained a novel about The Shadow, a mysterious 
   crime-fighting figure who spoke the line "Who knows what evil
   lurks in the hearts of men? The Shadow knows" in radio broadcasts
   of stories from Street & Smith's Detective Story Magazine. 
   For the first issue, dated April 1931, Walter Gibson wrote 
   the lead novel, The Living Shadow. Sales were strong, and
   Street & Smith soon changed it from quarterly to monthly
   publication, and then to twice-monthly, with the lead novels
   written by Gibson. From 1946 to 1948, the novels were by Bruce
   Elliott, who made The Shadow mostly a background figure. 
   Gibson returned to Street & Smith and resumed writing in `;

console.log(sentence);


// string templates with functions

function getReasonCount() { return 1; };

let interpolation = ` Give me ${(getReasonCount() === 1) ?'one good reason' : 'a few reason'}  to try this`;


console.log(interpolation);