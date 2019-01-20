import { ArchiveFooterModule } from './archive-footer.module';

describe('ArchiveFooterModule', () => {
  let archiveFooterModule: ArchiveFooterModule;

  beforeEach(() => {
    archiveFooterModule = new ArchiveFooterModule();
  });

  it('should create an instance', () => {
    expect(archiveFooterModule).toBeTruthy();
  });
});
