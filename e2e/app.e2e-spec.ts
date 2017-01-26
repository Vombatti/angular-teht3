import { AngularTeht3Page } from './app.po';

describe('angular-teht3 App', function() {
  let page: AngularTeht3Page;

  beforeEach(() => {
    page = new AngularTeht3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
