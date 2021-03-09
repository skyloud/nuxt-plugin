import { get, setupTest } from '@nuxt/test-utils'

describe('ssr', () => {
  setupTest({ server: true })

  it('can call skyloud api on asyncData hook', async () => {
    const { body } = await get('/asyncData')

    expect(body).toContain('success')
  })

  it('should use custom endpoint uri', async () => {
    const { body } = await get('/customEndpoint')

    expect(body).toContain('http://localhost:8000')
  })
})
