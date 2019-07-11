const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

//Creating a variable to click through all the links from top nav

When(/^I click on the top nav link for this (.*?) category$/, (topnavNumber) => {
    var topnavlinksSelector = ref.topnav_links.selector.replace('(n)', '(' + topnavNumber + ')')  //defining variable "topnavlinksSelector" to represent each of the footer links

    return client 

    .waitForElementVisible(topnavlinksSelector, constants.timeout_median)  //checking to see if the link ("topnavlinksSelector") exist
    .click(topnavlinksSelector)   //clicking on the link
})

Then(/^I should see page breadcrumbs$/, () => {

return o5aPageObj

.waitForElementPresent('@pa_breadcrumbs_css', constants.timeout_median)

})* 

/**********NOTES**********/
// ** (n) represents the child number associated to the links
// Designers = 2
// Women's Apparel = 8
// Shoes & Bags = 10
// Jewelry & Accessories = 12
// Beauty = 14
// Men = 16
// Kids = 18
// Home = 20
// Sale = 22

// DESIGNERS
Then(/^I should be redirected to the Designers list page$/, () => {

return o5aPageObj

      .waitForElementVisible('@topnav_designer_letter_list', constants.timeout_median)

})
