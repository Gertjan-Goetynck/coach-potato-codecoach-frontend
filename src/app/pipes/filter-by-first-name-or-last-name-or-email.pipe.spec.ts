import { FilterByFirstNameOrLastNameOrEmailPipe } from './filter-by-first-name-or-last-name-or-email.pipe';

describe('FilterByFirstNameOrLastNameOrEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByFirstNameOrLastNameOrEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
