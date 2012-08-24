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