			$(document).ready(function() {

				$.getJSON('http://test.qliqup.com/v1.2/qliqserver/public/deals/41/?callback=?', function(data) {
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

						$("#json_content").append("<div class=\"animated_widget_deal\"></div>").append("<table></table>").append("<tr><th colspan='3'> " + deal.text + " </th></tr><tr><td> Deals Left </td><td> Deals Redeemed </td><td> QP Cost </td></tr>").append("<tr></tr>").append("<td>" + dealsLeft + "</td>").append("<td>" + deal.redeemed + "</td>").append("<td>" + deal.qpoint_cost + "</td>");
					}
				});

				$("#animated_widget_open_trigger").click(function() {
					$(this).hide(100);
					$("#animated_widget_content").show(200);
				});

				$("#animated_widget_close_trigger").click(function() {
					$("#animated_widget_content").hide(200);
					$("#animated_widget_open_trigger").show(100);
				});
			});