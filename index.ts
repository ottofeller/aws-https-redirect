import {IncomingMessage, ServerResponse} from 'http'

export const awsHttpsRedirect = (params: {request: IncomingMessage, response: ServerResponse}) => {
  if(params.request && params.request.headers['x-forwarded-proto'] !== 'https' && params.response.writeHead) {
    params.response.writeHead(301, {Location: `https://${params.request.headers.host}${params.request.url}`}).end()
  }
}
