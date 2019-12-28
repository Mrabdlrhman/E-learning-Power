var radValue=0;
var ans=3;
var outString;

$("#SubBtn").addClass("btnDisable");

$("#SubBtn").on('click',checkAns);

outString=$("title").text();
console.log(outString.substring(10, 16));



$('input[name="radio"]').change(function(){
    if ($(this).is(":checked")){
        checkRadio(true);
        radValue=$(this).attr("value");

    }
});


function checkRadio(reslt){
    if(reslt==true){
        $("#SubBtn").removeClass("btnDisable");
    }else{
        $("#SubBtn").addClass("btnDisable");
    }

}


function checkAns(){
    console.log(radValue);
    if(Number(radValue)==ans){
        corAns();
        disableAll();
    }else{
       notcorrAns();
        disableAll();
    }

}
function disableAll(){
    $(".cont").children("label").children("input").each(function(i)
                                                        {
        $(this).attr('disabled',true);
    }
                                                       )

    $(".cont").children("label").each(function(i)
                                      {

        $(this).off("click");
        $(this).css("cursor","default");
    }
                                     )

    checkRadio(false);
}


function corAns()
{
    $(".modal-content .modal-header .modal-title").html("<span style='color:#9BCE3B;'>Correct</span>");
    $(".modal-content .modal-body").html("That’s correct! A three-phase machine does not require a starter.");
}

function notcorrAns()
{
    $(".modal-content .modal-header .modal-title").html("<span style='color:#E56262;'>Incorrect</span>");

    if(radValue=="1"){
        $(".modal-content .modal-body").html("That’s not quite right. The pulsating components of each phase cancel each other because of 1200 phase shifts. Thus, the power delivered to a three-phase load is <b>constant</b> in nature and not pulsating.");

    }else if(radValue=="2"){
        $(".modal-content .modal-body").html("That’s not quite right. Power per kilogram of metal from a Three-phase machine is <b>more</b> as compared to single phase machine.");

    }else if(radValue=="4"){
        $(".modal-content .modal-body").html("That’s not quite right. Mechanical vibrations in three-phase motors are <b>less</b> as compared to single-phase motors.");

    }

}


