import { is_browser_ } from 'ctx-core/env'
import { Notyf, NotyfNotification } from 'notyf'
import { notyf_config } from '../notyf_config/index.js'
export const notyf =
	is_browser_()
		? new Notyf(notyf_config)
		: {
			error(payload) {
				console.error(payload)
				return new NotyfNotification({})
			},
			success(payload) {
				console.info(payload)
				return new NotyfNotification({})
			},
			open(payload) {
				console.info(payload)
				return new NotyfNotification({})
			},
			dismissAll() {
			},
		}
