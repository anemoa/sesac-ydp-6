const dw = {
    name: '이동욱',
    age: 'null',
    married: 'false',
    favColor: 'green',
    favSong: function(){
        return 'HowSweet';
    },
    saySomething: '열심히 잘 하자',
    yolo: ['hmm', '??'],
    friend: {name: 'zzong', age: '555'}
};

let nono = 'married';

console.log(dw.name);
console.log(dw.favSong());
console.log(dw[nono]);
console.log(dw['favColor']);
console.log(dw['saySomething']);
console.log(dw['yolo'][0]);
console.log(dw.friend.name);
