(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.VehicleStatistics = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VehicleStatistics model module.
   * @module model/VehicleStatistics
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleStatistics</code>.
   * @alias module:model/VehicleStatistics
   * @class
   */
  var exports = function() {
    var _this = this;
























  };

  /**
   * Constructs a <code>VehicleStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleStatistics} obj Optional instance to populate.
   * @return {module:model/VehicleStatistics} The populated <code>VehicleStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('createUser')) {
        obj['createUser'] = ApiClient.convertToType(data['createUser'], 'String');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Integer');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('fuelCost')) {
        obj['fuelCost'] = ApiClient.convertToType(data['fuelCost'], 'Integer');
      }
      if (data.hasOwnProperty('maxSpeed')) {
        obj['maxSpeed'] = ApiClient.convertToType(data['maxSpeed'], 'Integer');
      }
      if (data.hasOwnProperty('maxSpeedDown')) {
        obj['maxSpeedDown'] = ApiClient.convertToType(data['maxSpeedDown'], 'Integer');
      }
      if (data.hasOwnProperty('maxSpeedDownTime')) {
        obj['maxSpeedDownTime'] = ApiClient.convertToType(data['maxSpeedDownTime'], 'Integer');
      }
      if (data.hasOwnProperty('maxSpeedTime')) {
        obj['maxSpeedTime'] = ApiClient.convertToType(data['maxSpeedTime'], 'Integer');
      }
      if (data.hasOwnProperty('maxSpeedUp')) {
        obj['maxSpeedUp'] = ApiClient.convertToType(data['maxSpeedUp'], 'Integer');
      }
      if (data.hasOwnProperty('maxSpeedUpTime')) {
        obj['maxSpeedUpTime'] = ApiClient.convertToType(data['maxSpeedUpTime'], 'Integer');
      }
      if (data.hasOwnProperty('modifyDate')) {
        obj['modifyDate'] = ApiClient.convertToType(data['modifyDate'], 'Date');
      }
      if (data.hasOwnProperty('modifyDistance')) {
        obj['modifyDistance'] = ApiClient.convertToType(data['modifyDistance'], 'Integer');
      }
      if (data.hasOwnProperty('modifyUser')) {
        obj['modifyUser'] = ApiClient.convertToType(data['modifyUser'], 'String');
      }
      if (data.hasOwnProperty('movingAverageSpeed')) {
        obj['movingAverageSpeed'] = ApiClient.convertToType(data['movingAverageSpeed'], 'Integer');
      }
      if (data.hasOwnProperty('sharpTurnCount')) {
        obj['sharpTurnCount'] = ApiClient.convertToType(data['sharpTurnCount'], 'Integer');
      }
      if (data.hasOwnProperty('statTime')) {
        obj['statTime'] = ApiClient.convertToType(data['statTime'], 'Integer');
      }
      if (data.hasOwnProperty('suddenChangeLaneCount')) {
        obj['suddenChangeLaneCount'] = ApiClient.convertToType(data['suddenChangeLaneCount'], 'Integer');
      }
      if (data.hasOwnProperty('suddenSpeedDownCount')) {
        obj['suddenSpeedDownCount'] = ApiClient.convertToType(data['suddenSpeedDownCount'], 'Integer');
      }
      if (data.hasOwnProperty('suddenSpeedUpCount')) {
        obj['suddenSpeedUpCount'] = ApiClient.convertToType(data['suddenSpeedUpCount'], 'Integer');
      }
      if (data.hasOwnProperty('tripCount')) {
        obj['tripCount'] = ApiClient.convertToType(data['tripCount'], 'Integer');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {String} createUser
   */
  exports.prototype['createUser'] = undefined;
  /**
   * @member {Integer} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {Integer} fuelCost
   */
  exports.prototype['fuelCost'] = undefined;
  /**
   * @member {Integer} maxSpeed
   */
  exports.prototype['maxSpeed'] = undefined;
  /**
   * @member {Integer} maxSpeedDown
   */
  exports.prototype['maxSpeedDown'] = undefined;
  /**
   * @member {Integer} maxSpeedDownTime
   */
  exports.prototype['maxSpeedDownTime'] = undefined;
  /**
   * @member {Integer} maxSpeedTime
   */
  exports.prototype['maxSpeedTime'] = undefined;
  /**
   * @member {Integer} maxSpeedUp
   */
  exports.prototype['maxSpeedUp'] = undefined;
  /**
   * @member {Integer} maxSpeedUpTime
   */
  exports.prototype['maxSpeedUpTime'] = undefined;
  /**
   * @member {Date} modifyDate
   */
  exports.prototype['modifyDate'] = undefined;
  /**
   * @member {Integer} modifyDistance
   */
  exports.prototype['modifyDistance'] = undefined;
  /**
   * @member {String} modifyUser
   */
  exports.prototype['modifyUser'] = undefined;
  /**
   * @member {Integer} movingAverageSpeed
   */
  exports.prototype['movingAverageSpeed'] = undefined;
  /**
   * @member {Integer} sharpTurnCount
   */
  exports.prototype['sharpTurnCount'] = undefined;
  /**
   * @member {Integer} statTime
   */
  exports.prototype['statTime'] = undefined;
  /**
   * @member {Integer} suddenChangeLaneCount
   */
  exports.prototype['suddenChangeLaneCount'] = undefined;
  /**
   * @member {Integer} suddenSpeedDownCount
   */
  exports.prototype['suddenSpeedDownCount'] = undefined;
  /**
   * @member {Integer} suddenSpeedUpCount
   */
  exports.prototype['suddenSpeedUpCount'] = undefined;
  /**
   * @member {Integer} tripCount
   */
  exports.prototype['tripCount'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;




  return exports;
}));


