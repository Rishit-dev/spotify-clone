console.log("lets write some javascript");

//  making it a global variable so that we can use it multiple times 
let songs;
//  understand the concept of currfolder and folder with the same concept of songs and currentsongs

let currfolder;

let currentSongs= new Audio()

//   we have previously defined that out folder is "songs/ncs" and since ncs is changing beacuse it has many songs in it therfore we have palced it inside a backtic (``)

//  and we have write folder inside getsongs to play specific folder song only 
   async function getsongs(folder) {
  //  also we have to define what is folder so we have defined a variable currfolder and here for inside this function we have made currfolder equal to folder 
   currfolder=folder
    //  we are fetching the "api" of songs from our folder itself 
    let a=  await fetch(`http://127.0.0.1:3000/css/javascript/${folder}`)
    let response= await a.text();
    console.log(response);
    //  creating a div that can store the songs form "api"
    let div=document.createElement("div")
    div.innerHTML=response;
    //  we are targeting all the ahref tags
     let as=div.getElementsByTagName("a")
    // console.log(as);

     songs=[]
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            //  here splits hepls in spliting the song about text that we have given ("/songs/") and then we can obtain which index value we want like here we have given [1] 
            songs.push(element.href.split(`/${folder}/`)[1])
        }
       
        
    }
    
   //  we have not given any code for populating songs that have to be added when  getsongs is called in while attaching evenet listener to the albums so we have placed it inside getsongs 
    let songul= document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songul.innerHTML=""
    for (const song of songs) {
        songul.innerHTML=  songul.innerHTML+`<li>
            <img class="" src="music.svg">
            <div class="info">
              <div> ${song.replaceAll("%20","")} </div>
              <div> harry </div>
            </div>
            <div class="playnow">
              <span class="players"> play now </span>
              <img src="player.svg">
            </div>
          </li>`
        
        }

    //   syntax for playing audio 
    // var audio = new Audio(songs[0]);
    // audio.play();


    //  attaching an eventlistener to each song 
   Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{
    e.addEventListener("click",element=>{

      // console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playmusic(e.querySelector(".info").firstElementChild.innerHTML)

    })


    
   })

    

}


//  this is the correct code for playing audio 

//  setting pause equal to false this means that if function is called without a second parameter pause  will automatically gets false 


const  playmusic=(track,pause=false)=>{
 
  track = track.replace(/([A-Z])/g, ' $1')
         .replace(/ /g, '%20')
         .replace(/-(?=[^/]+$)/, ' %20- ')
         .replace(/^%20%20/, '').replace(/%20+$/, '');





//  track = track.replace('%20', '') // Remove the first %20
//                       //   you can see space is added before $1 beacuse we need it before any capital letter only 
//                        .replace(/([A-Z])/g, ' $1') // Add spaces before uppercase letters
//                        .trim() // Remove leading space if any
//                        .replace(/ /g, '%20') // Replace spaces with %20
//                        .replace(/-(?=[^/]+$)/, ' %20- ') // Correct the space before the hyphen
//                       .split('/')
//                       .map((part, i, arr) => i === arr.length - 1 ? part.replace(/%20{2,}/g, '%20').replace(/%20-\s*/g, '%20%20-%20%20') : part).join('/')
//                       .replace('%20-%20','-');


//  synchornize the locaton of the songs file carefully 
//  here we are making only one audio element and since src of currentsongs is updating it updated the previusly playing songs with the new one bases on (track) avaliable
currentSongs.src=`/css/javascript/${currfolder}/`+track


//  this says if pause is false execute the statemnet given in the if block  

// "The !pause means that if pause is false", the code inside the block will execute. If pause is true, the song is already playing and it doesn’t need to be played again.


if (!pause) {
  songplay.src="pause.svg"
 currentSongs.play() 
}
// currentSongs.play() 
// songplay.src="pause.svg"
document.querySelector(".songinfo").innerHTML=(track.replaceAll("%20"," "))
document.querySelector(".songtime").innerHTML="00:00 / 00:00"


}

// function playmusic(track) {

//   let space = track.replace("","%20");
//   var audio=new Audio("/songs/"+space)
//   return audio.play()
  
// }

// const playmusic=()=> {

//   let audio= new Audio("/css/javascript/songs/")
//   // const audioPath = `/css/javascript/songs/${track}`;

//   // console.log("Attempting to load audio from:", audioPath);

//   // let audio=new Audio(audioPath)
// audio.play()
// }




//  since getsongs is a async function so it will return a promise thats why we have to await getsongs()
  
 async function displayalbums() {
  let a=  await fetch(`http://127.0.0.1:3000/css/javascript/songs/`)
    let response= await a.text();
     //  creating a div that can store the songs form "api"
    let div=document.createElement("div")
    div.innerHTML=response;
    console.log(div);
    //  if you will take from document then all "a" wil come 
    let anchors=div.getElementsByTagName("a")
    console.log(anchors);
  //   we are not putting anchors in "" because it wil create a string which will form a new array of individual character ["a","n"... ] like this and  " Array.from(anchors)" helps in converting anchors which is a nodelist into array 
     Array.from(anchors).forEach( async e =>{
      if (e.href.includes("/songs")) {
        console.log(e.href.split("/").slice(-2)[0]);

        //  here currfolder is itself represented as songs/ncs
        let a=  await fetch(`http://127.0.0.1:3000/css/javascript/${foldercss\javascript\spotifyclone.js}/info.json`)
        let response= await a.json();
        console.log(response);
        firstart.innerHTML=firstart.innerHTML+` <div data-folder="cs" class="firstart">
          <div class="play">
            <img src="play.svg" alt="play">        
          </div>
        <img class="margin1"  src="" alt="art1" srcset="">
        <section class="margin2">${response.title} </section>
        <section class="margin3"> ${response.description} </section>    
      </div>`
        
      }
     })
    
    
}

displayalbums()

async function main() {


    function convertSecondsToMinSec(seconds) {
      let minutes = Math.floor(seconds / 60); // Get whole minutes
      let remainingSeconds = Math.floor(seconds % 60); // Get remaining seconds
  
      // Add a leading zero to seconds if less than 10
      remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
  
      return minutes + ":" + remainingSeconds;
  }
    
  // getsongs would receive "songs/ncs" as a string that is a simple text and can then interpret it as a file path or folder path but if we use songs/ncs then it will be treated as a variable insted of a folder path.
     await getsongs("songs/ncs") 
    console.log(songs); 

    //  whenever function playmusic has to occur from starting it will bydefault take the first song 
    playmusic(songs[0], true)
    
   
    
    //  just for changing the text in our html section we have picked a particular element and then changed its innerhtml 
    

      
    // attaching eventlistener to previous songplay and next 
songplay.addEventListener("click",()=>{
  if (currentSongs.paused) {
     currentSongs.play()
     songplay.src="pause.svg"

  } else {
    currentSongs.pause()
    songplay.src="play.svg"

  }
})

//  attach timeupdate eventlistener 

currentSongs.addEventListener("timeupdate",()=>{
  //  this is to show currenttime and total duration of the song 
  console.log(currentSongs.currentTime,currentSongs.duration);
  document.querySelector(".songtime").innerHTML=`${convertSecondsToMinSec(currentSongs.currentTime)}/${convertSecondsToMinSec(currentSongs.duration)}`

  //  for moving circle as the time shifts currenttime/duration will give the proportion of circle moved 
document.querySelector(".circle").style.left =((currentSongs.currentTime)/currentSongs.duration)*100 + "%"})

//  adding eventlistener to seekbar for shifting the position of circle to the point where we clicked 
document.querySelector(".seekbar").addEventListener("click",e=>{
  // console.log(e.target.getBoundingClientRect().width, e.offsetX);

  // e.offsetX gives the value of the width where we clicked 
  //   getBoundingClientRect().width gives the total width that can be used to move the circle 
  let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100
  
  //  our any movement is controlled by giving measurments in terms of percentage(%)
  document.querySelector(".circle").style.left= percent +"%"

     //  here we are updating the current time according to our "percent" that is ratio of offset/total width and here we dont want percentage so we divide our term by 100
     currentSongs.currentTime= ((currentSongs.duration)*percent)/100

//    e.target.getBoundingClientRect() this gives you this output 
  // {x: 186.203125, y: 478.625, width: 667.59375, height: 6, top: 478.625}, 153(offsetX)
})

//  adding an event listener to humburger 

document.querySelector(".humburger").addEventListener("click",()=>{
  document.querySelector(".left").style.left="0"
})
document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector(".left").style.left="-100%"
})


//  adding event listener to prvious button 
previous.addEventListener("click",()=>{
  console.log("previous song ");

  let index =songs.indexOf(currentSongs.src.split("/").slice(-1)[0])
  if ((index-1) >=0 ) {
   
    playmusic(songs[index-1])
  }
  
})

//  addding event listener to next button 
next.addEventListener("click",()=>{
console.log("next clicked")
console.log(currentSongs.src)


console.log(songs.indexOf(currentSongs.src.split("/").slice(-1)[0])); 
currentSongs.pause()
let index =songs.indexOf(currentSongs.src.split("/").slice(-1)[0]) 
console.log(index+1);


if ((index+1) < songs.length) {
 
playmusic(songs[index+1]);
  
  }

})



  //  output of currentsongs.src is depicted as this 
  // http://127.0.0.1:3000/css/javascript/songs/Brand%20New%20%20Baby%20%20Girl%20%20%20%20-%20%20%20%20Jeremy%20%20Korpas.mus7.mp3

  //  aftr split("/") the link becomes 
//  [ "http:",
//   "",
//   "127.0.0.1:3000",
//   "css",
//   "javascript",
//   "songs",
//   "Brand%20New%20%20Baby%20%20Girl%20%20%20%20-%20%20%20%20Jeremy%20%20Korpas.mus7.mp3"]

  
  //  here splice(-1) gives the last element present in the array and also Since slice(-1) always returns an array (even if it's one element) its [0] index will be same as the array 

  // currentSongs.pause()
  // let index =songs.indexOf(currentSongs.src.split("/").slice(-1)[0])
 

  // if ((index+1) < songs.length) {
   
  //   playmusic(songs[index+1],false)
  //   currentSongs.play()
    
  // }
 
  // })

//  attaching an event listener to volume 
document.querySelector(".volume").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
  console.log(e,e.target.value);
  currentSongs.volume=parseInt(e.target.value)/100
  
})

Array.from(document.getElementsByClassName("firstart")).forEach(e => {      
  e.addEventListener("click", async item=>{

  // this gives us the info about the part which is clicked in the playlist section 
  // console.log(item.target,item.target.dataset);
 
  //  current target is used for targeting only the eventlistened thing 
   console.log(item,item.currentTarget.dataset);
   songs= await getsongs(`songs/${item.currentTarget.dataset.folder}`)
   
  })
});

}

main()
  

