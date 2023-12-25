import type { be_sig_triple_T, Ctx, sig_T } from 'ctx-core/rmemo'
import type { INotyfNotificationOptions, INotyfPosition, NotyfNotification } from 'notyf'
export const [
	active_notyf_o_a$_,
	active_notyf_o_a_,
	active_notyf_o_a__set,
]:be_sig_triple_T<active_notyf_o_a__T>
export {
	active_notyf_o_a$_ as active_notyf_o_a__,
}
export declare function active_notyf_o_a__refresh(ctx:Ctx):void
export type active_notyf_o_a__T = sig_T<active_payload_o_T[]>
export interface active_payload_o_T {
	key:payload_key_T
	payload:INotyfNotificationOptions
	debounced_notyf_message:()=>Promise<NotyfNotification>
}
export interface payload_key_T {
	type:string
	position:INotyfPosition
}
