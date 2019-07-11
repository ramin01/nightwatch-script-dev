var o5aConstants = {

    /********KEYS *******************************************************************************/
    enterKey :'\uE007',
    /******* COMMON [SHARED CROSS PAGES] ***********************************************************************/
    qaUrl : 'https://qa.saksoff5th.com/Entry.jsp',
    homepageTitle : "Discount Designer Women's Clothing, Handbags & More | Saksoff5th.com",
    shippingCharge_free :"FREE", // [CHECKOUT]
    shippingCharge_standard: "7.99", //standard [CHECKOUT]
    shippingCharge_rush: "14.99", //rush [CHECKOUT]
    taxCharge: "UNPAID", //[CHECKOUT]
    promoCode_optionA :"SHIP99", // [CHECKOUT]
    promoCode_optionB :"HAPPY3",
    promoCode_text : "Promo", // [CHECKOUT]


    timeout_min:7000,
    timeout_median:20000,
    timeout_max:50000,

    pauseTime_min:1000,
    pauseTime_median:5000,
    pauseTime_max:10000,
    /******* TEST ITEMS ***********************************************************************/
    /*product1*/
    product_ID_item1 : '0400099697409', //facial spray
    product_desc_item1  : "Aloe, Cucumber & Green Tea Facial Spray",
    product_qty_optionA_item1  : '2', // [test data]
    product_qty_optionB_item1 : '5', // [test data]
    product_qty_optionC_item1 : '0', // [test data]
    //product_size_optionA_item1  : "8.8", //size [test data]
    //product_size_optionB_item1 : '10', //size // [test data]


    /*product2*/
    product_ID_item2 : '0497847361003', //soap
    product_desc_item2  : "Shea Butter & Pure Vegetable Oil Soap/Mint Leaf",
    product_qty_optionA_item2  : '2', // [test data]
    product_qty_optionB_item2 : '5', // [test data]
    product_qty_optionC_item2 : '0', // [test data]
    product_size_optionA_item2  : "8.8", //size [test data]
    //product_size_optionB_item1 : '10', //size // [test data]

    /*product3*/
    product_ID_item3 : '0400088840454', //henley tee
    product_desc_item3  : "Boy's Tri-Blend Colorblock Henley Tee",
    product_qty_optionA_item3  : '2', // [test data]
    product_qty_optionB_item3 : '5', // [test data]
    product_qty_optionC_item3 : '0', // [test data]

    /*product 4*/
    product_ID_item4: '0497895020891', //body butter

    /*minicart bag page*/
    product_qty_sum_optionA : '4', //minicart_qtyItem1 + minicart_qtyItem2 // [test data]
    product_qty_sum_optionB : '2', //[pdpdminicartbag] after remove item2

    /*search terms*/
    search_term1 : 'sneakers', // [test data]
    search_term2 : "Aloe, Cucumber & Green Tea Facial Spray", // [test data] update @pa_product_optionA_css in pageObj.js
    search_term3 : "Front-Knot Sheath Dress", // [test data] update @pa_product_optionB_css in pageObj.js 0400099737921



    /******* TEST ACCOUNTS ***********************************************************************/
    username :"accept@fraudtest.com", //CHANGE TO YOUR ACCOUNT INFO. [ACCOUNT] [ORDERPLACEMENTREG] [test data]
    username2 :"rochester312@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [TOPNAVFOOTERGC] [test data]
    username3 :"rochester313@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [reviewsubmitREG] [test data]
    username4 :"rochester314@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [shoprunnerReg] [test data]
    usernameINTL : 'rochester411@mailinator.com', //CHANGE TO YOUR ACCOUNT INFO  [ORDERPLACEMENTREGINTL][test data]
    username2INTL : 'rochester412@mailinator.com', //CHANGE TO YOUR ACCOUNT INFO [CreviewsubmitREGINTL]  [test data]
    password:"TESTtest123!", //CHANGE TO YOUR ACCOUNT INFO  [test data]

    username_shoprunner :'saks-test@shoprunner.com',
    password_shoprunner :'test1234',

    defaultEmail:"testacct10@test.com",
    defaultPassword:"Password123!",

    /******* HEADER FOOTER ***********************************************************************/
    header_signoutmsg: 'Not O5ASTQA? Sign Out', //CHANGE O5ASTQA TO YOUR ACCOUNT INFO   [test data]
    header_signoutmsgINTL: 'Not O5ASTQAINTL? Sign Out', //CHANGE O5ASTQAINTL TO YOUR ACCOUNT INFO    [test data]
    header_welcomeSign: 'Welcome, Sign In',
    header_welcomeName:'Welcome, O5ASTQA', //CHANGE O5ASTQA TO YOUR ACCOUNT INFO [test data]
    header_welcomeNameINTL : "Welcome, O5ASTQAINTL", //CHANGE O5ASTQAINTL TO YOUR ACCOUNT INFO  [test data]
    header_subcatPagetitle : "Women's Activewear: Shop Puma, Reebok & More | Saksoff5th.com", //change based on topnav data

    /******* ACCOUNT PAGE ***********************************************************************/
    acc_xxxxsAccount :"O5ASTQA's Account", //CHANGE O5ASTQA TO YOUR ACCOUNT INFO  // [test data]
    acc_signIntoMyAccount : 'Sign Into My Account',
    acc_addNewShippingAddress:'Add a New Shipping Address',
    acc_addNewBillingAddress :'Add a New Billing Address',
    acc_addNewPaymentMethod: 'Add a New Payment Method',
    acc_saksfirstrewardsmsg:'The Best Rewards in Fashion',
    acc_xxxxsAccountINTL : "O5ASTQAINTL's Account", //CHANGE O5ASTQAINTL TO YOUR ACCOUNT INFO // [test data]

    /******* PRODUCT ARRAY ***********************************************************************/
    pa_filterby : 'Under',
    pa_paginationPageSelected : '2',
    pa_leftnavCategory : 'Men',

    /***** BAG **********************************************************************************/
    bag_header :"Bag",
    bag_emptyMsg:'Your shopping bag is empty',
    bag_shoprunnerWelcome : 'Welcome Back',
    bag_SaveForLaterCopy:'Saved (1)',
    bag_BagCopy:"Bag (1)",
    /******* CHECKOUT ***********************************************************************/
    checkout_pagetitle : 'Saks Off 5th Checkout',

    checkout_firstName : 'Apple',
    checkout_firstNameB: 'Bobby',
    checkout_lastName : 'Sauce',
    checkout_lastNameB : 'Bobbaaaayyy',
    checkout_addressStreet_optionA : '123 E Court St', //[test data]default address
    checkout_address1_QAS : '123 Court St', //[test data]default address
    checkout_city_optionA : 'Woodstock', //[test data]default address
    checkout_zip_optionA : '22664', //[test data]default address
    checkout_phone_optionA : '1234567890',
    checkout_phone_optionB : '9738675309',

    checkout_addressStreet_optionC : '1 test drive',
    checkout_city_optionC: 'Brooklyn',
    checkout_zip_optionC: '11229',
    checkout_phone_optionC: '1231231234',

    /* see pageObj.js @checkout_state_css to edit STATE option */

    checkout_addressStreetINTL_optionA : '372 Bay St', //[test data]default address
    checkout_cityINTL_optionA : 'Toronto', //[test data]default address
    checkout_zipINTL_optionA : 'M5H 2W9', //[test data]default address
    /* see pageObj.js @checkout_state_css to edit STATE option */

    checkout_addressStreet_optionB : '28 Garden St', // [test data] 2nd set address
    checkout_city_optionB : 'Hoboken', // [test data] 2nd set address
    checkout_zip_optionB : '07030-3502', // [test data] 2nd set address
    checkout_addressCityStateZip_optionB : 'Hoboken, NJ 07030-3502', // [test data] 2nd set address
    /* see pageObj.js @checkout_state_css to edit STATE option */

    checkout_addressStreetINTL_optionB : '200 University Ave W', // [test data] 2nd set address
    checkout_cityINTL_optionB : 'Waterloo', // [test data] 2nd set address
    checkout_zipINTL_optionB : 'N2L 3G1', // [test data] 2nd set address
    checkout_addressCityStateZipINTL_optionB : 'Waterloo, ON N2L 3G1', // [test data] 2nd set address

    checkout_addressStreetINTL_optionC : '155 Antibes Dr', // [test data] 3rd set address
    checkout_cityINTL_optionC : 'North York', // [test data] 3rd set address
    checkout_zipINTL_optionC : 'M2R 3G7', // [test data] 3rd set address

    /***** Giftwrap **********************************************************************************/
    giftwrapnameA :'Bobby',
    giftwrapmessageA :'Bobbaaayyyy',

    /*ENTER PAYMENT METHOD*/
    checkout_ccNumber_optionA : '4430850000000034', //
    checkout_ccNumber_optionB : '5134510000000030', // [test data]
    checkout_expDate : '12/22',
    checkout_CVC3digits : '123',
    checkout_ccName : 'Jim Carter',
    checkout_paymentType : 'MasterCard', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page
    checkout_paymentTypeINTL : 'MC', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page

    checkout_ccNumber_option_visa: '4111111111111111',
    checkout_expDate_visa: '12/2024',
    checkout_CVC3digits_visa: '123',

    checkout_ccNumber_option_mastercard: '5454545454545454',
    checkout_expDate_mastercard: '12/2024',
    checkout_CVC3digits_mastercard: '123',

    checkout_ccNumber_option_amex: '377295076303008',
    checkout_expDate_amex: '12/2019',
    checkout_CVC3digits_amex: '1111',

    checkout_ccNumber_option_discover: '6011740000227905',
    checkout_expDate_discover: '12/2024',
    checkout_CVC3digits_discover: '123',

    /********Internatinal ************************************************************************************/
    Intl_shipping_optionA: 'INTERNATIONAL SHIPPING',
    Intl_country_optionA: 'Canada', //[test data]
    Intl_currency_optionA : 'CA', //[test data] changed from CAD to CA due to PD-4107
    /* go to pageObj.js @intl_countryDropdownTestItem_css to change test country */

    /******* GIFT CARD ***************************************************************************/
    giftcard_pagetitle : "Gift Cards",
    giftcard_PDPpagetitle : "Saks Fifth Avenue OFF 5TH - Standard Gift Card - saksoff5th.com",
    giftcard_desc : "Standard Gift Card",
    giftcardnumber : '6015990000358319',
    giftcardpin : '8733',

    /******* THANKYOU ***********************************************************************/
    thankyou_header : 'ORDER RECEIVED',

};

module.exports = {
  o5aConstants : o5aConstants
}
