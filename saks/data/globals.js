var saksConstants = {

    /********KEYS *******************************************************************************/
    enterKey :'\uE007',

    /******* COMMON [SHARED CROSS PAGES]***********************************************************************/
    qaUrl : 'https://www.qa.saks.com/Entry.jsp',
    homepageTitle : "Designer Women's Apparel, Men's Apparel, Shoes & Handbags - Saks.com",
    shippingCharge:"0.00", // [CHECKOUT]
    shippingCharge_free :"FREE", // [CHECKOUT]
    shippingCharge_standard: "7.50", //standard // [CHECKOUT]
    shippingCharge_rush: "15.00", //rush // [CHECKOUT]
    shippingCharge_nextday:"25.00", //Next day // [CHECKOUT]
    shippingCharge5:"35.00", //Next day // [CHECKOUT]
    promoCode_text : "Promo", // [CHECKOUT]
    promoCode_optionA:'FREESHIP', // [CHECKOUT]
    promoCode_optionB:'EXPRESS', // [CHECKOUT]
    promoCode_optionC:'HAPPY3',

    timeout_min:5000,
    timeout_median:20000,
    timeout_max:50000,
    pauseTime_min:1000,
    pauseTime_median:5000,
    pauseTime_max:11000,

    taxCharge: "$12.74",
    taxCharge_INTL:"13.65",

    /*******HEADER FOOTER ***********************************************************************/
    header_signoutmsg: 'Not saks? Sign Out', //CHANGE O5ASTQA TO YOUR ACCOUNT INFO   [test data]
    header_signoutmsgINTL: 'Not saks? Sign Out', //CHANGE O5ASTQAINTL TO YOUR ACCOUNT INFO    [test data]
    header_welcomeSign: 'Welcome, Sign In',
    header_welcomeName:'Welcome, saks', //CHANGE O5ASTQA TO YOUR ACCOUNT INFO [test data]
    header_welcomeNameINTL : "Welcome, saks", //CHANGE O5ASTQAINTL TO YOUR ACCOUNT INFO  [test data]
    header_subcatPagetitle : "Women's Shoes: Boots, Heels & More | Saks.com", //change based on topnav data

    /******* TEST ACCOUNTS ***********************************************************************/
    username :"accept@fraudtest.com", //CHANGE TO YOUR ACCOUNT INFO. [ACCOUNT] [ORDERPLACEMENTREG] [test data]
    username2 :"rochester316@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [checkoutpageReg] [test data]
    username3 :"rochester317@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [BOPIS] [test data]
    username4 :"rochester318@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [shoprunnerReg] [test data]
    username5 :"rochester319@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [Giftcard] [test data]
    username6 :"rochester320@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [EVGC] [test data]

    usernameINTL : 'rochester413@mailinator.com', //CHANGE TO YOUR ACCOUNT INFO  [AccountINTL][test data]
    username2INTL : 'rochester414@mailinator.com', //CHANGE TO YOUR ACCOUNT INFO [CreviewsubmitREGINTL]  [test data]
    password:"TESTtest123!", //CHANGE TO YOUR ACCOUNT INFO  [test data]

    testname:"john",
    username_shoprunner :'SaksQA@shoprunner.com',
    password_shoprunner :'Passw0rd!',

    defaultEmail:"testacct10@test.com",
    defaultPassword:"Password123!",

    /*******ACCOUNT PAGE ***********************************************************************/
    acc_xxxxsAccount :"saks's Account", //CHANGE O5ASTQA TO YOUR ACCOUNT INFO  // [test data]
    acc_signIntoMyAccount : 'Sign Into My Account',
    acc_addNewShippingAddress:'Add a New Shipping Address',
    acc_addNewBillingAddress :'Add a New Billing Address',
    acc_addNewPaymentMethod: 'Add a New Payment Method',
    acc_saksfirstrewardsmsg:'The Best Rewards in Fashion',
    acc_xxxxsAccountINTL : "saks's Account", //CHANGE O5ASTQAINTL TO YOUR ACCOUNT INFO // [test data]

    /******* TEST ITEMS ***********************************************************************/
    /*product1*/
    product_ID_item1 :"0443224167164",//checkoutguest, checkoutRegIntl [pdpminicartBagIntl]
    product_pagetitle_item1 :"Giorgio Armani - Eye Maestro - saks.com",
    product_desc_item1 :"Eye Maestro",
    product_qty_optionB_item1 : '3',
    product_qty_optionA_item1 :"2",

    /*product2*/
    product_ID_item2:"0400086921907",//product array [pdpminicartBagIntl] INTL shiping eligible
    product_pagetitle_item2:"To Boot New York - Harrison Leather Side-Zip Boots - saks.com",
    product_desc_item2:"Harrison Leather Side-Zip Boots",
    product_size_optionA_item2:"7.5",
    product_qty_optionA_item2:"2",
    product_qty_optionB_item2 : '5',


    /*product3*/
    product_ID_item3:'0400087188124',//
    product_pagetitle_item3:"Saks Fifth Avenue - COLLECTION Double Monk-Strap Leather Shoes - saks.com",
    product_desc_item3:'COLLECTION Double Monk-Strap Leather Shoes',
    product_qty_optionA_item3 :"2",
    product_qty_optionB_item3 :"5",
    product_size_optionA_item3:"7.5",

    /*product4*/
    product_ID_item4:"0499928820294",//GIFT CARD
    product_pagetitle_item4:"Saks Fifth Avenue",
    product_desc_item4:'E-Gift Card',

    /*product5*/
    product_ID_item5:"0401336647011", //BOPIS ITEM
    product_pagetitle_item5:"Marcoliani - Cotton-Blend Dress Socks- saks.com",
    product_desc_item5:"Cotton-Blend Dress Socks",
    productBopisname:'Marcoliani',
    product_desc_itemPAQL:"Toddler's & Little Boy's Heathered Henley",

    /*product6*/
    product_ID_item6 :"0425748021436",//checkoutguest, checkoutRegIntl [pdpminicartBagIntl]
    product_pagetitle_item6 :"La Prairie - Cellular Eye Cream Platinum Rare/0.68 oz. - saks.com",
    product_desc_item6 :"Cellular Eye Cream Platinum Rare/0.68 oz.",
    product_qty_optionB_item6 : '2',
    product_qty_optionA_item6 :"1",

    /*product7*/
    product_ID_item7: '0476971482418', //sharpener

    /*minicart bag page*/
    product_qty_sum_optionA : '4', //minicart_qtyItem1 + minicart_qtyItem2 // [test data]
    product_qty_sum_optionB : '2', //[pdpdminicartbag] after remove item2    /*search terms*/

    search_term1 : 'SHOES',
    search_term2 : 'Future Skin Gel Foundation',
    product_desc_itemPAQL:"Future Skin Gel Foundation",

    brandsearch:'Gucci',
    brandtitle:"Gucci | Saks.com",
    /******* PRODUCT ARRAY ***********************************************************************/
    pa_filterby : 'Under',
    pa_paginationPageSelected : '2',
    pa_leftnavCategory : 'Men',
    /***** BAG **********************************************************************************/
    bag_header :"Bag",
    bopis_zip:'10017',
    bag_shoprunnerWelcome : 'Welcome Back',
    bag_SaveForLaterCopy:'Saved (1)',
    bag_BagCopy:"Saks Bag (1)",

    /******* CHECKOUT ***********************************************************************/
    checkout_pagetitle : 'Saks Checkout',

    /*SHIPPING ADDRESS*/
    checkout_firstName : 'Apple',     //[CHECKOUT]
    checkout_lastName : 'Sauce',      //[CHECKOUT]


    /*BOPIS Info*/
    checkout_bopis_firstName:'Bobby',
    checkout_bopis_lastName:'Bobbaaaayyy',
    checkout_bopis_email:'bobby@hbc.com',
    checkout_bopis_phone:'9738675309',
    bopis_SelectedStoreLabel:'Pick up at',
    
    //checkout_name : 'Garden City',//CHANGE TO YOUR ACCOUNT INFO

    checkout_addressStreet_optionA : '123 N Main st',  //[CHECKOUT]DEFAULT BILLING ADDRESS
    checkout_city_optionA : 'Woodstock', //[CHECKOUT]
    checkout_zip_optionA : '22664', //[CHECKOUT]
    checkout_phone_optionA : '6667778888', //[CHECKOUT]
    checkout_addressCityStateZip_optionA:'Woodstock, VA 22664',

    //checkout_email_optionB:"test@test.com",  //[CHECKOUT]
    checkout_addressStreet_optionB : '28 Garden St', //CHANGE TO YOUR ACCOUNT INFO --DEFAULT ADDRESS
    checkout_city_optionB : 'Hoboken',  //[CHECKOUT]
    checkout_zip_optionB : '07030-3502',   //[CHECKOUT]
    checkout_addressCityStateZip_optionB: 'Hoboken, NJ 07030-3502', //CHANGE TO YOUR ACCOUNT INFO
    /* see pageObj.js @checkout_state_css to edit STATE option */

    checkout_addressStreet_optionC : '1 test drive',
    checkout_city_optionC: 'Brooklyn',
    checkout_zip_optionC: '11229',
    checkout_phone_optionC: '1231231234',

    /*SHIPPING ADDRESS INTERNATIONAL*/
    checkout_addressStreetINTL_optionA : '401 Bay St', //CHANGE TO YOUR ACCOUNT INFO
    checkout_cityINTL_optionA : 'Toronto',  //[CHECKOUT]
    checkout_zipINTL_optionA : 'M5H 2Y4',   //[CHECKOUT]
    /* see pageObj.js @checkout_state_css to edit STATE option */

    checkout_phone_optionB : '6667778888',

    checkout_addressStreetINTL_optionB: '401 Bay St',   //[CHECKOUT]
    checkout_cityINTL_optionB : 'Waterloo',  //[CHECKOUT]
    checkout_zipINTL_optionB : 'N2L 3G1',    //[CHECKOUT]
    checkout_addressCityStateZipINTL_optionB : 'Waterloo, ON N2L 3G1', //CHANGE TO YOUR ACCOUNT INFO

    checkout_addressStreetINTL_optionC : '155 Antibes Dr', // [test data] 3rd set address
    checkout_cityINTL_optionC : 'North York', // [test data] 3rd set address
    checkout_zipINTL_optionC : 'M2R 3G7', // [test data] 3rd set address

    /*ENTER PAYMENT METHOD*/
    checkout_ccNumber_optionA : '4111111111111111',  //[CHECKOUT]
    checkout_ccNumber_optionB : '5191230007497879',  //[CHECKOUT]

    checkout_expDate : '12/2024',   //[CHECKOUT]
    checkout_CVC3digits : '123',    //[CHECKOUT]
    checkout_ccName : 'Jim Carter', //[CHECKOUT]
    checkout_paymentType_optionA:"MasterCard",  //[CHECKOUT]
    checkout_paymentTypeINTL : 'MC',
    checkout_paymentType_optionB : 'MasterCard',

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

    checkout_ccNumber_amexPWP: '371307196801005',
    checkout_expDate_amexPWP: '12/19',
    checkout_CID_amexPWP: '5222',

    /******************SHOPRUNNER *****************************************************************************/
    shoprunnerWelcomeMsg : 'Welcome Back',
    shoprunnerShipping : 'ShopRunner',
    /****************** Gift Wrap *****************************************************************************/
    giftwrapnameA: 'Bobby',
    giftwrapmessageA: 'Bobbaaaayyy',

    /*******Gift card ***************************************************************************/
    giftcard_pagetitle : "Saks.com - Credit Card-Style Gift Card - Virtual Gift Card - Purchase Online Today - Find Corporate Gift Card Rates",
    giftcard_desc :'Standard Gift Card',
    productIDGC:'0499932227409',
    giftcard_papagetitle :"SHOP ALL",
    giftcard_evgcpagetitle:"Saks Fifth Avenue - E-Gift Card - saks.com",
    giftcard_evgcpageheader:"Who would you like it delivered to?",
    giftcard_deliverydate:"03/29/2019",
    giftcard_evgcmessage:"saks virtual gift card purchased",
    giftcard_vgc_title:"Virtual Gift Card",
    giftcardnumber : '6015990000358319',
    giftcardpin : '8733',
    /********Internatinal ************************************************************************************/
    Intl_shipping_optionA: 'INTERNATIONAL SHIPPING',
    Intl_country_optionA: 'Canada',
    Intl_currency_optionA : 'CA', //[test data]
    /******* THANKYOU ***********************************************************************/
    thankyou_header : 'ORDER RECEIVED',

};

module.exports = {
  saksConstants : saksConstants
}
