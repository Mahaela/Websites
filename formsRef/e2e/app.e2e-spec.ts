import { FormsRefPage } from './app.po';

describe('forms-ref App', function() {
  let page: FormsRefPage;

  beforeEach(() => {
    page = new FormsRefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
