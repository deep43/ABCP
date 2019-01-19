import { FooterModule } from './footerModule.module';

describe('FooterModule', () => {
  let xyzModule: FooterModule;

  beforeEach(() => {
    xyzModule = new FooterModule();
  });

  it('should create an instance', () => {
    expect(FooterModule).toBeTruthy();
  });
});
