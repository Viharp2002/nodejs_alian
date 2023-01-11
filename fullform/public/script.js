const email = document.getElementById("email");
email.addEventListener("input",()=>{
    let em = /^([0-9a-z-_$*]+)@([a-z.]+)\.([a-z]){2,10}$/;
    let valem = email.value;

    if(em.test(valem))
    {
        document.getElementsByClassName("disp1")[0].style = "display:none";
    }
    else if(valem == "")
    {
         document.getElementsByClassName("disp1")[0].style = "display:none";
    }
    else
    {
        document.getElementsByClassName("disp1")[0].style = "display:initial";
    }
})

const password = document.getElementById("password");
password.addEventListener("input",()=>{
    let em = /^[a-zA-Z0-9@#$/%^&*]{8}/;
    let valem = password.value;
    var count = 0;

    if(em.test(valem))
    {
        count = 1;
        document.getElementsByClassName("disp1")[1].style = "display:none";
    }
    else if(valem == "")
    {
         document.getElementsByClassName("disp1")[1].style = "display:none";
    }
    else
    {
        document.getElementsByClassName("disp1")[1].style = "display:initial";
    }
    if(count==1)
    {
       if(valem.match(/\d/g))
       {
          document.getElementsByClassName("disp1")[2].style = "display:none";
       }
       else if(valem == "")
       {
            document.getElementsByClassName("disp1")[2].style = "display:none";
       }
       else
       {
         document.getElementsByClassName("disp1")[2].style = "display:block";
       }
    }
})

var ans;
const func1 = ()=>{

    const email = document.getElementById("email");
    let em = /^([0-9a-z-_$*]+)@([a-z.]+)\.([a-z]){2,10}$/;
    let valem = email.value;

    if(em.test(valem))
    {
        ans = true;
        document.getElementsByClassName("disp1")[0].style = "display:none";
    }
    else if(valem == "")
    {
        ans = false;
         document.getElementsByClassName("disp1")[0].style = "display:initial";
    }
    else
    {
        ans = false;
        document.getElementsByClassName("disp1")[0].style = "display:initial";
    }

const password = document.getElementById("password");
    let ps = /^[a-zA-Z0-9@#$/%^&*]{8}/;
    let valps = password.value;
    var count = 0;

    if(ps.test(valps))
    {
        ans = true;
        count = 1;
        document.getElementsByClassName("disp1")[1].style = "display:none";
    }
    else if(valem == "")
    {
        ans = false;
         document.getElementsByClassName("disp1")[1].style = "display:initial";
    }
    else
    {
        ans = false;
        document.getElementsByClassName("disp1")[1].style = "display:initial";
    }
    if(count==0)
    {
       if(!valem.match(/\d/g))
       {
        ans = false;
          document.getElementsByClassName("disp1")[2].style = "display:block";
       }
       else if(valem == "")
       {
        ans = false;
            document.getElementsByClassName("disp1")[2].style = "display:initial";
       }
       else
       {
        ans = true;
         document.getElementsByClassName("disp1")[2].style = "display:none";
       }
    }

    return ans;
}
var anss;
const func2 = ()=>{

    const email = document.getElementById("email");
    let em = /^([0-9a-z-_$*]+)@([a-z.]+)\.([a-z]){2,10}$/;
    let valem = email.value;

    if(em.test(valem))
    {
        anss = true;
        document.getElementsByClassName("disp1")[0].style = "display:none";
    }
    else if(valem == "")
    {
        anss = false;
         document.getElementsByClassName("disp1")[0].style = "display:initial";
    }
    else
    {
        anss = false;
        document.getElementsByClassName("disp1")[0].style = "display:initial";
    }
    return anss;
}