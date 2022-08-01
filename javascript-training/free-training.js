const arr = [
    {
        id : 1,
        on:false
    },
    {
        id : 2,
        on:true
    },
    {
        id : 3,
        on:false
    },
    {
        id : 4,
        on:true
    },
];



function changeOnWithId(id){
    return arr.map(item => {
        return id  === item.id ? {...item,on:!item.on}:item;
    });
}


function reverse(){
    const newArr = [];
    for(let i = 0 ; i < arr.length ; i ++){
        newArr.push(arr[arr.length - i - 1 ]);
    }
    return newArr;
}

//console.log(reverse());


//console.log(changeOnWithId(1));

function addToWishList(...items){
    const wishList = [];
    return [...wishList , items];
}

console.log(addToWishList('laptop','camera','phone'));