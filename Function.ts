function sayHello1(name:any = "None", lastname:any = "None"): string
{
    return name + " " + lastname;
}

function sum(a:number,b:number, ...rest: number[]): number
{
    return a + b + rest.reduce((a,b) => a + b, 0);
}

function add({x, y}:{x: number, y: number}): number
{
    return x + y;
}

console.log(add({y:5, x:100}));