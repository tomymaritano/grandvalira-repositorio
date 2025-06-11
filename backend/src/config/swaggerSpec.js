const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Employee Contacts API',
    version: '1.0.0',
    description: 'API documentation for employee contacts management',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
  tags: [
    {
      name: 'Authentication',
      description: 'User authentication'
    },
    {
      name: 'Contacts',
      description: 'Manage employee contacts'
    },
    {
      name: 'Audit Log',
      description: 'Audit log entries'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string' },
        },
        example: {
          email: 'user@example.com',
          password: 'password123',
        },
      },
      LoginResponse: {
        type: 'object',
        required: ['token'],
        properties: {
          token: { type: 'string' },
        },
        example: {
          token: 'jwt_token_here',
        },
      },
      ContactCreate: {
        type: 'object',
        required: ['name', 'email', 'phone'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' },
          phone: { type: 'string' },
          photoUrl: { type: 'string', format: 'uri', nullable: true },
        },
        example: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1 555 123456',
          photoUrl: 'https://example.com/photo.jpg',
        },
      },
      Contact: {
        allOf: [
          { $ref: '#/components/schemas/ContactCreate' },
          {
            type: 'object',
            required: ['id', 'status', 'createdAt', 'updatedAt'],
            properties: {
              id: { type: 'string' },
              status: { type: 'string', enum: ['ACTIVE', 'BANNED'] },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
            },
          },
        ],
        example: {
          id: 'uuid',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '+1 555 123456',
          photoUrl: 'https://example.com/photo.jpg',
          status: 'ACTIVE',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z',
        },
      },
      AuditLog: {
        type: 'object',
        required: ['id', 'action', 'entity', 'entityId', 'changedById', 'timestamp'],
        properties: {
          id: { type: 'string' },
          action: { type: 'string' },
          entity: { type: 'string' },
          entityId: { type: 'string' },
          changedById: { type: 'string' },
          timestamp: { type: 'string', format: 'date-time' },
        },
        example: {
          id: 'logId',
          action: 'UPDATE',
          entity: 'Contact',
          entityId: 'uuid',
          changedById: 'userId',
          timestamp: '2024-01-01T00:00:00Z',
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: { type: 'string' },
        },
        example: { error: 'Internal server error' },
      },
    },
  },
  paths: {
    '/auth/login': {
      post: {
        tags: ['Authentication'],
        summary: 'User login',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/LoginRequest' },
            },
          },
        },
        responses: {
          200: {
            description: 'Successful login',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/LoginResponse' },
              },
            },
          },
          401: {
            description: 'Invalid credentials',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/contacts': {
      get: {
        security: [{ bearerAuth: [] }],
        tags: ['Contacts'],
        summary: 'List contacts',
        parameters: [
          {
            in: 'query',
            name: 'page',
            schema: { type: 'integer', default: 1 },
          },
          {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', default: 10 },
          },
          {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
          },
          {
            in: 'query',
            name: 'status',
            schema: { type: 'string', enum: ['ACTIVE', 'BANNED'] },
          },
        ],
        responses: {
          200: {
            description: 'Array of contacts',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Contact' },
                },
              },
            },
          },
        },
      },
      post: {
        security: [{ bearerAuth: [] }],
        tags: ['Contacts'],
        summary: 'Create a new contact',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ContactCreate' },
            },
          },
        },
        responses: {
          201: {
            description: 'Created contact',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Contact' },
              },
            },
          },
          400: {
            description: 'Validation error',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/contacts/{id}': {
      put: {
        security: [{ bearerAuth: [] }],
        tags: ['Contacts'],
        summary: 'Update a contact',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ContactCreate' },
            },
          },
        },
        responses: {
          200: {
            description: 'Updated contact',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Contact' },
              },
            },
          },
          404: {
            description: 'Contact not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/contacts/{id}/ban': {
      patch: {
        security: [{ bearerAuth: [] }],
        tags: ['Contacts'],
        summary: 'Ban a contact',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Banned contact',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Contact' },
              },
            },
          },
          404: {
            description: 'Contact not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/audit-log': {
      get: {
        security: [{ bearerAuth: [] }],
        tags: ['Audit Log'],
        summary: 'Retrieve audit log',
        responses: {
          200: {
            description: 'Audit entries',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/AuditLog' },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = swaggerSpec;
