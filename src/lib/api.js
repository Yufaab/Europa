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

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  async getOrder(orderid) {
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/order/${orderid}`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async createOrder(data) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/order`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          data,
          isNewMember: true
        }
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async updateOrder(data, orderid) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/order`,
        headers: {
          Authorization: `JWT ${this.getToken()}`
        },
        data: {
          ...data,
          orderid,
          isNewMember: false
        }
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export default YufaabInstance;
