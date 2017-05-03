module.exports = {
  'Test1': function(browser) {
    browser
      .url('https://www.tesla.com/models/design')
      .waitForElementVisible('body')
      .pause(1000)

    var css = '#options_category_C_BAT [data-code=BTX5]'
    browser.waitForElementVisible(css)

    browser.getText(css ,function(result){
      console.log('myOutput: ',result.value);
    });

    browser.click(css)

    css = '#options_category_C_MOTOR [data-code=DV4W]'
    browser.click(css)

    css = '.option-select[data-code=APPA]'
    browser.click(css)

    css = '.option-select[data-code=CH05]'
    browser.click(css)

    // paint
    css = "#dash_tab_C_EXT"
    browser.click(css)

    css = "#COL3-PPMR"
    browser.waitForElementVisible(css)
    browser.click(css)

    // rims
    css = "#dash_tab_C_BODY"
    browser.click(css)

    css = "#C_WT-WTSG"
    browser.waitForElementVisible(css)
    browser.click(css)

    css = "#C_RF-RFP2" // a nice sunroof
    browser.click(css)

    // interior
    browser.pause(2000)
    css = "#dash_tab_C_INT"
    browser.click(css)

    css = "#C_INTPKG_BASE-INWLT"
    browser.waitForElementVisible(css)
    browser.click(css)

    // check price
    css = "[href='#cash']"
    browser.click(css)

    browser.pause(1000) // make sure price updates

    css = "#cash"
    browser.waitForElementVisible(css)
    // assert 1
    browser.assert.containsText(css, '$97,300');

    // click next **************
    css = "[class='bookButton us-ca-done']"
    browser.click(css)

    // assert 2
    css = ".model-name"
    browser.waitForElementVisible(css)
    browser.getText(css ,function(result){
     browser.assert.equal(result.value, 'Model S 75 kWh All-Wheel Drive');
    })

    // assert 3
    css = "[class='options-wrapper hide-on-mobile']"
    browser.getText(css ,function(result){
     browser.assert.equal(result.value, 'Exterior\nRed Multi-Coat Paint\nSunroof\n21" Grey Turbine Wheels\nInterior\nTan Leather Tesla Premium Seats\nFigured Ash Wood Décor\nIntegrated Center Console\nWhite Alcantara Headliner\nOptions\nHigh Amperage Charger Upgrade\nEnhanced Autopilot');
    })

    // close browser
    browser.end();
  }
};
