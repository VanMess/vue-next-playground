import { ref, effect } from '../vue-next/packages/reactivity/src';

const count = ref(0);
console.log(count.value);

effect(() => {
	console.log(count.value);
});
count.value += 1;
