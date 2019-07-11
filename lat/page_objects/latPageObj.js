/* the values listed on this pageObj.js file maps to each js file in step_definitions folder 

If selected DOM element is xpath ,then we make changes to locatestrategy accordingly.
prod_desc_class : {
    selector: '//[@name="q"]',
    locateStrategy: 'xpath'
     
*/

module.exports = {
    elements : {
/******** COMMON ***********************************************************************************/        
/* test product */
prod_desc_class : { //[LT]
    selector : '.product-overview__short-description',
},     

/* widebag*/
widebag_itemDesc_class :{ //[LT]
    selector : '.widebag-item-short-description',
}, 
widebag_itemSize_css :{ //[LT]
    selector : 'div.widebag-item-details > dl > dd:nth-child(2)',
}, 
widebag_headingItemsQty_css :{ //[LT]
    selector : 'div.widebag-item-list-header > ul > li.grid-32 > a',
}, 
widebag_itemPrice_class :{ //[LT]
    selector :'.widebag-item-extended-price',
},
widebag_items_class :{ //[LT]
    selector :'.widebag-item-list-content',
},
widebag_itemPromo_class :{ //[LT]
    selector :'.widebag-item-promotion-codes',
},
widebag_itemQtyEntry_class :{ //[LT]
    selector :'.widebag-item-quantity-field',
},
widebag_iconRemove_class :{ //[LT]
    selector :'.jsRemoveItem',
},
widebag_removeOverlay_css :{ //[LT]
    selector :'div.blockUI.blockOverlay',
},
widebag_removeOverlayConfirm_class :{ //[LT]
    selector :'.jsConfirm',
},
widebag_editIcon_css :{ //[LT]
    selector :'div.grid-14 > ul > li:nth-child(1) > a > span.font-icon.font-icon-pencil',
},
/* quicklook */
quicklook_overlay_class :{ //[LT]
    selector : '.quicklook-dialog',
}, 
quicklook_desc_css :{ //[LT]
    selector : 'div.selected-product-region > div > div.detail-column > header > h2',
}, 
quicklook_sizeItem1_css :{ //[LT]
    selector : 'div.body > div > div.body > div > a:nth-child(3)', //overlay nd size option
}, 
quicklook_apply_btn :{ //[LT]
    selector : 'div > div.add-to-bag.component.component-3 > div > button', 
}, 
quicklook_size_class : { //[LT]
    selector :'.js-size-selector',
},
quicklook_sizeSelector_class : { //first size available //[LT]
    selector :'.available',
},
quicklook_color_class : { //[LT]
    selector :'.js-color-selector',
},
quicklook_addtobag_btn : { //[LT]
    selector :'.js-action-button',
},
quicklook_price_class : { //[LT]
    selector :'.price-region',
},
quicklook_thumbnail_css : { //[LT]
    selector :'#reskin-mySwatches',
},
quicklook_image_css : { //[LT]
    selector :'div > div:nth-child(2) > canvas',
},

/* promo section on bag page & checkout page*/
promo_css :{ //[LT]
    selector :'#add_promo_code_service',
}, 
promo_entry_css :{ //[LT]
    selector :'#promoCodeEntry',
},
promo_apply_btn :{ //[LT]
    selector :'#promoApply > span',
},
/* order summary section on bag page & checkout page*/
orderSummary_class :{ //[LT]
    selector :'.order-summary',
},
orderSummary_promoSavings_css :{  //[LT]
    selector : '#jsVal-promoTotalLabel',
},
orderSummary_taxCharge_css :{ //[LT]
    selector : '#jsVal-tax',
},
orderSummary_total_css :{ //[LT]
    selector : '#jsVal-grandTotal',
},
orderSummary_shippingCharge_css :{ //[LT]
    selector : '#jsVal-shippingCost',
},




/******** HEADER FOOTER ***********************************************************************************/        
/* WELCOME SECTION */
header_welcomediv_class :{ //[LT]
    selector : '.menu-item',
},
header_welcomeSignin_css :{ //[LT]
    selector : '#toolbar > div > ul > li:nth-child(1) > a',
},
header_welcomeName_css : { //[LT]
    selector:'div.hbc-header__account > div > div > a > div',
},
header_welcomeDropdown_css : { //[LT]
    selector : '.menu-dropdown',
}, 
header_welcomeSignout_btn:{ //[LT]
    selector:'#toolbar > div > ul > li:nth-child(1) > div > ul.last-of-type > li > a',
},
header_bag_btn:{
    selector:'#toolbar > div > ul > li.menu-item.last-child > a',
},
header_bag_btn_quantity:{
    selector:'#item-count',
},
/* SEARCH */
header_searchBar_class : { //[LT]
    selector : '.ui-autocomplete-input',
},
header_searchSubmit_btn : { //[LT]
      selector:'#site-search > form > div.search-box > button',
      locateStratergy : 'css selector'
},
/* TOP NAV */
header_navigationPane_class :{ //[LT]
    selector : '.sh-split', 
} ,
header_category_optionA_css:{ //[LT] 
    selector : '#WomenNavMenu > a', 
},
header_categoryColumnSubcategory_optionA_css:{ //[LT] 2nd category. 1st column
    selector : '#WomenNavMenu > ul > li.sub-menu-column.first-child > ul > li:nth-child(1) > a', 
},
/* FOOTER */
footer_css : { //[LT]
    selector : '#footer-wrapper',
},
footer_column_optionA_css : { //[LT]
    selector:'#footer > div > ul.menu.footer-nav-categories > li.menu-item.first-child.col1',
},
footer_column_optionB_css : { //[LT]
    selector:'#footer > div > ul.menu.footer-nav-categories > li.menu-item.col3',
},
footer_columnGiftCard_css : { //[LT]
    selector:'#footer > div > ul.menu.footer-nav-categories > li.menu-item.col4 > ul > li:nth-child(2) > a',
},
footer_columnIntlShipping_css : { //[LT]
    selector:'#footer > div > ul.menu.footer-nav-categories > li.menu-item.col3 > ul > li:nth-child(3) > a',
},
/************** ACCOUNT ***********************************************************************************/        
acc_loginNewaccount_class : {
    selector : '.sign-in__account',
},
acc_signinTitle_class : {
    selector : '.sign-into-account__title',
},
acc_signinSection_class : {
    selector : '.sign-into-account',
}, 
acc_emailField_css : {
    selector : '#sign-into-account-email-field',
},  
acc_passwordField_css : {
    selector : '#sign-into-account-password-field',
},
acc_signin_btn : {
    selector:'div.account__body-section > div:nth-child(1) > div > div > div.sign-in__account > section > form > div.sign-into-account__button > button',
},   
/* ACCOUNT ORDER SUMMARY PAGE*/
acc_pageheader_class : {
    selector : '.account-header',
},
acc_greetings_class : {
    selector : '.account-header__greeting',
},
acc_headerNavTab_css : {
    selector : 'div > div.account__header-section > div > div > ul',
},
acc_profile_class : {
    selector : '.account-profile',
},
acc_email_class : {
    selector : '.account-profile__content--trailing',
},
/* ACCOUNT ORDER HISTORY PAGE*/
acc_orderHistoryTab_css : { 
    selector : 'div > div.account__header-section > div > div > ul > li:nth-child(2) > a',
},
acc_orderHistoryDetails_css : { //only works for account that with order history
    selector : '.order-billing-details',
},
/* ACCOUNT SHIPPING PAGE*/
acc_shippingAddressTab_css : {
    selector : 'div > div.account__header-section > div > div > ul > li:nth-child(3) > a',
},
acc_addNewShipAddress_class : {
    selector : '.add-new-item-card__inner',
},
acc_addNewShipAddressTitle_class : {
    selector : '.add-new-item-card__title',
},
/* ACCOUNT BILLING PAGE*/
acc_billingAddressTab_css :{
    selector: 'div > div.account__header-section > div > div > ul > li:nth-child(4) > a',
},
acc_addNewBilAddress_class : {
    selector : '.add-new-item-card__inner-cell',
},
acc_addNewBillAddressTitle_class : {
    selector : '.add-new-item-card__title',
},
/* ACCOUNT PAYMENT PAGE*/
acc_paymentTab_css : {
    selector : 'div > div.account__header-section > div > div > ul > li:nth-child(5) > a',
},
acc_addNewPayment_class : {
    selector : '.add-new-item-card__inner-cell',
},
acc_addNewPaymentTitle_class : {
    selector : '.add-new-item-card__title',
},
/* ACCOUNT SETTINGS PAGE*/
acc_settingsTab_css: {
    selector :'div > div.account__header-section > div > div > ul > li:nth-child(6) > a',
},

         
/*** Product Array page****************************************************************************/  
/*bread crumb */
pa_breadcrumbdiv_class :{ //[LT]
    selector : '.pa-enh-breadcrumb',
},
pa_breadcrumbCategory_optionA_css :{ //[LT] sneakers men's category 
    selector : '#bccurrent-302023696', 
},
pa_breadcrumbCategory_optionB_css :{ //[LT] giftcard category page
    selector : '#bccurrent-302028076', 
},
pa_product_optionA_css :{  //[LT] Gift card. 5th ave design
    selector : '#product-0500087541897', 
} ,
pa_product_optionB_css : { //[LT] capelli new york three-pack ankle socks
    selector :'#product-0500017515628',
},
pa_sortby_class : { //[LT]
    selector :'.sortby-dropdown',
},
pa_sortby_optionA_css : { //low to high //[LT]
    selector :'#pa-enh-sortby-dropdown > option:nth-child(5)',
},
pa_filterby_optionA_css : { //filter by PRICE //[LT]
    selector :'#price',
},
pa_filterbyCheckbox_optionA_css : { //UNDER $50 //[LT]
    selector :'#refinement-1535',
},
pa_filterbyCheckbox_optionB_css : { //UNDER $50 //[LT]
    selector :'#refinement-1536',
},
pa_filterbyApply_css : { //[LT]
    selector :'#js-pa-layer-price > div.sfa-pa-enh-refine-overlay > div.sfa-pa-enh-refine-control > a.action-link.sfa-pa-refine-apply-button.sfa-button.transactional',
},
pa_filterbyParameters_css : { //[LT]
    selector :'#js-pa-active-refinement > ul > li > a > span',
},
pa_paginationNumber_class : { //[LT]
    selector :'.pa-page-number',
},
pa_paginationRightArrow_css : { //[LT]
    selector :'#pc-top > ol > li.pa-enh-pagination-right-arrow > a',
},
pa_paginationPageSelected_class : { //[LT]
    selector :'.page-selected',
},
pa_leftnav_class : { //[LT]
    selector :'.sfa-left-nav-content-container',
},
pa_leftnavCategory_optionA_css : { //men //[LT]
    selector :'#refinement-302023696',
},
pa_productPrice_class : { //[LT]
    selector :'.product-price',
},

/****** Product Details Page  ******************************************************************************************/       
pdp_addtobag_btn: { //[LT]
    selector : 'div.add-to-bag > div > div > button',
},
pdp_qtySpinboxInc_class: { //[LT]
    selector : '.spinbox__increment',
},
pdp_qtySpinboxInc_btn: { //[LT]
    selector : 'div > button.spinbox__increment',
},
pdp_price_class: { //[LT]
    selector : '.product-pricing',
},
pdp_priceCurrency_css: { //[LT]
    selector : 'div > div:nth-child(3) > div > dl > dd > span:nth-child(1)',
},
/*TEST ITEM */        
pdp_color_optionA_item1_css : { 
    selector : 'div.product-color-options > ul > li:nth-child(3)',
    locateStratergy : 'css selector'
},
pdp_size_optionA_item1_css :{ //TEST ITEM: SOCKS. SELECT FIRST SIZE OPTION
    selector: 'div.product-size-options > ul > li:nth-child(1)',
},
pdp_color_optionA_item2_css : { //TEST ITEM: underwear
    selector : 'div.product-color-options > ul > li:nth-child(1)',
    locateStratergy : 'css selector'
},
pdp_size_optionA_item2_css :{ //TEST ITEM: underwear
    selector: 'div.product-size-options > ul > li:nth-child(2)',
},
/* PDP COLOR */
pdp_color_class : { //[LT]
    //selector : '.product-color-options',
    selector:'.product-variant-attribute-values',
},
pdp_size_class : { //[LT]
    selector : '.product-size-options',
},
pdp_color1_css : { //[LT]
    selector : 'div.product-color-options > ul > li:nth-child(1)',
},
pdp_color2_css : { //[LT]
    selector : 'div.product-color-options > ul > li:nth-child(2)',
},
pdp_color3_css : { //[LT]
    selector : 'div.product-color-options > ul > li:nth-child(3)',
},
pdp_colorValue_css :{ //[LT]
    selector: ' div.product-color-options > dl > dd',
},
/* PDP SIZE */
pdp_size1_css :{ //[LT]
    selector: 'div.product-size-options > ul > li:nth-child(1)',
},
pdp_size2_css :{ //[LT]
    selector: 'div.product-size-options > ul > li:nth-child(2)',
},
pdp_size3_css :{ //[LT]
    selector: 'div.product-size-options > ul > li:nth-child(3)',
},
pdp_sizeValue_css :{ //[LT]
    selector: ' div.product-size-options > dl > dd',
},
/* image*/
pdp_image1_css :{ //[LT]
    selector: '#s7SwatchContainer > div > div > div:nth-child(1)',
},
pdp_image2_css :{ //[LT]
    selector: '#s7SwatchContainer > div > div > div:nth-child(2)',
},

/* GIFT CARD*/
giftcard_purchase_btn :{ //[LT]
    selector : 'div.sfa-gift-new-button > a',
},
giftcard_purchaseoption_class :{ //[LT]
    selector : '.sfa-gift-new-card-options',
},
giftcard_purchasePhysical_css :{ //[LT]
    selector : 'div > div.sfa-gift-new-card-standard.not-highlight > h3',
},
pdp_giftcard_denomination_class :{ //[LT]
    selector : '.product-denomination-options',
},
pdp_giftcard_denomination_optionA_css :{ //[LT]
    selector : 'div.product-denomination-options > ul > li:nth-child(1)',
},
     
/* ************************************************ GIFT CARD ***********************************************************************************/
giftcard_purchaseOption_class :{
    selector : '.row',
},
giftcard_standardCard_css :{
    selector : 'div.CTA.parent.parbase.section > div > a',
},


/********** MINICART ************************************************************************************/ 
minicart_overlay_css : { //[LT]
    selector : '#SaksBagOverlay',
},
minicart_itemDetails_css : { //[LT]
    selector : 'td.saksBagItem',
},
minicart_checkout_css:{ //[LT]
    selector : 'div.footer.clearfix > a',
},
minicart_subtotal_css :{ //[LT]
    selector : 'div.sub-footer.clearfix > div.right-side.float-right > div',
},
minicart_itemPrice_css :{ //[LT]
    selector : 'td.saksBagItem > table > tbody > tr:nth-child(6) > td',
},
minicart_itemQty_css :{ //[LT]
    selector : 'td.saksBagItem > table > tbody > tr:nth-child(5) > td',
},
minicart_image_css :{ //[LT]
    selector : 'td:nth-child(2) > img',
},
/******* Shopping bag *******************************************************************************************/               
bag_title_css :{ //[LT]
    selector :'.masthead-saksbag-title',
},  
bag_checkout_css :{ //[LT]
    selector :'#jsStartCheckout',
}, 
bag_checkout_btn :{
    selector :'#jsEnterCheckout',
},
bag_loginOverlay_css :{ //[LT]
    selector :'#jsLoginWrap',
},
bag_lineItemVariants_class :{ //size/color 
    selector :'.shopping-bag-item__variants',
},
bag_emptyMsg_class :{ //[LT]
    selector :'.widebag-empty-message',
},
bag_zipEntry_css :{ //[LT]
    selector :'#jsBagZipCode',
},
/* login overlay on bag page*/
bag_emailEntry_css :{ //[LT]
    selector :'#loginEmail',
},
bag_passwordEntry_css :{ //[LT]
    selector :'#loginPass',
},
bag_loginCheckout_btn :{ //[LT]
    selector :'#jsQuickCheckout',
},
bag_loginGuestCheckout_btn :{ //[LT]
    selector :'#jsCheckoutRemediationGuestCheckout',
},

/* shoprunner */
bag_shoprunnerdiv_css :{ //[LT]
    selector :'#shopRunnerDiv',
},
bag_shoprunnerSignin_css :{ //[LT]
    selector :'#srd_h > div > div.srd_msg > span > a:nth-child(3)',
},
bag_shoprunnerOverlay_css :{ //[LT]
    selector :'#sr_modal_inner',
},
bag_shoprunnerLoginForm_css :{  //[LT]
    selector :'#sr_loginForm_box',
},     
bag_shoprunnerEmail_css :{ //[LT]
    selector :'#sr_signin_email',
},
bag_shoprunnerPassword_css :{ //[LT]
    selector :'#sr_signin_password',
}, 
bag_shoprunnerSecureSignin_btn :{ //[LT]
    selector :'#sr_sign_in_button',
},
bag_shoprunnerWelcomeOverlay_css :{ //[LT]
    selector :'#sr_welcome_back',
}, 
bag_shoprunnerWelcomeTitle_css :{ //[LT]
    selector :'#sr_welcome_back_title',
}, 
bag_shoprunnerOverlayX_btn :{ //[LT]
    selector :'#sr_close',
    //selector :'#sr_header_close',
},

/*********** CHECKOUT ************************************************************************************/  
/*shared values*/
checkout_firstName_css :{ //[LT]
    selector : '#shipFirst',
},
checkout_lastName_css :{ //[LT]
    selector : '#shipLast',
},
checkout_addressLine1_css :{ //[LT]
    selector : '#shipAddress1',
},
checkout_city_css :{ //[LT]
    selector : '#shipCity',
},
checkout_state_optionA_css :{ //[LT]
    selector : '#shipState > option:nth-child(48)',   //virginia
},
checkout_state_optionB_css :{ //[LT]
    selector : '#shipState > option:nth-child(32)',   //NJ
},
checkout_stateINTL_optionA_css :{ //[LT]
    selector : '#shipState > option:nth-child(10)', //ON, Canada
},
checkout_zip_css :{ //[LT]
    selector : '#shipZip',
},
checkout_phone_css :{ //[LT]
    selector : '#shipPhone',
},
checkout_paymentType_css :{ //[LT]
    selector : '#payCC-wrap',
},
checkout_paymentType_optionA_css :{ //[LT]
    selector : '#payCC > option:nth-child(5)',   //visa
},
checkout_paymentType_optionB_css :{ //[LT]
    selector : '#payCC > option:nth-child(4)', //MasterCard
},
checkou_paymentTypeINTL_optionA_css :{ //[LT]
    selector : '#payCC > option:nth-child(1)', //visa
},
checkout_paymentTypeINTL_optionB_css :{ //[LT]
    selector : '#payCC > option:nth-child(2)', //MasterCard 
},
checkout_ccNumber_css :{ //[LT]
    selector : '#payCCNum',
},
checkout_ccName_css :{ //[LT]
    selector : '#payCCName',
},
checkout_ccMonth_optionA_css :{ //[LT]
    selector : '#ccMonth > option:nth-child(13)', //last option on the dropdown
},
checkout_ccYear_optionA_css :{ //[LT]
    selector : '#ccYear > option:nth-child(8)', 
},
checkout_CVV_css :{ //[LT]
    selector : '#payCCV',
},

/* SB - shipping & billing page*/
checkout_SB_navTab_css :{ //[LT]
    selector : '#tab-shipbill',
},
checkout_SB_header_css :{ //[LT]
    selector : '#shipping-tab-header',
},
checkout_SB_email_css :{ //[LT]
    selector : '#shipEmail',
},
checkout_SB_continue_btn :{ //[LT]
    selector : '.button-group-item',
},
checkout_SB_QASoverlay_css:{ //[LT]
    selector : '#jsAddressVerificationLayer',
},
checkout_SB_QAS_originalAddress_class:{ //[LT]
    selector : '.original-address',
},
checkout_SB_QAS_suggestedlAddress_class:{ //[LT]
    selector : '.suggested-address',
},
checkout_SB_QAS_suggestedlAddress_optionA_css :{ //[LT]
    selector:'#validate_address_service > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(3)',
},
checkout_SB_QAS_useSuggestedAddress_btn:{ //[LT]
    selector : '#jsUseSuggested',
},
/* P - payment page*/
checkout_P_navTab_css :{ //[LT]
    selector : '#tab-payment',
},
checkout_P_paymentForm_css :{ //[LT]
    selector : '#submit_payment_service',
},
checkout_P_continue_btn :{ //[LT]
    selector : '#jsCompletePayment',
},

/* RS - review & submit page*/
checkout_RS_navTab_css :{ //[LT]
    selector : '#tab-review',
},
checkout_RS_CVV_css :{ //[LT]
    selector : '#reviewCC',
},
checkout_RS_placeOrder_btn :{ //[LT]
    selector : '#jsReviewSubmit',
},

/* RS - review & submit page - billing*/
checkout_RS_billingAddress_class :{ //[LT]
    selector : '.billing-address-summary',
},
checkout_RS_billingEdit_class :{ //[LT]
    selector : '.jsEditBillAddress',
},
checkout_RS_billingOverlay_css :{ //[LT]
    selector : '#jsBillingAddressLayerWrap',
},
checkout_RS_selectExistBillAddress_css :{ //[LT]
    selector : '#jsBillingAddressLayerWrap > div.modal-content > div > div > div:nth-child(1) > label',
},
checkout_RS_selectExistBillAddress_optionB_css :{ //[LT]
    selector : '#jsExistingBillingDropDown > option:nth-child(2)',
},
checkout_RS_enterNewBillAddress_css :{ //[LT]
    selector : '#jsNewBillingAddress',
},
checkout_RS_newBillCountry_optionA_css :{ //[LT]
    selector : '#jsBillingCountryDropDown > option:nth-child(2)', //usa
},
checkout_RS_newBillCountryINTL_optionA_css :{ //[LT]
    selector : '#jsBillingCountryDropDown > option:nth-child(3)', //CANADA
},
checkout_RS_newBillFirstName_css :{ //[LT]
    selector : 'div.field.textbox.required.grid-28.suffix-4.grid-parent > label > input[type="text"]',
},
checkout_RS_newBillLastName_css :{ //[LT]
    selector : 'div.field.textbox.required.grid-30.grid-parent > label > input[type="text"]',
},
checkout_RS_newBillAddressStreet_css :{ //[LT]
    selector : 'div.field.textbox.required.grid-66.suffix-4.grid-parent > label > input[type="text"]',
},
checkout_RS_newBillCity_css :{ //[LT]
    selector : 'div.field.textbox.required.grid-34.suffix-4.grid-parent > label > input[type="text"]',
},
checkout_RS_newBillState_optionB_css :{ //[LT]
    selector : '#jsBillingStateDropDown > option:nth-child(33)', //NJ
},
checkout_RS_newBillStateINTL_optionB_css :{ //[LT]
    selector : '#jsBillingStateDropDown > option:nth-child(10)', //ON, CANADA
},
checkout_RS_newBillZip_css :{ //[LT]
    selector : '#billZip',
},
checkout_RS_newBillPhone_css :{ //[LT]
    selector : 'div.field.textbox.required.grid-36.suffix-64.grid-parent > label > input[type="text"]',
},
checkout_RS_billOverlayApply_btn :{ //[LT]
    selector : '#jsUpdateBillingAddress',
},
checkout_RS_billingAddressStreet_css :{ //[LT]
    selector : '#jsVal-billingAddress > address > span.street-address > span:nth-child(1)',
},
checkout_RS_billingAddressCity_css :{ //[LT]
    selector : '#jsVal-billingAddress > address > span.locality',
},
checkout_RS_billingAddressZip_css :{ //[LT]
    selector : '#jsVal-billingAddress > address > span.postal-code',
},


/* RS - review & submit page - shipping*/
checkout_RS_shippingAddress_class :{ //[LT]
    selector : '.shipping-address-summary',
},
checkout_RS_shippingEdit_class :{ //[LT]
    selector : '.jsChangeShipAddress',
},
checkout_RS_shippingOverlay_css :{ //[LT]
    selector : '#jsShippingAddressLayerWrap',
},
checkout_RS_selectExistShipAddress_css :{ //[LT]
    selector : '#jsShippingAddressLayerWrap > div.modal-content > div > div > div:nth-child(1) > label > span',
},
checkout_RS_selectExistShipAddress_optionB_css :{ //[LT]
    selector : '#jsExistingShippingDropDown > option:nth-child(3)',
},
checkout_RS_enterNewShipAddress_css :{ //[LT]
    selector : '#jsShippingAddressLayerWrap > div.modal-content > div > div > div:nth-child(3) > label > span',
},
checkout_RS_shippingOverlayApply_css :{ //[LT]
    selector : '#jsUpdateShippingAddress',
},
checkout_RS_shippingAddressStreet_css :{ //[LT]
    selector : '#jsVal-billingAddress > address > span.street-address > span:nth-child(1)',
},
checkout_RS_shippingAddressCity_css :{ //[LT]
    selector : '#jsVal-billingAddress > address > span.locality',
},
checkout_RS_shippingAddressZip_css :{ //[LT]
    selector : '#jsVal-billingAddress > address > span.postal-code',
},


/* RS - review & submit page - promo*/
checkout_RS_promo_top_class :{ //[LT]
    selector : '.promotion-summary',
},
checkout_RS_promoEdit_css :{ //[LT]
    selector : '#main-form-parent > div > div.grid.grid-parent > div:nth-child(3) > div > ul > li > a > span.font-icon.font-icon-pencil',
},
checkout_RS_promoOverlayApply_btn :{ //[LT]
    selector : '#promoApply > span',
},
checkout_RS_promoOverlayClose_btn :{ //[LT]
    selector : '#jsEditPromoCode > div.modal-header > a',
},



/* RS - review & submit page - payment*/
checkout_RS_paymentInfo_class :{ //[LT]
    selector : '.payment-method-summary',
},
checkout_RS_paymentType_css :{ //[LT]
    selector : '#jsVal-creditCard',
},
checkout_RS_selectExistPayment_css :{ //[LT]
    selector : '#creditCardId',
},
checkout_RS_selectExistPayment_optionB_css :{ //[LT]
    selector : '#creditCardId > option:nth-child(2)',
},
checkout_RS_selectExistPaymentINTL_optionB_css :{ //[LT]
    selector : '#creditCardId > option:nth-child(2)',
},
checkout_RS_paymentEdit_class :{ //[LT]
    selector : '.jsEditCreditCard',
},
checkout_RS_paymentOverlay_css :{ //[LT]
    selector : '#jsGenericModal',
},
checkout_RS_newPaymentType_css :{ //[LT]
    selector : '#newCreditCard-wrap > label',
},
checkout_paymentOverlayApply_btn :{ //[LT]
    selector : '#jsSaveCreditCard',
},

/* RS - review & submit page - shipping method*/
checkout_RS_shippingMethod_class :{ //[LT]
    selector : '.shipping-method-summary',
},
checkout_RS_shippingMethodINTL_class :{ //[LT]
    selector : '.international-shipping-method',
},
checkout_RS_shippingMethodDetails_class :{ //[LT]
    selector : '.jsAddressLevelShipping',
},
checkout_RS_shippingMethod_optionB_css :{ //[LT]
    selector : 'div.grid.grid-parent.select-shipping-method.jsAddressLevelShipping > div:nth-child(2) > label',
},
checkout_RS_shippingMethod_shoprunner_css :{ //[LT]
    selector : 'div.shipping-method-summary.grid-28.grid-parent > form > div > div > label > span',
},
checkout_RS_shippingMethodINTL_optionB_css :{ //[LT]
    selector : ' div.international-shipping-method > div:nth-child(3) > label',
},
checkout_RS_shippingMethodSelected_class :{ //[LT]
    selector : '.selected',
},

   
/******************************** Thank You page*****************************************************************************************/ 
thankyou_header_class: { //[LT]
    selector : '.thank-you-header',
},
thankyou_details_css: { //[LT]
    selector : '.receipt-order-detail-list',
},
   
 /********** International***************************************/  
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
    selector : '#INTCOUNTRY > option:nth-child(16)', //CANADA
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
  









    }
}