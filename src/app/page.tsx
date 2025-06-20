'use client'

import {
  CreditCard,
  Smartphone,
  Wallet,
  RefreshCw,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from 'lucide-react'

import BearerTokens from '@/components/configurators/bearertokens'
import Header from '@/components/layout/header'
import ContentPanels from '@/components/panels/ContentPanels'
import ResultsLogs from '@/components/status/Results.Logs'
import { BearerToken, BearerTokenTitle } from '@/types/general'

export default function Home() {
  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto max-w-7xl p-6">
        <Header
          title="Payment Testing Suite"
          subTitle="Test different payment methods and track transaction flows"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Configuration Panels */}
          <div className="space-y-6">
            {/* JWT Configuration */}
            <ContentPanels
              title="Authentication"
              description="Configure JWT tokens for client and server authentication"
            >
              <>
                <BearerTokens
                  type={BearerToken.CLIENT_TOKEN}
                  title={BearerTokenTitle.CLIENT_TOKEN}
                  subTitle="Provide the client token for authentication"
                />
                <BearerTokens
                  type={BearerToken.SERVER_TOKEN}
                  title={BearerTokenTitle.SERVER_TOKEN}
                  subTitle="Priovide the server token for authentication"
                />
              </>
            </ContentPanels>
            {/* Payment Configuration */}
            <ContentPanels
              title="Payment Configuration"
              description="Configure payment method and amount"
            >
              <div>
                <p>CONTENT INCOMING</p>
              </div>
            </ContentPanels>
          </div>
          {/* Results Panel*/}
          <div className="space-y-6">
            <ContentPanels
              title="Transaction Results"
              description="Real-time payment processing steps and results"
            >
              <ResultsLogs />
            </ContentPanels>
          </div>
        </div>
      </div>
    </div>
  )
}
