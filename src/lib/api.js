import axios from 'axios';

class YufaabInstance {
  constructor(host) {
    this.host = host;
  }

  async signUpHandler(data) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/student/signup`,
        data: {
          ...data,
        },
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      return e;
    }
  }

  async loginHandler(data) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/student/login`,
        data: {
          ...data,
        },
      };
      const res = await axios(options);
      return res;
    } catch (e) {
      return e;
    }
  }
}

export default YufaabInstance;
