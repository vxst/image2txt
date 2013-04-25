var img=new Image();
img.src='sample.jpg';
$(img).load(function(){
	$('body').append(img);
	var txt=imgtobase64(img);
	console.log(txt);
	var ig=base64toimg(txt);
	$('body').append(ig);
});
