var latConstants = {
    /********KEYS *******************************************************************************/
    enterKey :'\uE007',
    deleteKey :'\uE017',

    /******* COMMON [SHARED CROSS PAGES] ***********************************************************************/
    qaUrl : 'https://qa.lordandtaylor.com/Entry.jsp',
    homepageTitle : "Lord + Taylor: Designer Clothing, Shoes, Handbags, Accessories & More",
    shippingCharge_free :"FREE",
    shippingCharge_standard : "$0.00",
    promoCode :"HAPPY3",
    promoCodeText : "Promo",
    promoSavingsText : "Promotional Savings",


    timeout_min:7000,
    timeout_median:20000,
    timeout_max:50000,
    pauseTime_min:1000,
    pauseTime_median:5000,
    pauseTime_max:11000,
    /******* TEST ITEMS ***********************************************************************/
    /*product1*/
    product_ID_item1 : '0500017515628', //socks
    product_desc_item1  : "Ankle Socks",
    product_size_optionA_item1  : "0-6", //size [PDPminicart] [test data]
    product_size_optionB_item1 : '12-24 MONTHS', //size [bagpage] [test data]
    product_size_optionC_item1 : '2T-4T', //[R&S]]

    product_qty_optionA_item1  : '2', // [PDPminicart] [test data]
    product_qty_optionB_item1 : '9', // [bagpage] [test data]

    /*product2*/
    product_ID_item2 : '0500044891257', //
    product_pagetitle_item2 : "Capelli New York - Five-Pack Patterned Bikini Underwear - lordandtaylor.com",
    product_desc_item2  : "Five-Pack Patterned Bikini Underwear",
    product_size_optionA_item2  : "MEDIUM", //size [PDPminicart] [test data]
    product_color_optionA_item2  : "Multi", //size [PDPminicart] [test data]
    product_qty_optionA_Item2  : '2', // [PDPminicart] [test data]

    /*product3*/
    product_ID_item3 : '0500087541897', //gift card
    product_pagetitle_item3 : "Lord & Taylor - 424 5th Ave - lordandtaylor.com",
    product_desc_item3  : "424 5th Ave",

    /*product4*/
    product_ID_item4: '0500018500280', //sneakers
    product_desc_item4 : "Chuck Taylor All-Star Classic",


    /*minicart bag page*/
    product_qty_sum_optionA : '4', //product_qty_optionA_item1 + product_qty_optionA_Item2 // [test data]
    product_qty_sum_optionB : '2', //[pdpdminicartbag] after remove item2

    /*search terms*/
    search_term1 : 'sneakers', // [test data]
    search_term2 : 'Capelli New York Three-Pack Ankle Socks', // [test data]

    /******* TEST ACCOUNTS ***********************************************************************/
    username :"rochester311@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [ACCOUNT] [TOPNAVFOOTERGC] [test data]
    username2 :"rochester312@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [ORDERPLACEMENTREG] [test data]
    username3 :"rochester313@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [reviewsubmitREG] [test data]
    username4 :"rochester314@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [shoprunnerReg] [test data]
    usernameINTL : 'rochester411@mailinator.com', //CHANGE TO YOUR ACCOUNT INFO  [ORDERPLACEMENTREGINTL][test data]
    username2INTL : 'rochester412@mailinator.com', //CHANGE TO YOUR ACCOUNT INFO [reviewsubmitREGINTL]  [test data]
    password:"TESTtest123!", //CHANGE TO YOUR ACCOUNT INFO  [test data]

    //password:"Welcome1!", //CHANGE TO YOUR ACCOUNT INFO  [test data]
    username_shoprunner :'saks-test@shoprunner.com',
    password_shoprunner :'test1234',

    /******* HEADER FOOTER ***********************************************************************/
    header_welcomeSign: 'Welcome, Sign In',
    header_welcomeName:'Welcome, LTSTQA', //CHANGE TO YOUR ACCOUNT INFO [test data]
    header_welcomeNameINTL : "Welcome, LTSTQAINTL", //CHANGE TO YOUR ACCOUNT INFO  [test data]
    header_subcatPagetitle_optionA : "Shop All Women's Clothing | Lord & Taylor", //change based on topnav data [test data]

    /******* ACCOUNT PAGE ***********************************************************************/
    acc_xxxxsAccount :"LTSTQA's Account", //CHANGE TO YOUR ACCOUNT INFO  // [test data]
    acc_xxxxsAccountINTL : "LTSTQAINTL's Account", //CHANGE TO YOUR ACCOUNT INFO// [test data]

    acc_signIntoMyAccount : 'Sign Into My Account',
    acc_addNewShippingAddress:'Add a New Shipping Address',
    acc_addNewBillingAddress :'Add a New Billing Address',
    acc_addNewPaymentMethod: 'Add a New Payment Method',

    /******* PRODUCT ARRAY ***********************************************************************/
    pa_filterby : 'Under',
    pa_paginationPageSelected : '2',
    pa_leftnavCategory_optionA : 'Men',
    pa_headerSubcat_pagetitle_optionA : "Shop All Women's Clothing | Lord + Taylor", //change based on topnav data

    /***** BAG **********************************************************************************/
    bag_pagetitle :"BAG",
    bag_emptyMsg:'There are no items in your bag',
    bag_shoprunnerWelcome : 'Welcome Back',

    /******* CHECKOUT ***********************************************************************/

    /*SHIPPING ADDRESS*/
    checkout_firstName : 'Apple',
    checkout_lastName : 'Sauce',
    checkout_phone : '6667778888',
    checkout_addressStreet_QAS : '123 Main St',

    //guest checkout or default address on account [test data]
    checkout_addressStreet_optionA : '123 S Main St',
    checkout_city_optionA : 'Woodstock',
    checkout_zip_optionA : '22664',

    // [test data] secondary set ofaddress on account or add new address scenario on checkout page
    checkout_addressStreet_optionB : '28 Garden St',
    checkout_city_optionB : 'Hoboken',
    checkout_zip_optionB : '07030-3502',
    /* see pageObj.js @checkout_state_css to edit STATE option */

    /*SHIPPING ADDRESS INTERNATIONAL*/ //guest checkout or default address on account [test data]
    checkout_addressStreetINTL_optionA : '401 Bay St',
    checkout_cityINTL_optionA : 'Toronto',
    checkout_zipINTL_optionA : 'M5H 2Y4',

    // [test data] secondary set ofaddress on account or add new address scenario on checkout page
    checkout_addressStreetINTL_optionB : '200 University Ave W',
    checkout_cityINTL_optionB : 'Waterloo',
    checkout_zipINTL_optionB : 'N2L 3G1',

    /* see pageObj.js @checkout_state_css to edit STATE option */

    /*ENTER PAYMENT METHOD*/
    checkout_ccNumber_optionA : '4430850000000034', //guest or default card on account
    checkout_ccNumber_optionB : '5134510000000030', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page
    checkout_CVC3digits : '123',
    checkout_ccName : 'Jim Carter',
    checkout_paymentType_optionB : 'MasterCard', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page
    checkout_paymentTypeINTL_optionB : 'MC', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page

    /*SHIPPING METHOD*/
    checkout_shippingMethod_optionA : 'Rush',
    checkout_shippingMethod_optionB :'Standard',

    /********Internatinal ************************************************************************************/
    Intl_shipping: 'INTERNATIONAL SHIPPING',
    Intl_country_optionA: 'Canada', //[test data]
    Intl_currency_optionA : 'CA', //[test data] changed from CAD to CA due to STQA-224
    /* go to pageObj.js @intl_countryDropdownTestItem_css to change test country */
    Intl_purchases_pagetile: 'Lordandtaylor.com Customer Service',
    /******* GIFT CARD ***************************************************************************/
    giftcard_pagetitle : "Lordandtaylor.com - Credit Card-Style Gift Card - Virtual Gift Card - Purchase Online Today - Find Corporate Gift Card Rates",
    pa_giftcard_breadcrumbText : "Gift Cards",


    /******* THANKYOU ***********************************************************************/
    thankyou_header : 'THANK YOU',
    thankyou_orderNumber : 'Order #'
 };

 module.exports = {
   latConstants : latConstants
 }
