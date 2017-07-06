import { JiraPage } from './app.po';

describe('jira App', () => {
  let page: JiraPage;

  beforeEach(() => {
    page = new JiraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
