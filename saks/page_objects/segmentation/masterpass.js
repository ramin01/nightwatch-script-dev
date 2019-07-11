module.exports = {
    /********** Masterpass ***************************************/

    masterpass_express_btn :{
        selector: 'div.shopping-bag__third-party-buttons > a.shopping-bag__checkout-btn--masterpass',
    },

    masterpass_login_email_field :{
        selector: 'input[inputmode="email"]'
    },

    masterpass_email_continue_btn :{
        selector : 'body > div.container-shell.ng-scope > main > div > div > div > div:nth-child(2) > form > div.row > div:nth-child(1) > div > button',
    },

    masterpass_login_password_field :{
        selector: 'input[type="password"]',
    },

    masterpass_password_continue_btn :{
        selector: 'body > shell > main > div > signin > div > div > div:nth-child(2) > form > div.row > div > div > button',
    },

    masterpass_auth_field :{
        selector : '#formly_3_input_uniqueCode_0',
    },

    masterpass_send_email_link :{
        selector : 'body > shell > main > div > user-authentication > div > div > div:nth-child(2) > form > div.form-block > ng-form > div.formly-field.ng-scope.ng-isolate-scope.formly-field-group > ng-form > div.formly-field.ng-scope.ng-isolate-scope.col-sm-12.formly-field-input > div > div.clearfix > div > button:nth-child(2)',
    },
}