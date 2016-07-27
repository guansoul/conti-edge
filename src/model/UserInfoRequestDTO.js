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
    root.ContiEdge.UserInfoRequestDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserInfoRequestDTO model module.
   * @module model/UserInfoRequestDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>UserInfoRequestDTO</code>.
   * @alias module:model/UserInfoRequestDTO
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>UserInfoRequestDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfoRequestDTO} obj Optional instance to populate.
   * @return {module:model/UserInfoRequestDTO} The populated <code>UserInfoRequestDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('birthday')) {
        obj['birthday'] = ApiClient.convertToType(data['birthday'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('mobilePhoneNo')) {
        obj['mobilePhoneNo'] = ApiClient.convertToType(data['mobilePhoneNo'], 'String');
      }
      if (data.hasOwnProperty('nickName')) {
        obj['nickName'] = ApiClient.convertToType(data['nickName'], 'String');
      }
      if (data.hasOwnProperty('sex')) {
        obj['sex'] = ApiClient.convertToType(data['sex'], 'String');
      }
      if (data.hasOwnProperty('vehicleGuid')) {
        obj['vehicleGuid'] = ApiClient.convertToType(data['vehicleGuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} birthday
   */
  exports.prototype['birthday'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} mobilePhoneNo
   */
  exports.prototype['mobilePhoneNo'] = undefined;
  /**
   * @member {String} nickName
   */
  exports.prototype['nickName'] = undefined;
  /**
   * @member {String} sex
   */
  exports.prototype['sex'] = undefined;
  /**
   * @member {String} vehicleGuid
   */
  exports.prototype['vehicleGuid'] = undefined;




  return exports;
}));


