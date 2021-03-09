<template>
  <div>
    Response: {{ result }}
  </div>
</template>

<script>
export default {
  async asyncData ({ app }) {
    await app.$skyloud('mails').root().get('/')
    await app.$skyloud('bookings').root().get('/')
    await app.$skyloud('payments').root().get('/')
    return {
      result: 'success'
    }
  }
}
</script>
