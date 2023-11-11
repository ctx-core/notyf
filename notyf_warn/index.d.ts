import type { val__be_atom_triple_T } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare const [
	notyf_warn__backgroundColor$_,
	notyf_warn__backgroundColor_,
	notyf_warn__backgroundColor__set,
]:val__be_atom_triple_T<string>
export {
	notyf_warn__backgroundColor$_ as notyf_warn__backgroundColor__,
}
export declare function notyf_warn(
	ctx:Ctx, in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
