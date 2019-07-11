module.exports = {
    /********** International***************************************/
    intl_ship_to :{
        selector: 'div[class="hbc-ship-to"]',
    },
    intl_shippingpage_class :{
        selector : '.inner-wrapper',
    },
    intl_shippingTitle_css :{
        selector : '#saksBody > div.intl-shipping-page.gotham-theme > div > h2',
    },
    intl_contextChooser_css :{
        selector : '#context_chooser',
    },
    intl_countryDropdownMenu_css :{
        selector : '#INTCOUNTRY',
    },
    intl_countryDropdown_optionA_css :{
        selector : '#INTCOUNTRY > option:nth-child(34)', //CANADA
    },
    intl_contextChooser_btn :{
        selector : 'div.form-item.field.footer.clear-both.float-right > input.sfa-button.transactional.large.float-right',
    },
    intl_welcomemat_css :{
        selector : '#modal',
    },
    intl_welcomematSubheadline_css :{
        selector : '#subheadline',
    },
    intl_welcomemat_btn :{
        selector : '#button > button',
    },
    country_dropdown :{
        selector : '#INTCOUNTRY > option[value="$countryCode"]'
    },
    country_flag :{
        selector: '#ui-header > div > header > div > div.hbc-ship-to > a.hbc-ship-to__flag > img[alt="$countryCode flag"]',
    },
}