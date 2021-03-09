import _ from 'lodash'

const apiAccountsBaseUrl = '<%= options.apiAccountsBaseUrl || "https://accounts.skyloud.app" %>'
const apiMailsBaseUrl = '<%= options.apiMailsBaseUrl || "https://mails.skyloud.app" %>'
const apiBookingsBaseUrl = '<%= options.apiBookingsBaseUrl || "https://bookings.skyloud.app" %>'
const apiPaymentsBaseUrl = '<%= options.apiPaymentsBaseUrl || "https://payments.skyloud.app" %>'

export default function (ctx, inject) {
  const apiEndpointsByName = {
    accounts: apiAccountsBaseUrl,
    mails: apiMailsBaseUrl,
    bookings: apiBookingsBaseUrl,
    payments: apiPaymentsBaseUrl
  }

  function fromSkyloudApi (apiName) {
    const apiEndpointUrl = _.get(apiEndpointsByName, apiName)
    if (_.isEmpty(apiEndpointUrl)) {
      throw new Error(`No api with name "${apiName}"`)
    }
    const api = ctx.app.$axios.create({ 
      headers: {
        common: {
          'x-app-id': '<%= options.appId || "" %>',
        }
      }
    })
    api.setBaseURL(apiEndpointUrl)
    
    return {
      apiEndpointUrl,
      root() {
        return api;
      },
      public() {
        api.setBaseURL(`${apiEndpointUrl}/v1/public`);
        return api;
      },
      private() {
        api.setBaseURL(`${apiEndpointUrl}/v1/private`);
        return api;
      },
      admin() {
        api.setBaseURL(`${apiEndpointUrl}/v1/admin`);
        return api;
      }
    }
  }

  ctx.$skyloud = fromSkyloudApi
  inject('skyloud', fromSkyloudApi)
}
