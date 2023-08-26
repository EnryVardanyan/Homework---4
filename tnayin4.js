// const counter = createCounter()
// function createCounter(){
//     let x = 0
//     function counter(){
//         return ++x
//     }
//     return counter
// }

// console.log(counter())
// console.log(counter())

// const secretValue = privateVariable(42)
// function privateVariable(num){
//     let _result = num
//     let obj = {
//         get(){
//             return _result
//         },
//         set(setNum){
//             _result = setNum
//         }
//     }
//     return obj
// }
// console.log(secretValue.get(10))
// secretValue.set(100)
// console.log(secretValue.get(20));


// const cachedCalculation = createCachingFunction()
// function createCachingFunction(num){
//     let obj = {}
//     function myFunc(num){
//     if(num in obj) {
//     obj[num] = `${num} (cached)`
//     return obj[num]
// }
//     obj[num] = `${num} (calculated)`
//     return obj[num]
//     }
// return myFunc
// }


// console.log(cachedCalculation(5))
// console.log(cachedCalculation(5))


// const person = createPerson("Pato", 33)
// function createPerson (name, age){
//     let personObj = {
//          getName: () => name,
//          setName: (setPersonName) => name = setPersonName,
//          getAge: () => age,
//          setAge: (setPersonAge) => age = setPersonAge
//     }
//     return personObj
// }
// console.log(person.getName())
// person.setName("Alexandre")
// console.log(person.getName())
// console.log(person.getAge())
// person.setAge(20)
// console.log(person.getAge())


// function add() { 
    
// } 
// function partial(func, num){
//     function func(a, b, c){
//         c = num
//         return a + b + c
//     }
//     return func
// }
// const add5 = partial(add, 5); 
// console.log(add5(10,15))


// const memoizedFibonacci = memoize(fibonacci); 
// console.log(memoizedFibonacci(10)); 
// console.log(memoizedFibonacci(10)); 

// function createCalculator(oper){
//     let add = (a, b) => a + b
//     let multiply = (a, b) => a * b
//     if(oper === "add") return add
//     else if(oper === "multiply") return multiply
// }
// const add = createCalculator("add"); 
// console.log(add(3, 5));
 
// const multiply = createCalculator("multiply"); 
// console.log(multiply(2, 4)); 





// const curriedAdd = curry(add); 
// function add(){

// }
// function curry(func){
//     let result = 0
//     function func(a){
//         result += a
//         return result
//     }
//     return func
// }
// console.log(curriedAdd(1)(2)(3)); // Output: 6
// console.log(length)

// console.log(curriedAdd(1, 2)(3)); // Output: 6
// console.log(curriedAdd(1, 2, 3)); // Output: 6



// let sum = 1
// function factorial(n){
//     if(n > 0){
//         sum *= n
//         return factorial(n-1)
//     }
//     return sum
// }
// console.log(factorial(5))


