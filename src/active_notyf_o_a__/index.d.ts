import type { refresh_atom_T } from '@ctx-core/nanostores'
import type { Be } from '@ctx-core/object'
import type { INotyfNotificationOptions, INotyfPosition, NotyfNotification } from 'notyf'
export declare const active_notyf_o_a__:Be<active_notyf_o_a__T>
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
