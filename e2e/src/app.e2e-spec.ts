import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
   page = new AppPage();

  });
 
  it('should click on "Signin Instead" link', () => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 25000;
    page.navigateTo();
    browser.sleep(1000);
    expect(page.clickLink());
    browser.sleep(2000);
    expect(page.clickCreateAccount());
    browser.sleep(2000);
    expect(page.getFirstName());
    browser.sleep(2000);
    expect(page.getLastName());
    browser.sleep(3000);
    expect(page.getUserName());
    browser.sleep(3000);
    expect(page.getPasswords());
    browser.sleep(7000);  
    expect(page.getConfirmPassword());
    browser.sleep(7000);
    // browser.sleep(1000);
    expect(page.clickNext());
    browser.sleep(3000);
    expect(page.clickSignIn());
    browser.sleep(3000);
    expect(page.getEmailId());
    browser.sleep(2000);
    expect(page.getPassword());
    browser.sleep(2000);
    // expect(page.clickVisibilityButton());
    // browser.sleep(3000);
    // expect(page.clickVisibilityButton());
    // browser.sleep(7000);  
    // browser.sleep(1000);
    expect(page.clickNextButton());
    browser.sleep(3000);
  });

});
