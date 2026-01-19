import axios from 'axios';

export class HttpService {

    baseUrl: string;
    instance: any;

    get defaultHeaders() {
        return {
            'Content-Type': 'application/json',
        };
    }

    constructor(baseURL = 'https://localhost:44377') {
        this.baseUrl = baseURL;
        this.instance = axios.create({ baseURL: this.baseUrl });
    }


    async request(method: string, url: string, data = null, customHeaders = {}) {
        const headers = { ...this.defaultHeaders, ...customHeaders };
        const source = axios.CancelToken.source();

        const config: any = {
            method,
            url,
            headers,
            cancelToken: source.token
        };

        if (data) {
            config.data = data;
        }

        return this.instance(config);
    }


    get(url: string, customHeaders = {}) {
        return this.request('get', url, null, customHeaders);
    }

    post(url: string, data: any, customHeaders = {}) {
        return this.request('post', url, data, customHeaders);
    }

    put(url: string, data: any, customHeaders = {}) {
        return this.request('put', url, data, customHeaders);
    }

    delete(url: string, customHeaders = {}) {
        return this.request('delete', url, null, customHeaders);
    }
}