###Qliq Deals Widget###
======
This is the repo for the embeddable qliq widget.  You can include a snippet of HTML and it will always show your latests deals.

####Instructions####
======
Step 1:
Inside the `<head>` tag of your HTML, paste this line.  This will include jQuery on your page.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
        
Step 2:
Paste this line in also.  This will include our stylesheet for the widget.

        <link type="text/css" rel="stylesheet" href="http://test.qliqup.com/future/static/site/qliq_deals/style.css"/>
        
 Step 3:
 You will need to replace the word `ID` with your business ID from Qliq.
 
        <script type="text/javascript">
            QLIQ_ID = ID;
        </script>
 
 Step 4:
 Paste this line is last and you are done.
        
        <script type="text/javascript" src="http://test.qliqup.com/future/static/site/qliq_deals/script.js"></script>
        
 Step 5:
 Inside the `<body>` tag include this html
 
     <div class="qliq_animated_widget_holder">
                        <div id="qliq_animated_widget_container">
                                <div id="qliq_animated_widget_content">
                                        <div id="qliq_animated_widget_header">
                                                <img src="http://qliqup.com/merchants/images/icons/small/Qliq_TRADITIONAL_small_option4.png" alt=""/>
                                        </div>
                                        <div id="qliq_json_content"></div>
                                        <div class="qliq_animated_widget_download">
                                                <a target="_blank" href="http://tinyurl.com/Qliq-iPhone"> <img src="http://qliqup.com/media/images/app_store_badge.png" alt="iPhone"> </a>
                                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.qliqup.android"> <img src="http://qliqup.com/media/images/google_play_badge.png" alt="iPhone"> </a>
                                        </div>
                                        <div id="qliq_animated_widget_close_trigger">
                                                <img src="http://qliqup.com/media/images/arrow_left.png" alt=""/>
                                        </div>
                                </div>

                                <div id="qliq_animated_widget_open_trigger">
                                        <table>
                                                <tr>
                                                        <td valign="center">Check out our Qliq Deals</td>
                                                        <td valign="center"><img src="http://qliqup.com/media/images/arrow_right.png" alt=""/></td>
                                                </tr>
                                        </table>

                                </div>
                                <div style="clear: both"></div>
                        </div>
                </div>
                
                