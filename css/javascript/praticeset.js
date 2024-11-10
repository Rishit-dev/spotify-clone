async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(20)
        }, 3000);
    })
}

async function main() {
    //   here our error is gone into data so we have to implement trycatch on data 
      
    //  now since the the value in getdata() is rejected so try will not give any output and it will move on to catch(error)
    try {
       data = await getdata()
       console.log(data);
       
    } catch (error) {
       console.log("error cant be recitifed ");
        
    }
    
    // console.log(data);
    
}
main()

