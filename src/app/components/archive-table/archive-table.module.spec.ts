import { ArchiveTableModule } from './archive-table.module';

describe('ArchiveTableModule', () => {
  let archiveTableModule: ArchiveTableModule;

  beforeEach(() => {
    archiveTableModule = new ArchiveTableModule();
  });

  it('should create an instance', () => {
    expect(archiveTableModule).toBeTruthy();
  });
});
