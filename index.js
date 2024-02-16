/*
var user = {};
user.name = 'John';
user.surName = 'Smith';
user.name = 'Pete';
delete user.name;


function isEmpty(obj){
    for (var key in obj){
        if(key!=undefined){
            return false;
        }
    }
    return true;
}
var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//3 

function getSalary(obj){
    sum = 0;
    for(var key in obj){
        if(key === undefined){
            key = 0;
        }
        sum = sum+obj[key];
    }
    return sum;
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
console.log(getSalary(salaries));

//4
function multiplyNumeric(obj){
    for (var key in obj){
        if(typeof(obj[key])==='number'){
            obj[key] = obj[key]*2;
        }
    }
    return obj;
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  console.log(multiplyNumeric(menu));
  

*/
 //5
//склонировать объект написать фукнцию которая принимает объект и кллнирует глубоко объект
let obj = {
    name:'Vasya',
    age:25,
    isMarried:false,
    home:null,
    dogs:undefined,
    family :['mama',' папа'],
    friend:{
        name:"petya",
        age:30,
        work:null,
        isMarried:true,
        family:[{
            name:'mama', age:60
        }, 
        {
            name:'papa', age:62
        }],
    }
};

function cloneObj (obj){
    let cloneObject = {};
    for(let key in obj){
        if(typeof(obj[key])==='object' && obj[key]!==null){
            cloneObject[key]=cloneObj(obj[key]); 
        } else {
            cloneObject[key]=obj[key];
        }
        
    }
    return cloneObject;
}
console.log(cloneObj(obj));



