/* the values listed on this pageObj.js file maps to each js file in step_definitions folder 

If selected DOM element is xpath ,then we make changes to locatestrategy accordingly.
prod_desc_class : {
    selector: '//[@name="q"]',
    locateStrategy: 'xpath'
     
*/

const account = require('./baySegmentation/account.js')
const bag = require('./baySegmentation/bag.js')
const bopis = require('./baySegmentation/bopis.js')
const checkout = require('./baySegmentation/checkout.js')
const common = require('./baySegmentation/common.js')
const headerFooter = require('./baySegmentation/headerFooter.js')
const minicart = require('./baySegmentation/minicart.js')
const productArray = require('./baySegmentation/productArray.js')
const productDetails = require('./baySegmentation/productDetails.js')
const quicklook = require('./baySegmentation/quicklook.js')

module.exports = {
     elements: {
        ...account,
        ...bag,
        ...bopis,
        ...checkout,
        ...common,
        ...headerFooter,
        ...minicart,
        ...productArray,
        ...productDetails,
        ...quicklook,
        }
}