const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

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

        var productID = constants.product_ID_item1

        if(Boolean(newProductID))
            productID = newProductID

        return bayPageObj

        .setValue('@header_searchBar_class', productID)
        .click('@header_searchSubmit_btn')
    })

    Then(/^I should be taken to a PDP of this product$/, () => {
        return bayPageObj

        .waitForElementPresent('@prod_desc_class', constants.timeout_median)
    })

