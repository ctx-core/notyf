import { be_atom_triple_T } from '@ctx-core/nanostores'
import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { INotyfNotificationOptions, NotyfNotification } from 'notyf'
export declare function notyf_error(
	ctx:Ctx, in_payload_arg:string|Partial<INotyfNotificationOptions>
):Promise<NotyfNotification>
export declare const [
	notyf_error__backgroundColor$_,
	notyf_error__backgroundColor_,
	notyf_error__backgroundColor__set,
]: be_atom_triple_T<WritableAtom_<string>>
export {
	notyf_error__backgroundColor$_ as notyf_error__backgroundColor__,
}
