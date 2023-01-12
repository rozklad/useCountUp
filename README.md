# useCountUp

Simple composable to count up to a number.

## Usage

```vue
<template>
  <p class="text-[96px] text-teal-200 font-screen">{{ code }}</p>
</template>

<script setup>
import { useCountUp } from "@/composables/useCountup";

const { current: code } = useCountUp(0, 404, 1, 10);
</script>
```
