import axios from 'axios'

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await axios.get(`http://localhost:8080/`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello!' });
  });
});
