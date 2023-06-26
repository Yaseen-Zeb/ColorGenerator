
let section = document.querySelector("section");
btns = document.querySelectorAll("ul li"),
colors=["1","2","3","4","5","6","7","8","A","B","C","a","e",'b',"c","f"],
str = "",
selected = "simple";

console.log(section);

let color_generator =()=>{
let color_code = "";
   for (let i = 0; i <= 5; i++) {
       let random = Math.floor(Math.random()*colors.length);
       color_code += colors[random]
   } 
   return color_code;
}
section.innerHTML = str;

let simple_colors = ()=>{
   str = ""
   for (let i = 0; i <= 51; i++) {
      let c = color_generator()
      str += `<div style="background-color:#${c}"><i title="copy" class="copy_icon mdi mdi-content-copy"><input type="hidden" value="${c}"></i></div>`
   }
   section.innerHTML = str;
}

let linear_grediants = ()=>{
   str = ""
   for (let i = 0; i <= 51; i++) {
    let  c1 = color_generator();
    let c2 = color_generator();
      str += `<div style="background:linear-gradient(#${c1}, #${c2})"><i title="copy" class="copy_icon mdi mdi-content-copy"><input type="hidden" value="linear-gradient(#${c1}, #${c2})"></i></div>`
   }
   section.innerHTML = str;
}

let radial_grediants = ()=>{
   str = ""
   for (let i = 0; i <= 51; i++) {
      let  c1 = color_generator();
      let c2 = color_generator();
      str += `<div style="background:radial-gradient(#${c1}, #${c2})"><i title="copy" class="copy_icon mdi mdi-content-copy"><input type="hidden" value="radial-gradient(#${c1}, #${c2})"></i></div>`
   }
   section.innerHTML = str;
}

 if (selected == "simple") {
         simple_colors();
      }else if (selected == "linear") {
         linear_grediants();
      }else if (selected == "radial") {
         radial_grediants();
      }


btns.forEach(btn => {
   btn.onclick = () =>{
      btns.forEach(b => {
         if (b.classList.contains("active")) {
            b.classList.remove("active")
            
         }
      });
      section.innerHTML = "";
      if (btn.id == "simple") {
         btn.classList.add("active")
         simple_colors();
      }else if (btn.id == "linear") {
         btn.classList.add("active")
         linear_grediants();
      }else if (btn.id == "radial") {
         btn.classList.add("active")
         radial_grediants();
      }

      document.querySelectorAll("i").forEach(copy_icon => {
         copy_icon.onclick = () => {
            navigator.clipboard.writeText(copy_icon.querySelector(`input`).value)
         }
      });
   }
});
document.querySelectorAll("i").forEach(copy_icon => {
   copy_icon.onclick = () => {
      navigator.clipboard.writeText(copy_icon.querySelector(`input`).value)
   }
});




   


