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
    root.ContiEdge.ModelVo = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelVo model module.
   * @module model/ModelVo
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>ModelVo</code>.
   * @alias module:model/ModelVo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ModelVo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelVo} obj Optional instance to populate.
   * @return {module:model/ModelVo} The populated <code>ModelVo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('modelName')) {
        obj['modelName'] = ApiClient.convertToType(data['modelName'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
      if (data.hasOwnProperty('vehicleBrandUid')) {
        obj['vehicleBrandUid'] = ApiClient.convertToType(data['vehicleBrandUid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} modelName
   */
  exports.prototype['modelName'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;
  /**
   * @member {Integer} vehicleBrandUid
   */
  exports.prototype['vehicleBrandUid'] = undefined;




  return exports;
}));


