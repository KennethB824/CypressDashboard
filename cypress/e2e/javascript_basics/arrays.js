let tools = ['selenium', 'cypress', 'wdio', 'uft', 'protractor']

const string = tools.toString();

console.log(string);

const join = tools.join(' * ')
console.log(join)

const pop = tools.pop() //deletes last element
console.log(tools) 

const push = tools.push('webshare') //adds webshare to the end
console.log(tools); 

const shift = tools.shift() //removes first element
console.log(tools);

const unshift = tools.unshift("selenium") //adds element to first index
console.log(tools);

const sort = tools.sort()
console.log(tools);

const reverse = tools.reverse()
console.log(tools);

tools.forEach((value)=>{
    if(value == "cypress"){
        console.log('cypress is trending');
    }else{
        console.log('Element not found');
    }
})