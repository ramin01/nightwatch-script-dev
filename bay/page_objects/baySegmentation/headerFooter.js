module.exports = {
    /******** HEADER FOOTER ***********************************************************************************/
    /* WELCOME SECTION */
    header_welcomediv_class :{
        selector : 'div.hbc-header__account > div > a',
    },
    header_welcomeSignin_css : {
        selector:'#ui-header > div > header > div > div.hbc-header__account > div > a > span',
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
    } ,
    header_navigationPane_class :{
        selector : '.navigation__pane--active',
    } ,
    header_subcategory_class :{
        selector : '.subcategory__container',
    },
    header_category_optionA_css:{ //3rd category
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > a',
    },
    header_categoryColumn_optionA_css:{ //3rd category, 2nd column
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > ul > div > li:nth-child(2)',
    },
    header_categoryColumnSubcategory_optionA_css:{ //3rd category, 2nst column, 1st subcategory link
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(6) > ul > div > li:nth-child(2) > ul > li:nth-child(1) > ul > li:nth-child(1) > a',
    },
    /* FOOTER */
    footer_css : {
        selector : '#footer-wrapper',
    },
    footer_column_optionA_css : { //column 3
        selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(2)',
    },
    footer_columnGiftCard_css : { //gift card cta
        selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(2) > ul > li:nth-child(1) > a',
    },
    static_Page_Heading : { 
        selector:'h2[class="$staticPageHeadingTitle"]',
    },
    static_Page_Title_Heading : { 
        selector:'h1',
    },
    footer_links_class : { 
        selector:'a[href="$footerlinkString"]',
    },

    /**** HEDAER LINKS */
    header_menu_class:{ //3rd category, 2nd column
        selector : '.login-remediation',
    },
    header_bridallink_css : {
        selector:'#bridal-link',
    },
    header_giftregistrylink_css : {
        selector:'#gift-registry-link',
    },
    header_giftregistryheadertitle_class : {
        selector:'.header-title',
    },
    header_viewflyerlink_css : {
        selector:'#flyer-link',
    },
    header_viewflyerpopup_css:{
        selector:'div#modal_window_title.fb-redbox-h2',
    },
    header_viewflyerpopup_class:{
        selector:'.redbox_border',
    },
    header_changelanguagelink_css:{
        selector:'#change-language-link',
    },
    header_headertext_class:{
        selector:'.header-text',
    },
    header_subtitile_class:{
        selector:'.header-subtitle',
    },
}