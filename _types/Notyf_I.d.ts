import type { DeepPartial, INotyfNotificationOptions, INotyfOptions, NotyfArray, NotyfNotification } from 'notyf'
export interface Notyf_I {
	notifications:NotyfArray<NotyfNotification>
	options:INotyfOptions
	dismiss:(notification:NotyfNotification)=>void
	error(payload:string|Partial<INotyfNotificationOptions>):NotyfNotification
	success(payload:string|Partial<INotyfNotificationOptions>):NotyfNotification
	open(options:DeepPartial<INotyfNotificationOptions>):NotyfNotification
	dismissAll():void
}
