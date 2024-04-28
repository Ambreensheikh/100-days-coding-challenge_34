//call back function
const personOne = (friend, callfriend) => {
    console.log(`I am asking to my friend ${friend}`);
    callfriend();
};
const personTwo = () => {
    console.log(`Hey whats up !`);
};
personOne("Ali ", personTwo);
export {};
