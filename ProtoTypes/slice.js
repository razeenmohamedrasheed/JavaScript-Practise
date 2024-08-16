const students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" },
    { name: "Charlie", age: 22, grade: "A" },
    { name: "David", age: 23, grade: "C" }
  ];


students.forEach((items,index)=>{
    console.log(items)
})

students.map((items,index)=>{
    console.log(items)
})

let filtered = students.filter((items,index)=>{
    return items.grade=="A"
})

console.log(filtered)

let filtered1 = students.some((items,index)=>{
    return items.grade=="A"
})

console.log(filtered)

const numbersArr = [67, 90, 100, 37, 60];

const total = numbersArr.reduce(function(accumulator, currentValue){
    console.log("accumulator is " + accumulator + " current value is " + currentValue);
    return accumulator + currentValue;
}, 0);

const totoal = numbersArr.reduce((tot,val)=>tot+val,100 )

console.log("total : "+ total);
console.log("total : "+ totoal);