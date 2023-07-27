import { val__be_atom_triple_ } from '@ctx-core/nanostores'
import { assign } from '@ctx-core/object'
import { notyf_message } from '../notyf_message/index.js'
import { notyf_options_ } from '../notyf_options_/index.js'
export const [
	notyf_warn__backgroundColor$_,
	notyf_warn__backgroundColor_,
	notyf_warn__backgroundColor__set,
] = val__be_atom_triple_(()=>'#FFC63A')
export {
	notyf_warn__backgroundColor$_ as notyf_warn__backgroundColor__,
}
export function notyf_warn(ctx, in_payload_arg) {
	const notyf_options = assign(notyf_options_(in_payload_arg), {
		type: 'success',
		backgroundColor: notyf_warn__backgroundColor_(ctx)
	})
	return notyf_message(ctx, notyf_options)
}
