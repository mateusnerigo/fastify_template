export const profileSerializer = {
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        email: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      }
    }
  }
}
