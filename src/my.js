　　　　//自动滚动
        export function startmarquee(lh,speed,delay,marqueeObj) {  
           var p=false;
           var t;
             var o=document.getElementById(marqueeObj);  
             o.innerHTML+=o.innerHTML;
             o.style.marginTop=0;
             o.οnmοuseοver=function(){p=true;} //鼠标移入，停止滚动
             o.οnmοuseοut=function(){p=false;}//鼠标移出，继续滚动
             
             function start(){
                 t=setInterval(scrolling,speed); 
                 if(!p) o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
             }    
             
             function scrolling(){
                if(parseInt(o.style.marginTop)%lh!=0){
                     o.style.marginTop=parseInt(o.style.marginTop)-1+"px";
                    if(Math.abs(parseInt(o.style.marginTop))>=o.scrollHeight/2) o.style.marginTop=0;
              }else{
                     clearInterval(t);
                     setTimeout(start,delay);
                 }
             }
             setTimeout(start,delay)
    }