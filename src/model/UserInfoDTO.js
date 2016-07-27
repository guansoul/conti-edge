(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ObjectError', 'model/VehicleInfoDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectError'), require('./VehicleInfoDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.ContiEdge) {
      root.ContiEdge = {};
    }
    root.ContiEdge.UserInfoDTO = factory(root.ContiEdge.ApiClient, root.ContiEdge.ObjectError, root.ContiEdge.VehicleInfoDTO);
  }
}(this, function(ApiClient, ObjectError, VehicleInfoDTO) {
  'use strict';




  /**
   * The UserInfoDTO model module.
   * @module model/UserInfoDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>UserInfoDTO</code>.
   * @alias module:model/UserInfoDTO
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>UserInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInfoDTO} obj Optional instance to populate.
   * @return {module:model/UserInfoDTO} The populated <code>UserInfoDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('allError')) {
        obj['allError'] = ApiClient.convertToType(data['allError'], [ObjectError]);
      }
      if (data.hasOwnProperty('birthday')) {
        obj['birthday'] = ApiClient.convertToType(data['birthday'], 'String');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('forwardURL')) {
        obj['forwardURL'] = ApiClient.convertToType(data['forwardURL'], 'String');
      }
      if (data.hasOwnProperty('imageURL')) {
        obj['imageURL'] = ApiClient.convertToType(data['imageURL'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageCode')) {
        obj['messageCode'] = ApiClient.convertToType(data['messageCode'], 'String');
      }
      if (data.hasOwnProperty('mobilePhoneNo')) {
        obj['mobilePhoneNo'] = ApiClient.convertToType(data['mobilePhoneNo'], 'String');
      }
      if (data.hasOwnProperty('pageFlag')) {
        obj['pageFlag'] = ApiClient.convertToType(data['pageFlag'], 'Integer');
      }
      if (data.hasOwnProperty('resultCode')) {
        obj['resultCode'] = ApiClient.convertToType(data['resultCode'], 'Integer');
      }
      if (data.hasOwnProperty('s3ImageURL')) {
        obj['s3ImageURL'] = ApiClient.convertToType(data['s3ImageURL'], 'String');
      }
      if (data.hasOwnProperty('sex')) {
        obj['sex'] = ApiClient.convertToType(data['sex'], 'String');
      }
      if (data.hasOwnProperty('topicId')) {
        obj['topicId'] = ApiClient.convertToType(data['topicId'], 'String');
      }
      if (data.hasOwnProperty('vehicleInfo')) {
        obj['vehicleInfo'] = ApiClient.convertToType(data['vehicleInfo'], [VehicleInfoDTO]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ObjectError>} allError
   */
  exports.prototype['allError'] = undefined;
  /**
   * @member {String} birthday
   */
  exports.prototype['birthday'] = undefined;
  /**
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * @member {String} forwardURL
   */
  exports.prototype['forwardURL'] = undefined;
  /**
   * @member {String} imageURL
   */
  exports.prototype['imageURL'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageCode
   */
  exports.prototype['messageCode'] = undefined;
  /**
   * @member {String} mobilePhoneNo
   */
  exports.prototype['mobilePhoneNo'] = undefined;
  /**
   * @member {Integer} pageFlag
   */
  exports.prototype['pageFlag'] = undefined;
  /**
   * @member {Integer} resultCode
   */
  exports.prototype['resultCode'] = undefined;
  /**
   * @member {String} s3ImageURL
   */
  exports.prototype['s3ImageURL'] = undefined;
  /**
   * @member {String} sex
   */
  exports.prototype['sex'] = undefined;
  /**
   * @member {String} topicId
   */
  exports.prototype['topicId'] = undefined;
  /**
   * @member {Array.<module:model/VehicleInfoDTO>} vehicleInfo
   */
  exports.prototype['vehicleInfo'] = undefined;




  return exports;
}));


