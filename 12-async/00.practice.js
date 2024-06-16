function call(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve(name);
        }, 1000);
    });
}

function back() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            const result = 'back';
            resolve(result);
        }, 1000);
    });
}


function hell() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            const result = 'callback hell';
            resolve(result);
        }, 1000);
    })
}


call('kim')
    .then(function(result){
        console.log(result);
        console.log(result + '반가워');

        return back(result);
    })
    .then(function(result){
        console.log(result);
        console.log(result + '를 실행했구나');

        return hell(result);
    })
    .then(function(result){
        console.log("여기는" + result);
    })