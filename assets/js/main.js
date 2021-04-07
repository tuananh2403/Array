// // Chuan hoa Ten
// let str =window.prompt('Full Name :')
// function titleCase(str) {
//   str = str.toLowerCase();
//   for(let i = 0; i< str.length; i++){
//       if (i==0 || str.charAt(i-1) == " "){
//           str = str.slice( 0 , i ) + str.charAt(i).toUpperCase() + str.slice(i+1);
//       }
//     }
//     return str;
//   }
  
//  console.log(titleCase(str));
// diem khoang trang
// let str=window.prompt();
// function space(str){
//   let count = 0;
//   for (let i = 0; i <= str.length; i++){
//     if (str.charAt(i) === " "){
//       count++;
//     }
//   }
//   return count;
// }
// console.log(space(str));
// // Xóa Khoảng Trắng 
// let str=window.prompt();
// str = str.trim();
// function space(str){
//   for (let i = 0; i <= str.length; i++){
//     if (str.charAt(i) === " "){
//       str = str.slice(0 , i) + str.slice(i+1);
//     }
//     console.log(str);
//   }
//   return str;
// }
// console.log(space(str));
// //Reverse
// let str =  window.prompt("String : ")
// function reverse(str){
    // let newString = '';
//   for(let i = str.length-1 ; i >= 0; i--){
//     newString = newString + str.charAt(i);
//   }
//   return newString;
// }
// console.log(reverse(str));
// // Address
// let str = window.prompt('String one : ');
// let str2 =  window.prompt('String two : ');
// function address (str,str2){
//   let add= str.indexOf(str2);
//   return add;
// }
// console.log(address(str,str2));
// id face
// let str = window.prompt("Link face : ");
// function idName(str){
//     let local = str.lastIndexOf("/");
//     let newString=str.slice(local +1);
//     return newString;
// }
// console.log(idName(str));
// function maxNumber(a,b,c){
//     let max = Math.max(a,b,c);
//     return max;
// }
// console.log(maxNumber(4,5,8));
// function totalNumber(n){
//     if (n == 0 ){
//         return 0;
//     }
//    return n + totalNumber(n-1);
// }
// console.log(totalNumber(n));
let str = window.prompt();
function newString(str){
    str = str.trim();
    return str;
}
console.log(newString(str));