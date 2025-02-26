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

# Alternatively, use the auto-watch script for development (Windows)
powershell -File .\watch-and-rebuild.ps1
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

## Docker Development Workflow

The project uses Docker to create a consistent development environment across all components:

### Development Mode

In development mode (`docker-compose.dev.yml`):
- Code changes in the frontend are automatically detected with hot-reloading
- Volume mounts are used to sync local code with containers
- Node modules are cached in Docker volumes for better performance
- Environment variables are set for development

### Production Mode

In production mode (`docker-compose.yml`):
- Optimized builds with multi-stage Dockerfiles
- Static assets are properly served
- Environment variables are configured for production settings
- Standalone Next.js output for better performance

### Auto-Watch Script

The `watch-and-rebuild.ps1` script enhances the development workflow by:
- Monitoring file changes across the entire project
- Automatically rebuilding and restarting containers when changes are detected
- Providing immediate feedback in the terminal about build status

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

## Auto Build and Watch

The project includes a PowerShell script that automatically watches for changes in your codebase and rebuilds the Docker containers when changes are detected.

### How to Use the Auto Build and Watch

1. Make sure Docker is running on your system
2. Open PowerShell and navigate to the project directory
3. Run the watch script:

```powershell
# Run the watch and rebuild script
powershell -File .\watch-and-rebuild.ps1
```

The script monitors the following directories and files for changes:
- `app/` - Frontend application code
- `middleware/` - API layer code
- `sdk/` - SDK integration code
- `public/` - Static assets
- Docker configuration files
- Next.js configuration

When changes are detected, the script will:
1. Stop the running containers
2. Rebuild the Docker images
3. Start the containers again

This allows for a smooth development experience with automatic updates to your running environment.

## Contributing

1. Create a feature branch from `main`
2. Make your changes following the project's coding standards
3. Write clear commit messages
4. Submit a pull request with a description of your changes

## License

Private repository - All rights reserved