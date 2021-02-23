import { get, setupTest } from '@nuxt/test-utils'

describe('ssr', () => {
  setupTest({ server: true })

  it('can call skyloud api on asyncData hook', async () => {
    const { body } = await get('/asyncData')

    expect(body).toContain('success')
  })
})
