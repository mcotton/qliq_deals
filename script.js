(function($) {

var d = document
var s = d.createElement('script')
var b = d.getElementsByTagName('body')

var ss = document.createElement("link");
ss.type = "text/css";
ss.rel = "stylesheet";
ss.href = "http://static.qliqup.com/qliq_deals/style.css";
document.getElementsByTagName("head")[0].appendChild(ss);


$('body').append('<div class="qliq_animated_widget_holder"><div id="qliq_animated_widget_container"><div id="qliq_animated_widget_content"><div id="qliq_business_spacer"></div><div id="qliq_business_title_holder"></div><div id="qliq_json_content"></div><div class="qliq_animated_widget_download">Get these deals now! Download Qliq on <a href="http://tinyurl.com/Qliq-iPhone" target="_blank">iPhone</a> or <a href="https://play.google.com/store/apps/details?id=com.qliqup.android" target="_blank">Android</a><br/>Learn more at <a href="http://qliqup.com" target="_blank">www.QliqUp.com</a></div> </div><div id="qliq_animated_widget_open_trigger"><div id="qliq_trigger_left"><img src="http://qliqup.com/media/images/dealtag.png" alt=""/></div> <div id="qliq_trigger_center">Qliq Deals!</div><div id="qliq_trigger_right"><img style="display: none;" id="arrow_up" src="http://qliqup.com/media/images/circlearrow_up.png" alt=""/><img id="arrow_down" src="http://qliqup.com/media/images/circlearrow_down.png" alt=""/></div><div style="clear: both"></div> </div> </div>')

$(document).ready(function() {
	$.getJSON('http://api.qliqup.com/v1.2/qliqserver/public/deals/' + QLIQ_ID + '/?callback=?', function(data) {
		var deals = data.data.deals;
		var businessName = data.data.deals[0].name;
		
		$("#qliq_business_title_holder").html("<a href='http://qliqup.com' target='_blank'>" + businessName+ " has " + deals.length + " deals on Qliq</a>");
		for(var i = 0; i < deals.length; i++) {
			var deal = deals[i].data;
			var dealsLeft, dealsRedeemed, qpointCost;
			if(deal.unlimited == "true") {
				dealsLeft = "Unlimited";
			} else {
				if(deal.limit == null) {
					dealsLeft = "Unlimited";
				} else {
					dealsLeft = deal.limit - deal.redeemed;
				}
			}

			$("#qliq_json_content").html(
							$("#qliq_json_content").html()
							+"<table>"
							+ "<tr><td colspan='3' class='qliq_deal_title'><a href='http://qliqup.com' target='_blank'>" + deal.text + "</a></td></tr>"
							+ "<tr>"
							+ "<td>" + dealsLeft + " Deals Left | "
							+ deal.qpoint_cost + " QPoints</td>"
                            + "</tr></table>"
							);
		}
	});
	
	$("#qliq_animated_widget_open_trigger").click(function() {
		var qliq_widget_height = "0px";
		if($("#qliq_animated_widget_content").hasClass("qliq_visible")){
			$("#qliq_animated_widget_content").removeClass("qliq_visible");
			qliq_widget_height = "-265px";
		}
		else{
			$("#qliq_animated_widget_content").addClass("qliq_visible");
		}
		
		$("#qliq_animated_widget_content").animate({
			marginTop: qliq_widget_height
		});
		$("#arrow_down").toggle();
		$("#arrow_up").toggle();
	});
	
	$("#qliq_animated_widget_content").animate(
		{
			marginTop: "-265px"
		}, 
		1
	);
	

	for(var i=0; i<=3; i++){
		if(!$("#qliq_animated_widget_content").hasClass("qliq_visible")){
			var offset = parseInt($("#qliq_animated_widget_content").css("margin-top"),10);
			if(i%2 == 1){
				offset = -265;
			}
			else {
				offset = -269;
			}
			offset += "px";
			$("#qliq_animated_widget_content").animate(
				{
					marginTop: offset
				}, 
				600
			);
		}
	}
	
})

})(jQuery)
