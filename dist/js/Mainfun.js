
$(document).on("click",".fa-lock", function(){
    $("#parntBord").removeAttr('style');
    $(".fa-lock").attr("class","fas fa-unlock");


});

$(document).on("click",".fa-unlock", function(){
    $("#parntBord").animate({height:'80%'},function(){
        $(".fa-unlock").attr("class","fas fa-lock");

    });

});


var allList=document.querySelectorAll(".experiences li");
var leftdiv=document.querySelector(".vidoPlay");
var removPage=document.querySelector(".showPage");
var removPage2=document.querySelector(".showPage2");
var i;




removPage2.style.display="none";




for(i=0;i<allList.length;i++){

    allList[i].addEventListener("click",showList);

}



function showList(){

    var res=this.lastElementChild.getAttribute("href");
    var res3=this.children[1].textContent;
    var res2=this.lastElementChild.getAttribute("value");
    var splitWord=res3.split(" ").join("");


    if(res3.trim() === "Quiz 1" || res3.trim()== "Quiz 2" || res3.trim()== "Quiz 3" || res3.trim()== "Quiz 4" || res3.trim()== "Quiz 5")
    {
        $('.vidoPlay').trigger('pause');
        removPage2.style.display="inline-block";
        removPage.style.display="none";
        $(".showPage2").load("html/"+splitWord+".html");
        
        var interval = setInterval(function() {
            if(document.readyState === 'complete') {
                clearInterval(interval);
                $('.selected').children("i").attr("class","far fa-question-circle");
            }    
        }, 1000);
    }else{

        removPage.style.display="inline-block";
        removPage2.style.display="none";
        leftdiv.setAttribute("src",res);
        leftdiv.setAttribute("poster",res2);
    }







    for(i=0; i<allList.length; i++)
    {
        allList[i].style.color= '#000';
        allList[i].firstElementChild.style.color="darkgray";
        allList[i].style.setProperty('--iconColor', "darkgray");
        allList[i].firstElementChild.setAttribute("class", "far fa-play-circle");
        allList[3].firstElementChild.setAttribute("class", "far fa-question-circle");
        allList[i].style.fontWeight="500";
        allList[i].classList.remove("selected");

    }
    allList.forEach(function(value,index){
        if(index==3 || index==5 || index==8 || index==11 || index==13 ){
            allList[index].firstElementChild.setAttribute("class", "far fa-question-circle");
        }
    });






    /* this.style.fontWeight="bold";*/
    this.style.setProperty('color', "#57B643");
    this.firstElementChild.style.color="#57B643";
    this.style.setProperty('--iconColor', "#57B643");
    this.classList.add("selected");


    $(document).on("click","ul.experiences li", function(){
        $(this).children("i").attr("class","fas fa-spinner fa-spin");
        console.log($(this).next().length);



    });

    leftdiv.oncanplaythrough= function() {
        $('ul.experiences li').children("i").attr("class","far fa-play-circle");
        $('ul.experiences li:nth-child(4)').children("i").attr("class","far fa-question-circle");
        $('ul.experiences li:nth-child(6)').children("i").attr("class","far fa-question-circle");
        $('ul.experiences li:nth-child(9)').children("i").attr("class","far fa-question-circle");
        $('ul.experiences li:nth-child(12)').children("i").attr("class","far fa-question-circle");
        $('ul.experiences li:nth-child(14)').children("i").attr("class","far fa-question-circle");
    };



}

$('.green').hover(function(){
    $(this).children().addClass("hoverElem");

}, function() {
    $(this).children().removeClass("hoverElem");
});




$(document).on("click",".btn-primary", function(){

    $(".green").first().removeAttr("style");
    $(".green").first().children("i").css("color", "darkgray");




    var currentSelect = $('.selected');
    var lastElem=$('ul.experiences').children("li").last();

    if (currentSelect.next().length == 0)
    {
        $(".green").next().first().addClass('selected');
    }
    else
    { 
        currentSelect.next().addClass('selected');
    }


    currentSelect.removeClass('selected');

    /*Here to jump from the ul to another one*/
    if($(".green").eq(13).is(currentSelect)){

        $(".green").next().first().removeClass('selected');
        $(".lasts1").css("color", "#000");
        $(".lasts1").children("i").css("color", "darkgray");

        currentSelect=$('ul.exp2').children("li").first().addClass('selected');
        console.log($(".green").next().first().removeClass('selected'));
    }

    /*Here to hide button when reach to end*/
    if($(".green").eq(15).is(currentSelect)){
        $(".btn-primary").css("visibility","hidden");
        $(".green").next().first().removeClass('selected');

    }

    /*Here to change the icon, color, play video*/
    $('.selected').children("i").attr("class","fas fa-spinner fa-spin");
    $('.selected').children("i").css("color", "#57B643");
    $('.selected').css("color", "#57B643");

    $('.selected').prev().css({"color": "#000",'font-weight': "500"});
    $('.selected').prev().children("i").css("color", "darkgray");



    var out=$('.selected').children("a").attr("href");
    var res5=$('.selected').children("div").text();
    var splitWord=res5.split(" ").join("");
    console.log(splitWord);


    if(res5.trim() === "Quiz 1" || res5.trim()== "Quiz 2" || res5.trim()== "Quiz 3" || res5.trim()== "Quiz 4" || res5.trim()== "Quiz 5")
    {

        console.log("q1");
        $('.vidoPlay').trigger('pause');
        removPage2.style.display="inline-block";
        removPage.style.display="none";
        $(".showPage2").load(splitWord+".html");

        var interval = setInterval(function() {
            if(document.readyState === 'complete') {
                clearInterval(interval);
                $('.selected').children("i").attr("class","far fa-question-circle");
            }    
        }, 1000);
    }else{
        console.log("q2");

        removPage.style.display="inline-block";
        removPage2.style.display="none";
        leftdiv.setAttribute("src",out);

    }





    leftdiv.oncanplaythrough= function() {
        $('.selected').children("i").attr("class","far fa-play-circle");
    };



});
