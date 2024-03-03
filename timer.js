//The code is Written by Vinay Tandale 
var timer=0;
var secs=parseInt(localStorage.getItem("seconds"));
var p=60;
console.log("start1",secs)
if(secs>=1){console.log("i am in",secs);timer=secs;console.log(timer)}
window.addEventListener("DOMContentLoaded", (event) => {
let err=document.getElementById("err")
if(err==null){
let b=new time()
b.start();
this.a=2;
}
});


class time {
    start() {
        setInterval(() => {
            console.log(timer)
            timer = timer + 1;
            secs=localStorage.setItem("seconds",timer)
            secs=parseInt(localStorage.getItem("seconds"));
            let remain=600-secs;
            let min=parseInt(remain/60)
            if(p==0){p=60;}
            p=p-1;
            call.innerText ="You have "+min+":Minutes:-"+p+":seconds";
            if(secs==500){alert("Time will end son")}
            if(secs==600){this.check()}
            }, 1000);
    }
    check(){ 
        alert("time ended")
        localStorage.removeItem("seconds")
        localStorage.clear()
        location.href='logout.php?q=welcome.php'
       }

}