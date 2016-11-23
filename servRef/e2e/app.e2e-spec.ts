import { ServRefPage } from './app.po';

describe('serv-ref App', function() {
  let page: ServRefPage;

  beforeEach(() => {
    page = new ServRefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
