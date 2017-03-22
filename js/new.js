

$(".cont-two div").click(function(){
    $(this).addClass("f1").siblings().removeClass("f1");
    var _index = $(this).index();
    if(_index == 0){
         $(".fa").show();
         $(".fb").hide();
    }
    else{
        $(".fa").hide();
        $(".fb").show();   
    }
    
})



/*function getByClass(sClass){
    var aResult=[];
    var aEle=document.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++){
       当className相等时添加到数组中
       if(aEle[i].className==sClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
};


window.onload=function (){
    var aBox=getByClass("f7");
    //var bBox = getByClass("cont-total-ul");
          //console.log(bBox);
    for(var i=0;i<aBox.length;i++){  
             kkkw.style.display = "none";
         aBox[i].onclick = function func (){
            alert(aBox[i]);
            for(var j=0;j<bBox.length;j++){
               if(aBox[i]==bBox[j]){ 
                if(bBox[j].style.display == "none"){
                    bBox[j].style.display = "block";
                   }
                 else{
                        bBox[j].style.display = "none";
                    }
                }
         }
          }
    }
};
*/