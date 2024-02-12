// // 
// let src ={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);
// console.log(src);


//clone using assign

//  let src = {
// a:10,
// b:20,
// c:30

//  };

//  let dest=Object.assign({},src);
//  console.log(dest);

//  src.a++;
//  console.log(src);
//  console.log(dest);

 //clone using spread

 let src= {a:10,b:20,c:30};
 let dest={...src}
 console.log(dest);
 src.a++;
 console.log(src);
 console.log(dest);