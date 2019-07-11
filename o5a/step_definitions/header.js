const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    /****************************************************************************************************/
    /*
    Description: Search up item with a product ID
    Optional Variable(s): newProductID
    Acceptable Use:
        I enter this product id
        I enter this product id 0400097014780
    Note(s):
        Use the product ID you want. The above one is just an example
    */
    /****************************************************************************************************/
    When(/^I enter this product id ?(.*?)$/, (newProductID) => {

        var productID = constants.product_ID_item4

        if(Boolean(newProductID))
            productID = newProductID

        return o5aPageObj

        .setValue('@header_searchBar_class', productID)
        .click('@header_searchSubmit_btn')
    })

    Then(/^I should be taken to a PDP of this product$/, () => {
        return o5aPageObj

        .waitForElementPresent('@prod_desc_class', constants.timeout_median, true)
    })
