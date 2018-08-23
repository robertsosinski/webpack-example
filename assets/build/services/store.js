export default class Store {
  constructor(namespace) {
    this.namespace = namespace;
  }

  all() {
    let data = localStorage.getItem(this.namespace);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  get(idx) {
    return this.all()[idx];
  }

  add(val) {
    let data = this.all().concat(val);
    setLocalStorage(this.namespace, data);
    return data;
  }

  put(idx, val) {
    let data = this.all();
    data[idx] = val;
    setLocalStorage(this.namespace, data);
    return data;
  }

  del(idx) {
    let data = this.all();
    data.splice(idx, 1);
    localStorage.setItem(this.namespace, JSON.stringify(data));
    return data;
  }
}

function setLocalStorage(namespace, val) {
  return localStorage.setItem(namespace, JSON.stringify(val));
}