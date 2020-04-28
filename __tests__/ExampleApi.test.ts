import { ExampleApi } from '../src/api/ExampleApi';

describe('ExampleApi', () => {
  test('isValid', async () => {
    ExampleApi.setHost('http://192.168.1.33:7000');
    const res = await ExampleApi.isValid('a');
    expect(Object.hasOwnProperty.call(res, 'status'));
    expect(res.status).toBe(200);
  });
});
