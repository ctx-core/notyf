import { remove } from '@ctx-core/array'
import { deep_equal } from '@ctx-core/fast-deep-equal'
import { debounce } from '@ctx-core/function'
import { refresh_atom_ } from '@ctx-core/nanostores'
import { assign, be_, pick } from '@ctx-core/object'
import { DEFAULT_OPTIONS } from 'notyf'
import { notyf } from '../notyf/index.js'
import { notyf_config } from '../notyf_config/index.js'
import { notyf_options_ } from '../notyf_options_/index.js'
export const active_notyf_o_a__ = be_('active_notyf_o_a__', ()=>{
	const active_notyf_o_a_ = refresh_atom_([])
	return assign(active_notyf_o_a_, { notyf_message })
	function notyf_message(in_payload_arg) {
		const in_payload = notyf_options_(in_payload_arg)
		const in_debounce_payload_key = pick(in_payload, 'type', 'position')
		const active_payload_o_a = active_notyf_o_a_.$
		let active_payload_o = active_payload_o_a.find($=>
			deep_equal($.key, in_debounce_payload_key))
		let payload
		const active_payload_o_payload = active_payload_o?.payload
		if (active_payload_o_payload) {
			payload = active_payload_o_payload
			payload.message = `
				${payload.message || ''}
				<hr>
				<div class="${in_payload.className}">${in_payload.message}</div>
			`.replace(/^\t{4}/gm, '').trim()
		} else {
			payload = in_payload
			active_payload_o = {
				key: in_debounce_payload_key,
				payload,
				debounced_notyf_message: debounce(async ()=>{
					const notification = notyf['success'](in_payload)
					remove(active_payload_o_a, active_payload_o)
					active_notyf_o_a_.refresh()
					return notification
				}, 500),
			}
			active_payload_o_a.push(active_payload_o)
			active_notyf_o_a_.refresh()
		}
		const { debounced_notyf_message } = active_payload_o
		payload.duration = Math.max(payload.duration, in_payload.duration || 0)
		payload.ripple = payload.ripple || in_payload.ripple || false
		payload.dismissible =
			payload.dismissible
			|| in_payload.dismissible
			|| notyf_config.dismissible
			|| DEFAULT_OPTIONS.dismissible
		return debounced_notyf_message()
	}
})
