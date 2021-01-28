var express = require('express'),
    http = require('http');
    bodyParser = require('body-parser'),
    proxy = require('express-http-proxy'),
    urlHelper = require('url');
const latexService = require('./latexService.js')

var app = express();

app.set('port', 3000);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))

app.get("/latex/convert", latexService.convert)
app.post("/latex/convert", bodyParser.json({ limit: '1mb' }), latexService.convert);


app.all(['/api/framework/v1/read/*', '/learner/framework/v1/read/*', '/api/channel/v1/read/*'], proxy('dev.sunbirded.org', {
    https: true,
    proxyReqPathResolver: function(req) {
        console.log('proxyReqPathResolver ',  urlHelper.parse(req.url).path);
        return urlHelper.parse(req.url).path;
    },
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        console.log('proxyReqOptDecorator')
        // you can update headers
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        proxyReqOpts.headers['user-id'] = 'content-editor';
        proxyReqOpts.headers['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzZGNjMzY3OWIwYTE0NmU2YWYyZjlmZDA5NWU5NTlkNCJ9.0NZhX5sqUNy-GZUya90aQFkr5ZNiqfOuELYz_IvoyS8';
        return proxyReqOpts;
    }
}));


app.use(['/api','/assets','/action'], proxy('dock.sunbirded.org', {
    https: true,
    proxyReqPathResolver: function(req) {
        console.log('proxyReqPathResolver ',  urlHelper.parse(req.url).path);
        return urlHelper.parse(req.url).path;
    },
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        console.log('proxyReqOptDecorator')
        // you can update headers
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        proxyReqOpts.headers['user-id'] = 'content-editor';
        proxyReqOpts.headers['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZDExNjYzN2Y5YjU0MWJiYjU3NDY3MTA2Yjk1YzllYSJ9.Bb8ThNzcBvhouPdtRa_UXnZgi3m2zZN5Skhke1_YlM0';
        return proxyReqOpts;
    }
}));

app.use('/content/preview/*', proxy('https://dock.sunbirded.org', {
    https: true,
    proxyReqPathResolver: function(req) {
        return require('url').parse('https://dock.sunbirded.org' + req.originalUrl).path
    },
    proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
        console.log('proxyReqOptDecorator')
        // you can update headers 
        proxyReqOpts.headers['Content-Type'] = 'application/json';
        proxyReqOpts.headers['user-id'] = 'content-editor';
        proxyReqOpts.headers['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiZDExNjYzN2Y5YjU0MWJiYjU3NDY3MTA2Yjk1YzllYSJ9.Bb8ThNzcBvhouPdtRa_UXnZgi3m2zZN5Skhke1_YlM0';
        // proxyReqOpts.headers['X-Authenticated-User-Token'] = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJsclI0MWpJNndlZmZoQldnaUpHSjJhNlowWDFHaE53a21IU3pzdzE0R0MwIn0.eyJqdGkiOiJhYzgyOGRkNC0wNTFkLTRkNDItOWZhNC0xMmFhMjY0NTRiOTAiLCJleHAiOjE2MTAxOTgzNjksIm5iZiI6MCwiaWF0IjoxNjEwMTExOTY5LCJpc3MiOiJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJhdWQiOiJwcm9qZWN0LXN1bmJpcmQtZGV2LWNsaWVudCIsInN1YiI6ImY6NWE4YTNmMmItMzQwOS00MmUwLTkwMDEtZjkxM2JjMGZkZTMxOjk1ZTQ5NDJkLWNiZTgtNDc3ZC1hZWJkLWFkOGU2ZGU0YmZjOCIsInR5cCI6IkJlYXJlciIsImF6cCI6InByb2plY3Qtc3VuYmlyZC1kZXYtY2xpZW50IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiZGFiNjNmZGYtN2Q2NC00OWVmLWJiMjItYzY1YzRhM2ZmNGFhIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sIm5hbWUiOiJSZXZpZXdlciBVc2VyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibnRwdGVzdDEwMyIsImdpdmVuX25hbWUiOiJSZXZpZXdlciIsImZhbWlseV9uYW1lIjoiVXNlciIsImVtYWlsIjoidXMqKioqQHlvcG1haWwuY29tIn0.Tt2Iu9nH0-6Ld1Fkh9vRASRkJ9pyIgrWK20-Bz9CJK3Bc2bwZmAyOuStpMjjundVBZPXV6Zjves-ZYSuC05BtOmAWEZ7eoExwACf9aotP1F_noTnlATIXHoe60UIU3XQIbKMhE4R_ap-W3fGjGBSeCreLDc2E5v86GkeWNNGMMm6N7QhIzdr_rKKqpWOvTTb-D8wtSI-wefCrie7tQ6PYKCnmurVt0CUdyN9BIn7Ias5zKO4tuP_AIBC8y-8Gml6zh4aOltsXKqmux7u7d43WL4s1CBe7nJUj43u1BC-2SOKtPuZpksOuvH3BJoNQ82867G1D2ZVH92BrmjrKICAeg';
        return proxyReqOpts;
    }
}));

http.createServer(app).listen(app.get('port'), 3000);