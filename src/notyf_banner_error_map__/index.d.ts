import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, Ctx } from '@ctx-core/object'
import type { NotyfNotification } from 'notyf'
export declare const notyf_banner_error_map__:Be<notyf_banner_error_map__T>
export declare function notyf_banner_error_map__activate(ctx:Ctx, message:string):Promise<NotyfNotification>
export declare function notyf_banner_error_map__dismiss(ctx:Ctx, message:string):Promise<void>
export type notyf_banner_error_map_T = Map<string, Promise<NotyfNotification>>
export interface notyf_banner_error_map__T extends WritableAtom_<notyf_banner_error_map_T> {
	activate(message:string):Promise<NotyfNotification>
	dismiss(message:string):Promise<void>
}
