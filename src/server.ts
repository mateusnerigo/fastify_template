import { FastifyInstance } from "fastify";
import { webserver } from "./interface/webserver/server";
import { preInitConfig } from "./infrastructure/config";

preInitConfig();

const app: FastifyInstance = webserver.init();
webserver.registerRoutes(app);
webserver.addHooks(app);
webserver.listen(app);
