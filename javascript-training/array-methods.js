const arr = ["houssem" , 'ahmed' , 'talal'];
const nums = [1,4,5,2,6,8,5];


//pop()
// =>  //remove the last element
// const arr3 = arr.pop();
// console.log(typeof arr3);//string


//push()
// used to add a new element to the end from an array
// arr.push("makram");
// console.log(arr);//['houssem', 'ahmed', 'talal', 'karim', 'Djamel', 'sami', 'makram']


//toString() 
//used to convert array to string
// console.log(typeof arr.toString());//houssem,ahmed,talal,karim,Djamel,sami  //typeof string

//join() 
//syn: arr.join(separator|string)
//is used to join the elements of an array into a string
//console.log(typeof arr.join('-'));//houssem-ahmed-talal-karim-Djamel-sami typeof string


//splice()  very important method
//syn: arr.splice(index,howMany , [element1],[...elementN])
//is used to add and remove elements from an array  
// arr.splice(0 , 0 , 'makram');
// console.log(arr);


//sort() 
//syn:arr.sort(func())
//ether alphabetic or numeric sorts an array
//console.log(nums.sort((a,b) => b-a)); //[8, 6, 5, 5, 4, 2, 1]


//shift()
//is used to remove the first element from an array
// arr.shift();
// console.log(arr);// ['ahmed', 'talal']


