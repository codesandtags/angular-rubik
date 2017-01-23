import { AngularDeskPage } from './app.po';

describe('angular-desk App', function() {
  let page: AngularDeskPage;

  beforeEach(() => {
    page = new AngularDeskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
