/* the values listed on this pageObj.js file maps to each js file in step_definitions folder */

/*
If selected DOM element is xpath ,then we need to make changes to locatestrategy accordingly.
prod_desc_class : {
    selector: '//[@name="q"]',
    locateStrategy: 'xpath'
},

*/

const account = require('./segmentation/account.js')
const bag = require('./segmentation/bag.js')
const checkout = require('./segmentation/checkout.js')
const common = require('./segmentation/common.js')
const headerFooter = require('./segmentation/headerFooter.js')
const international = require('./segmentation/international.js')
const minicart = require('./segmentation/minicart.js')
const productArray = require('./segmentation/productArray.js')
const productDetails = require('./segmentation/productDetails.js')
const shoprunner = require ('./segmentation/shoprunner.js')

module.exports = {
    elements: {
        ...account,
        ...bag,
        ...common,
        ...checkout,
        ...headerFooter,
        ...international,
        ...minicart,
        ...productArray,
        ...productDetails,
        ...shoprunner
        }
}
