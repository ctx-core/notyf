import type { Ctx } from '@ctx-core/object'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare function notyf_message(
	ctx:Ctx,
	in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
