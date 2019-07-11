module.exports = {
    /******** HEADER FOOTER ***********************************************************************************/    /* WELCOME SECTION */
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
    } ,
    header_navigationPane_class :{
        selector : '.navigation__pane--active',
    } ,
    header_subcategory_class :{
        selector : '.subcategory__container',
    },
    header_category_optionA_css:{ //3rd category
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(8) > a',
    },
    header_categoryColumn_optionA_css:{ //3rd category, 1st column
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(8) > ul > div > li:nth-child(1) > ul > li',
    },
    header_categoryColumnSubcategory_optionA_css:{ //3rd category, 1st column, 1st subcategory link
        selector : '#navigationMenu > div.navigation__pane.navigation__pane--active > ul > li:nth-child(8) > ul > div > li:nth-child(1) > ul > li > ul > li:nth-child(1) > a > span',
    },
    topnav_links : {
        selector: '#navigationMenu > div > ul > li:nth-child(n) > a',
    },
    topnav_designer_letter_list : {
        selector: '#designer-letter-list > span',
    },
    
    /* FOOTER */
    footer_css : {
        selector : '#footer-wrapper',
    },
    footer_column_optionA_css : { //column 2
        selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1)',
    },
    footer_columnGiftCard_css : { //gift card cta
        selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1) > ul > li.hbc-site-map__link.hbc-site-map__link--hide-mobile > a',
    },
    footer_columnCreateAccount_css : { //Create A More! Account
        selector:'#ui-footer > footer > div:nth-child(2) > section > article:nth-child(1) > ul > li:nth-child(5) > a',
    },
}