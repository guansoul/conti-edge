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
    root.ContiEdge.PersistentToken = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PersistentToken model module.
   * @module model/PersistentToken
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>PersistentToken</code>.
   * @alias module:model/PersistentToken
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PersistentToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersistentToken} obj Optional instance to populate.
   * @return {module:model/PersistentToken} The populated <code>PersistentToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('series')) {
        obj['series'] = ApiClient.convertToType(data['series'], 'String');
      }
      if (data.hasOwnProperty('userAgent')) {
        obj['userAgent'] = ApiClient.convertToType(data['userAgent'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * @member {String} series
   */
  exports.prototype['series'] = undefined;
  /**
   * @member {String} userAgent
   */
  exports.prototype['userAgent'] = undefined;




  return exports;
}));


