

$(document).ready(function() {
	$.getJSON('http://test.qliqup.com/v1.2/qliqserver/public/deals/' + QLIQ_ID + '/?callback=?', function(data) {
		var deals = data.data.deals;

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

			//console.log(deals[i].text + '  vs ' + deal.text)

			$("#qliq_json_content").append("<div class=\"qliq_animated_widget_deal\"></div>")
			//$('.qliq_animated_widget_deal').html("<table>"
			console.log(deal.text + ' ' + dealsLeft +' ' +  deal.redeemed + ' ' + deal.qpoint_cost)
			str = "<table>"
							+ "<tr><th colspan='3'> " + deal.text + " </th></tr><tr><td> Deals Left </td><td> Deals Redeemed </td><td> QP Cost </td></tr>"
							+ "<tr>"
							+ "<td>" + dealsLeft + "</td>"
							+ "<td>" + deal.redeemed + "</td>"
							+ "<td>" + deal.qpoint_cost + "</td>"
                            + "</tr></table>"
            

			console.log(deal.text + ' ' + dealsLeft +' ' +  deal.redeemed + ' ' + deal.qpoint_cost)
		}
	});

	$("#qliq_animated_widget_open_trigger").click(function() {
		$(this).hide(100);
		$("#qliq_animated_widget_content").show(200);
	});

	$("#qliq_animated_widget_close_trigger").click(function() {
		$("#qliq_animated_widget_content").hide(200);
		$("#qliq_animated_widget_open_trigger").show(100);
	});


})
