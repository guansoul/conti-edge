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
    root.ContiEdge.ModelYearItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelYearItem model module.
   * @module model/ModelYearItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>ModelYearItem</code>.
   * @alias module:model/ModelYearItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ModelYearItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelYearItem} obj Optional instance to populate.
   * @return {module:model/ModelYearItem} The populated <code>ModelYearItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displacementList')) {
        obj['displacementList'] = ApiClient.convertToType(data['displacementList'], ['String']);
      }
      if (data.hasOwnProperty('modelYear')) {
        obj['modelYear'] = ApiClient.convertToType(data['modelYear'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} displacementList
   */
  exports.prototype['displacementList'] = undefined;
  /**
   * @member {String} modelYear
   */
  exports.prototype['modelYear'] = undefined;




  return exports;
}));


