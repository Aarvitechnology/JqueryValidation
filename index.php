<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Required Fremwork -->
    <link rel="stylesheet" type="text/css" href="plugin/bootstrap/css/bootstrap.min.css">
    <!-- sweet alert framework -->
    <link rel="stylesheet" type="text/css" href="plugin/sweetalert/css/sweetalert.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <!-- <script type="text/javascript" src="plugin/bootstrap/js/bootstrap.min.js"></script> -->
    <script src="plugin/jquery-validate/jquery.validate.min.js" type="text/javascript"></script>
    <script src="plugin/jquery-validate/additional-methods.min.js" type="text/javascript"></script>
</head>

<body>

    <div class="container">
        <h2>Horizontal form</h2>
        <form class="form-horizontal" method="post" action="redirect.php" onsubmit="return false;">
            <!-- <form name='registration' onSubmit="return formValidation();"> -->
            <div class="form-group">
                <label class="control-label col-sm-2" for="email">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control required_all" id="email" placeholder="Enter email" name="email">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtemail">Text Email</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control email_rule" id="txtemail" placeholder="Enter email" name="txtemail">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="number">Phone Number</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control phone_number" id="number" placeholder="Enter Phone Number" name="number">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="age">Age</label>
                <div class="col-sm-10">
                    <input type="date" class="form-control date_format" id="age" placeholder="Enter Age" name="age">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control pswd_format" id="pwd" placeholder="Enter password" name="pwd">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="file">File</label>
                <div class="col-sm-10">
                    <input type="file" class="form-control custom_image" id="file" placeholder="Select File" name="file">
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label><input type="checkbox" name="remember"> Remember me</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-danger">Submit</button>
                </div>
            </div>
        </form>
    </div>

    <script type="text/javascript" src="js/moment.min.js"></script>
    <script type="text/javascript" src="js/jquery.form.js"></script>

    <!-- sweet alert js -->
    <script type="text/javascript" src="plugin/sweetalert/js/sweetalert.min.js"></script>
    <!-- sweet alert modal.js intialize js -->

    <script src="js/AarviJqueryValidation.js"></script>
    <script src="js/sweet-alert.js"></script>
</body>

</html>