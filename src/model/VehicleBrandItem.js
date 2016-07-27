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
    root.ContiEdge.VehicleBrandItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VehicleBrandItem model module.
   * @module model/VehicleBrandItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>VehicleBrandItem</code>.
   * @alias module:model/VehicleBrandItem
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>VehicleBrandItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleBrandItem} obj Optional instance to populate.
   * @return {module:model/VehicleBrandItem} The populated <code>VehicleBrandItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('brandId')) {
        obj['brandId'] = ApiClient.convertToType(data['brandId'], 'String');
      }
      if (data.hasOwnProperty('brandName')) {
        obj['brandName'] = ApiClient.convertToType(data['brandName'], 'String');
      }
      if (data.hasOwnProperty('brandPicUrl')) {
        obj['brandPicUrl'] = ApiClient.convertToType(data['brandPicUrl'], 'String');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} brandId
   */
  exports.prototype['brandId'] = undefined;
  /**
   * @member {String} brandName
   */
  exports.prototype['brandName'] = undefined;
  /**
   * @member {String} brandPicUrl
   */
  exports.prototype['brandPicUrl'] = undefined;
  /**
   * @member {String} index
   */
  exports.prototype['index'] = undefined;




  return exports;
}));


