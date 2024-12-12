

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2._HTGU9DM.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.pqwEyO97.js"];
export const stylesheets = [];
export const fonts = [];
