import type { be_memo_pair_T, ctx_T, sig_T } from 'ctx-core/rmemo'
import type { NotyfNotification } from 'notyf'
export declare const [
	notyf_banner_error_map$_,
	notyf_banner_error_map_,
]:be_memo_pair_T<notyf_banner_error_map__T>
export {
	notyf_banner_error_map$_ as notyf_banner_error_map__,
}
export declare function notyf_banner_error_map__activate(ctx:ctx_T, message:string):Promise<NotyfNotification>
export declare function notyf_banner_error_map__dismiss(ctx:ctx_T, message:string):Promise<void>
export type notyf_banner_error_map_T = Map<string, Promise<NotyfNotification>>
export interface notyf_banner_error_map__T extends sig_T<notyf_banner_error_map_T> {
	activate(message:string):Promise<NotyfNotification>
	dismiss(message:string):Promise<void>
}
