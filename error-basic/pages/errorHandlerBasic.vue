<template>
  <NuxtErrorBoundary>
    <ErrorGeneratorBasic/>
    <template v-slot:error="errorProps">
      <p>エラーが発生しました！</p>
      <p>{{ errorProps.error }}</p>
    </template>
  </NuxtErrorBoundary>
  <p>
    <NuxtLink v-bind:to="{name: 'index'}">
      戻る
    </NuxtLink>
  </p>
</template>