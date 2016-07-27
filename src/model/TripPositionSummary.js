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
    root.ContiEdge.TripPositionSummary = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TripPositionSummary model module.
   * @module model/TripPositionSummary
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>TripPositionSummary</code>.
   * @alias module:model/TripPositionSummary
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>TripPositionSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TripPositionSummary} obj Optional instance to populate.
   * @return {module:model/TripPositionSummary} The populated <code>TripPositionSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceTime')) {
        obj['deviceTime'] = ApiClient.convertToType(data['deviceTime'], 'Integer');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'Integer');
      }
      if (data.hasOwnProperty('gcjLat')) {
        obj['gcjLat'] = ApiClient.convertToType(data['gcjLat'], 'Integer');
      }
      if (data.hasOwnProperty('gcjLon')) {
        obj['gcjLon'] = ApiClient.convertToType(data['gcjLon'], 'Integer');
      }
      if (data.hasOwnProperty('lat')) {
        obj['lat'] = ApiClient.convertToType(data['lat'], 'Integer');
      }
      if (data.hasOwnProperty('lon')) {
        obj['lon'] = ApiClient.convertToType(data['lon'], 'Integer');
      }
      if (data.hasOwnProperty('serverTime')) {
        obj['serverTime'] = ApiClient.convertToType(data['serverTime'], 'Integer');
      }
      if (data.hasOwnProperty('speed')) {
        obj['speed'] = ApiClient.convertToType(data['speed'], 'Integer');
      }
      if (data.hasOwnProperty('tripGuid')) {
        obj['tripGuid'] = ApiClient.convertToType(data['tripGuid'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} deviceTime
   */
  exports.prototype['deviceTime'] = undefined;
  /**
   * @member {Integer} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {Integer} gcjLat
   */
  exports.prototype['gcjLat'] = undefined;
  /**
   * @member {Integer} gcjLon
   */
  exports.prototype['gcjLon'] = undefined;
  /**
   * @member {Integer} lat
   */
  exports.prototype['lat'] = undefined;
  /**
   * @member {Integer} lon
   */
  exports.prototype['lon'] = undefined;
  /**
   * @member {Integer} serverTime
   */
  exports.prototype['serverTime'] = undefined;
  /**
   * @member {Integer} speed
   */
  exports.prototype['speed'] = undefined;
  /**
   * @member {String} tripGuid
   */
  exports.prototype['tripGuid'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;




  return exports;
}));


