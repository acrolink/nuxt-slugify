<template>
	<div>
		{{ $slugify('Hello world @ Slugify! 🐱') }}
	</div>
</template>

<script setup lang="ts">
const slugify = useSlugify()

onMounted(() => {
	console.log(slugify('Hello world @ Slugify! 🐱'))
})
</script>
