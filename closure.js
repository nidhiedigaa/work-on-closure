function outer_function(value_one)
{
    let value_two=20
    function inner_function()
    {
        return `${value_one} and ${value_two}`
    }
    return inner_function
}


console.log(outer_function(10)())



function outer(value_one,value_two)
{
    return function inner()
    {
        return value_one+' '+value_two
    }
}


let inner_function=outer(50,100)
let result=inner_function()
console.log(result)