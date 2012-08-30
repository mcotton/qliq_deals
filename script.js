(function($) {

d = document

//var ss = document.createElement("link");
//ss.type = "text/css";
//ss.rel = "stylesheet";
//ss.href = "http://test.qliqup.com/future/static/site/qliq_deals/style.css";
//document.getElementsByTagName("head")[0].appendChild(ss);


s = d.createElement('script')

b = d.getElementsByTagName('body')

$('body').append('<div class="qliq_animated_widget_holder"><div id="qliq_animated_widget_container"><div id="qliq_animated_widget_content"><div id="qliq_business_spacer"></div><div id="qliq_business_title_holder"></div><div id="qliq_json_content"></div><div class="qliq_animated_widget_download">Get these deals now! Download Qliq on <a href="">iPhone</a> or <a href="">Android</a><br/>Learn more at <a href="http://qliqup.com">www.QliqUp.com</a></div> </div><div id="qliq_animated_widget_open_trigger"><div id="qliq_trigger_left"><img src="http://qliqup.com/media/images/dealtag.png" alt=""/></div> <div id="qliq_trigger_center">Qliq Deals!</div><div id="qliq_trigger_right"><img style="display: none;" id="arrow_up" src="http://qliqup.com/media/images/circlearrow_up.png" alt=""/></div><div style="clear: both"></div> </div> </div>')

$(document).ready(function() {
	$.getJSON('http://test.qliqup.com/v1.2/qliqserver/public/deals/' + QLIQ_ID + '/?callback=?', function(data) {
		var deals = data.data.deals;
		
		$("#qliq_business_title_holder").html("<a href='http://qliqup.com'>LocName has " + deals.length + " deals on Qliq</a>");

		for(var i = 0; i < deals.length; i++) {
			var deal = deals[i];
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
							+ "<tr><td colspan='3' class='qliq_deal_title'><a href='http://qliqup.com'>" + deal.text + "</a></td></tr>"
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
		$("#arrow_up").toggle();
	});
})

})(jQuery)
