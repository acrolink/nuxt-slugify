import { defineNuxtConfig } from 'nuxt'
import Slugify from '..'

export default defineNuxtConfig({
	modules: [Slugify],
	slugify: {
		extend: {
			'@': 'from',
		},
		defaults: {
			lower: true,
			strict: true,
		},
	},
})
