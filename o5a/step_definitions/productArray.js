const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /****************************************************************************************************/
    /*
    Description: Open the quicklook for a specified item
    Variable(s): itemNumber
    Acceptable Use:
        I open quicklook for item 1
    Note(s):
        Use the item number that you want
    */
    /****************************************************************************************************/

    When(/^I open quicklook for item (.*?)$/, (itemNumber) => {

        /*There is div between every row of items. The below lines will factor in that row so that the correct
        div is selected*/
        itemNumber = parseInt(itemNumber, 10)
        itemNumber = itemNumber + Math.floor(itemNumber/4)

        var itemHoverSelector = ref.pa_generic_hover_item.selector.replace('(n)', '(' + itemNumber + ')')
        var itemQuickLookSelector = ref.pa_generic_quicklook_box.selector.replace('(n)', '(' + itemNumber + ')')

        return client

        .waitForElementPresent(itemHoverSelector, constants.timeout_min)
        /*I use undefined here because moveToElement requires 3 arguments. The first is the selector name, and the other
        2 are x and y coordinates. If i pass undefined for x and y then it will default to the middle of the element.
        Defaulting to the middle makes it have more consistent behavior between different resolutions. */
        .moveToElement(itemHoverSelector,undefined,undefined)

        /*I kept getting the selenium bug where the element wasn't clickable, and thats why I used the below execute
        and scrollIntoView functions. It'll still work without this, but its just less consistent*/
        .execute(function() {
            document.querySelector(itemQuickLookSelector).scrollIntoView()
        })
        .click(itemQuickLookSelector)
    })

    Then(/^I should see the quicklook overlay$/, () => {
        return o5aPageObj

        .waitForElementPresent('@pa_quicklookOverlay_class', constants.timeout_min)
    })

    /********************************** Close quicklook ************************************************/

    When(/^I click on quicklook close icon$/, () => {
        return o5aPageObj

        .waitForElementPresent('@pa_quicklook_close_icon_css', constants.timeout_min)
        .click('@pa_quicklook_close_icon_css')
    })

    Then(/^I should no longer see the quicklook overlay$/, () => {
        return o5aPageObj

        .waitForElementNotVisible('@pa_quicklookOverlay_class', constants.timeout_min)
    })
    
    /****************************************************************************************************/
    /*
    Description: Go to the pdp for a specified item
    Variable(s): itemNumber
    Acceptable Use:
        I click on item 1
    Note(s):
        Use the item number that you want
    */
    /****************************************************************************************************/

    When(/^I click on item (.*?)$/, (itemNumber) => {
      itemNumber = parseInt(itemNumber, 10)
      itemNumber = itemNumber + Math.floor(itemNumber/4)

      var itemSelector = ref.pa_generic_item.selector.replace('(n)', '(' + itemNumber + ')')

      return client

      .waitForElementPresent(itemSelector, constants.timeout_min)
      .click(itemSelector)
    })  
    /***************************** Product Array section **********************************************/
  
    When(/^I click on category in left nav$/, () => {
        return o5aPageObj
        .click('@categoryApparel_css')
    })
    
    When(/^I click on sub_category in left nav$/, () => {
        return o5aPageObj
        .click('@sub_categoryDresses_css')
    })
    
    When(/^I click on sub_categoryCocktail in left nav$/, () => {
        return o5aPageObj
        .click('@sub_categoryCocktail_css')
    })
    
    Then(/^I should see pa_heading$/, () => {
        return o5aPageObj
        .waitForElementPresent('@pa_heading_css', constants.timeout_median)
    })
    
    When(/^I click pa_paginationRightArrow$/, () => {
        return o5aPageObj
        .click('@pa_paginationRightArrow_css')
    })  
    Then(/^I should see pa_paginationPageSelected$/, () => {
        return o5aPageObj
        .waitForElementPresent('@pa_paginationPageSelected_class', constants.timeout_median)
    })  
    
    /* PA Filter By */  
    When(/^I click on filter color in Filter By$/, () => {
        return o5aPageObj
        .click('@pa_filter_color_css')
    })  
    Then(/^I should see pa_color_panel$/, () => {
        return o5aPageObj
        .waitForElementPresent('@pa_color_panel_css', constants.timeout_median)
    })
    When(/^I click on first color$/, () => {
        return o5aPageObj
        .click('@pa_first_color_css')
    })  
    Then(/^I should see apply button$/, () => {
        return o5aPageObj
        .waitForElementPresent('@pa_apply_button_css', constants.timeout_median)
    })  
    When(/^I click apply button$/, () => {
        return o5aPageObj
        .click('@pa_apply_button_css')
    })  
    When(/^I click on filter size in Filter By$/, () => {
        return o5aPageObj
        .click('@pa_filter_size_css')
    })  
    Then(/^I should see pa size panel$/, () => {
        return o5aPageObj 
        .waitForElementPresent('@pa_size_panel_css', constants.timeout_median)
    })
    When(/^I click on first size$/, () => {
        return o5aPageObj
        .click('@pa_first_size_css')
    })  
    
    
    