$(function(){
   $("#addBtl").submit(function(ev){
       //ev.preventDefault();
       var values = $(this).serialize();
       $.ajax({
            //url:"./hi",
           url:"/bottle/addBtl",
           type:"POST",
           data:values
       }).success(function(res){
           console.log("JSON FROM NODE!!",res);
       });
   });
});