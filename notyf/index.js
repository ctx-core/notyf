import { has_dom } from '@ctx-core/dom'
import { Notyf, NotyfNotification } from 'notyf'
import { notyf_config } from '../notyf_config/index.js'
export const notyf =
	has_dom
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
