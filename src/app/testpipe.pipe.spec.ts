import { TestpipePipe } from './testpipe.pipe';

describe('TestpipePipe', () => {
  it('test custom pipe', () => {
    const value = 10
    const pipe = new TestpipePipe();
    const result = pipe.transform(value);
    expect(result).toBe(5);
  });
});
