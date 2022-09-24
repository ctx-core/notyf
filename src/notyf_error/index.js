import { atom_ } from '@ctx-core/nanostores'
import { active_notyf_o_a__ } from '../active_notyf_o_a__/index.js'
import { notyf_options_ } from '../notyf_options_/index.js'
import { assign, be_ } from '@ctx-core/object'
export function notyf_error(ctx, in_payload_arg) {
	const notyf_options = assign(notyf_options_(in_payload_arg), {
		type: 'error',
		backgroundColor: notyf_error__backgroundColor__(ctx).$
	})
	return active_notyf_o_a__(ctx).notyf_message(notyf_options)
}
export const notyf_error__backgroundColor__ = be_('notyf_error__backgroundColor__', ()=>
	atom_('#ed3d3d'))
