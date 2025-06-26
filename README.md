# Falkor Shared Types

This package contains shared TypeScript type definitions used across all Falkor projects. It ensures type consistency and provides a single source of truth for common interfaces and types used throughout the Falkor ecosystem.

## Features

- **Centralized Type Definitions**: Single source of truth for all shared types
- **Plugin System Types**: Complete type definitions for the plugin system
- **TypeScript Support**: Full TypeScript support with type declarations
- **Cross-Project Compatibility**: Ensures type consistency across all Falkor projects

## Installation

```bash
pnpm install @team-falkor/shared-types
# or
npm install @team-falkor/shared-types
# or
yarn add @team-falkor/shared-types
# or
bun add @team-falkor/shared-types

```

## Usage

Import the types you need in your TypeScript files:

```typescript
import { PluginConfig, SearchResult } from "@team-falkor/shared-types";

// Use the types in your code
const config: PluginConfig = {
  // Your plugin configuration
};
```

## Available Types

The package includes type definitions for:

- Plugin System
  - Plugin Configuration
  - Search Handlers
  - Return Types
- Core Types
  - API Responses
  - Common Interfaces
  - Utility Types

For detailed type documentation, please refer to the source files in the `src` directory.

## Contributing

Contributions are welcome! If you have suggestions for new types or improvements to existing ones, please feel free to submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-type`)
3. Commit your changes (`git commit -m 'Add some amazing type'`)
4. Push to the branch (`git push origin feature/amazing-type`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
