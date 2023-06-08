// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type Side = "L" | "R" | "N";

	interface ConfigRecord {
		index: number;
		toggle: boolean,
		altCode: boolean,
		ctrl: Side,
		alt: Side,
		shift: Side,
		win: Side,
		symbol: string,
	}
}

export {};
