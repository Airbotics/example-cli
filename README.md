Example CLI
=================

This repo contains the source code for the [Build a custom CLI](https://docs.airbotics.io/guides/cli) guide in the Airbotics documentation.


## Prerequisites
1. [Node.js](https://nodejs.org/) installed.
2. An Airbotics account with:
    - At least 1 robot created.
    - At least 1 API key created.
3. Set the `AIR_API_KEY` with  a valid API key.

## Installation
```
npm i
npm run build
npm link
export API_KEY="<your_api_key>"
```

## Usage
```
acme [COMMAND]
```


## Implemented commands

```
# Print a list of robots with:
acme robots list

# Configure logs for a robot with:
acme robots config-logs --enabled=true --robot_id=dev_bot_1

# Print a list of airbotics commands:
acme commands list 
```

## Uninstall
```
npm unlink -g
```


