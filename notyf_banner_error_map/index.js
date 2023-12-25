/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_memo_pair_ } from 'ctx-core/rmemo'
import { NotyfEvent } from 'notyf'
import { notyf } from '../notyf/index.js'
import { notyf_error } from '../notyf_error/index.js'
export const [
	notyf_banner_error_map$_,
	notyf_banner_error_map_,
] = /** @type {be_memo_pair_T<notyf_banner_error_map__T>} */
	be_memo_pair_(()=>
		new Map())
export {
	notyf_banner_error_map$_ as notyf_banner_error_map__,
}
export async function notyf_banner_error_map__activate(ctx, message) {
	let notification
	const notification__promise = notyf_banner_error_map_(ctx).get(message)
	if (notification__promise) {
		notification = await notification__promise
	} else {
		const notification_promise = notyf_error(ctx, {
			message,
			duration: 0,
		})
		notyf_banner_error_map_(ctx).set(message, notification_promise)
		notification = await notification_promise
		notification.on(NotyfEvent.Dismiss,
			()=>notyf_banner_error_map__dismiss(ctx, message))
	}
	return notification
}
export async function notyf_banner_error_map__dismiss(ctx, message) {
	const notification_promise = notyf_banner_error_map_(ctx).get(message)
	if (notification_promise) {
		notyf_banner_error_map_(ctx).delete(message)
		const notification = await notification_promise
		notyf.dismiss(notification)
	}
}
