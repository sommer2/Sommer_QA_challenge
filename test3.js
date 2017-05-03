module.exports = {
  'Test3': function(browser) {
    browser
      .url('https://www.tesla.com/models/design')
      .waitForElementVisible('body')
      .pause(1000)

    var css = "[class='bookButton us-ca-done']"
    browser.click(css)

    // send keys
    var cardCss = "#edit-cc-cardnumber"
    browser.sendKeys(cardCss, "1234567890123456")
    browser.click(cardCss)

    // confirm that no error message appears
    css = "#parsley-id-64"

    browser.element('css selector', css, function(result){
      browser.assert.equal(result.status, -1)
    });

    browser.end();
  }
};
