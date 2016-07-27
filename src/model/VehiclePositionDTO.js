(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.VehiclePositionDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, ObjectError) {
  'use strict';




  /**
   * The VehiclePositionDTO model module.
   * @module model/VehiclePositionDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehiclePositionDTO</code>.
   * @alias module:model/VehiclePositionDTO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>VehiclePositionDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehiclePositionDTO} obj Optional instance to populate.
   * @return {module:model/VehiclePositionDTO} The populated <code>VehiclePositionDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('fencesOpenFlag')) {
        obj['fencesOpenFlag'] = ApiClient.convertToType(data['fencesOpenFlag'], 'Boolean');
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
      }
      if (data.hasOwnProperty('lat')) {
        obj['lat'] = ApiClient.convertToType(data['lat'], 'Integer');
      }
      if (data.hasOwnProperty('lon')) {
        obj['lon'] = ApiClient.convertToType(data['lon'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageCode')) {
        obj['messageCode'] = ApiClient.convertToType(data['messageCode'], 'String');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {Boolean} fencesOpenFlag
   */
  exports.prototype['fencesOpenFlag'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
  /**
   * @member {Integer} lat
   */
  exports.prototype['lat'] = undefined;
  /**
   * @member {Integer} lon
   */
  exports.prototype['lon'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;




  return exports;
}));


