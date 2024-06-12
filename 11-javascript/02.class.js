// 클래스

class House{
    constructor(year, name, window){ // constructor는 함수 이름이 아니다. 이건 정해진거라 이걸로만 써야 한다.
        this.year = year;
        this.name = name;
        this.window = window;
    }
    getAge(){
        console.log(`${this.name}은 건축한지 ${2024 - this.year}년 되었어요`);
    }
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`);
    }
}

const house1 = new House(1990, '오리온', 5);
// 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수대로 값을 지정해야 한다.

// console.log(house1);
// console.log(typeof house1);
// console.log(house1.year);
// house1.getAge();
// house1.getWindow();

// 클래스의 상속

class Apartment extends House{
    constructor(year, name, window, floor, windowMaker){
        super(year, name, window); //부모의 속성을 가져올땐 super를 사용한다.
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 
            총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
      }
    
    // override(오버라이드): 부모의 메소드와 같은 함수를 재정의할때 쓰는 말
    getWindow(){
        return `${this.name} 아파트의 ${this.window} 개의 창문은 
            ${this.windowMaker} 회사에서 생산되었습니다.`;
    }
}


const apt1 =  new Apartment(2001, '래미안', 3, 20, '엘지 자이');

console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());

