function imgtobase64(img){
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;

	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	ctx.fillRect(0,0,0,0);

	return canvas.toDataURL();
}
function base64toimg(txt){
	var img=new Image();
	img.src=txt;
	return(img);
}
