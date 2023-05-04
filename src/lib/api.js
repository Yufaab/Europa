import axios from 'axios';

class YufaabInstance {
  constructor(host) {
    this.host = host;
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
      if (res.status === 201) {
        this.setToken(res.data.data.token);
      }
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
      if (res.status === 201) {
        this.setToken(res.data.data.token);
      }
      return res;
    } catch (e) {
      return e;
    }
  }

  async logoutHandler() {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/student/logout`,
        headers: {
          Authorization: `JWT ${this.getToken()}`,
        },
      };
      const res = await axios(options);
      if (res.status === 200) {
        this.removeToken();
      }
      return res;
    } catch (e) {
      return e;
    }
  }

  async getOrder(orderid) {
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/order/${orderid}`,
        headers: {
          Authorization: `JWT ${this.getToken()}`,
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
          Authorization: `JWT ${this.getToken()}`,
        },
        data: {
          data,
          isNewMember: true,
        },
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
          Authorization: `JWT ${this.getToken()}`,
        },
        data: {
          ...data,
          orderid,
          isNewMember: false,
        },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async deleteOrder(data, orderid) {
    try {
      const options = {
        method: 'DELETE',
        url: `${this.host}/student/order/${orderid}`,
        headers: {
          Authorization: `JWT ${this.getToken()}`,
        },
        data: {
          ...data,
        },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async getAllOrders() {
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/student/order`,
        headers: {
          Authorization: `JWT ${this.getToken()}`,
        },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async uploadReview(data) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/api/review/upload`,
        data: {
          ...data,
        },
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async fetchReviews() {
    try {
      const options = {
        method: 'GET',
        url: `${this.host}/api/review/fetch`,
      };
      const response = await axios(options);
      return response;
    } catch (error) {
      return error;
    }
  }

  async makePayment(amount) {
    try {
      const options = {
        method: 'POST',
        url: `${this.host}/student/payment`,
        headers: {
          Authorization: `JWT ${this.getToken()}`,
        },
        data: {
          amount,
        },
      };
      const res = await axios(options);
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
}

export default YufaabInstance;
