import { DEFAULT_OPTIONS } from 'notyf'
import { notyf_config } from '../notyf_config/index.js'
/** @typedef {import('notyf').INotyfNotificationOptions} */
/**
 * @param {string|Partial<INotyfNotificationOptions>}in_options
 * @returns {INotyfNotificationOptions}
 * @private
 */
export function notyf_options_(in_options) {
	const options =
		typeof in_options === 'string'
			? { message: in_options }
			: in_options
	return {
		/** @type {INotyfNotificationOptions} */...DEFAULT_OPTIONS,
		...notyf_config,
		type: 'string',
		...options
	}
}
