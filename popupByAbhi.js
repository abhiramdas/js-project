


function textboxInlineHelper(_object, _popupDiv)
{
	//var _Id=document.getElemenentById(id);
	
	if(_object.type=="text"){textboxWork(_object,_popupDiv)}
}

/* secion start:  work with textbox  */
function  textboxWork(_object,_popupDiv)
{
	var _id=_object.id;
	
	if($('#div_popup').length>0) {
		$('#div_popup').css({"display":"block"}); //IF  pop division is create first remove
	//$('#div_popup').remove();
	}
	else
	{

		 var _style_show="style='";		
			 _style_show +=" position: absolute;";
			 _style_show +=" width:10px;";
			 _style_show +=" height:10px;";		
			 _style_show +=" background-color: white;";
			 _style_show +=" z-index:9002;'>";
			
		 var _popupdiv="<div id='div_popup' "+_style_show;
		 _popupdiv +="</div>";
		$('#'+_id).after(_popupdiv);
		var parent_id=$( '#'+_popupDiv.id ).parent().attr('id');
		$('#'+_popupDiv.id).css({"display":"block"});
		$('#div_popup').append( $('#'+parent_id+'>#'+_popupDiv.id) );//move the dome object from user defined location to my location
    }
     
     
    $('#'+_id).focusout(function(){
    		
    		$("#div_popup").mouseout(function(){flg="hide";$('#div_popup').css({"display":"none"});});
			$("#div_popup").mouseout(function(){flg="hide";$('#div_popup').css({"display":"block"});});
			


				$('#div_popup').css({"display":"none"});
    		

    		
    	
    });


}
/* secion end:  work with textbox  */