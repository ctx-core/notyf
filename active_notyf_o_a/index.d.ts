import type { be_atom_triple_T, Ctx, WritableAtom_ } from '@ctx-core/nanostores'
import type { INotyfNotificationOptions, INotyfPosition, NotyfNotification } from 'notyf'
export const [
	active_notyf_o_a$_,
	active_notyf_o_a_,
	active_notyf_o_a__set,
]:be_atom_triple_T<active_notyf_o_a__T>
export {
	active_notyf_o_a$_ as active_notyf_o_a__,
}
export declare function active_notyf_o_a__refresh(ctx:Ctx):void
export type active_notyf_o_a__T = WritableAtom_<active_payload_o_T[]>
export interface active_payload_o_T {
	key:payload_key_T
	payload:INotyfNotificationOptions
	debounced_notyf_message:()=>Promise<NotyfNotification>
}
export interface payload_key_T {
	type:string
	position:INotyfPosition
}
