import { fileURLToPath } from 'url'
import { defu } from 'defu'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
	extend?: {
		[key: string]: any
	}
	defaults?: {
		replacement?: string
		remove?: RegExp
		lower?: boolean
		strict?: boolean
		locale?: string
		trim?: boolean
	}
}

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-slugify',
		configKey: 'slugify',
		compatibility: {
			nuxt: '^3.0.0',
		},
	},
	defaults: {
		extend: {},
		defaults: {},
	},
	setup(options, nuxt) {
		const { resolve } = createResolver(import.meta.url)

		// Public runtimeConfig
		nuxt.options.runtimeConfig.public.slugify = defu(
			nuxt.options.runtimeConfig.public.slugify,
			{
				extend: options.extend,
				defaults: options.defaults,
			}
		)

		// Transpile runtime
		const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
		nuxt.options.build.transpile.push(runtimeDir)

		// Add plugin
		addPlugin(resolve(runtimeDir, 'plugin'))
	},
})
