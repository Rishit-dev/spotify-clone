console.log(" inserting and deleting of our html");

document.querySelector(".container").innerHTML
//  output 
`\n        <div class="box">\n            hey i am a box \n        </div>\n`

document.querySelector(".container").innerText
//  output 
'hey i am a box'

document.querySelector(".container").outerHTML
//  output 
'<div class="container">\n        <div class="box">\n            hey i am a box \n        </div>\n    </div>'

document.querySelector(".container").outerText
// output 
'hey i am a box'

//  tag name is used to fetch elements node  only 
document.querySelector(".container").tagName
// output 
'DIV'

//  nodename is used to fetch all types of node 
document.querySelector(".container").nodeName
// output 
'DIV'

document.querySelector(".container").textContent
// output 
'\n        \n            hey i am a box \n        \n    '

//  used to hide element 
document.querySelector(".container").hidden = true
true
//  since container doesn't have style attribute it returns false 
document.querySelector(".container").hasAttribute("style")
false

//  but after it is provided 
document.querySelector(".box").hasAttribute("style")
true

document.querySelector(".box").getAttribute("style")
//  output 
'display: flex;'
//  to change the data in attriute temprory 
document.querySelector(".box").setAttribute("style","display:inline;")

//  for deleting any attribute 
document.querySelector(".box").removeAttribute("style")

//  used to change anything within the website
document.designMode="on"
'on'

//  for taking output of the data given 
document.querySelector(".box").dataset
//  output 
// DOMStringMap {craetedby: 'harry', managedby: 'rohan'}