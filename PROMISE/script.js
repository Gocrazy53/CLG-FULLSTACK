// function pro(){
//     return new Promise((accept,reject)=>{
//     setTimeout(()=>{
//         let time=false
//     if(time){
//         accept("break sanction")
//     }
//     else{
//         reject("break decline")
//     }
//     },4000)
// })
// }
// pro().then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error)
// })
// console.log("good afternoon")



// let promise = new Promise((accept,reject)=>{
//     // let time = false;
//     let time = true;
//     if(time){
//         // console.log("true")
//         accept("true")
//     }else{
//         // console.log("false");
//         reject("false");
//     }
// })

// promise.then((message)=>{
//     try{
//         console.log(message);
//     }catch(error){
//         console.log(error);
//     }
// })

let pro  = new Promise((accept,reject)=>{
    setTimeout(()=>{
        let time=false
    if(time){
        accept("break sanction")
    }
    else{
        reject("break decline")
    }
    },4000)
})


 
async function fetch(){
    try{
        let result = await pro
        console.log(result+" async")
    }
    catch(error){
        console.log(error+" async")
    }
}

fetch()

// pro.then((message)=>{
//     console.log(message+" then")
// }).catch((error)=>{
//     console.log(error+" then")
// })