<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>


    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./quiz.css">
</head>
<body>
    <!-- Header -->
    <div id="header">
        <h2 class="gameTitle">Quiz App</h2>
    </div>

    <!-- Main app -->
    <div class="quizOutput">
        <div class="quizDetails">
            <h2 class="qHeader">Here are your answers:</h2>

            <div class="ansOutput">

                <?php

                $num = 1;
                $num1 = 1;
                $answers = array ('planet' => 'Jupiter',
                                    'process' => 'Photosynthesis',
                                    'device' => 'Barometer',
                                    'gas' => 'Oxygen',
                                    'closest' => 'Mercury'
                            );

                $score = 0;

                foreach($_POST as $name => $value){
                    print("<p class='aSpace'> $num. $value");
                    if ($answers[$name]==$value){
                        $score = $score + 20;
                    }
                    $num = $num + 1;
                }

                print("<p class='aSpace1'> You total score : $score%");

                print("<p class='qHeader1'>Here are the right answers:</p>");

                foreach($answers as $key => $value){
                    print("<p class='aSpace'> $num1. $value");
                    $num1 = $num1 + 1;
                }

                ?>
            </div>

            
        </div>

    </div>
    
</body>
</html>