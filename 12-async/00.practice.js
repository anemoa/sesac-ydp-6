// function call(name) {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             resolve(name);
//         }, 1000);
//     });
// }

// function back() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             const result = 'back';
//             resolve(result);
//         }, 1000);
//     });
// }

// function hell() {
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             const result = 'callback hell';
//             resolve(result);
//         }, 1000);
//     })
// }


// call('kim')
//     .then(function(result){
//         console.log(result);
//         console.log(result + '반가워');

//         return back(result);
//     })
//     .then(function(result){
//         console.log(result);
//         console.log(result + '를 실행했구나');

//         return hell(result);
//     })
//     .then(function(result){
//         console.log("여기는" + result);
//     })

let product, price;

function goMart() {
  console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink(callback) {
  setTimeout(function () {
    console.log(`고민 끝`);
    product = `제로콜라`;
    price = `3000원`;
    callback(product, price);
  }, 3000);
}


function pay(product, price) {
  setTimeout(function () {
    console.log(product, price);
    console.log(`상품명: ${product} // 가격: ${price}`);
  }, 5000);
}

function hell() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            const result = 'callback hell';
            resolve(result);
        }, 1000);
    })

}

goMart();
pickDrink();
pay(product, price);
