import type { DeepPartial, INotyfNotificationOptions, NotyfNotification } from 'notyf'
import type { NotyfArray } from 'notyf/notyf.models'
import type { INotyfOptions } from 'notyf/notyf.options'
export interface Notyf_I {
	notifications:NotyfArray<NotyfNotification>
	options:INotyfOptions
	dismiss:(notification:NotyfNotification)=>void
	error(payload:string|Partial<INotyfNotificationOptions>):NotyfNotification
	success(payload:string|Partial<INotyfNotificationOptions>):NotyfNotification
	open(options:DeepPartial<INotyfNotificationOptions>):NotyfNotification
	dismissAll():void
}
