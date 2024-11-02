import { safeInt, safeString } from "../../common/utils";

const API_PREFIX = '/api/v1';

export const constants = {
  app: {
    api_prefix: API_PREFIX,
    protocol: safeString(process.env.APP_PROTOCOL, 'http'),
    domain: safeString(process.env.APP_DOMAIN, '0.0.0.0'),
    port: safeInt(process.env.APP_PORT, 3009),
    mode: safeString(process.env.APP_MODE, 'DEVELOPMENT'),
    no_auth_routes: [
      `${API_PREFIX}/auth/register`,
      `${API_PREFIX}/auth/login`,
      `${API_PREFIX}/auth/logout`,
    ]
  },
  log: {
    log_level: safeString(process.env.LOG_LEVEL || 'debug'),
    redacted_fields: safeString(process.env.LOG_REDACT).split(','),
  },
  jwt: {
    secret: safeString(process.env.JWT_SECRET),
    expiration: '7d',
    keys: {
      user_id: safeString(process.env.JWT_KEY_USER_ID),
      user_email: safeString(process.env.JWT_KEY_USER_EMAIL),
      expiration: safeString(process.env.JWT_KEY_EXPIRATION),
    }
  }
}
