import { RoutRefPage } from './app.po';

describe('rout-ref App', function() {
  let page: RoutRefPage;

  beforeEach(() => {
    page = new RoutRefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
