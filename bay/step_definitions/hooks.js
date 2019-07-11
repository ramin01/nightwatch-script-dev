const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const bayPageObj = client.page.bayPageObj()
const { After } = require('cucumber')

var references = require('../page_objects/bayPageObj')
var ref = references.elements
var {bayConstants : constants} = client.globals

    After({tags: '@bay_endSession'}, function() {

        return client.deleteCookies()
      })
      
