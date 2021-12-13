<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Store</title>
    
    <link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./onlinestore.css">

</head>
<body>

    <!-- Header -->
    <div id="header">
        <h2 class="gameTitle">Black Market</h2>
    </div>

    <div class="onOutput">
        <div class="onDetails" >
            <h2>Here is your receipt:</h2>
            <div class="formOutput">
                <?php

                $uname = $_POST['uname'];
                $email = $_POST['email'];
                $product = $_POST['products'];
                $quantity = $_POST['quantity'];
                $shirtCost = 100;
                $shoeCost = 90;
                $trouserCost = 80;
                

                print("<p class='rSpace'>Name : $uname");
                print("<p class='rSpace'>Email : $email");
                print("<p class='rSpace'>Product : $product");
                print("<p class='rSpace'>Quantity : $quantity");

                if ($product=="Shirt"){
                    $total = $shirtCost * floatval($quantity);
                    print("<p class='rSpace'> Unit Cost : $ $shirtCost");
                    print("<p class='rSpace'>Total Cost : $ $total");

                }

                elseif ($product=="Shoe"){
                    $total = $shoeCost * floatval($quantity);
                    print("<p class='rSpace'> Unit Cost : $ $shoeCost");
                    print("<p class='rSpace'>Total Cost : $ $total");

                }

                else{
                    $total = $trouserCost * floatval($quantity);
                    print("<p class='rSpace'> Unit Cost : $ $trouserCost");
                    print("<p class='rSpace'>Total Cost : $ $total");

                } 

                ?>

            </div>

        </div>
    </div>
    
</body>
</html>