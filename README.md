###Qliq Deals Widget###
======
This is the repo for the embeddable qliq widget.  You can include a snippet of HTML and it will always show your latests deals.

####Instructions####
======
Step 1:

 At the end of your `<body>` tag, paste these lines and you are done.
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>

Step 2:

 Change the ID variable with your Qliq business id.  You can get this info from your qliq sales rep or support@qliqup.com        
        
        <script type="text/javascript">QLIQ_ID = ID;</script>
        
Step 3:

 Add this final line.
 
        <script type="text/javascript" src="http://static.qliqup.com/qliq_deals/script.js"></script>
        
 
 You completed code should look like this (using Sam's burger joint's ID)
 
    <html>
        <head>
        </head>
        <body>
            <!--  Your html goes here -->
            
            
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
            <script type="text/javascript">QLIQ_ID = ID;</script>
            <script type="text/javascript" src="http://static.qliqup.com/qliq_deals/script.js"></script>
        </body>
    </html>