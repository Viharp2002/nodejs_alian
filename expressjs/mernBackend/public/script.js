const fname = document.getElementById("fname");
fname.addEventListener("input", () => {
  let regexp = /^[a-zA-Z]([a-zA-Z]){1,30}$/;
  let str = fname.value;
  if (regexp.test(str)) {
    document.querySelector(".disp").classList.remove("redc");
  } else if (fname.value == "") {
    document.querySelector(".disp").classList.remove("redc");
  } else {
    document.querySelector(".disp").classList.add("redc");
  }
});

const pinn = document.getElementById("pin");
pinn.addEventListener("keydown",(e)=>{
   if(pinn.value.length>5)
  {
    if(e.keyCode == 8)
    {
      
    }
    else
    {
      e.preventDefault();
    }
  }
})

const pin = document.getElementById("pin");
pin.addEventListener("input", () => {
  if(pin.value == '')
  {
      pin.value = "";
  }
});
 
const day = document.getElementById("day");
day.addEventListener("input",()=>{
    if(day.value == '')
    {
        day.value = "";
    }
    else if(day.value>31)
    {
        day.value = 31;
    }
})
 
const state = document.getElementById("state");
state.addEventListener("input", () => {
  let rsaa = /^[a-zA-Z]{2,16}$/;
  let sftaa = state.value;

  if (rsaa.test(sftaa)) {
    document.querySelector(".disp12").classList.remove("redc");
  } else if (state.value == "") {
    document.querySelector(".disp12").classList.remove("redc");
  } else {
    document.querySelector(".disp12").classList.add("redc");
  }
});

const county = document.getElementById("county");
county.addEventListener("input", () => {
  let rsah = /^[a-zA-Z]{2,16}$/;
  let sftah = county.value;

  if (rsah.test(sftah)) {
    document.querySelector(".disp13").classList.remove("redc");
  } else if (county.value == "") {
    document.querySelector(".disp13").classList.remove("redc");
  } else {
    document.querySelector(".disp13").classList.add("redc");
  }
});

const city = document.getElementById("city");
city.addEventListener("input", () => {
  let saa = /^[a-zA-Z]{2,16}$/;
  let ftaa = city.value;

  if (!saa.test(ftaa)) {
    document.querySelector(".disp14").classList.add("redc");
  } else {
    document.querySelector(".disp14").classList.remove("redc");
  }
});

const comments = document.getElementById("comments");
comments.addEventListener("input", () => {
  let sa = /[\$\#\-0-9a-zA-Z]{2,30}/;
  let faa = comments.value;

  if (!sa.test(faa)) {
    document.querySelector(".disp15").classList.add("redc");
  }else if(faa == "")
  {
    document.querySelector(".disp15").classList.remove("redc");
  }
  else {
    document.querySelector(".disp15").classList.remove("redc");
  }
});

const lname = document.getElementById("lname");
lname.addEventListener("input", () => {
  let regexpp = /^[a-zA-Z]([a-zA-Z]){1,30}$/;
  let strr = lname.value;
  if (regexpp.test(strr)) {
    document.querySelector(".disp2").classList.remove("redc");
  } else if (lname.value == "") {
    document.querySelector(".disp2").classList.remove("redc");
  } else {
    document.querySelector(".disp2").classList.add("redc");
  }
});

const email = document.getElementById("email");
email.addEventListener("input", () => {
  let regxp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  let str = email.value;
  console.log(regxp);
  console.log(str);

  if (regxp.test(str)) {
    document.querySelector(".disp4").classList.remove("redc");
  } else if (email.value == "") {
    document.querySelector(".disp4").classList.remove("redc");
  } else {
    document.querySelector(".disp4").classList.add("redc");
  }
});

var countw = 0;
const qaa = document.getElementById("bc");
qaa.addEventListener("input",()=>{
 if(countw%2 == 0)
 {
   let qa = document.getElementById("qa");
   qa.classList.remove("xz");
   document.querySelector(".disp11").classList.add("redc");
   countw++;
 } 
 else
 {
  let qa = document.getElementById("qa");
   qa.classList.add("xz");
  document.querySelector(".disp11").classList.remove("redc");
  document.querySelector(".disp19").classList.remove("redc");
  // qa.placeholder = ;
   countw++;
 }
})

const qaaa = document.getElementById("qa");
qa.addEventListener("input",()=>{
  let reg = /^[a-zA-Z]{2,30}$/;
  let dfg = qaaa.value;

  if (!reg.test(dfg)) {
    document.querySelector(".disp19").classList.add("redc");
  } else {
    document.querySelector(".disp19").classList.remove("redc");
    document.querySelector(".disp11").classList.remove("redc");
  }
})

const mon = document.getElementById("mon");
mon.addEventListener("change",()=>{
  var selectedValue = mon.options[mon.selectedIndex].value;
  if (selectedValue == "month") {
    document.querySelector(".disp10").classList.add("redc");
  } else {
    document.querySelector(".disp10").classList.remove("redc");
  }
})

document.getElementById("y1").addEventListener("keydown",(e)=>{
  if(e.keyCode == 8)
  {
     console.log(1);
  }
  else if(e.keyCode==69 || e.keyCode==189 || e.keyCode==187)
  {
     e.preventDefault();
  }
  else if(y1.value.length>3)
  {
    e.preventDefault();
  }
})

document.getElementById("y2").addEventListener("keydown",(e)=>{ 
  if(e.keyCode == 8)
  {
    console.log(1);
  }
  else if(e.keyCode==69 || e.keyCode==189 || e.keyCode==187)
  {
     e.preventDefault();
  }
  else if(y2.value.length>3)
  {
    e.preventDefault();
  }
})

document.getElementById("y3").addEventListener("keydown",(e)=>{
  if(e.keyCode == 8)
  {
    console.log(1);
  }
  else if(e.keyCode ==69 || e.keyCode==189 || e.keyCode==187)
  {  
     e.preventDefault();
  }
  else if(y3.value.length>3)
  {
    e.preventDefault();
  }
})

document.getElementById("y4").addEventListener("keydown",(e)=>{
  if(e.keyCode == 8)
  {
    console.log(1);
  }
  else if(e.keyCode==69 || e.keyCode==189 || e.keyCode==187)
  {
      e.preventDefault();
  }
  else if(y4.value.length>3)
  {
    e.preventDefault();
  }
})

const y1 = document.getElementById("y1");
y1.addEventListener("change",()=>{
  if(y1.value == '')
  {
      y1.value = "";
  }
  else if(y1.value>2022)
  {
      y1.value = 2022;
  }
  else if(y1.value<2005)
  {
    y1.value = 2005
  }
})

const y2 = document.getElementById("y2");
y2.addEventListener("change",()=>{
  if(y2.value == '')
  {
      y2.value = "";
  }
  else if(y2.value>2022)
  {
      y2.value = 2022;
  }
  else if(y2.value<2005)
  {
    y2.value = 2005
  }
})
const y3 = document.getElementById("y3");
y3.addEventListener("change",()=>{
  if(y3.value == '')
  {
      y3.value = "";
  }
  else if(y3.value>2022)
  {
      y3.value = 2022;
  }
  else if(y3.value<2005)
  {
    y3.value = 2005
  }
})

const y4 = document.getElementById("y4");
y4.addEventListener("change",()=>{
  if(y4.value == '')
  {
      y4.value = "";
  }
  else if(y4.value>2022)
  {
      y4.value = 2022;
  }
  else if(y4.value<2005)
  {
    y4.value = 2005
  }
})

document.getElementById("year").addEventListener("keydown",(e)=>{
  if(e.keyCode == 69)
    {
      e.preventDefault();
    }
})

const year = document.getElementById("year");
year.addEventListener("change",()=>{
   
   if(year.value == '')
    {
        year.value = "";
    }
    else if(year.value>2022)
    {
        year.value = 2022;
    }
    else if(year.value<1940)
    {
      year.value = 1940;
    }
})

const tel = document.getElementById("tel");
tel.addEventListener("input", () => {
  let regxp = /^[6-9]{1}[0-9]{9}$/;
  let str = tel.value;

  if (regxp.test(str)) {
    console.log("OK");
    document.querySelector(".disp5").classList.remove("redc");
  } else if (tel.value == "") {
    document.querySelector(".disp5").classList.remove("redc");
  } else {
    console.log("NOT OK");
    document.querySelector(".disp5").classList.add("redc");
  }
});

const i11 = document.getElementById("11");
i11.addEventListener("input", () => {
  let xz = /^[a-zA-Z]{2,10}$/;
  let rt = i11.value;

  if (xz.test(rt)) {
    document.querySelector(".disp7i").classList.remove("redc");
  } else if (i11.value == "") {
    document.querySelector(".disp7i").classList.remove("redc");
  } else {
    document.querySelector(".disp7i").classList.add("redc");
  }
});

const i22 = document.getElementById("22");
i22.addEventListener("input", () => {
  let xzz = /^[a-zA-Z]{2,10}$/;
  let rtz = i22.value;

  if (xzz.test(rtz)) {
    document.querySelector(".disp7j").classList.remove("redc");
  } else if (i22.value == "") {
    document.querySelector(".disp7j").classList.remove("redc");
  } else {
    document.querySelector(".disp7j").classList.add("redc");
  }
});
const i33 = document.getElementById("33");
i33.addEventListener("input", () => {
  let xzq = /^[a-zA-Z]{2,10}$/;
  let rtq = i33.value;

  if (xzq.test(rtq)) {
    document.querySelector(".disp7o").classList.remove("redc");
  } else if (i33.value == "") {
    document.querySelector(".disp7o").classList.remove("redc");
  } else {
    document.querySelector(".disp7o").classList.add("redc");
  }
});
const i44 = document.getElementById("44");
i44.addEventListener("input", () => {
  let xza = /^[a-zA-Z]{2,10}$/;
  let rta = i44.value;

  if (xza.test(rta)) {
    document.querySelector(".disp7r").classList.remove("redc");
  } else if (i44.value == "") {
    document.querySelector(".disp7r").classList.remove("redc");
  } else {
    document.querySelector(".disp7r").classList.add("redc");
  }
});

const j11 = document.getElementById("12");
j11.addEventListener("input", () => {
  let rf = /^([0-9]+)\.([0-9]){2}$/;
  let rt = j11.value;

  if (rf.test(rt)) {
    document.querySelector(".disp8i").classList.remove("redc");
  }else {
    document.querySelector(".disp8i").classList.add("redc");
  }
});

const j22 = document.getElementById("13");
j22.addEventListener("input", () => {
  let rqf = /^([0-9]+)\.([0-9]){2}$/;
  let rqt = j22.value;

  if (rqf.test(rqt)) {
    document.querySelector(".disp8j").classList.remove("redc");
  } else {
    document.querySelector(".disp8j").classList.add("redc");
  }
});

const j33 = document.getElementById("14");
j33.addEventListener("input", () => {
  let rvf = /^([0-9]+)\.([0-9]){2}$/;
  let rvt = j33.value;

  if (rvf.test(rvt)) {
    document.querySelector(".disp8o").classList.remove("redc");
  }  else {
    document.querySelector(".disp8o").classList.add("redc");
  }
});

const j44 = document.getElementById("15");
j44.addEventListener("input", () => {
  let rbf = /^([0-9]+)\.([0-9]){2}$/;
  let rbt = j44.value;

  if (rbf.test(rbt)) {
    document.querySelector(".disp8r").classList.remove("redc");
  } else {
    document.querySelector(".disp8r").classList.add("redc");
  }
});

const sdf = () => {
  /*.............................checkbox...........................................*/
  var anss = true;
  var count3 = 0;
  var check = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  );
  for (let i = 0; i < check.length; i++) {
    if (check[i].value == "Others") {
      count3 = 1;
    }
  }
  if (count3 == 1) {
    let qa = document.getElementById("qa");
    qa.classList.remove("xz");
    let reg = /^[a-zA-Z]{2,10}$/;
    if (frm.HOBBIE.value == "") {
      anss = false;
      document.querySelector(".disp11").classList.add("redc");
      document.querySelector(".disp9").classList.remove("redc");
    } else if (!reg.test(frm.HOBBIE.value)) {
      anss = false;
      document.querySelector(".disp11").classList.add("redc");
      document.querySelector(".disp9").classList.remove("redc");
    } else {
      anss = true;
      document.querySelector(".disp11").classList.remove("redc");
    }
  } else {
    if (check.length == 0) {
      document.querySelector(".disp9").classList.add("redc");
      anss = false;
    } else {
      anss = true;
      document.querySelector(".disp9").classList.remove("redc");
    }
  }
  /*.....................................Month...........................................*/
  var mon = document.getElementById("mon");
  var selectedValue = mon.options[mon.selectedIndex].value;
  if (selectedValue == "month") {
    document.querySelector(".disp10").classList.add("redc");
    anss = false;
  } else {
    document.querySelector(".disp10").classList.remove("redc");
    anss = true;
  }
  /*..................................fname................................................*/
  var fn = document.getElementById("fname");
  let egexp = /^[a-zA-Z]([a-zA-Z]){1,30}$/;
  let vc = fn.value;
  if (egexp.test(vc)) {
    anss = true;
    document.querySelector(".disp").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp").classList.add("redc");
  }

  /*....................................pin...............................................*/
  const pin = document.getElementById("pin");
  let regp = /^[0-9]{6}$/;
  let sft = pin.value;

  if (regp.test(sft)) {
    anss = true;
    document.querySelector(".disp6").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp6").classList.add("redc");
  }
  /*......................................lname..............................................*/
  const lname = document.getElementById("lname");
  let regexpp = /^[a-zA-Z]([a-zA-Z]){1,30}$/;
  let strr = lname.value;
  if (regexpp.test(strr)) {
    anss = true;
    document.querySelector(".disp2").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp2").classList.add("redc");
  }

  /*......................................city...............................................*/
  const city = document.getElementById("city");
  let saa = /^[a-zA-Z]{16}$/;
  let ftaa = city.value;

  if (saa.test(ftaa)) {
    anss = true;
    document.querySelector(".disp14").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp14").classList.add("redc");
  }
  /*........................................address.......................................*/
  const comments = document.getElementById("comments");
  let sa = /^[a-zA-Z]{16}$/;
  let faa = comments.value;

  if (sa.test(faa)) {
    anss = true;
    document.querySelector(".disp15").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp15").classList.add("redc");
  }

  /*........................................country.........................................*/
  const county = document.getElementById("county");
  let rsah = /^[a-zA-Z]{16}$/;
  let sftah = county.value;

  if (rsah.test(sftah)) {
    anss = true;
    document.querySelector(".disp13").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp13").classList.add("redc");
  }
  /*...............................................state...........................................*/
  const state = document.getElementById("state");
  let rsaa = /^[a-zA-Z]{16}$/;
  let sftaa = state.value;

  if (rsaa.test(sftaa)) {
    anss = true;
    document.querySelector(".disp12").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp12").classList.add("redc");
  }

  /*.........................................year....................................................*/
  const year = document.getElementById("year");
  let str = year.value;
  let svtrr = year.min;
  let stre = year.max;

  if (str <= stre && str >= svtrr) {
    anss = true;
    document.querySelector(".disp3").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp3").classList.add("redc");
  }
  /*.....................................email.......................................................*/
  const email = document.getElementById("email");
  let regxp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  let svtr = email.value;
  if (regxp.test(svtr)) {
    anss = true;
    document.querySelector(".disp4").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp4").classList.add("redc");
  }
  /*.....................................phone..........................................................*/
  const tel = document.getElementById("tel");
  let vregxp = /^[6-9]{1}[0-9]{9}$/;
  let vstr = tel.value;

  if (vregxp.test(vstr)) {
    anss = true;
    document.querySelector(".disp5").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp5").classList.add("redc");
  }

  /*...........................................qualification......................................................*/

  const i11 = document.getElementById("11");
  let xz = /^[a-zA-Z]{2,10}$/;
  let rt = i11.value;

  if (xz.test(rt)) {
    anss = true;
    document.querySelector(".disp7i").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp7i").classList.add("redc");
  }

  const i22 = document.getElementById("22");
  let xzz = /^[a-zA-Z]{2,10}$/;
  let rtz = i22.value;

  if (xzz.test(rtz)) {
    anss = true;
    document.querySelector(".disp7j").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp7j").classList.add("redc");
  }
  const i33 = document.getElementById("33");
  let xzq = /^[a-zA-Z]{2,10}$/;
  let rtq = i33.value;

  if (xzq.test(rtq)) {
    anss = true;
    document.querySelector(".disp7o").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp7o").classList.add("redc");
  }
  const i44 = document.getElementById("44");
  let xza = /^[a-zA-Z]{2,10}$/;
  let rta = i44.value;

  if (xza.test(rta)) {
    anss = true;
    document.querySelector(".disp7r").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp7r").classList.add("redc");
  }

  const j11 = document.getElementById("12");
  let rf = /^([0-9]+)\.([0-9]){2}$/;
  let art = j11.value;

  if (rf.test(art)) {
    anss = true;
    document.querySelector(".disp8i").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp8i").classList.add("redc");
  }

  const j22 = document.getElementById("13");
  let rqf = /^([0-9]+)\.([0-9]){2}$/;
  let rqt = j22.value;

  if (rqf.test(rqt)) {
    anss = true;
    document.querySelector(".disp8j").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp8j").classList.add("redc");
  }

  const j33 = document.getElementById("14");
  let rvf = /^([0-9]+)\.([0-9]){2}$/;
  let rvt = j33.value;

  if (rvf.test(rvt)) {
    anss = true;
    document.querySelector(".disp8o").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp8o").classList.add("redc");
  }

  const j44 = document.getElementById("15");
  let rbf = /^([0-9]+)\.([0-9]){2}$/;
  let rbt = j44.value;

  if (rbf.test(rbt)) {
    anss = true;
    document.querySelector(".disp8r").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp8r").classList.add("redc");
  }

  const y1 = document.getElementById("y1");
  let y11 = /^[0-9]{4}$/;
  let y12 = y1.value;

  if (y11.test(y12)) {
    anss = true;
    document.querySelector(".disp20").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp20").classList.add("redc");
  }

  const y2 = document.getElementById("y2");
  let y22 = /^[0-9]{4}$/;
  let y23 = y2.value;

  if (y22.test(y23)) {
    anss = true;
    document.querySelector(".disp20").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp20").classList.add("redc");
  }
  const y3 = document.getElementById("y3");
  let y33 = /^[0-9]{4}$/;
  let y34 = y3.value;

  if (y33.test(y34)) {
    anss = true;
    document.querySelector(".disp20").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp20").classList.add("redc");
  }
 
  let y44 = /^[0-9]{4}$/;
  let y45 = y3.value;

  if (y44.test(y45)) {
    anss = true;
    document.querySelector(".disp20").classList.remove("redc");
  } else {
    anss = false;
    document.querySelector(".disp20").classList.add("redc");
  }

    return anss;
   
};