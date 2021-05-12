export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  /* ?: body is not required but if user sent it will be any */
  body?: any
}
