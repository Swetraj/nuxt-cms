<script setup lang="ts">
import Routes from '@/routes/navigation'
</script>
<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      />
    </v-list>

    <v-divider />

    <v-list v-for="route in Routes" :key="route.title" density="compact" nav>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      />
      <v-divider />
      <v-list-item
        v-for="childRoute in route.children"
        :key="childRoute.to"
        :prepend-icon="childRoute.icon"
        :title="childRoute.title"
        :to="childRoute.to"
      />
    </v-list>
  </v-navigation-drawer>
</template>
