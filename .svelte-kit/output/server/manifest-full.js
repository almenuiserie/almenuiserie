export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/icons/escaliers.svg","images/icons/menuisiers.svg","images/icons/noastepien.png","images/icons/sabinerome.png","images/icons/toitures.svg","images/icons/windows.svg","images/icons/zakariabaaza.png","images/logo/flagalmenuiserie.svg","images/logo/google.svg","images/logo/microsoft.svg","images/logo/netflix.svg","images/logo/spotify.svg","images/realisations/carports.svg","images/realisations/chassis.svg","images/realisations/dressings.svg","images/realisations/escaliers.svg","images/realisations/garages.svg","images/realisations/meubles.svg","images/realisations/parquets.svg","images/realisations/terrasses.svg","images/realisations/toitures.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DQ3M01sb.js","app":"_app/immutable/entry/app.C9R_ZAl2.js","imports":["_app/immutable/entry/start.DQ3M01sb.js","_app/immutable/chunks/entry.CsYmOTyI.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.C9R_ZAl2.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.pqwEyO97.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
