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
    root.ContiEdge.TripInfo = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TripInfo model module.
   * @module model/TripInfo
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>TripInfo</code>.
   * @alias module:model/TripInfo
   * @class
   */
  var exports = function() {
    var _this = this;










































  };

  /**
   * Constructs a <code>TripInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TripInfo} obj Optional instance to populate.
   * @return {module:model/TripInfo} The populated <code>TripInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('averageSpeed')) {
        obj['averageSpeed'] = ApiClient.convertToType(data['averageSpeed'], 'Integer');
      }
      if (data.hasOwnProperty('clientTripUid')) {
        obj['clientTripUid'] = ApiClient.convertToType(data['clientTripUid'], 'Integer');
      }
      if (data.hasOwnProperty('createDate')) {
        obj['createDate'] = ApiClient.convertToType(data['createDate'], 'Date');
      }
      if (data.hasOwnProperty('createUser')) {
        obj['createUser'] = ApiClient.convertToType(data['createUser'], 'String');
      }
      if (data.hasOwnProperty('deviceEndTime')) {
        obj['deviceEndTime'] = ApiClient.convertToType(data['deviceEndTime'], 'Integer');
      }
      if (data.hasOwnProperty('deviceStartTime')) {
        obj['deviceStartTime'] = ApiClient.convertToType(data['deviceStartTime'], 'Integer');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Integer');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('endGcjLat')) {
        obj['endGcjLat'] = ApiClient.convertToType(data['endGcjLat'], 'Integer');
      }
      if (data.hasOwnProperty('endGcjLon')) {
        obj['endGcjLon'] = ApiClient.convertToType(data['endGcjLon'], 'Integer');
      }
      if (data.hasOwnProperty('endLat')) {
        obj['endLat'] = ApiClient.convertToType(data['endLat'], 'Integer');
      }
      if (data.hasOwnProperty('endLon')) {
        obj['endLon'] = ApiClient.convertToType(data['endLon'], 'Integer');
      }
      if (data.hasOwnProperty('faultCount')) {
        obj['faultCount'] = ApiClient.convertToType(data['faultCount'], 'Integer');
      }
      if (data.hasOwnProperty('fuel100km')) {
        obj['fuel100km'] = ApiClient.convertToType(data['fuel100km'], 'Integer');
      }
      if (data.hasOwnProperty('fuelCost')) {
        obj['fuelCost'] = ApiClient.convertToType(data['fuelCost'], 'Integer');
      }
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('imei')) {
        obj['imei'] = ApiClient.convertToType(data['imei'], 'String');
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
      if (data.hasOwnProperty('modifyUser')) {
        obj['modifyUser'] = ApiClient.convertToType(data['modifyUser'], 'String');
      }
      if (data.hasOwnProperty('movingAverageSpeed')) {
        obj['movingAverageSpeed'] = ApiClient.convertToType(data['movingAverageSpeed'], 'Integer');
      }
      if (data.hasOwnProperty('recordSwitch')) {
        obj['recordSwitch'] = ApiClient.convertToType(data['recordSwitch'], 'String');
      }
      if (data.hasOwnProperty('serverEndTime')) {
        obj['serverEndTime'] = ApiClient.convertToType(data['serverEndTime'], 'Integer');
      }
      if (data.hasOwnProperty('serverStartTime')) {
        obj['serverStartTime'] = ApiClient.convertToType(data['serverStartTime'], 'Integer');
      }
      if (data.hasOwnProperty('sharpTurnCount')) {
        obj['sharpTurnCount'] = ApiClient.convertToType(data['sharpTurnCount'], 'Integer');
      }
      if (data.hasOwnProperty('startGcjLat')) {
        obj['startGcjLat'] = ApiClient.convertToType(data['startGcjLat'], 'Integer');
      }
      if (data.hasOwnProperty('startGcjLon')) {
        obj['startGcjLon'] = ApiClient.convertToType(data['startGcjLon'], 'Integer');
      }
      if (data.hasOwnProperty('startLat')) {
        obj['startLat'] = ApiClient.convertToType(data['startLat'], 'Integer');
      }
      if (data.hasOwnProperty('startLon')) {
        obj['startLon'] = ApiClient.convertToType(data['startLon'], 'Integer');
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
      if (data.hasOwnProperty('travelTime')) {
        obj['travelTime'] = ApiClient.convertToType(data['travelTime'], 'Integer');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
      if (data.hasOwnProperty('vehicleId')) {
        obj['vehicleId'] = ApiClient.convertToType(data['vehicleId'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} averageSpeed
   */
  exports.prototype['averageSpeed'] = undefined;
  /**
   * @member {Integer} clientTripUid
   */
  exports.prototype['clientTripUid'] = undefined;
  /**
   * @member {Date} createDate
   */
  exports.prototype['createDate'] = undefined;
  /**
   * @member {String} createUser
   */
  exports.prototype['createUser'] = undefined;
  /**
   * @member {Integer} deviceEndTime
   */
  exports.prototype['deviceEndTime'] = undefined;
  /**
   * @member {Integer} deviceStartTime
   */
  exports.prototype['deviceStartTime'] = undefined;
  /**
   * @member {Integer} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {Integer} endGcjLat
   */
  exports.prototype['endGcjLat'] = undefined;
  /**
   * @member {Integer} endGcjLon
   */
  exports.prototype['endGcjLon'] = undefined;
  /**
   * @member {Integer} endLat
   */
  exports.prototype['endLat'] = undefined;
  /**
   * @member {Integer} endLon
   */
  exports.prototype['endLon'] = undefined;
  /**
   * @member {Integer} faultCount
   */
  exports.prototype['faultCount'] = undefined;
  /**
   * @member {Integer} fuel100km
   */
  exports.prototype['fuel100km'] = undefined;
  /**
   * @member {Integer} fuelCost
   */
  exports.prototype['fuelCost'] = undefined;
  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {String} imei
   */
  exports.prototype['imei'] = undefined;
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
   * @member {String} modifyUser
   */
  exports.prototype['modifyUser'] = undefined;
  /**
   * @member {Integer} movingAverageSpeed
   */
  exports.prototype['movingAverageSpeed'] = undefined;
  /**
   * @member {String} recordSwitch
   */
  exports.prototype['recordSwitch'] = undefined;
  /**
   * @member {Integer} serverEndTime
   */
  exports.prototype['serverEndTime'] = undefined;
  /**
   * @member {Integer} serverStartTime
   */
  exports.prototype['serverStartTime'] = undefined;
  /**
   * @member {Integer} sharpTurnCount
   */
  exports.prototype['sharpTurnCount'] = undefined;
  /**
   * @member {Integer} startGcjLat
   */
  exports.prototype['startGcjLat'] = undefined;
  /**
   * @member {Integer} startGcjLon
   */
  exports.prototype['startGcjLon'] = undefined;
  /**
   * @member {Integer} startLat
   */
  exports.prototype['startLat'] = undefined;
  /**
   * @member {Integer} startLon
   */
  exports.prototype['startLon'] = undefined;
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
   * @member {Integer} travelTime
   */
  exports.prototype['travelTime'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;
  /**
   * @member {Integer} vehicleId
   */
  exports.prototype['vehicleId'] = undefined;




  return exports;
}));


