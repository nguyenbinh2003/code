

// tinh binh phuong cho tung so
let num = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];
let number = [];

//For
for (let i = 0; i < num.length; i++){
    number[i] = num[i] ** 2;
}
console.log("Các số sau khi bình phương là:" ,number);

// //While
// let i = 0
// while ( i < num.length){
//     number[i] = num[i] ** 2;
//     i++;   
// }
// console.log("Các số sau khi bình phương là:" ,number);

// tim so nguyen to
let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];

// For
let primes = [];

for (let k = 0; k < num2.length; k++) {
  let isPrimes = true;

  for (let j = 2; j < num2[k]; j++) {
    if (num2[k] % j === 0) {
      isPrimes = false;
      break;
    }
  }

  if (isPrimes && num2[k] > 25 - 04 - 2023) {
    primes.push(num2[k]);
  }
}

console.log("Các số nguyên tố là:" ,primes); // [3, 5, 7]

// //While
// let prime = [];
// let o = 0;

// while (o < num2.length) {
//   let isPrime = true;
//   let j = 2;

//   while (j < num2[o]) {
//     if (num2[o] % j === 0) {
//       isPrime = false;
//       break;
//     }
//     j++;
//   }

//   if (isPrime && num2[o] > 25 - 04 - 2023) {
//     prime.push(num2[o]);
//   }

//   o++;
// }

// console.log("Các số nguyên tố là:", prime); // [3, 5, 7]


// // tao mot gio hang hoa qua (ten qua, mau, noi san xuat, ngay het han, don vi phan phoi (ten don vi, dia  chi don vi))
// in ra sản phẩm theo format như sau
// STT: ???
// Tên sản phẩm: ???
// Giá: ???
// Ngày hết hạn: ???
// Đơn vị phân phối: tên đơn - địa  chỉ 
// - Thêm prompt:  Sửa ngày hết hạn theo index

let arr = [];

let fruit_1 = {
   name_: "Mận",
   color: "Red" ,
   price: "5000",
   madeIn: "Lai Châu",
   outOfdate: "25 - 04 - 2023",
   distributor: {
    company: "NNN",
    address: "Hà Nội"
   }
};

let fruit_2 = {
  name_: "Ổi",
  color: "Green" ,
  price: "6000",
  madeIn: "Lai Châu",
  outOfdate: "26 - 04 - 2023",
  distributor: {
   company: "NNN",
   address: "Hà Nội"
  }
};

let fruit_3 = {
  name_: "Xoài",
  color: "Green" ,
  price: "7000",
  madeIn: "Lai Châu",
  outOfdate: "27 - 04 - 2023",
  distributor: {
   company: "NNN",
   address: "Hà Nội"
  }
};

// For
arr.push(fruit_1, fruit_2, fruit_3);
for (let i = 0; i < arr.length; i++) {
  console.log("");
  console.log("STT: " + (i + 1));
  console.log("Tên sản phẩm: " + arr[i].name_);
  console.log("Giá: " + arr[i].price);
  console.log("Ngày hết hạn: " + arr[i].outOfdate);
  console.log(
    "Đơn vị phân phối: " +
     arr[i].distributor.company + " - " + arr[i].distributor.address
  );  
};
let index = Number(prompt("Nhập STT cần sửa:"));
for(var i = 0; i < arr.length; i++) {
    if (index === i + 1) {
    let updateOutOfDate = prompt("Nhập ngày cần sửa: ");
   arr[i].outOfdate = updateOutOfDate;
    console.log("");
    console.log(`Ngày hết hạn mới của ${arr[i].name_}: ` + arr[i].outOfdate);
  }
};

// While
// arr.push(fruit_1, fruit_2, fruit_3);
// let i = 0;
// while (i < arr.length){
//   console.log("");
//     console.log("STT: " + (i + 1));
//     console.log("Tên sản phẩm: " + arr[i].name_);
//     console.log("Giá: " + arr[i].price);
//     console.log("Ngày hết hạn: " + arr[i].outOfdate);
//     console.log(
//       "Đơn vị phân phối: " +
//        arr[i].distributor.company + " - " + arr[i].distributor.address
//     );  
//     i++;
// };
// let index = Number(prompt("Nhập STT cần sửa:"));
// let j = 0;
// while (j < arr.length){
//   if (index === j + 1) {
//         let updateOutOfDate = prompt("Nhập ngày cần sửa: ");
//        arr[j].outOfdate = updateOutOfDate;
//         console.log("");
//         console.log(`Ngày hết hạn mới của ${arr[j].name_}: ` + arr[j].outOfdate);
//       }
//       j++;
// };
