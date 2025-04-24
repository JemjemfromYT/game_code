let firstCode = document.getElementById("firstCode");
let buttonCode = document.getElementById ("buttonCode")
let inputCode = document.getElementById ("inputCode")
let loading = document.getElementById ("loading")
let pleaseWait = document.getElementById ("pleaseWait")
let stage2 = document.getElementById ("stage2")
let go2 = document.getElementById ("go2")
let respectButton = document.getElementById("respectButton")
let achievement = document.getElementById ("achievement")
let showStage2 = document.getElementById ("showStage2")
let achievementPic = document.getElementById ("achievementPic ")
let achievementDiv = document.getElementById ("achievementDiv")
let respectPic = document.getElementById ("respectPic")

let attempts = 10; //outside


respectButton.addEventListener("click", function(){
  showStage2.style.display="block"
  respect.play()
  achievement.play()
  console.log("ffdd")
  respectButton.style.display="none"
  setTimeout(()=>{
    achievementDiv.style.opacity="1"
   respectPic.classList.add("show")
    setTimeout(()=>{
      respectPic.classList.add("hide")
    },7000);
  },1800);
});

  

buttonCode.addEventListener("click",function(){

if(inputCode.value != "8080"){
  
  attempts--;
alert("attempts remaining: " + attempts)
    if(attempts <= 0){
      alert("no attempts remain")
    alert("game over")
    alert("you know where should i take you right?")
    alert("right!!!!!!?????")
    }
    if(attempts == 7){
      alert("You are nearing the limit of your attempts.  Exceeding this limit will trigger an unpleasant sequence of events.  Prepare for both a digital and physical alteration to your experience.")
      alert("would still like to continue?")
    }
     
     if(attempts == 3){
      alert("Three attempts remaining. Failure will result in the immediate deletion of all unsaved data on this device. Proceed with caution.")
    }
  if(attempts == 0){
    alert("You stubborn")
    alert("just joking, I am a friendly attempt")
    alert("continue now")
  }
     
    
  }



});


  setTimeout(() => {
    firstCode.classList.add("show");
  }, 1000)
  
  setTimeout(()=>{
    loading.classList.add("show")
    setTimeout(()=>{
      loading.style.display="none"
      pleaseWait.classList.add("show")
      setTimeout(()=> {
        pleaseWait.style.display="none"
        stage2.classList.add("show")
        go2.classList.add("show")
      },4000);
    },4000);
  },0001);
  
  go2.addEventListener("click", function(){
    window.location.href="pong/2CodeIndex.html"
  });
  
  
  
  
  
  const buttons = document.querySelectorAll('button');
  const audio = document.getElementById('audioPlayer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });
