$(function(){
    $('aside a').click(function(event){
        //alert('clic');
        //J'annule le clic sur le lien avec event.preventDefault
        event.preventDefault();
        //console.log($(this).attr('href'));
        
        var monHref = $(this).attr('href');// je crée une variable pour éviter de manipuler plusieurs fois 

        $('figure img').attr("src", monHref);

        //Récupérer dans une variable le alt des images vignettes, puis dchanger le contenu de figcaption avec cette variable
        var monAlt = $(this).attr('title');
        //console.log(monAlt);

        $("figcaption h3").html(monAlt);
    });
});