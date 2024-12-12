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
		client: {"start":"_app/immutable/entry/start.BbDfPQe1.js","app":"_app/immutable/entry/app.cGmytgSF.js","imports":["_app/immutable/entry/start.BbDfPQe1.js","_app/immutable/chunks/entry.CNkp8_bv.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/entry/app.cGmytgSF.js","_app/immutable/chunks/scheduler.BeaK0CkN.js","_app/immutable/chunks/index.KvzH16gU.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
