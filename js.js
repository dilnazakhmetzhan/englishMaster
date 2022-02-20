const emailArray = [];
const passwordArray = [];
const audio = new Audio('success-sound-effect.mp3');
function register(){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;
    const passwordRetype = document.getElementById("psw-rep").value;

    if (email === ""){
        alert("Email required.");

    }
    else if (password === ""){
        alert("Password required.");

    }
    else if (passwordRetype === ""){
        alert("Password required.");

    }
    else if ( password !== passwordRetype ){
        alert("Password don't match.");

    }
    else if(emailArray.indexOf(email) === -1){
        emailArray.push(email);
        passwordArray.push(password);
        audio.play();
        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("email").value ="";
        document.getElementById("psw").value="";
        document.getElementById("psw-rep").value="";
    }
    else{
        alert(email + " is already register.");

    }
}
function login(){
    event.preventDefault();

    const email = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) === -1){
        if (email === ""){
            alert("Email required.");
            return ;
        }
        alert("Email does not exist.");

    }
    else if(passwordArray[i] !== password){
        if (password === ""){
            alert("Password required.");
            return ;
        }
        alert("Incorrect Password .");

    }
    else {
        audio.play();
        alert(email + " yor are logged Now \n welcome to our English Master website.");

        document.getElementById("name").value ="";
        document.getElementById("password").value="";

    }

}
