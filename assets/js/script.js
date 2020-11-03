$(function(){
    $('#l1').click(function(){ //funcao ao clicar no link 1
        $('#img1').show(); //mostra a img 1
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide(); // esconde a img 4
    });

    $('#l2').click(function(){  // funcao ao clica no link 2
        $('#img1').hide(); 
        $('#img2').show();
        $('#img3').hide();
        $('#img4').hide(); 
    });

    $('#l3').click(function(){  // funcao ao clica no link 3
        $('#img1').hide(); 
        $('#img2').hide();
        $('#img3').show();
        $('#img4').hide(); 
    });

    $('#l4').click(function(){ // funcao ao clica no link 3
        $('#img1').hide(); 
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').show(); 
    });

    

});