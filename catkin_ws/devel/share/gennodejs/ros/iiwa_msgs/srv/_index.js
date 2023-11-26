
"use strict";

let ConfigureControlMode = require('./ConfigureControlMode.js')
let SetEndpointFrame = require('./SetEndpointFrame.js')
let SetWorkpiece = require('./SetWorkpiece.js')
let SetSmartServoLinSpeedLimits = require('./SetSmartServoLinSpeedLimits.js')
let SetSpeedOverride = require('./SetSpeedOverride.js')
let SetPTPCartesianSpeedLimits = require('./SetPTPCartesianSpeedLimits.js')
let SetPTPJointSpeedLimits = require('./SetPTPJointSpeedLimits.js')
let SetSmartServoJointSpeedLimits = require('./SetSmartServoJointSpeedLimits.js')
let TimeToDestination = require('./TimeToDestination.js')

module.exports = {
  ConfigureControlMode: ConfigureControlMode,
  SetEndpointFrame: SetEndpointFrame,
  SetWorkpiece: SetWorkpiece,
  SetSmartServoLinSpeedLimits: SetSmartServoLinSpeedLimits,
  SetSpeedOverride: SetSpeedOverride,
  SetPTPCartesianSpeedLimits: SetPTPCartesianSpeedLimits,
  SetPTPJointSpeedLimits: SetPTPJointSpeedLimits,
  SetSmartServoJointSpeedLimits: SetSmartServoJointSpeedLimits,
  TimeToDestination: TimeToDestination,
};
