###Qliq Deals Widget###
======
This is the repo for the embeddable qliq widget.  You can include a snippet of HTML and it will always show your latests deals.

####Instructions####
======
Step 1:
If you don't already have jQuery, paste this inside the `<head>` tag of your HTML.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
        
Step 2:
You will need to replace the word `ID` with your business ID from Qliq.
 
        <script type="text/javascript">
            QLIQ_ID = ID;
        </script>
 
 Step 3:
 At the end of your `<body>` tag, paste these lines and you are done.
        
        <script type="text/javascript" src="http://test.qliqup.com/future/static/site/qliq_deals/script.js"></script>
        <script type="text/javascript" src="http://test.qliqup.com/future/static/site/qliq_deals/script2.js"></script>
        
 