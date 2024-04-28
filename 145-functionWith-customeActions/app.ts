// function 1 ,
const personOne = (friend:string , callfriend:any)=>{
console.log(`I am asking to my friend ${friend}`);
callfriend();
}
const personTwo = () =>{         //function2
    console.log(`Hey whats up !`);
}//call back function
personOne("Ali " , personTwo);