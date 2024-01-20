$('#icon').on('click',function(){
    
    $('#mahmoud').animate({width:'toggle' ,paddingInline:'toggle'}  ,  1000)
})


$('.toggle ').on('click',function(){
    
    $('.inner').animate({height:'toggle' ,paddingInline:'toggle' }  ,  1000)
    
});


let nums = 0;

let idInterval = setInterval(function(){
   

    document.getElementById('seconds').innerHTML=nums;

    if(nums == 100){
        clearInterval(idInterval)
    }
    nums++;
}, 1000);


let minute = 0;

let tim = setInterval(function(){
   

    document.getElementById('minutes').innerHTML=minute;

    if(minute == 200){
        clearInterval(idInterval)
    }
    minute++;
}, 60000);