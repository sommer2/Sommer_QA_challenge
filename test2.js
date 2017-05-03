module.exports = {
  'Test2': function(browser) {
    browser
      .url('https://www.tesla.com/models/design')
      .waitForElementVisible('body')
      .pause(1000)

    var css = "[class='bookButton us-ca-done']"
    browser.click(css)

    // send keys
    browser.sendKeys("#edit-usermail", "my Invalid Info")
    browser.pause(1000)

    // send keys to another field so that error message populates in the first one
    css = "#edit-confirm-mail"
    browser.sendKeys(css, "my Invalid Info2")


    // now confirm the original error
    css = "#parsley-id-8"
    browser.waitForElementVisible(css)
    browser.getText(css ,function(result){
      browser.assert.equal(result.value, 'not a valid email');
    })


    browser.end();
  }
};
