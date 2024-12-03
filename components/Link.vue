<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";
import { computed, useAttrs } from "vue";

const pageContext = usePageContext();
const { href } = useAttrs();
const isActive = computed(() => {
  const { urlPathname } = pageContext;
  return href === "/" ? urlPathname === href : urlPathname.startsWith(href);
});
</script>

<template>
  <a class="text-xs " :class="{ 'text-white': isActive, 'text-neutral-300': !isActive }">
    <slot />
  </a>
</template>
