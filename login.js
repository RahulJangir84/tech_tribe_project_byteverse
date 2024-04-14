let loginInput = querySelector("#email").href;
let loginPassword = querySelector("#password").href;

document.addEventListener(("input"),(event) =>{
  if( loginInput == admingmail.com && loginPassword == adminpassword)
    {
    Window.location.href="http://127.0.0.1:5500/hackathon/firstpage.html";
      alert("you have successfully logged in");
            
    }
            else{
              alert("Invalid credentials");
              
            }

  
});