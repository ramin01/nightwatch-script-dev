module.exports = {
    /******** HEADER FOOTER ***********************************************************************************/

    /* WELCOME SECTION */
    header_welcomediv_class :{
        selector : 'div.hbc-header__account > div > a',
    },
    header_welcomeName_css : {
        selector:'div.hbc-header__account > div > div > a > div',
    },
    header_welcomeDropdown_css : {
        selector : '#ui-header > div > header > div > div.hbc-header__account > div > div > a > span',
    },
    header_welcomeSignout_class :{
        selector:'.account-dropdown__item--last',
    },
    header_welcomeSignout_css:{
        selector:'div.hbc-header__account > div > div > div > div > a',
    },
    header_welcomeSignout_btn:{
        selector:'#ui-header > div > header > div > div.hbc-header__account > div > div > div > div.account-menu__item.account-dropdown__item--last > a',
    },
    header_welcomeSignin_css : {
        selector:'#ui-header > div > header > div > div.hbc-header__account > div > a > span',
    },
    header_bag_qty_class:{
        selector:'.header-bag__bag-num',
    },

    /* SEARCH */
    header_searchBar_class : {
        selector : '.header-search__input',
    },
    header_searchSubmit_btn : {
        selector:'.header-search__button--search',
    },
    /* TOP NAV */
    header_navigation_class :{
        selector : '.navigation',
    },
    header_navigationPane_class :{
        selector : '.navigation__pane--active',
    },
    header_subcategory_class :{
        selector : '.subcategory__container',
    },
    header_category_optionA_css:{ //3rd category shoes
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > a',
    },
    header_categoryColumn_optionA_css:{ //3rd category, 1st column
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > ul > div > li:nth-child(1) > ul > li',
    },
    header_categoryColumnSubcategory_optionA_css:{ //3rd category, 1st column, 1st subcategory link
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > ul > div > li:nth-child(1) > ul > li > ul > li:nth-child(1) > a > span',
    },
    topnav_links : {
        selector: '#navigationMenu > div > ul > li:nth-child(n) > a',
    },
    productArray_Static_Page_Title : {
        selector: '#landing-page-navigation > nav > div.sfa-left-nav-content-container > ul > li > ul:nth-child(2) > li.js-links-title.links-title > span',
    }, 
    topnav_featured_designers : {
        selector: '#featuredDesigner-list > h3',
    },
    
    /* FOOTER */
    footer_css : {
        selector : '#footer-wrapper',
    },
    footer_column_optionA_css : { //column 2
        selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1)',
    },
    footer_columnGiftCard_css : { //gift card cta
        selector:'div:nth-child(2) > section > article:nth-child(4) > ul > li.hbc-site-map__link.hbc-site-map__link--hide-mobile > a',
    },
    footer_columnCreateAccount_css : { //Create A More! Account
        selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1) > ul > li:nth-child(5) > a',
    },
    footer_links : {
          selector: 'a[href="$footerlinksString"]',
    },
    
    ShippingPolicyPage_css :{
        selector :'#main-zone > div > h1',
    },

    ReturnsAndExchangesPage_css :{
        selector :'#main-zone > div > h2:nth-child(3)',
    },
    
    CheckOrderStatusPage_css:{
        selector :'#account-content-area > div > div.account__body-section > div:nth-child(1) > div > div > div.sign-in__order-status > div > h2',    
    },   
  
    BuyOnlinePage_css :{
        selector :'#main-zone > div.banner-container > div > div.banner-col.banner-col_left > div > img',
    },
    
    ReturnsPage_css :{
        selector :'div[class="login-sidebar-text"]',
    },
  
    InternationalShippingPage_css :{
         selector :'#main-zone > div > h1',
     },
    
    FindAStoreButton_css :{
         selector :'a[href="/locations/?page=1&storesPerPage=5"]',
     },
        
    StartReturnButton_css :{
         selector :'#main-zone > div > div:nth-child(17) > a > button',
     },
    
    FindOutMoreLink_css :{    
         selector : 'a[href="/main/static_content.jsp?pageId=shipping-international"]',
     },      
    static_Page_Heading : {
      selector: 'div[class="$staticPageHeadingString"] > h2 > span',
    },
    input_Location : {
      selector: 'input[placeholder="Search a Location"]',
    },
    store_Locator_Search_Button : {
      selector: 'div[aria-label="search"]',     
    },   
     //store_Result : {
          //selector:
        //},     
    Page_heading_css : {
        selector: '#main-zone > div > h1',
    },  
    BridalSalon_link_css : {
        selector: '#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1) > ul > li:nth-child(3)',
    },    
    BridalSalon_heading : {
        selector: 'div > div > div.bw__ServiceCardFlagship__name',
    },         
    saks_saksfirst : {
      selector: '#sf2017-topleftnav > div.saks-sf-logo > img',
    },
    saks_saksfirst_storecard_yourinformation : {
      selector: 'form-builder[role="form"]',
    },
    saks_footer_payandmanagestorecard : {
      selector: '#ui-footer > footer > div:nth-child(2) > section > article:nth-child(3) > ul > li:nth-child(3) > a',
    },
    saks_saksfirst_storecard_signin : {
      selector: 'form[name="formLogin"]',
    },
    saks_footer_payandmanagesaksmc : {
      selector: '#ui-footer > footer > div:nth-child(2) > section > article:nth-child(3) > ul > li:nth-child(4) > a',
    },
    saks_saksmastercard_signin : {
      selector: 'form[name="formLogin"]',
    },
    saks_saksstyle_termsofuse : {
      selector: '#curalate-gallery-section > div.curalate-terms-header > a',
    },
    saks_catalogs_class : {
      selector: 'div[class="landing-title"]',
    },
    saks_footer_giftcard_purchasebutton : {
      selector: 'span[class="sfa-gift-new-button-purchase"]',
    },
    
}