// Creates and returns a new dancer object that can step
var makeDancer = function(top, left , timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<img class="dancer" src="https://vignette.wikia.nocookie.net/mario/images/5/5c/Jumping_Mario_Artwork_-_New_Super_Mario_Bros._Wii.png/revision/latest?cb=20120317184553 >');
  this.timeBetweenSteps = timeBetweenSteps;
  
  //console.log(this.step)
  this.step()
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  
  
  
};
 

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  
};



makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};















