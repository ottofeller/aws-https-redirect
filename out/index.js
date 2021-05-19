'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var awsHttpsRedirect = function (params) {
    var _a;
    if (params.request && params.request.headers['x-forwarded-proto'] !== 'https' && ((_a = params.response) === null || _a === void 0 ? void 0 : _a.writeHead)) {
        params.response.writeHead(301, { Location: "https://" + params.request.headers.host + params.request.url }).end();
    }
};

exports.awsHttpsRedirect = awsHttpsRedirect;
