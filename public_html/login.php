<?php 
     
session_start();
$password_error = '';
    
if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SESSION['token']) && $_SESSION['token'] === $_POST['token']){

    if(isset($_POST['password']) && !empty($_POST['password'])){

        $pwdFile = fopen("password.txt", "r") or die("Unable to open file!");
        $password = fread($pwdFile,filesize("password.txt"));
        fclose($pwdFile);

        $hashedpwd = hash('sha256', $_POST['password']);

        if($password == $hashedpwd){
            $_SESSION['logged_in'] = true;
            header("location: dapt.php");
            exit();
        }else{
            $password_error = 'Incorrect Password';
        }

    }else{
        $password_error = 'No password entered';
    }

}

$_SESSION['token'] = bin2hex(random_bytes(64));

?>

<html>
    <head>
        <title>Sam Bunger</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/dapt.css?version=51">
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
        <link rel="shortcut icon" href="favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127247753-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-127247753-1');
        </script>
        <style>
        body, html, h1, h2, h3, h4, h5{
            font-family: 'Merriweather', serif;
            color: #8c8c8c;
        }
        body{
            background-color: #ffe6ff;
        }
        </style>
    </head>
    <body>
        <form action="login.php" method="post" id="entry-form" class="entry-form">
            <h4>Password</h4>

            <div>
                <input type="password" name="password" class="input" value="">
            </div>

            <input type="hidden" name="token" value="<?= $_SESSION['token'] ?>"/>
            <input type="submit" class="submit-button" value="Submit">
            <span class="help-block"><?= $password_error ?></span>
        </form>
    </body>
</html>
