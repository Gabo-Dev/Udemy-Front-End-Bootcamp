// objetive is hide p if we click it
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
/**
 * $(document).ready(): ensures that all documents contained within are 
 * executed once the document has fully loaded.
 * This avoids any script errors. 
 */