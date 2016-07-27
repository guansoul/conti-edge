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
    root.ContiEdge.ModelItem = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelItem model module.
   * @module model/ModelItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>ModelItem</code>.
   * @alias module:model/ModelItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ModelItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelItem} obj Optional instance to populate.
   * @return {module:model/ModelItem} The populated <code>ModelItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('modelId')) {
        obj['modelId'] = ApiClient.convertToType(data['modelId'], 'Integer');
      }
      if (data.hasOwnProperty('modelName')) {
        obj['modelName'] = ApiClient.convertToType(data['modelName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} modelId
   */
  exports.prototype['modelId'] = undefined;
  /**
   * @member {String} modelName
   */
  exports.prototype['modelName'] = undefined;




  return exports;
}));


