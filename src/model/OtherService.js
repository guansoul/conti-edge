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
    root.ContiEdge.OtherService = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OtherService model module.
   * @module model/OtherService
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>OtherService</code>.
   * @alias module:model/OtherService
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OtherService</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OtherService} obj Optional instance to populate.
   * @return {module:model/OtherService} The populated <code>OtherService</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serviceDesc')) {
        obj['serviceDesc'] = ApiClient.convertToType(data['serviceDesc'], 'String');
      }
      if (data.hasOwnProperty('serviceName')) {
        obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleModelUid')) {
        obj['vehicleModelUid'] = ApiClient.convertToType(data['vehicleModelUid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} serviceDesc
   */
  exports.prototype['serviceDesc'] = undefined;
  /**
   * @member {String} serviceName
   */
  exports.prototype['serviceName'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {Integer} vehicleModelUid
   */
  exports.prototype['vehicleModelUid'] = undefined;




  return exports;
}));


