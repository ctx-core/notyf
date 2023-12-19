import type { be_atom_triple_T } from '@ctx-core/nanostores'
import type { Ctx } from 'ctx-core/be'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare function notyf_success(
	ctx:Ctx, in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
export declare const [
	notyf_success__backgroundColor$_,
	notyf_success__backgroundColor_,
	notyf_success__backgroundColor__set,
]:be_atom_triple_T<string>
export {
	notyf_success__backgroundColor$_ as notyf_success__backgroundColor__,
}
