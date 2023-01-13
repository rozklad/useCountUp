import { ref, defineComponent, onMounted, openBlock, createBlock, Teleport, renderSlot, createCommentVNode } from 'vue';

function useCountUp(initialValue, targetValue, step, interval) {
  const current = ref(initialValue);
  const increment = () => {
    current.value += step;
  };
  const isValidCountUp = () => current.value !== targetValue || current.value < targetValue;
  let counter;
  const start = () => {
    reset();
    if (!isValidCountUp()) {
      return false;
    }
    counter = setInterval(() => {
      increment();
      if (current.value === targetValue) {
        clearInterval(counter);
      }
    }, interval);
    return true;
  };
  const reset = () => {
    current.value = initialValue;
    if (counter) {
      clearInterval(counter);
    }
  };
  start();
  return { current, start, reset };
}

var script = /* @__PURE__ */ defineComponent({
  __name: "MountedTeleport",
  props: {
    to: { type: String, required: true, default: "body" }
  },
  setup(__props) {
    const props = __props;
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return (_ctx, _cache) => {
      return isMounted.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: props.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to"])) : createCommentVNode("v-if", true);
    };
  }
});

script.__file = "src/mountedTeleport/MountedTeleport.vue";

export { useCountUp };
