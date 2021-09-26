function myFunction(imgs) {
	var expandImg = document.getElementById("expandedImg"); 
	var img1 = document.querySelector(".img");
	expandImg.src = imgs.src;
	  img1.src = imgs.src;
   
	expandImg.parentElement.style.display = "block";
   
   
  }

// encaderer image 
$(document).ready(function(){$('#select-form #img1').addClass('highlighted')
$('#select-form img').click(function() {
  
  // Set the form value
  $('#image-value').val($(this).attr('data-value'));

  // Unhighlight all the images
  $('#select-form img').removeClass('highlighted');

  // Highlight the newly selected image
  $(this).addClass('highlighted');
});
})