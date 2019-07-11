const { client } = require('nightwatch-cucumber')
const { Given, When, Then, run } = require('../../_helpers/step')
const o5aPageObj = client.page.o5aPageObj()
const { After } = require('cucumber')

var references = require('../page_objects/o5aPageObj')
var ref = references.elements
var {o5aConstants : constants} = client.globals

    After({tags: '@o5a_endSession'}, function() {

        return client.deleteCookies()
      })