let isDone : boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b10;
let octal: number = 0o71;

let color: string = 'blue';
color = 'red';

let fullName: string = 'Dongwoo Seo';
let age: number= 38;
let sentence : string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next year.
`;


//첫 번째 방법
let list1: number[] = [1,2,3,4,5];

//두 번째 방법
let list2: Array<number> = [1,2,3,4,5];

let x: [string, number];

x = ['hello', 10];

//x = [10, 'hello'];          //Error tuple 설정이 달라서
//x = ['hello', 10, 1, 3, 'efwefwefwf'];  //Error 2개만 설정했는데 2개 이상아리서 에러

console.log(x[0].substr(1));
//console.log(x[1].substr(1));        // Error 숫자에 없는 메소드

// 책과 다르게 전부 에러
// x[3] = "world"; // 좋아요, 'string'은 'string | number'에 할당될 수 있습니다.
// console.log(x[5].toString()); // 좋아요, 'string' 및 'number'에 모두 'toString'이 있습니다.
// x[6] = true; // 오류, 'boolean'은 'string | number' 타입이 아닙니다.


enum Color {Red, Green, Blue};
let c: Color = Color.Red;

let notSure: any = 4;

notSure = 'sdqwwdqwdqwdwqd';
notSure = false;

let notSure2:any = 4;
notSure2.toFixed();

let notSure3:Object = 4;
// notSure3.toFixed(); Error


let nerverTest:never = (function():never {throw Error('') })();

let aaa:number = nerverTest;        //가능
//nerverTest = 100;                   //불가능


declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
create(undefined); // OK, --strictNullChecks 킬 경우 에러

function foo() {
    // okay to capture 'a'
    return a;
}

// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();

let a;