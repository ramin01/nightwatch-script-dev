## Running local test

1) to get started, in terminal, install the following 
```
npm i
```
```
npm install moment --save
```

2) Execution of tests
* The banners are split with a SMOKETEST_BANNER variable. To manually set it and run tests do the following

```
export SMOKETEST_BANNER=insertBannerHere

example: export SMOKETEST_BANNER=saks
```

Insert whatever banner you want to test above (saks, o5a, bay, or lat)

Then you can run your test with the follow command

```
npm run nightwatch -- yourTestPath

example: npm run nightwatch -- saks/features/checkout/checkoutGuestOrder.feature
```

If you don't want to manually set SMOKETEST_BANNER then you can do the following

```
npm run nightwatch-auto -- yourTestPath

example: npm run nightwatch-auto -- yourTestPath
```

This script will check for the keywords saks, o5a, bay, and lat in the thrown arguments, and 
set the banner according to that

3) Running tags

Enter either of the two commands

```
npm run nightwatch -- --tag yourTagName
npm run nighwatch-auto -- --tag yourTagName

example: npm run nighwatch -- --tag saks_checkout_regression
```

Note: remember to leave out the @ sign here

4) Helpful resources

```
https://nightwatchjs.org/api

https://cucumber.io/docs/cucumber/

https://cucumber.io/docs/gherkin/reference/
```

## Authors
team Totoro and others

## Acknowledgments

