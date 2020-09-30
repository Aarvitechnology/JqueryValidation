function showalert(title, message, type) {

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
    });
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

$("body").on("keydown", ".number_only", function(e) {

    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode === 86 || (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true))) ||
        (e.keyCode >= 35 && e.keyCode <= 40)) {
        return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {

        return false;
    }

    return true;

});

$(document).ready(function() {

    /* Disable Form / Readable Form*/
    function disableForm(form_id) {
        $("#" + form_id + " :input").prop("disabled", true);
    }

    // mouseenter mouseleave keyup keypress keydown change focus blur click 
    jQuery.validator.addMethod("alphanumeric", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9 _]+$/.test(value);
    });

    // Validation method for US currency
    $.validator.addMethod("currency_format", function(value, element) {
        // return this.optional(element) || /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/.test(value);
        return this.optional(element) || /^(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/.test(value);
    }, "Please specify a valid amount");

    var valueNotEquals_message = word_replce = "";
    jQuery.validator.addMethod("valueNotEquals", function(value, element, arg) {
        block_id = element.id;
        valueNotEquals_message = "Please Select a " + block_id;
        return arg !== element.value;
    });


    var jsdateformat = '';

    $.ajax({
        type: "POST",
        url: 'dateformatjs.php',
        crossDomain: true,
        dataType: 'json',
        async: false,
        success: function(response) {

            // console.log(response);

            if (response.code == 1) {
                StartDate = response.data;
                jsdateformat = StartDate;
            }
        },
        error: function() {
            var message = "You are not connected to internet. Please try again.";
            showalert("Error", message, "error");
        }
    });


    jQuery.validator.addMethod("validDate", function(value, element) {
        // alert(jsdateformat);
        return this.optional(element) || moment(value, jsdateformat).isValid();
    }, "Please enter a valid date in the format " + jsdateformat);

    jQuery.validator.addMethod('integer', function(value, element, param) {
        return (value != 0) && (value == parseInt(value, 10));
    }, 'Please enter a non zero integer value!');



    jQuery.validator.addClassRules({
        custom_file: {
            extension: "xls|xlsx|docx|doc"
        },
        import_excel_file: {
            extension: "xls|xlsx|csv"
        },
        zip: {
            digits: true,
            minlength: 5,
            maxlength: 5
        },
        alpha_numeric: {
            alphanumeric: true
        },
        currency_format: {
            currency_format: true
        },
        date_format: {
            validDate: true
        },
        url_format: {
            url: true
        },
        phone_number: {
            number: true
        },
        email_rule: {
            email: true
        },
        pswd_format: {
            required: true,
        },
        password_again: {
            required: true,
            equalTo: "#u_password"
        },
        custom_image: {
            extension: "jpg|jpeg"
        },
        video_uplode: {
            extension: "wmv|mp4"
        },
        required_all: {
            required: true,
            minlength: 1
        },
        SelectName: {
            valueNotEquals: "0"
        }
    });

    var form_validator = $("form").validate({
        onkeyup: false,
        focusInvalid: true,
        onclick: false,
        onsubmit: true,
        onfocusout: false,
        focusCleanup: true,

        showErrors: function(errorMap, errorList) {

            var lbl_error = '';

            for (var error in errorMap) {

                var field_id = $(errorList[0].element).attr('id');
                var is_label = 0;

                if (errorList[0].method == 'required' || errorList[0].method == 'equalTo' || errorList[0].method == 'valueNotEquals') {
                    $('label').each(function() {

                        var field_for = $(this).attr('for');
                        var lbl_value = $(this).text().replace(/\*/g, '');
                        if (field_for == field_id) {
                            if (errorList[0].method == 'required') {
                                lbl_error = lbl_value + " is Mandatory";
                                is_label = 1;
                            } else if (errorList[0].method == 'equalTo') {
                                lbl_error = lbl_value + " is not Match with Password";
                                is_label = 1;
                            } else if (errorList[0].method == 'valueNotEquals') {
                                lbl_error = "Please Select a " + lbl_value;
                                is_label = 1;
                            }

                        }
                    });

                    if (is_label == 0) {
                        var ele_placeholder = $(errorList[0].element).attr('placeholder');
                        if (errorList[0].method == 'required') {
                            lbl_error = ele_placeholder + " is Mandatory";
                        } else if (errorList[0].method == 'equalTo') {
                            lbl_error = ele_placeholder + " is not Match with Password";
                        } else if (errorList[0].method == 'valueNotEquals') {
                            lbl_error = "Please Select a " + ele_placeholder;
                        }
                    }

                } else {

                    lbl_error = errorList[0].message;

                }
                showalert("Error", lbl_error, "error");

                form_validator.focusInvalid();
                $(errorList[0].element).focus();
            }
        }
    });





    // var form_validator = $("form").validate();
    $("body").on("submit", "form", function(event) {

        event.preventDefault();
        var form = $(this);
        var submit_form = '';

        var is_validate = form.valid();
        if (is_validate == true) {

        } else {
            form_validator.focusInvalid();
            return false;
        }
    });


});