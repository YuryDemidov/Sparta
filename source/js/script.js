var video = document.querySelector("video");

video.addEventListener("mouseover", function(event){
  event.preventDefault();
  this.controls = true;
});

video.addEventListener("mouseout", function(event){
  event.preventDefault();
  this.controls = false;
});
