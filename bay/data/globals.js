var bayConstants = {

      /********KEYS *******************************************************************************/
      enterKey :'\uE007',
      deleteKey :'\uE017',
      /******* COMMON [SHARED CROSS PAGES] ***********************************************************************/
      qaUrl : 'https://qa.thebay.com/',
      qaUrl_fr : 'https://qa.labaie.com/',

      homepageTitle : "Hudson's Bay: Canada's Iconic Department Store",
      homepageTitle_fr : "La Baie d'Hudson: la plus importante chaîne de grands magasins au Canada",

      shippingCharge_free :"Free",
      shippingCharge_free_fr :"GRATUIT",

      shippingCharge_express :"15",

      promoCode_optionA :"FREESTD",
      promoCode_optionB :"EXPRESS",

      promoCode_text : "Promo",
      promoCode_text_fr : "promo",

      promoSavingsText : "Promotional Savings",

      timeout_min:7000,
      timeout_median:20000,
      timeout_max:50000,

      pauseTime_min:1000,
      pauseTime_median:5000,
      pauseTime_max:10000,
      /******* TEST ITEMS ***********************************************************************/
      /*product1*/
      product_ID_item1 : '0600083948021', //HBC socks

      product_desc_item1  : "Stripe Socks",
      product_desc_item1_fr  : "Chaussettes pour bébés, paquet de 3",

      //product_color_optionB_item1  : "White", //
      //product_color_optionB_item1_fr  : "Divers", //

      product_size_optionA_item1 : '0-6', //
      product_size_optionB_item1 : '6-12', // [pdpminicartbag] [R&S]

      product_qty_optionA_item1  : '2', // [pdpminicartbag][R&S]
      product_qty_optionB_item1 : '9', // [pdpminicartbag]

      //change @pa_product_optionB_css when changing productID

      /*product2*/
      product_ID_item2 : '0600087564997', // mittens
      product_pagetitle_item2 : "Ralph Lauren Childrenswear - White 6 Pair Pack Athletic Infant Boy Quarter Sport Socks With Grippers - thebay.com",
      product_pagetitle_item2_fr : "Ralph Lauren Childrenswear - Ensemble de 6 paires de socquettes blanches athlétiques antidérapantes pour petits garçons - labaie.com",

      product_size_optionA_item2 : '18-24',

      product_desc_item2  : 'White 6 Pair Pack Athletic Infant Boy Quarter Sport Socks With Grippers',
      product_desc_item2_fr  : 'Ensemble de 6 paires de socquettes blanches athlétiques antidérapantes pour petits garçons',

      product_qty_optionA_item2  : '2', // [pdpminicartbag] [test data]


      product_color_optionA_item2  : "White", //size [pdpminicartbag] [test data]
      product_color_optionA_item2_fr  : "Blanc", //size [pdpminicartbag] [test data]



      /*product3*/
      product_ID_item3 : '0600088906951', //gift card
      product_pagetitle_item3 : "Hudson's Bay - The Signature Card - thebay.com",
      product_pagetitle_item3_fr : "Hudson's Bay - La carte emblématique - labaie.com",

      product_desc_item3  : "The Signature Card", //[topnavgiftcard]
      product_desc_item3_fr  : 'La carte emblématique', //[topnavgiftcard]

      /*minicart bag page*/
      product_qty_sum_optionA : '4', //product_qty_optionA_item1 + product_qty_optionA_Item2 // [test data]
      product_qty_sum_optionB : '2', //[pdpdminicartbag] after remove item2


      /*search terms*/
      search_term1 : 'sneakers', // [test data]
      search_term1_fr : 'Chaussures de course', // [test data]

      //search_term2 : 'Baby Socks- Pack of Three', // [test data]
      //search_term2_fr : 'Baby Socks- Pack of Three', // [test data]

      search_term3 : 'chanel', // [test data]
      search_term3_fr : 'Chaussures de course', // [test data]

      specialBrand_pagetile : "Chanel Perfume & Makeup | Hudson's Bay",
      specialBrand_pagetile_fr : "Parfums et maquillage Chanel | La Baie d'Hudson",

      BOPIS_zipcode : 'H3P 2Z3',
      /******* TEST ACCOUNTS ***********************************************************************/
      username :"accept@fraudtest.com", //CHANGE TO YOUR ACCOUNT INFO. [ACCOUNT] [orderplacementREG] [test data]
      username2 :"rochester312@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [TOPNAVFOOTERGC] [test data]
      username3 :"rochester313@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [reviewsubmitREG] [test data]
      username4 :"rochester314@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [bopisREG] [test data]

      username_fr :"rochester411@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [ACCOUNT] [ORDERPLACEMENTREG FRENCH] [ORDERPLACEMENTREG_FRENCH][test data]
      username2_fr :"rochester412@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [TOPNAVFOOTERGC] [test data]
      username3_fr :"rochester413@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [reviewsubmitREG french] [test data]
      username4_fr :"rochester414@mailinator.com", //CHANGE TO YOUR ACCOUNT INFO. [bopisREGFR] [test data]

      password:"TESTtest123!", //CHANGE TO YOUR ACCOUNT INFO  [test data]

      /******* HEADER FOOTER ***********************************************************************/
      header_welcomeSignin: 'Welcome, Sign In',
      header_welcomeSignin_fr: 'Bienvenue! Ouvrir une session',

      header_welcomeName:'Welcome, BayPrev', //CHANGE TO YOUR ACCOUNT INFO [test data]
      header_welcomeName_fr:'Bienvenue, BayPrev', //CHANGE TO YOUR ACCOUNT INFO [test data]

      header_signoutmsg: 'Not BayPrev? Sign Out',
      header_signoutmsg_fr: "Vous n'êtes pas BayPrev? Fermer la session",

      bridalpage_Title:"Indulge in the ultimate bridal experience",
      bridalpage_Title_fr:"Offrez-vous la meilleure expérience de magasinage qui soit.",

      giftregistryheader_Title:"Canada’s Gift Registry",
      giftregistryheader_Title_fr:"Le grand registre de cadeaux",

      /******* ACCOUNT PAGE ***********************************************************************/
      acc_xxxxsAccount :"BayPrev's Account", //CHANGE TO YOUR ACCOUNT INFO  // [test data]
      acc_xxxxsAccount_fr :"Compte de BayPrev", //CHANGE TO YOUR ACCOUNT INFO  // [test data]

      acc_signIntoMyAccount : 'Sign Into My Account',
      acc_signIntoMyAccount_fr : 'Ouvrir une session',

      acc_addNewShippingAddress:'Add a New Shipping Address',
      acc_addNewShippingAddress_fr: "Ajouter une nouvelle adresse d'expédition",

      acc_addNewBillingAddress :'Add a New Billing Address',
      acc_addNewBillingAddress_fr :"Ajouter une nouvelle adresse de facturation",

      acc_addNewPaymentMethod: 'Add a New Payment Method',
      acc_addNewPaymentMethod_fr: 'Ajouter un nouveau mode de paiement',

      /******* PRODUCT ARRAY ***********************************************************************/
      pa_filterby : 'Under',
      pa_filterby_fr : 'Under',

      pa_paginationPageSelected : '2',

      pa_leftnavCategory_optionA : 'Men',
      pa_leftnavCategory_optionA_fr : 'Homme',

      pa_headerSubcat_optionA : "Men", //change based on topnav data
      pa_headerSubcat_optionA_fr : "Homme", //change based on topnav data

      /***** BAG **********************************************************************************/
      bag_header :"BAG",
      bag_header_fr :"PANIER",

      /******* CHECKOUT ***********************************************************************/

      /*SHIPPING ADDRESS*/
      checkout_firstName : 'Apple',
      checkout_lastName : 'Sauce',
      checkout_phone : '6667778888',
      checkout_addressStreet_QAS : '300 University Ave W',

      //guest checkout or default address on account [test data]
      checkout_addressStreet_optionA : '372 Bay St',
      checkout_city_optionA : 'Toronto',
      checkout_zip_optionA : 'M5H 2W9',

      // [test data] secondary set ofaddress on account or add new address scenario on checkout page
      checkout_addressStreet_optionB : '200 University Ave W',
      checkout_city_optionB : 'Waterloo',
      checkout_zip_optionB : 'N2L 3G1',
      /* see pageObj.js @checkout_state_css to edit STATE option */

      /*ENTER PAYMENT METHOD*/
      checkout_ccNumber_optionA : '4520050003414420', //guest or default card on account
      checkout_ccNumber_optionB : '5191230005824926', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page
      checkout_CVC3digits : '123',
      checkout_ccName : 'Jim Carter',
      checkout_paymentType_optionB : 'MasterCard', // [test data] secondary set of credit card saved on account or add new credit card scenario on checkout page
      checkout_paymentType_optionA : 'Visa',
      /*SHIPPING METHOD*/
      checkout_shippingMethod : 'Express',
      checkout_shippingMethod_fr : 'express',

      /******* GIFT CARD ***************************************************************************/
      giftcard_pagetitle : "Hudson's Bay Gift Cards | Hudson's Bay",
      giftcard_pagetitle_fr : "Cartes-cadeaux La Baie D'Hudson | La Baie D'Hudson",
      giftcard_number: "43497775783",
      giftcard_pin:"7265",

      /******* THANKYOU ***********************************************************************/
      thankyou_header : 'THANK YOU',
      thankyou_header_fr : 'MERCI',

      thankyou_orderNumber : 'Order #',
      thankyou_orderNumber_fr : 'Commande #',

  };

module.exports = {
  bayConstants : bayConstants
}
