(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GoToShopItem', 'model/ObjectError', 'model/StringNumItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GoToShopItem'), require('./ObjectError'), require('./StringNumItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.OrderRemindingDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.GoToShopItem, root.ContiEdge.ObjectError, root.ContiEdge.StringNumItem);
  }
}(this, function(ApiClient, GoToShopItem, ObjectError, StringNumItem) {
  'use strict';




  /**
   * The OrderRemindingDTO model module.
   * @module model/OrderRemindingDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>OrderRemindingDTO</code>.
   * @alias module:model/OrderRemindingDTO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>OrderRemindingDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderRemindingDTO} obj Optional instance to populate.
   * @return {module:model/OrderRemindingDTO} The populated <code>OrderRemindingDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('confirmRemind')) {
        obj['confirmRemind'] = GoToShopItem.constructFromObject(data['confirmRemind']);
      }
      if (data.hasOwnProperty('distanceRemind')) {
        obj['distanceRemind'] = StringNumItem.constructFromObject(data['distanceRemind']);
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
      if (data.hasOwnProperty('notCommentRemind')) {
        obj['notCommentRemind'] = StringNumItem.constructFromObject(data['notCommentRemind']);
      }
      if (data.hasOwnProperty('notConfirmRemind')) {
        obj['notConfirmRemind'] = StringNumItem.constructFromObject(data['notConfirmRemind']);
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
   * @member {module:model/GoToShopItem} confirmRemind
   */
  exports.prototype['confirmRemind'] = undefined;
  /**
   * @member {module:model/StringNumItem} distanceRemind
   */
  exports.prototype['distanceRemind'] = undefined;
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
   * @member {module:model/StringNumItem} notCommentRemind
   */
  exports.prototype['notCommentRemind'] = undefined;
  /**
   * @member {module:model/StringNumItem} notConfirmRemind
   */
  exports.prototype['notConfirmRemind'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;




  return exports;
}));


