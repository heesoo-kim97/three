
/*
 HTML

 <div id="home0" class="sideSvg">
<svg version="1.1" id="1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 330.242 330.242" style="enable-background:new 0 0 330.242 330.242;" xml:space="preserve" class="svg iconActive" onClick="@widget.moveSlideAt(this)">
<path d="M324.442,129.811l-41.321-33.677V42.275c0-6.065-4.935-11-11-11h-26c-6.065,0-11,4.935-11,11v14.737l-55.213-44.999
	c-3.994-3.254-9.258-5.047-14.822-5.047c-5.542,0-10.781,1.782-14.753,5.019L5.8,129.81c-6.567,5.351-6.173,10.012-5.354,12.314
	c0.817,2.297,3.448,6.151,11.884,6.151h19.791v154.947c0,11.058,8.972,20.053,20,20.053h62.5c10.935,0,19.5-8.809,19.5-20.053
	v-63.541c0-5.446,5.005-10.405,10.5-10.405h42c5.238,0,9.5,4.668,9.5,10.405v63.541c0,10.87,9.388,20.053,20.5,20.053h61.5
	c11.028,0,20-8.996,20-20.053V148.275h19.791c8.436,0,11.066-3.854,11.884-6.151C330.615,139.822,331.009,135.161,324.442,129.811z"
	/>
</svg>
</div>
*/


/*
 CSS

   .svg {
  	fill:#c1b9ff;
    width:100%;
    opacity:0.4;
  }
  
    .svg:hover{
	cursor:pointer;
      transition:all 0.2s ease-in-out;
      opacity:0.8;
  }
  
    .svg.iconActive {
      opacity:0.8;
  }
  
      .svg.iconActive:hover{
      opacity:1;
        transition:all 0.2s ease-in-out;
  }
  
  .sideSvg:not(:last-child) {
  	padding-bottom: 40px; 
  }
  
*/

/* 
 JS
widget.componentReadyHandler = function(componentId){
    widget.componentId = componentId;
    var elementArr = document.querySelectorAll(".sideSvg");
    
    for(var i = 0; i < elementArr.length; i++){
      var element = elementArr[i];
      element.onclick = widget.iconClick;
    }
    
  }
  
  widget.moveSlideAt = function(e){
     var idx = e.id;
}
  
  widget.iconClick = function() {
    
    
    
    
    
    
    var iconId = this.id;
    //console.log(iconId.charAt(iconId.length-1));
    var idNumber= iconId.charAt(iconId.length-1) 
    //console.log(typeof Number(idNumber));
    
    
  	widget.getDashboard().setSelectedIndex(Number(idNumber));
    
    
    var activeIcon = $(".iconActive"); //지우기
    $(activeIcon).removeClass('iconActive');
    
    
    var clickIcon = $(this).children('.svg');//추가
    $(clickIcon).addClass('iconActive');
    
    //$(this).children('.svg').classList.add("active");
    //console.log($(this).children('.svg'));
    
  } */