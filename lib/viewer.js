module.exports = {
  __init__: [
    'animation',
    'contextPads',
    'elementNotifications',
    'elementSupport',
    'exclusiveGatewaySettings',
    'keyboardBindings',
    'log',
    'notifications',
    'pauseSimulation',
    'resetSimulation',
    'simulationState',
    'toggleMode',
    'tokenCount',
    'tokenSimulationBehavior',
    'tokenSimulationPalette'
  ],
  'animation': [ 'type', require('./animation/Animation') ],
  'contextPads': [ 'type', require('./features/context-pads') ],
  'elementNotifications': [ 'type', require('./features/element-notifications') ],
  'elementSupport': [ 'type', require('./features/element-support') ],
  'exclusiveGatewaySettings': [ 'type', require('./features/exclusive-gateway-settings') ],
  'keyboardBindings': [ 'type', require('./features/keyboard-bindings/viewer') ],
  'log': [ 'type', require('./features/log') ],
  'notifications': [ 'type', require('./features/notifications') ],
  'pauseSimulation': [ 'type', require('./features/pause-simulation') ],
  'resetSimulation': [ 'type', require('./features/reset-simulation') ],
  'simulationState': [ 'type', require('./features/simulation-state') ],
  'toggleMode': [ 'type', require('./features/toggle-mode/viewer') ],
  'tokenCount': [ 'type', require('./features/token-count') ],
  'tokenSimulationBehavior': [ 'type', require('./features/token-simulation-behavior') ],
  'tokenSimulationPalette': [ 'type', require('./features/palette') ]
};