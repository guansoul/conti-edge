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
    root.ContiEdge.TripCountDTO = factory(root.ContiEdge.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TripCountDTO model module.
   * @module model/TripCountDTO
   * @version 1.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>TripCountDTO</code>.
   * @alias module:model/TripCountDTO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TripCountDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TripCountDTO} obj Optional instance to populate.
   * @return {module:model/TripCountDTO} The populated <code>TripCountDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;




  return exports;
}));


