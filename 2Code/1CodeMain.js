//NEW CODE
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
let daisy = document.getElementById ("daisy")
let jumpscare = document.getElementById ("jumpscare")

let attempts = 10; //outside




t=0
go2.addEventListener("click", function(){
  
  t++
  setTimeout(()=>{
 terrifying.style.display="block";
 jumpscare.play()
 setTimeout(()=>{
   terrifying.style.display="none"
 },1000);
  },0001);
  if(t >= 3){
    setTimeout(()=>{
      terrifying.style.display="block"
     setTimeout(()=>{
      alert("why?")
      alert("why why???")
      setTimeout(()=>{
        alert(":)")
        alert(":,)")
        setTimeout(()=>{
          alert(":,(")
          setTimeout(()=>{
            alert("System alert: Unknown.")
            alert("repeat: GPS detected")
            alert("watch out on your flashlight")
         
    setTimeout(()=>{
        navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            torch: true,
          },     }); },0001);
          
       setTimeout(()=>{
         window.location.href="/credits/credits.html"
       },4500);
          
          },2000);
        },2000);
      },2000);
     },2500);
    },2500);
    daisy.play()
  }
  
  
});


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
alert("attempts remaining: ???")

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
  
  
  
  
  
  const buttons = document.querySelectorAll('button');
  const audio = document.getElementById('audioPlayer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      audio.play();
    });
  });