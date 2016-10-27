'use strict';
import React, {Component} from "react";

const HOST = 'https://api.douban.com/v2/';

export default class Request {
    static doubaiList() {
        return Request._request('movie/in_theaters?city=118172&count=50');
    }
}

Request._request = (url) => {
    let newUrl = HOST + url;
    return new Promise((resolve, reject) => {
        fetch(newUrl, {
            method: 'GET',
            headers: {},
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((json) => {
            resolve(json);
        }).catch((error) => {
            reject(error);
        }).done();
    });
};
