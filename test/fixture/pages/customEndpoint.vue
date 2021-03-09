<template>
  <div>
    {{ result }}
  </div>
</template>

<script>
export default {
  asyncData ({ app }) {
    return {
      result: app.$skyloud('accounts').apiEndpointUrl
    }
  }
}
</script>
