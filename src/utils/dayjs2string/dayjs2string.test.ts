import dayjs from 'dayjs';
import dayjs2string from './dayjs2string';

describe('dayjs2string', () => {
  it('should parse a dayjs object to string', () => {
    const dateStr = dayjs2string(dayjs('2023-03-03'));
    expect(dateStr).toEqual('2023-03-03');
  });
});
