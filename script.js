//task 1 food delivery

// function orderFood(){
//     return new Promise((res,rej)=>{
//        const val= Math.random()<0.7
//         setTimeout(() => {

//             if (val) res();
//             else rej()
//         }, 2000);
//     });
// }

// orderFood().then(function(){
//     console.log("🍕 Pizza Delivered!");
    
// }).catch(()=>{
//     console.log("❌ Delivery failed");
    
// })

//task 2 chained promises: user->posts->comments

// function getUser(){
// return new Promise((res,rej)=>{
//     setTimeout(() => {
//          res({id:1,name:'shivam'})
//     }, 1000);
   
// })

// }

// function getPosts(userId){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res(['title 1','title 2'])
//         }, 1000);
        
//     })
// }
// function getComments(postId){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(['great','inshightful','amazing'])
//         }, 1000);
        
//     })
// }




// getUser().then((data)=>{
// console.log(data);
 
// return getPosts(data.id)

// })
// .then((title)=>{
//     console.log(title);
   
//    return getComments('adncs') 
    
// })
// .then((cmts)=>{
//     console.log(cmts);
    
// })
// .finally(()=>
// {
//     setTimeout(() => {
//         console.log('all steps done');
//     }, 1000);
    
    
// })

//task 3 : Fake APi Delay

function fakeApiCall(endpoint){
    const data = {
        users:['user1', 'user2','user3'],
        posts:['aaa','adad','fds'],

    };
     let delay= Math.random()*2000 +1000;
  return new Promise((res,rej)=>{
   
setTimeout(() => {
 res (data[endpoint])
}, delay);

   })
}

fakeApiCall("users").then(function(data){
console.log(data);

})
fakeApiCall("posts").then(function(data){
console.log(data);

})
