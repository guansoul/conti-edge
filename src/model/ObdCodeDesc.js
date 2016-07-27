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
    root.ContiEdge.ObdCodeDesc = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ObdCodeDesc model module.
   * @module model/ObdCodeDesc
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>ObdCodeDesc</code>.
   * @alias module:model/ObdCodeDesc
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ObdCodeDesc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObdCodeDesc} obj Optional instance to populate.
   * @return {module:model/ObdCodeDesc} The populated <code>ObdCodeDesc</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('applyTo')) {
        obj['applyTo'] = ApiClient.convertToType(data['applyTo'], 'String');
      }
      if (data.hasOwnProperty('background')) {
        obj['background'] = ApiClient.convertToType(data['background'], 'String');
      }
      if (data.hasOwnProperty('chineseDefinition')) {
        obj['chineseDefinition'] = ApiClient.convertToType(data['chineseDefinition'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('englishDefinition')) {
        obj['englishDefinition'] = ApiClient.convertToType(data['englishDefinition'], 'String');
      }
      if (data.hasOwnProperty('groupBy')) {
        obj['groupBy'] = ApiClient.convertToType(data['groupBy'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
      if (data.hasOwnProperty('uid')) {
        obj['uid'] = ApiClient.convertToType(data['uid'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} applyTo
   */
  exports.prototype['applyTo'] = undefined;
  /**
   * @member {String} background
   */
  exports.prototype['background'] = undefined;
  /**
   * @member {String} chineseDefinition
   */
  exports.prototype['chineseDefinition'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} englishDefinition
   */
  exports.prototype['englishDefinition'] = undefined;
  /**
   * @member {String} groupBy
   */
  exports.prototype['groupBy'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {Integer} uid
   */
  exports.prototype['uid'] = undefined;




  return exports;
}));


