(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.FactoryModelItem = factory(root.ContiEdge.ApiClient, root.ContiEdge.ModelItem);
  }
}(this, function(ApiClient, ModelItem) {
  'use strict';




  /**
   * The FactoryModelItem model module.
   * @module model/FactoryModelItem
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>FactoryModelItem</code>.
   * @alias module:model/FactoryModelItem
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FactoryModelItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FactoryModelItem} obj Optional instance to populate.
   * @return {module:model/FactoryModelItem} The populated <code>FactoryModelItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('factory')) {
        obj['factory'] = ApiClient.convertToType(data['factory'], 'String');
      }
      if (data.hasOwnProperty('modelList')) {
        obj['modelList'] = ApiClient.convertToType(data['modelList'], [ModelItem]);
      }
    }
    return obj;
  }

  /**
   * @member {String} factory
   */
  exports.prototype['factory'] = undefined;
  /**
   * @member {Array.<module:model/ModelItem>} modelList
   */
  exports.prototype['modelList'] = undefined;




  return exports;
}));


