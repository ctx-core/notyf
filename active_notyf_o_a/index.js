/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	active_notyf_o_a$_,
	active_notyf_o_a_,
	active_notyf_o_a__set,
] = /** @type {be_sig_triple_T<active_notyf_o_a__T>} */
	be_sig_triple_(()=>
		[])
export {
	active_notyf_o_a$_ as active_notyf_o_a__,
}
/**
 * @param {Ctx}ctx
 */
export function active_notyf_o_a__refresh(ctx) {
	active_notyf_o_a__set(ctx, active_notyf_o_a_(ctx)?.slice() || [])
}
