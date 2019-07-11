const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const saksPageObj = client.page.saksPageObj()

var references = require('../page_objects/saksPageObj')
var ref = references.elements
var {saksConstants : constants} = client.globals

    /****************************************************************************************************/
    /*
    Description: Search up item with a product ID
    Optional Variable(s): newProductID
    Acceptable Use:
        I enter this product id
        I enter this product id 0400095634138
    Note(s):
        Use the product ID you want. The above one is just an example
    */
    /****************************************************************************************************/
    When(/^I enter this product id ?(.*?)$/, (newProductID) => {

        var productID = constants.product_ID_item7

        if(Boolean(newProductID))
            productID = newProductID

        return saksPageObj

        .setValue('@header_searchBar_class', productID)
        .click('@header_searchSubmit_btn')
    })

    Then(/^I should be taken to a PDP of this product$/, () => {
        return saksPageObj

        .waitForElementPresent('@prod_desc_class', constants.timeout_median)
    })

