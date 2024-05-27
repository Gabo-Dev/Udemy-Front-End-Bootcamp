// objetive is hide p if we click it
$(document).ready(function(){
    $("p").click(function(){
        // hide or show actions also have par to set time to display 
        //this).hide();
        $(this).css("background-color","cyan");
    });
    $("#topbar").click(function(){
        //$("#panel").slideDown(1000);
        $("#panel").slideToggle(1000);
    });
});
/**
 * $(document).ready(): ensures that all documents contained within are 
 * executed once the document has fully loaded.
 * This avoids any script errors. 
 */

// note: check fadeout action, fade also look like css element we cud change opacity too and some other actions.
