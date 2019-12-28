$(document).ready(function(){

  $.ajax({
     type:'GET',
     url: './data/navi.json',
     dataType:"text",
     success: function(data){
       var json = eval("("+data+")"); // text 변수 타입을 array
       var naviTag = '';

       for(var i in json){
         naviTag += '<li class="naviList"><a class="d1" href="'+json[i]["cateLink"]+'">'+json[i]["cateName"]+'</a>';

         if(json[i]["cateParent"]){
           naviTag += '<div><ul class="subMenu">';
           for(var j in json[i]["subMenu"]){
             naviTag += '<li><a href="'+json[i]["subMenu"][j][1]+'">'+json[i]["subMenu"][j][0]+'</a></li>';
           }
           naviTag += '</ul></div>';
         }
         naviTag += '</li>';
       }

       $("#navi").html(naviTag);
     },
     error: function(data, status, error){
       alert("code:"+data.status+"\n"+"message:"+data.response);
     },
   }); //// ajax
});
