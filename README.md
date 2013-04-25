#<a href="http://vxst.github.io/image2txt/">image2txt:libi2t.js</a>

libi2t.js is all you need to transform an image to base64 text and vice versa!

A client side js script to transform an image to base64 text and back.

##function list

###function imgtobase64([HTML Image DOM Object])

return a base64 encoded txt which include the image data.

###function base64toimg([Base64 String])

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

Tested on Firefox 20.0 and Chrome 26.0.1410.63, please checkout this <a href="http://vxst.github.io/image2txt/sample/sample.html"><span>live sample</span></a> to make sure it will work on your browser.
