# The Production Elaborator
A tool for visualising realtime updates to your profit margins in [Sim Companies](https://www.simcompanies.com/), a business simulation MMO.

# Usage
To be written when there is a front end..

# Technicalaties
## Technologies
Current:
- **Typescript:** for the bulk of the code in the project, handling the model and queries to the Sim Companies API.
- **Jest:** for testing and providing a runtime environment before building the testing server.
- **Webpack:** for bundling the finished code.
- **Make:** for building more powerful commands than offered by a package.json file.

To be implemented:
- **React:** for displaying data to the user.
- **Node:** for updating the models with fresh market information and processing data for the front end.


## Building

Prerequisites:
- `Make` - via WSL or [Chocolatey](https://chocolatey.org/) for Windows.
- `Typescript` - Including the CLI tools, installed globally with Yarn or NPM.

1. Install dependencies with your package manager, i.e. `yarn install`
2. Run `make build` to create the bundle.

## Launching

1. This step will probably be something like launching the node application and frontend using the Makefile.