function checkPass (pass, level)
{   let low = ''
    let good = ''
    let strong = ''
    let numbers = null
    let length = pass.length
    let symbol = '!@#$'
    let randomIndex=Math.floor(Math.random() * 4);
    let randomNumbers=Math.floor(Math.random() * 1000)
    let randomSymbol=symbol.charAt(randomIndex)
    
    if (level==='low'){
        result= pass+randomNumbers
        console.log(result)
        
    }
    if(level === 'good'){
        result = pass.charAt(0).toUpperCase()+pass.slice(1)+randomNumbers
        console.log(result)
    }

    if(level == 'strong'){
        result = pass.charAt(0).toUpperCase()+pass.slice(1,length-1)+pass.charAt(length-1).toUpperCase()+randomSymbol+randomNumbers
        console.log(result)
    }
   
}

checkPass('abcd','strong')