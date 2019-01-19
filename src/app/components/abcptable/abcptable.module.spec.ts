import { AbcptableModule } from './abcptable.module';

describe('AbcptableModule', () => {
  let abcptableModule: AbcptableModule;

  beforeEach(() => {
    abcptableModule = new AbcptableModule();
  });

  it('should create an instance', () => {
    expect(abcptableModule).toBeTruthy();
  });
});
