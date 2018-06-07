const fastify = require('fastify');
const helmet = require('ienoopen');
const { host, port, path, rsp } = require('./config');

fastify()
	.use(helmet())
	.get(path, (request, reply) => {
		reply.send(rsp);
	})
	.listen(port, host);
