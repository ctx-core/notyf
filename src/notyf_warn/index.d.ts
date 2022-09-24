import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare function notyf_warn(
	ctx:Ctx, in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
export const notyf_warn__backgroundColor__:Be<WritableAtom_<string>>
