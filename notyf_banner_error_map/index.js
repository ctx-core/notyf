import { be_computed_pair_, computed__set_a_ } from '@ctx-core/nanostores'
import { NotyfEvent } from 'notyf'
import { notyf } from '../notyf/index.js'
import { notyf_error } from '../notyf_error/index.js'
/** @typedef {import('@ctx-core/object').be_atom_triple_T} */
/** @typedef {import('./index.d.ts').notyf_banner_error_map__T} */
export const [
	notyf_banner_error_map$_,
	notyf_banner_error_map_,
] = /** @type {be_computed_pair_T<notyf_banner_error_map__T>} */be_computed_pair_(()=>{
	const notyf_banner_error_map = new Map()
	const [_notyf_banner_error_map_, set] = computed__set_a_(notyf_banner_error_map)
	set(notyf_banner_error_map)
	return _notyf_banner_error_map_
})
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
