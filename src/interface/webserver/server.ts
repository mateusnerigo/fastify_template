import fastify, { FastifyInstance } from "fastify";
import { constants } from "../../infrastructure/config";
import { routes } from "../routes";
import { hooks } from "./hooks";

export const webserver = {
  init: () => fastify({ logger: {
    redact: constants.log.redacted_fields
  } }),
  registerRoutes: (app: FastifyInstance) => {
    app.register(function(instance, _opts, done) {
      routes.forEach(
        ({ routeManager, prefix }) => app.register(routeManager, { prefix })
      );

      done();
    }, { prefix: constants.app.api_prefix })
  },
  addHooks: (app: FastifyInstance) => {
    hooks.forEach(({ name, handler }) => app.addHook(name, handler));
  },
  listen: (app: FastifyInstance) => {
    app.listen({
      port: constants.app.port
    }, (err) => {
      if (err) {
        console.log({ err });
        process.exit(1);
      }
      console.log(`Server running on ${constants.app.port}`)
    });
  }
}
