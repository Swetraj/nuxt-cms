<script setup lang="ts">
const { fetch: refreshSession } = useUserSession()
const credentials = ref({
  email: '',
  password: ''
})
const checkbox = ref(true)

async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials.value
  })
    .then(async () => {
      // Refresh the session on client-side and redirect to the home page
      await refreshSession()
      await navigateTo('/admin')
    })
    .catch(() => alert('Bad credentials'))
}
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-semibold mb-1">Username</v-label>
      <v-text-field
        v-model="credentials.email"
        variant="outlined"
        density="compact"
        hide-details
        color="primary"
      />
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-semibold mb-1">Password</v-label>
      <v-text-field
        v-model="credentials.password"
        variant="outlined"
        density="compact"
        type="password"
        hide-details
        color="primary"
      />
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap align-center">
        <v-checkbox v-model="checkbox" color="primary" hide-details>
          <template #label><p class="text-body-1">Remember this Device</p></template>
        </v-checkbox>
        <div class="ml-sm-auto">
          <v-card-text
            to="/"
            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >
            Forgot Password ?
          </v-card-text>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-btn rounded="md" color="primary" size="large" block flat @click="login">Sign in</v-btn>
    </v-col>
  </v-row>
</template>
