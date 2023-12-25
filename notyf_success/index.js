/// <reference types="ctx-core" />
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { notyf_message } from '../notyf_message/index.js'
import { notyf_options_ } from '../notyf_options_/index.js'
export function notyf_success(ctx, in_payload_arg) {
	const notyf_options = {
		...notyf_options_(in_payload_arg),
		type: 'success',
		backgroundColor: notyf_success__backgroundColor_(ctx)
	}
	return notyf_message(ctx, notyf_options)
}
export const [
	notyf_success__backgroundColor$_,
	notyf_success__backgroundColor_,
	notyf_success__backgroundColor__set,
] = /** @type {be_sig_triple_T<string>} */
	be_sig_triple_(()=>
		'#3dc763')
export {
	notyf_success__backgroundColor$_ as notyf_success__backgroundColor__,
}
