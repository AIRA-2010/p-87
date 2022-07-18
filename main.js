
// Create canvas variable
canvas = new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			left:block_x,
			top:block_y
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		
		new_image('rr1.png');
		console.log('r');
	}
	if(keyPressed == '71')
	{
		block_x = 250;
		new_image('gr.png');
		console.log('g');
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =400;
		new_image('yr.png');
		console.log('y');
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log('p');
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 600;
		new_image('br.png');
		console.log('b');
	// upload blue ranger
	}
	window.addEventListener("keydown",my_keydown);
}

