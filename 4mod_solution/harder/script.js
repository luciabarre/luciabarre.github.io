
(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (let i; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    console.log("Hello " + names[i]);
    if (firstLetter=="j") {
      byeSpeaker.speak(names[i]);
   } 
   else {
     helloSpeaker.speak(names[i])
   }
  }
  })();
  
  
  
  