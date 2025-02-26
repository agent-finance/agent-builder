# Agent Builder Platform

A modular platform for building and managing AI agents, consisting of three main components:
- Frontend (Next.js UI)
- Middleware (API Layer)
- Botpress SDK Integration

## Architecture

The platform follows a microservices architecture:
- **Frontend**: Next.js application providing the user interface
- **Middleware**: Express.js API layer handling requests and SDK communication
- **Botpress SDK**: Core SDK running in isolated containers per client

## Development Setup

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/agent-finance/agent-builder.git
cd agent-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development environment:
```bash
# For development with hot-reload
docker-compose -f docker-compose.dev.yml up -d

# For production-like environment
docker-compose up -d
```

4. Access the application:
- Frontend: http://localhost:3000
- Middleware API: http://localhost:3001

## Project Structure

```
agent-builder/
├── app/                # Next.js 13+ app directory
├── pages/              # Next.js pages (legacy)
├── public/             # Static assets
├── middleware/         # Express.js API layer
├── sdk/               # Botpress SDK integration
├── .github/           # GitHub workflows and templates
├── docker-compose.yml        # Production container orchestration
├── docker-compose.dev.yml    # Development container orchestration
├── Dockerfile              # Production build
├── Dockerfile.dev         # Development build
├── next.config.mjs       # Next.js configuration
├── tailwind.config.mjs   # Tailwind CSS configuration
├── postcss.config.mjs    # PostCSS configuration
└── vercel.json          # Vercel deployment configuration
```

## Configuration Files

- `.dockerignore`: Specifies which files Docker should ignore during build
- `.gitignore`: Defines files and directories ignored by Git
- `.prettierrc`: Code formatting rules
- `eslint.config.mjs`: ESLint configuration for code linting
- `jsconfig.json`: JavaScript configuration for VS Code
- `next-env.d.ts`: TypeScript declarations for Next.js

## Development Commands

```bash
# Start development environment
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes following the project's coding standards
3. Write clear commit messages
4. Submit a pull request with a description of your changes

## License

Private repository - All rights reserved