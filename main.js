function openDiary(){
    window.location.href="diary.html";
}

// Floating stars on background
const bg = document.getElementById("background");
for(let i=0;i<50;i++){
    const p = document.createElement("div");
    p.style.position="absolute";
    p.style.width=Math.random()*3+1+"px";
    p.style.height=Math.random()*3+1+"px";
    p.style.background="rgba(255,255,255,0.8)";
    p.style.borderRadius="50%";
    p.style.left=Math.random()*100+"%";
    p.style.top=Math.random()*100+"%";
    p.style.animation=`floatStars ${Math.random()*10+10}s linear infinite`;
    bg.appendChild(p);
}
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`@keyframes floatStars {0%{transform:translateY(0);} 100%{transform:translateY(-120vh);}}`, styleSheet.cssRules.length);