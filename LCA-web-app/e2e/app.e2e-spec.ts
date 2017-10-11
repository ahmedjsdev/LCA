import { LCAWebAppPage } from './app.po';

describe('lca-web-app App', () => {
  let page: LCAWebAppPage;

  beforeEach(() => {
    page = new LCAWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
