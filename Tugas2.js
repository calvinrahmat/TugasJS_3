const getmonth = (callback)=>{
    setTimeout(()=>{
        let error= true
        let month = ['January','February','March','April','May','June','July','August','September','October','November','December']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry data not found',[]))
        }
    },4000)
}

const displayMonth = async (error,month)=>{
    try{
    num=10
        let convert= month.map((y)=>y.toUpperCase())
        
        for (let i=0; i<=num;i++){
        console.log(convert[i])
        
    }}catch{
        {
        console.log(error)
        }
    }
}


getmonth(displayMonth)