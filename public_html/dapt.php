<?php

session_start();
if(!isset($_SESSION['logged_in']) || empty($_SESSION['logged_in'])){
    header("location: login.php");
    exit();
}

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Appointments For Hannah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/dapt.css?version=51">
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">
        <link rel="shortcut icon" href="../favicon.ico" />
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127247753-1"></script>
        <!-- Calendar js -->
        <link href='../js/fullcalendar-3.9.0/fullcalendar.min.css' rel='stylesheet' />
        <link href='../js/fullcalendar-3.9.0/fullcalendar.print.min.css' rel='stylesheet' media='print' />
        <script src='../js/fullcalendar-3.9.0/lib/moment.min.js'></script>
        <script src='../js/fullcalendar-3.9.0/lib/jquery.min.js'></script>
        <script src='../js/fullcalendar-3.9.0/fullcalendar.min.js'></script>
        <script>

            $(document).ready(function() {

                $('#calendar').fullCalendar({

                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay,listWeek'
                    },
                    editable: true,
                    navLinks: true, // can click day/week names to navigate views
                    eventLimit: true, // allow "more" link when too many events
                    events: {
                        url: 'get-events.php',
                        error: function() {
                            $('#script-warning').show();
                        }
                    },
                    loading: function(bool) {
                        $('#loading').toggle(bool);
                    }

                });

            });
        </script>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Hannah's Appointments</h3>
                 </div>
                 <div class="col">
                    <div id="loading"><h5>Loading...</h5></div>
                    <div id='calendar'></div>
                    <div id='script-warning'><h5>Script Loading Failure...</h5></div>
                </div>
            </div>
        </div>
        <!--
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        -->
    </body>
</html>