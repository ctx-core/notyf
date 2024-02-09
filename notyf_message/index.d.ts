import type { ctx_T } from 'ctx-core/be'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare function notyf_message(
	ctx:ctx_T,
	in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
