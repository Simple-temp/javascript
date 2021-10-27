// -------------------------------------------------------------Js variable

// var string = "Hello I am Mr js"; //the data type is string and checkout the data type of this coomand = typeof 
// console.log(typeof(string));

// var number = 2; //the data type is string and checkout the data type of this coomand = typeof 
// console.log(typeof(number));

// var array = [1,2,3,4]; //the data type is string and checkout the data type of this coomand = typeof 
// console.log(typeof(array));

// var object ={Name:"A_One", age :"21",Job:"A webdeveloper"}; //the data type is string and checkout the data type of this coomand = typeof 
// console.log(typeof(object));


// ------------------------------------------------------------Js variable some math or test

// var a = 20;
// var b = 30;
// var result = a+b;
// console.log(result);

// var a = 20;
// var b = 30;
// var result = a-b;
// console.log(result);

// var a = 20;
// var b = 30;
// var result = a*b;
// console.log(result);


// var a = 20;
// var b = 30;
// var result = a/b;
// console.log(result);


// var a = 20;
// var b = 30;
// var result = a%b;
// console.log(result);


// -------------------------------------------------------------Js some keyword


// var arr = ['hi','hlw','hey','ohh','done','well'];//index will start 0 1 2 3 4....runing
// // console.log(arr[4]); //index number
// var letsFind = arr.indexOf(ohh);
// console.log(letsFind);

// var example = 'I love you';
// // example.toUpperCase();
// example.toLowerCase();
// console.log(example);


// -------------------------------------------------------------Js loop

// var num = 0;
// while(num<=5)
// {
//     console.log(num);
//     num++
// }

// for (var i = 0 ; i <= 5; i++ )
// {
//     console.log(i);
// }




// -------------------------------------------------------------Js loop in array

// var arr = ['ratul','ridoy','kayes','prottoy'];
// for(var i = 0 ; i<arr.length ; i++)
// {
//     var see = arr[i]
//     console.log(see);
// }

// console.log ('hello');

// -------------------------------------------------------------Js function


// function add(num1,num2)
// {
//     var getNum = num1;
//     var getNum2 = num2;
//     var result = getNum + getNum2;
//     console.log(result);
// }
// add(56,35);

// function add(num1,num2)
// {
//     var getNum = num1;
//     var getNum2 = num2;
//     var result = getNum + getNum2;
//     return result;
// }

// var finalResult = add(65,88);
// console.log(finalResult);

// -------------------------------------------------------------Js factorial


function factorial(num) {
    var factorial = 1;
    for (var i = 1 ; i<=num ; i++)
    {
        factorial = factorial * i ;
    }
    return factorial;
}
var result = factorial(9);
console.log(result);