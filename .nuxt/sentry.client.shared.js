import merge from '~lodash.mergewith'
import { init } from '~@sentry/vue'
import * as CoreSdk from '~@sentry/core'
import * as BrowserSdk from '~@sentry/browser-sdk'
import { ExtraErrorData, ReportingObserver, RewriteFrames } from '~@sentry/integrations'

export { init }
export const SentrySdk = { ...CoreSdk, ...BrowserSdk }

export function getConfig (ctx) {
  /* eslint-disable object-curly-spacing, quote-props, quotes, key-spacing, comma-spacing */
  const config = {
    dsn:"https:\u002F\u002Feeadd4a49212a8a9366043f9ed580788@logs.storeino.com\u002F39",
    environment:"development",
    debug:true,
  }

  config.integrations = [
    new ExtraErrorData(),
    new ReportingObserver({ types:["crash"] }),
    new RewriteFrames(),
  ]

  const runtimeConfigKey = "sentry"
  if (ctx.$config && runtimeConfigKey && ctx.$config[runtimeConfigKey]) {
    merge(config, ctx.$config[runtimeConfigKey].config, ctx.$config[runtimeConfigKey].clientConfig)
  }

  return config
}
