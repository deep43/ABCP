import { ABCPLandingModule } from './abcplanding.module';

describe('AbcplandingModule', () => {
  let abcplandingModule: ABCPLandingModule;

  beforeEach(() => {
    abcplandingModule = new ABCPLandingModule();
  });

  it('should create an instance', () => {
    expect(abcplandingModule).toBeTruthy();
  });
});
