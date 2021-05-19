'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var awsHttpsRedirect = function (params) {
    if (params.request && params.request.headers['x-forwarded-proto'] !== 'https' && params.response.writeHead) {
        params.response.writeHead(301, { Location: "https://" + params.request.headers.host + params.request.url }).end();
    }
};

exports.awsHttpsRedirect = awsHttpsRedirect;
