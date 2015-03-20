/*!
 * winLightBox - jQuery Plugin
 * version: 1.0.0 (Wed, 12 Nov 2014)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://winlightbox.com
 * Github at https://github.com/bantilan/WinLightBox
 *
 * Copyright 2014 Erwin Bantilan - erwin@winlightbox.com
 *
 */

(function() {
	
	$.winLightBox = function(options) {
		var skip = false;
		
		if(options==null) skip = true;
		
		var settings = $.extend({
			href : "",
			width : 400,
			height : 350,
			backgroundColor : "#ffffff",
			positionHorizontal : "center",
			positionVertical : "center",
			responsive : false
		},options);
		
		
		this.close = function(){
			
		}
		$('#winlightbox-container').remove();
		
		if(!skip) $().winLightBox(settings);
	};
	
	$.fn.winLightBox = function(settings) {
		$('#winlightbox-container').remove();
		
		this.data("href",this.prop("href"));
		this.prop("href","javascript:void(0);");
		
		var win = this;

		win.click(function(){
			win.create();
			win.style();

		});
		

		
		win.close = function(obj){
			obj.reset();
			$('#winlightbox-container').remove();
		}
		
		win.create = function(){
			$("body").prepend("<div id=\"winlightbox-container\" data-responsive=\""+win.responsive+"\"></div>");
			$("#winlightbox-container").prepend("<div id=\"winlightbox-box\"></div>");
			$("#winlightbox-box").append("<div id=\"winlightbox-close\"></div>");
			$("#winlightbox-box").append("<iframe id=\"winlightbox-src\" src=\""+win.href+"\" frameborder=\"0\" scrolling=\"no\"></iframe>");
			$("#winlightbox-close").append("<a id=\"winlightbox-close-btn\" href=\"javascript:void(0);\" ><img src=\"data:image/png;base64,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\"/></a>");
			$("#winlightbox-close-btn").click(function(){
				win.close(win);
			});
			
		}
		win.style = function(){
			$("#winlightbox-container").css({
				"position":"absolute",
				"width":"100%",
				"height":"100%",
				"background":"rgba(0,0,0,0.5)",
				"z-index":99999
			});
			$("#winlightbox-box").css({
				"background":"#FFF",
				"width":win.width,
				"height":win.height,
				"margin":(win.positionHorizontal == "center") ? "0 auto" : ((win.positionHorizontal == "right") ? $(window).width()-win.width-17 : 0),
				"margin-top":(win.positionVertical == "center") ? ($(window).height()/2)-(win.height/2) : ((win.positionVertical == "bottom") ? $(window).height()-win.height:0),
				"position":"relative"
			});
			$("#winlightbox-close").css({
				"position":"absolute",
				"right":8,
				"top":8
			});
			$("#winlightbox-src").css({
				"width":win.width,
				"height":win.height
			});
			
			if($("body")[0].scrollHeight > $(window).height()){
				$("#winlightbox-container").height($(document).height());
			}
			
		}

		if(settings!=null){
			win.href = settings.href;
			win.width = settings.width;
			win.height = settings.height;
			win.backgroundColor = settings.backgroundColor;
			win.positionHorizontal = settings.positionHorizontal;
			win.positionVertical = settings.positionVertical;
			win.responsive = settings.responsive;
			win.tmpWidth = settings.width;
			win.tmpHeight = settings.height;
			win.tmpPositionVertical = settings.positionVertical
			alert(1);
			win.create();
		}else{
			win.init = function(){
				this.href = this.data("href");
				this.width = (this.data("width")==null) ? 400 : this.data("width");
				this.height = (this.data("height")==null) ? 350 : this.data("height");
				this.backgroundColor = (this.data("height")==null) ? "#ffffff" : this.data("backgroundColor");
				this.positionHorizontal = (this.data("positionHorizontal")==null) ? "center" : this.data("positionHorizontal"); //left, center, right
				this.positionVertical = (this.data("positionVertical")==null) ? "center" : this.data("positionVertical"); //top, center, bottom
				this.responsive = (this.data("responsive")==null) ? false : this.data("responsive");
				
				this.tmpWidth = this.width;
				this.tmpHeight = this.height;
				this.tmpPositionVertical = this.positionVertical;
				
			}
			alert(1);
			win.init();
		}
		
		win.update = function(obj){
		
			
			
			if($("#winlightbox-container").data("responsive")){
				
				if(obj.tmpWidth > $(window).width()){
					obj.width = $(window).width();
					obj.positionVertical = "top";
					if($(window).height()<$(document).height()){
						obj.height = $(document).height();
					}else{
						obj.height = $(window).height();
					}
				}else{
					obj.reset();
				}
				
				obj.style();
			}
			
		}
		win.reset = function(){
			win.width = win.tmpWidth;	
			win.height = win.tmpHeight;		
			win.positionVertical = win.tmpPositionVertical;
		}
		if(this.responsive){
			
			$(window).on("resize",function(){
				win.update(win)
			});	
		}


    };
})();