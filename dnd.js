
        window.onload = function(){
          
          var mydata = JSON.parse(data);
          console.log("mydata===============::"+mydata.JSON);
          for (x in mydata) {
         // var item=  document.getElementById("b").innerHTML += mydata[x].draggable+ "<br>";
         // console.log("item:"+item);
      
           // document.getElementById("d").innerHTML+=mydata[x].draggable+ "<br>";
        }
          document.getElementById("b").innerHTML=mydata[0].draggable;
          //document.getElementById("d").innerHTML=mydata[1].draggable;
           
          document.getElementById("a").innerHTML=mydata[0].dropzone;
          document.getElementById("c").innerHTML=mydata[1].dropzone;
        } 
        
        function allowDrop(evt) {
         evt.preventDefault();
        }
         function dragObj(evt){
             
               evt.dataTransfer.setData("text", evt.target.id);
             
         }
        
        function drop(evt) {
            evt.preventDefault();
            var data = evt.dataTransfer.getData("text");
            console.log("data::"+data);
            var targetObj =evt.target.getAttribute("id");
            console.log("targetObj::"+targetObj);
            if((data=="b" && targetObj=="a") || (data=="d" && targetObj=="c")){
                
                 evt.target.appendChild(document.getElementById(data));
               }else{
                   
                 console.log("not rightway!!")
               }
            
        }
        
        
        
