import { clone } from '@ctx-core/object'
import { notyf_config } from '../notyf_config/index.js'
import { DEFAULT_OPTIONS } from 'notyf'
export function notyf_options_(in_options) {
	const options =
		typeof in_options === 'string'
		? { message: in_options }
		: in_options
	return clone(DEFAULT_OPTIONS, notyf_config, {
		type: 'string',
	}, options)
}
