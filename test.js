const data = [
    {
        name: "test",
        number: 2
    },{
        name: "test4",
        number: 7
    },{
        name: "test2",
        number: 12
    },
];

let numberToAdd = 2127;

// const d = [1,145,1,53]


// // const x = data.some((a)=>{ numberToAdd =a})

const x = data.some((i)=>{
        if(i.number===numberToAdd){
            return true;
        }else{
            return false;
        }

 })
console.log(x)



