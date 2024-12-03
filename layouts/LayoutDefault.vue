<template>
  <div class="layout w-[416px] h-[332px] bg-neutral-50 overflow-hidden font-sans">
    <Navbar>
      <Logo />
      <Link href="/"> Home </Link>
      <Link href="/about"> About </Link>
    </Navbar>
    <Content><slot /></Content>
  </div>
</template>

<script lang="ts" setup>
import Content from "../components/Content.vue";
import Link from "../components/Link.vue";
import Logo from "../components/Logo.vue";
import Navbar from "../components/Navbar.vue";
</script>

<style>
@import "./tailwind.css";

body {
  margin: 0;
  font-family: sans-serif;
  width: 416px;
  height: 332px;
}
</style>
