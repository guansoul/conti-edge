(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FactoryModelItem', 'model/ObjectError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FactoryModelItem'), require('./ObjectError'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.FactoryModelDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.FactoryModelItem, root.ContiEdge.ObjectError);
  }
}(this, function(ApiClient, FactoryModelItem, ObjectError) {
  'use strict';




  /**
   * The FactoryModelDTO model module.
   * @module model/FactoryModelDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>FactoryModelDTO</code>.
   * @alias module:model/FactoryModelDTO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>FactoryModelDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FactoryModelDTO} obj Optional instance to populate.
   * @return {module:model/FactoryModelDTO} The populated <code>FactoryModelDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('factoryModelList')) {
        obj['factoryModelList'] = ApiClient.convertToType(data['factoryModelList'], [FactoryModelItem]);
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
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
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {Array.<module:model/FactoryModelItem>} factoryModelList
   */
  exports.prototype['factoryModelList'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
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


