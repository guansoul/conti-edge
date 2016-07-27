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
    root.ContiEdge.FencesRequestDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, ObjectError) {
  'use strict';




  /**
   * The FencesRequestDTO model module.
   * @module model/FencesRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>FencesRequestDTO</code>.
   * @alias module:model/FencesRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>FencesRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FencesRequestDTO} obj Optional instance to populate.
   * @return {module:model/FencesRequestDTO} The populated <code>FencesRequestDTO</code> instance.
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
      if (data.hasOwnProperty('radius')) {
        obj['radius'] = ApiClient.convertToType(data['radius'], 'Integer');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
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
   * @member {Integer} radius
   */
  exports.prototype['radius'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;




  return exports;
}));


