console.log("ex no. 5");
 

function createcard(title ,cname,views, monthsold,duration,thumbnail){


let viewstar

if (viewstar<1000) {
    viewstar=viewstar;
}

else if (viewstar>1000000) {
    viewstar=viewstar/1000000 + "M";
}

else{
    viewstar=viewstar/1000 + "k"
}




let html= `<div class="card">
        <div class="${thumbnail}">
       <img src="https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q" srcset="">
       <div class="capsule">
      ${duration}
       </div>
        </div>
        <div class="text">
      <h1>${title} </h1>
       <p>${Cname} . ${viewstar} views . ${monthsold} </p> 
      
        </div>

</div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}



createcard(" Introduction to backdend | sigma web dev video #2", "codewithharry", 56000,7,"30:20", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")