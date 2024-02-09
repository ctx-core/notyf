import type { ctx_T } from 'ctx-core/be'
import type { be_sig_triple_T } from 'ctx-core/rmemo'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare function notyf_success(
	ctx:ctx_T, in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
export declare const [
	notyf_success__backgroundColor$_,
	notyf_success__backgroundColor_,
	notyf_success__backgroundColor__set,
]:be_sig_triple_T<string>
export {
	notyf_success__backgroundColor$_ as notyf_success__backgroundColor__,
}
