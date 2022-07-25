import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import slugify from 'slugify'

export default defineNuxtPlugin(() => {
	const {
		slugify: { extend, defaults },
	} = useRuntimeConfig()

	if (Object.keys(extend).length) {
		slugify.extend(extend)
	}

	return {
		provide: {
			slugify: (
				string: string,
				options?:
					| {
							replacement?: string
							remove?: RegExp
							lower?: boolean
							strict?: boolean
							locale?: string
							trim?: boolean
					  }
					| string
			) => {
				if (typeof options === 'string') {
					options = {
						replacement: options,
					}
				}
				return slugify(string, { ...defaults, ...options })
			},
		},
	}
})
