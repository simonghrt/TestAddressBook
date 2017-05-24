import { TestAddressBookPage } from './app.po';

describe('test-address-book App', () => {
  let page: TestAddressBookPage;

  beforeEach(() => {
    page = new TestAddressBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
