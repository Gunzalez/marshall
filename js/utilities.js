
var utilities = {
    // Validation

    // - mandatory fields
    isEmptyInputField: function($inputField){
        var returnValue = true;
        if($.trim($inputField.val()).length > 0 ){
            returnValue = false;
        }
        return returnValue;
    },

    // - email address fields
    isValidEmailAddress: function($inputField){
        var returnValue = true,
            IsEmail = function(email){
                var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            };

        if(!IsEmail($.trim($inputField.val()))){
            returnValue = false;
        };
        return returnValue;
    },

    // Error reporting
    reportError: function($obj, containerCssClass){
        $obj.parents(containerCssClass).addClass('error');
    }
}