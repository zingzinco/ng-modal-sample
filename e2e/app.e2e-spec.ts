import { ModalSamplePage } from './app.po';

describe('modal-sample App', () => {
  let page: ModalSamplePage;

  beforeEach(() => {
    page = new ModalSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
