import { ResponseVO } from './responseVo'

export enum HttpCode {
  OK = 200,
  CREATED = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export class Result {
  private readonly code: number
  private readonly message: string
  private readonly data?: object | null

  constructor (code: number, message: string, data?: object | null) {
    this.code = code
    this.message = message
    this.data = data
  }

  /***
   * Serverless: According to the API Gateway specs, the body content must be stringified
  ***/
  bodyToString (): ResponseVO {
    return {
      code: this.code,
      message: this.message,
      data: this.data
    }
  }
}

export const success = (code = HttpCode.OK, data: object | null, message = 'success'): ResponseVO => {
  const result = new Result(code, message, data)
  return result.bodyToString()
}

export const error = (code = HttpCode.INTERNAL_SERVER_ERROR, message = 'error'): ResponseVO => {
  const result = new Result(code, message, null)
  return result.bodyToString()
}
