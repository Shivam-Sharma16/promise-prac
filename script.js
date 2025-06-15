//task 1 food delivery

function orderFood(){
    return new Promise((res,rej)=>{
       const val= Math.random()<0.7
        setTimeout(() => {

            if (val) res();
            else rej()
        }, 2000);
    });
}

orderFood().then(function(){
    console.log("🍕 Pizza Delivered!");
    
}).catch(()=>{
    console.log("❌ Delivery failed");
    
})