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

export enum PaymentTabWallets {
  applePay = 'Apple Pay',
  googlePay = 'Google Pay',
  payPal = 'PayPal',
}

export enum PaymentWallets {
  APPLE_PAY = 'applePay',
  GOOGLE_PAY = 'googlePay',
  PAY_PAL = 'payPal',
}

export type GlobalError = {
  message: string
  name: string
  stack: string
}

interface PspTypes {
  id: string
  pspAccountId: string
  pspAccountAlias: string
}

export interface ClientConfigResponse {
  id: string
  code: string
  message: string
  permitCreditCards: boolean
  digitalWallets: object
  apmProviders: object
  configuredPsps: Array<PspTypes>
  riskEngines: object
  googlePayRestrictedAuthMethod: string
}

/*
{
    applePay: {
      pspId: 'FUSE'
      merchantAccountId: 'merchant.bridge.testing'
      countryCode: 'GB'
      pspAccountId: ''
      supportedNetworks: ['visa', 'mastercard', 'amex']
    }
    googlePay: {
      pspId: 'NUVEI'
      merchantAccountId: 'demoShopMerchant'
      countryCode: ''
      pspAccountId: ''
      gateway: 'comcarde'
      supportedNetworks: []
    }
    payPal: {
      pspId: 'PAYPAL'
      merchantAccountId: '6RZ25YB5RY8U6'
      countryCode: ''
      pspAccountId: ''
      clientId: 'AbCu7T96FYkhO3A-n4UISt-up55h6wtvWB7O5BQVX2Owy7fjoFn8GF3TJP18XCor4Qg5AeLCeFLT2g5j'
      bridgePartnerAccount: 'sandbox'
    }
  }
 */

/*
{
    VIS: {
      enabled: true
      configuration: {
        environment: 'sandbox'
        merchantCategory: '5818'
        merchantReferenceId: 'xxx123'
        partnerMerchantReferenceId: 'abc123'
      }
    }
    IDEAL: {
      enabled: true
      configuration: {}
    }
    BANCONTACT: {
      enabled: true
      configuration: {}
    }
  }
 */
