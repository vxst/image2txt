#image2txt:libi2t.js

libi2t.js is all you need to transform an image to base64 text and vice versa!

A client side js script to transform an image to base64 text and back.

##function list

###function imgtobase64

return a base64 encoded txt which include the image data.

###function base64toimg(txt)

return the DOM image object of the input txt

##Sample code

    var img=new Image();
    img.src='sample.jpg';
    
    $(img).load(function(){
        $('body').append(img);
    	var txt=imgtobase64(img);
        
    	console.log(txt);
        
    	var ig=base64toimg(txt);
    	$('body').append(ig);
    });

##Test environment

Tested on Firefox 20.0
