import { AngularPrimePage } from './app.po';

describe('angular-prime App', () => {
  let page: AngularPrimePage;

  beforeEach(() => {
    page = new AngularPrimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
