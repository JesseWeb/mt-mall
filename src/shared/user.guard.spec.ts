import { TokenGuard } from './user.guard';

describe('UserGuard', () => {
  it('should be defined', () => {
    expect(new TokenGuard()).toBeDefined();
  });
});
