import type { be_atom_triple_T, refresh_atom_T } from '@ctx-core/nanostores'
import type { INotyfNotificationOptions, INotyfPosition, NotyfNotification } from 'notyf'
export const [
	active_notyf_o_a$_,
	active_notyf_o_a_,
	active_notyf_o_a__set,
]:be_atom_triple_T<active_notyf_o_a__T>
export {
	active_notyf_o_a$_ as active_notyf_o_a__,
}
export interface active_notyf_o_a__T extends refresh_atom_T<active_payload_o_T[]> {
	notyf_message(in_payload_arg:string|Partial<INotyfNotificationOptions>):Promise<NotyfNotification>
}
export interface active_payload_o_T {
	key:payload_key_T
	payload:INotyfNotificationOptions
	debounced_notyf_message:()=>Promise<NotyfNotification>
}
export interface payload_key_T {
	type:string
	position:INotyfPosition
}
