<template>
  <v-layout>
    <NavDrawer style="z-index: 100" />
    <v-container>
      <v-row>
        <v-col>
          <v-main>
            <slot />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script setup lang="ts">
import NavDrawer from '~/components/layout/NavDrawer.vue'
</script>
