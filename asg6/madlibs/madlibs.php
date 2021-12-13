<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Madlib </title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="madlibs.css">
</head>
<body>
    <!-- Header -->
    <div id="header">
        <h2 class="gameTitle">Madlibs</h2>
    </div>

    <div class="gameOutput">
        <div class="gameDetails">
            <h2>Your Madlibs Output is:</h2>
            <div class="aOutput">
                <?php

                $adj1 = strtolower($_POST['adj1']);
                $adj2 = strtolower($_POST['adj2']);
                $noun1 = strtolower($_POST['noun1']);
                $verb1 = strtolower($_POST['verb1']);
                $noun2 = strtolower($_POST['noun2']);
                $num1 = strtolower($_POST['num1']);
                $verb2 = strtolower($_POST['verb2']);
                $noun3 = strtolower($_POST['noun3']);
                
                print("<p> The $adj1 $noun1 $verb1 the $adj2 room.</p>");
                print("<p> But, before that, the $num1 $noun3 $verb2 the $noun2. ");
                print("<p> In the end, it was a $adj1 $adj2 story. ")


                ?>
            </div>
           
        </div>
    </div>

    
</body>
</html>