export const formValidator = (input) => {
    
    let formIsValid = true;
    let error = ""
    
    if(input.type === "alphanumeric"){

        if (!input.value) {
            formIsValid = false;
            error = "Required Field."
        }
        if (typeof input.value !== "undefined") {
            if (!input.value.match(/^[a-zA-Z0-9]*$/)) {
            formIsValid = false;
            error = "Please enter valid alphanumeric characters only."
            }
        }
    }
    
    if(input.type === "email"){
        if (!input.value) {
            formIsValid = false;
            error = "Please enter an email.";
        }
        if (typeof input.value !== "undefined") {
            let emailValidator = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!emailValidator.test(input.value)) {
            formIsValid = false;
            error = "Please enter a valid email.";
            }
        }
    }
        
    if(input.type === "password"){
        if (!input.value) {
            formIsValid = false;
            error = "Please enter a password.";
        }
        if (input.value !== "undefined") {
            if (!input.value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            error = "Please enter a password that meets security requirements.";
            }
        }
    }

    if(input.type === "url"){
        if (!input.value) {
            formIsValid = false;
            error = "Please enter a url.";
        }
        if (input.value !== "undefined") {
            let urlValidator = new RegExp(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
            if (!urlValidator.test(input.value)) {
            formIsValid = false;
            error = "Please enter a valid url.";
            }
        }
    }
    
    return {formIsValid, error}
}  