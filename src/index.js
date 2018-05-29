const fp = require('fastify-plugin');

const ieNoOpen = (app, opts, next) => {
	app.addHook('onSend', (request, reply, payload, next) => {
		reply.header('X-Download-Options', 'noopen');
		next();
	});

	next();
};

module.exports = fp(ieNoOpen, {
	fastify: '^1.0.0',
	name: 'fastify-ie-no-open'
});
