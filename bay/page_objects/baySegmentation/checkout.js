module.exports = {
    /*********** CHECKOUT ************************************************************************************/
    checkout_addressFormCont_btn:{
        selector: '#save_shipping_address_service > div.grid.grid-parent.top-divided > div > ul',
    },
    checkout_confirmAddress_btn:{
        selector: '#jsUseEntered'
    },
    
    //Everything below is objects from Saks page objects
    /*shared values*/
    checkout_firstName_css :{
        selector : '#shipFirst',
    },
    checkout_lastName_css :{
        selector : '#shipLast',
    },
    checkout_addressLine1_css :{
        selector : '#shipAddress1',
    },
    checkout_city_css :{
        selector : '#shipCity',
    },
    checkout_state_optionA_css :{
        selector : '#shipState > option:nth-child(10)', //ON, Canada
    },
    checkout_stateFR_optionA_css :{
        selector : '#shipState > option:nth-child(8)', //ON, Canada
    },
    checkout_zip_css :{
        selector : '#shipZip',
    },
    checkout_phone_css :{
        selector : '#shipPhone',
    },
    checkout_paymentSelection:{
        selector: '#payCC'
    },
    checkout_paymentType_css :{
        selector : '#payCC-wrap',
    },
    checkout_paymentType_optionA_css :{
        selector : '#payCC > option:nth-child(5)',   //visa
    },
    checkout_paymentType_optionB_css :{
        selector : '#payCC > option:nth-child(4)', //MasterCard
    },
    checkout_ccNumber_css :{
        selector : '#payCCNum',
    },
    checkout_ccName_css :{
        selector : '#payCCName',
    },
    checkout_ccMonth_optionA_css :{
        selector : '#ccMonth > option:nth-child(13)', //last option on the dropdown
    },
    checkout_ccYear_optionA_css :{
        selector : '#ccYear > option:nth-child(5)', //5th option on the dropdown
    },
    checkout_CVV_css :{
        selector : '#payCCV',
    },
    //checkout_RS_newBillState_optionB_css :{
    checkout_billState_optionB_css :{
        selector : '#jsBillingStateDropDown > option:nth-child(10)', //ON, CANADA
    },
    //checkout_RS_newBillStateFR_optionB_css :{
    checkout_billStateFR_optionB_css :{
        selector : '#jsBillingStateDropDown > option:nth-child(8)', //ON, CANADA french
    },

    /* SB - shipping & billing page*/
    checkout_SB_navTab_css :{
        selector : '#tab-shipbill',
    },
    checkout_SB_header_css :{
        selector : '#shipping-tab-header',
    },
    checkout_SB_email_css :{
        selector : '#shipEmail',
    },
    checkout_SB_continue_btn :{
        selector : '.button-group-item',
    },

    /* SB - BOPIS_billing*/
    checkout_SB_bill_countryDropDown_optionA_css :{
        selector : '#jsBillingCountryDropDown > option:nth-child(2)',
    },
    checkout_SB_bill_firstName_css :{
        selector : 'div.field.textbox.required.grid-28.suffix-4.grid-parent > label > input[type="text"]',
    },
    checkout_SB_bill_lastName_css :{
        selector : '#save_billing_address_service > div:nth-child(3) > div:nth-child(2) > label > input[type="text"]',
    },
    checkout_SB_bill_addressLine1_css :{
        selector : 'div.field.textbox.required.grid-66.suffix-4.grid-parent > label > input[type="text"]',
    },
    checkout_SB_bill_city_css :{
        selector : 'div.field.textbox.required.grid-36.suffix-4.grid-parent > label > input[type="text"]',
    },
    checkout_SB_bill_zip_css :{
        selector : '#billingZipArea > label > input[type="text"]',
    },
    checkout_SB_bill_email_css :{
        selector : '#billEmail',
    },
    checkout_SB_bill_continue_css :{
        selector : '#jsCompleteShippingBilling',
    },
    /* SB - QAS*/

    checkout_SB_QASoverlay_css:{
        selector : '#jsAddressVerificationLayer',
    },
    checkout_SB_QAS_originalAddress_class:{
        selector : '.original-address',
    },
    checkout_SB_QAS_suggestedlAddress_class:{
        selector : '.suggested-address',
    },
    checkout_SB_QAS_suggestedlAddress_optionA_css :{ //[LT]
        selector:'#validate_address_service > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(3)',
    },
    checkout_SB_QAS_useSuggestedAddress_btn:{
        selector : '#jsUseSuggested',
    },
    /* P - payment page*/
    checkout_P_navTab_css :{
        selector : '#tab-payment',
    },
    checkout_P_paymentForm_css :{
        selector : '#submit_payment_service',
    },
    checkout_P_continue_btn :{
        selector : '#jsCompletePayment',
    },

    /* RS - review & submit page*/
    checkout_RS_navTab_css :{
        selector : '#tab-review',
    },
    checkout_RS_CVV_css :{
        selector : '#reviewCC',
    },
    checkout_RS_placeOrder_btn :{
        selector : '#jsReviewSubmit',
    },
    checkout_RS_editIcon_css :{
        selector : 'div.grid.grid-parent > div.grid-20 > ul > li:nth-child(1) > a',
    },
    checkout_RS_giftCard_css:{
        selector: 'a[class="action-link jsEditGiftCard"]'
    },
    checkout_RS_giftCardNumber_css:{
        selector: '#payGCNum'
    },
    checkout_RS_giftCardPIN_css:{
        selector: '#payGCPIN'
    },
    checkout_RS_giftCardApply:{
        selector: 'span[class="sfa-button-text"]'
    },

    /* RS - review & submit page - billing*/
    checkout_RS_billingAddress_class :{
        selector : '.billing-address-summary',
    },
    checkout_RS_billingEdit_class :{
        selector : '.jsEditBillAddress',
    },
    checkout_RS_billingOverlay_css :{
        selector : '#jsBillingAddressLayerWrap',
    },
    checkout_RS_selectExistBillAddress_css :{
        selector : '#jsBillingAddressLayerWrap > div.modal-content > div > div > div:nth-child(1) > label > span',
    },
    checkout_RS_selectExistBillAddress_optionB_css :{
        selector : '#jsExistingBillingDropDown > option:nth-child(2)',
    },
    checkout_RS_enterNewBillAddress_css :{
        selector : '#jsBillingAddressLayerWrap > div.modal-content > div > div > div:nth-child(3) > label',
    },
    checkout_RS_newBillCountry_optionA_css :{
        selector : '#jsBillingCountryDropDown > option:nth-child(2)', //CANADA
    },
    checkout_RS_newBillFirstName_css :{
        selector : 'div.field.textbox.required.grid-28.suffix-4.grid-parent > label > input[type="text"]',
    },
    checkout_RS_newBillLastName_css :{
        selector : 'div.field.textbox.required.grid-30.grid-parent > label > input[type="text"]',
    },
    checkout_RS_newBillAddressStreet_css :{
        selector : 'div.field.textbox.required.grid-66.suffix-4.grid-parent > label > input[type="text"]',
    },
    checkout_RS_newBillCity_css :{
        selector : 'div.field.textbox.required.grid-34.suffix-4.grid-parent > label > input[type="text"]',
    },
    checkout_RS_newBillZip_css :{
        selector : '#billZip',
    },
    checkout_RS_newBillPhone_css :{
        selector : 'div.field.textbox.required.grid-36.suffix-64.grid-parent > label > input[type="text"]',
    },
    checkout_RS_billOverlayApply_btn :{
        selector : '#jsUpdateBillingAddress',
    },
    checkout_RS_billingAddressStreet_css :{
        selector : '#jsVal-billingAddress > address > span.street-address > span:nth-child(1)',
    },
    checkout_RS_billingAddressCity_css :{
        selector : '#jsVal-billingAddress > address > span.locality',
    },
    checkout_RS_billingAddressZip_css :{
        selector : '#jsVal-billingAddress > address > span.postal-code',
    },


    /* RS - review & submit page - shipping*/
    checkout_RS_shippingAddress_class :{
        selector : '.shipping-address-summary',
    },
    checkout_RS_BOPISshippingAddress_class :{
        selector : '.shipping-address-summary-bopus',
    },
    checkout_RS_BOPISpickupPerson_class :{
        selector : '.bopus-pickup-person-summary',
    },
    checkout_RS_shippingEdit_class :{
        selector : '.jsChangeShipAddress',
    },
    checkout_RS_shippingOverlay_css :{
        selector : '#jsShippingAddressLayerWrap',
    },
    checkout_RS_selectExistShipAddress_css :{
        selector : '#jsShippingAddressLayerWrap > div.modal-content > div > div > div:nth-child(1) > label > span',
    },
    checkout_RS_selectExistShipAddress_optionB_css :{
        selector : '#jsExistingShippingDropDown > option:nth-child(3)',
    },
    checkout_RS_enterNewShipAddress_css :{
        selector : '#jsShippingAddressLayerWrap > div.modal-content > div > div > div:nth-child(3) > label > span',
    },
    checkout_RS_shippingOverlayApply_css :{
        selector : '#jsUpdateShippingAddress',
    },
    checkout_RS_shippingAddressStreet_css :{
        selector : '#jsVal-billingAddress > address > span.street-address > span:nth-child(1)',
    },
    checkout_RS_shippingAddressCity_css :{
        selector : '#jsVal-billingAddress > address > span.locality',
    },
    checkout_RS_shippingAddressZip_css :{
        selector : '#jsVal-billingAddress > address > span.postal-code',
    },


    /* RS - review & submit page - promo*/
    checkout_RS_promo_top_class :{
        selector : '.promotion-summary',
    },
    checkout_RS_promoEdit_css :{
        selector : '#main-form-parent > div > div.grid.grid-parent > div:nth-child(3) > div > ul > li > a > span.font-icon.font-icon-pencil',
    },
    checkout_RS_promoOverlayApply_btn :{
        selector : '#promoApply > span',
    },
    checkout_RS_promoOverlayClose_btn :{
        selector : '#jsEditPromoCode > div.modal-header > a',
    },



    /* RS - review & submit page - payment*/
    checkout_RS_paymentInfo_class :{
        selector : '.payment-method-summary',
    },
    checkout_RS_paymentType_css :{
        selector : '#jsVal-creditCard',
    },
    checkout_RS_selectExistPayment_css :{
        selector : '#creditCardId',
    },
    checkout_RS_selectExistPayment_optionB_css :{
        selector : '#creditCardId > option:nth-child(2)', //mastercard
    },
    checkout_RS_paymentEdit_class :{
        selector : '.jsEditCreditCard',
    },
    checkout_RS_paymentOverlay_css :{
        selector : '#jsGenericModal',
    },
    checkout_RS_newPaymentType_css :{
        selector : '#newCreditCard-wrap > label',
    },
    checkout_paymentOverlayApply_btn :{
        selector : '#jsSaveCreditCard',
    },

    /* RS - review & submit page - shipping method*/
    checkout_RS_shippingMethod_class :{
        selector : '.shipping-method-summary',
    },
    checkout_RS_shippingMethodDetails_class :{
        selector : '.jsAddressLevelShipping',
    },
    checkout_RS_shippingMethod_optionB_css :{
        selector : 'div.grid.grid-parent.select-shipping-method.jsAddressLevelShipping > div:nth-child(2) > label',
    },
    checkout_RS_shippingMethodSelected_class :{
        selector : '.selected',
    },


    /******************************** Thank You page*****************************************************************************************/
    thankyou_header_class: {
        selector : '.thank-you-header',
    },
    thankyou_details_css: {
        selector : '.receipt-order-detail-list',
    },
}