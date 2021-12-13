<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator App</title>

    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./add.css">
</head>
<body>
    <!-- Header -->
    <div id="header">
        <h2 class="gameTitle">Calculator App</h2>
    </div>

    <div class="gameOutput">
        <div class="gameDetails">
            <h2>The answer is:</h2>
            <div class="cOutput">
                <?php

                $fnum = $_POST['fnum'];
                $snum = $_POST['snum'];
                $operator = $_POST['operators'];

                if (!is_numeric($fnum) or !is_numeric($snum)){
                    print("<p>$fnum $operator $snum = isNaN");
                }

                else{
                    $fnum1 = floatval($fnum);
                    $snum1 = floatval($snum);
                   
                    if ($operator=="+"){
                        $ans = $fnum1 + $snum1;
                        print("<p>$fnum1 $operator $snum1 = $ans");
                    }

                    elseif($operator=="-"){
                        $ans = $fnum1 - $snum1;
                        print("<p>$fnum1 $operator $snum1 = $ans");
                    }

                    elseif($operator=="*"){
                        $ans = $fnum * $snum;
                        print("<p>$fnum1 $operator $snum1 = $ans");
                    }

                    else{
                        $ans = $fnum / $snum;
                        print("<p>$fnum1 $operator $snum1 = $ans");
                    }
                }


                ?>
            </div>

        </div>

    </div>
    
</body>
</html>