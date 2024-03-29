import type { ctx_T } from 'ctx-core/be'
import { be_sig_triple_T } from 'ctx-core/rmemo'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare function notyf_error(
	ctx:ctx_T, in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
export declare const [
	notyf_error__backgroundColor$_,
	notyf_error__backgroundColor_,
	notyf_error__backgroundColor__set,
]:be_sig_triple_T<string>
export {
	notyf_error__backgroundColor$_ as notyf_error__backgroundColor__,
}
