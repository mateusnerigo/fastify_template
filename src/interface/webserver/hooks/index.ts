import { ApplicationHook, LifecycleHook } from "fastify/types/hooks";
import { onSend } from "./onSend.hook";
import { preHandler } from "./preHandler.hook";

export const hooks: { name: LifecycleHook | ApplicationHook, handler: any }[] = [
  {
    name: 'preHandler',
    handler: preHandler,
  },
  {
    name: 'onSend',
    handler: onSend,
  },
]
