---
title: useCountUp
---

# useCountUp

```html
<!-- Count up to 404 -->
<p>{{ code }}</p>
```

```ts
import { useCountUp } from '@rozklad/usebox';

const { current: code } = useCountUp(0, 404, 1, 10);
```
