include('request_url.js');
//----jquery-plagins----
include('jquery-1.8.3.min.js');
include('jquery.ba-resize.min.js');
include('jquery.easing.1.3.js');
include('jquery.animate-colors-min.js');
include('jquery.backgroundpos.min.js');
include('jquery.fancybox.pack.js');
include('jquery.cycle.all.min.js');
//----bootstrap----
//----All-Scripts----
include('bgStretch.js');
include('forms.js');
include('sImg.js');
include('hoverSprite.js');
include('sprites.js');
include('scroll_to_top.js');
include('ajax.js.switch.js');
include('script.js');
//----Include-Function----
function include(url){ 
  document.write('<script type="text/javascript" src="js/'+ url + '"></script>'); 
  return false ;
}