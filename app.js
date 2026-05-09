// let n =5;

// for(let i=0; i<n;i++){
//     console.log("Hellow Amit ",i);
// };
// console.log("byee")


let arg = process.argv;  //if we want to our over all code kuch special value mile jinhe vo use ke hmare programm me thrue the user 
// unhe enter krwane ke liye hm (process.argv) is special value ko use krte hai

for(let i = 0;i<arg.length;i++){
    console.log("Hellow welcom to amit",arg[i]);
}

// the outout is

// Hellow welcom to amit C:\Program Files\nodejs\node.exe
// Hellow welcom to amit C:\Users\reala\OneDrive\Desktop\Node Js\app.js
// Hellow welcom to amit Amit
// Hellow welcom to amit Rahu
// Hellow welcom to amit Ashish
// Hellow welcom to amit vivek

// reala@LAPTOP-LLMHO5F9 MINGW64 ~/OneDrive/Desktop/Node Js
// $ node app.js Amit Rahu Ashish vivek akash
// Hellow welcom to amit C:\Program Files\nodejs\node.exe
// Hellow welcom to amit C:\Users\reala\OneDrive\Desktop\Node Js\app.js
// Hellow welcom to amit Amit
// Hellow welcom to amit Rahu
// Hellow welcom to amit Ashish
// Hellow welcom to amit vivek
// Hellow welcom to amit akash