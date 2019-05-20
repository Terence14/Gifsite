$(document).ready(function(){

// GLOBAL VARIABLES
//========================================
var $input= $('#input');
var $submit= $('#submit');
var apiKey='6Hrx0SviXOh6MitZFE4yhrGzKIrEQwJj';
var imgBody=$('.img-body');




// get input vaule when the user pressed submit

$submit.on('click', function(event){
    event.preventDefault();
    var inputVal = $input.val();
    getGiphys(inputVal);

});


//Make a get request to the giphy api with the input vaule

function getGiphys(){
    $.get('http://api.giphy.com/v1/gifs/search?q='+ inputVal+ '&api_key='+ apiKey + '&limit=5')
    .done(function(data){
        
        for(var i= 0; i <=10; i++){
            var gifImg= data.data[i].images.downsized.url;
            creatBox(gifImg)
        }
    });
};


 function creatBox(gifImg){
     
    var $newImg =$('img');
    $newImg.attr('src',gifImg);
    $newImg.addClass('img-box')
    // var $newDiv =$('div');
    
    $imgBody.append($newImg);



}

}); //End of Code