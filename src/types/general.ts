export interface BearerTokens {
  type: BearerTokenTypes
}

export type BearerTokenTypes = {
  SERVER_TOKEN: BearerToken.SERVER_TOKEN
  CLIENT_TOKEN: BearerToken.CLIENT_TOKEN
}

export enum BearerToken {
  SERVER_TOKEN = 'serverBearerToken',
  CLIENT_TOKEN = 'clientBearerToken',
}
export enum BearerTokenTitle {
  SERVER_TOKEN = 'Server Bearer Token',
  CLIENT_TOKEN = 'Client Bearer Token',
}
