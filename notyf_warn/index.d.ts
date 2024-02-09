import type { ctx_T } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare const [
	notyf_warn__backgroundColor$_,
	notyf_warn__backgroundColor_,
	notyf_warn__backgroundColor__set,
]:be_sig_triple_T<string>
export {
	notyf_warn__backgroundColor$_ as notyf_warn__backgroundColor__,
}
export declare function notyf_warn(
	ctx:ctx_T, in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
