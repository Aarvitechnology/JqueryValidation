function showalert(title, message, type, element = '') {

    /*Disable Tab and other events Solution of Sweet Alert*/
    var _swalclose = window.swal.close;
    var _swal = window.swal;
    window.swal = function() {
        var previousWindowKeyDown = window.onkeydown;
        _swal.apply(this, Array.prototype.slice.call(arguments, 0));
        window.onkeydown = previousWindowKeyDown;
    };
    window.swal.close = function() {
        _swalclose.apply(this);
    };
    /*Disable Tab and other events Solution of Sweet Alert*/
    swal({
            title: title,
            text: message,
            type: type,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "OK",
        },
        function() {

            $(document).on("click", ".confirm", function(event) {
                if (element != '')
                    $(element).focus();
            });

        });
}

function show_delete_alert(title, message, type, action_url) {

    /*Disable Tab and other events Solution of Sweet Alert*/
    var _swalclose = window.swal.close;
    var _swal = window.swal;
    window.swal = function() {
        var previousWindowKeyDown = window.onkeydown;
        _swal.apply(this, Array.prototype.slice.call(arguments, 0));
        window.onkeydown = previousWindowKeyDown;
    };
    window.swal.close = function() {
        _swalclose.apply(this);
    };
    /*Disable Tab and other events Solution of Sweet Alert*/

    swal({
            title: title,
            text: message,
            type: type,
            confirmButtonClass: "btn-success",
            confirmButtonText: "OK",
            showCancelButton: true,
        },
        function() {

            $(document).on("click", ".confirm", function(event) {
                if (action != '')
                    document.location = action_url;
            });

        });
}

function show_info_alert(title, message, type) {
    swal({
        title: title,
        text: message,
        type: type,
        confirmButtonClass: "btn-info",
        confirmButtonText: "OK",
    });
}