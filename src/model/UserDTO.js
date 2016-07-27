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
    root.ContiEdge.UserDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserDTO model module.
   * @module model/UserDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>UserDTO</code>.
   * @alias module:model/UserDTO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>UserDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDTO} obj Optional instance to populate.
   * @return {module:model/UserDTO} The populated <code>UserDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activated')) {
        obj['activated'] = ApiClient.convertToType(data['activated'], 'String');
      }
      if (data.hasOwnProperty('authorities')) {
        obj['authorities'] = ApiClient.convertToType(data['authorities'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('imageURL')) {
        obj['imageURL'] = ApiClient.convertToType(data['imageURL'], 'String');
      }
      if (data.hasOwnProperty('langKey')) {
        obj['langKey'] = ApiClient.convertToType(data['langKey'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} activated
   */
  exports.prototype['activated'] = undefined;
  /**
   * @member {String} authorities
   */
  exports.prototype['authorities'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} imageURL
   */
  exports.prototype['imageURL'] = undefined;
  /**
   * @member {String} langKey
   */
  exports.prototype['langKey'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;




  return exports;
}));


