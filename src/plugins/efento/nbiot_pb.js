/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Measurements', null, global);
goog.exportSymbol('proto.Slot', null, global);
goog.exportSymbol('proto.Slot.SlotType', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Slot = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Slot.repeatedFields_, null);
};
goog.inherits(proto.Slot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Slot.displayName = 'proto.Slot';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Slot.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Slot.prototype.toObject = function (opt_includeInstance) {
    return proto.Slot.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Slot} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Slot.toObject = function (includeInstance, msg) {
    var f, obj = {
      type: jspb.Message.getFieldWithDefault(msg, 1, 0),
      timestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
      startPoint: jspb.Message.getFieldWithDefault(msg, 4, 0),
      sampleOffsetsList: jspb.Message.getRepeatedField(msg, 5),
      loThreshold: jspb.Message.getFieldWithDefault(msg, 6, 0),
      hiThreshold: jspb.Message.getFieldWithDefault(msg, 7, 0),
      diffThreshold: jspb.Message.getFieldWithDefault(msg, 8, 0)
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Slot}
 */
proto.Slot.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Slot;
  return proto.Slot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Slot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Slot}
 */
proto.Slot.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.Slot.SlotType} */ (reader.readEnum());
        msg.setType(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setTimestamp(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readSint32());
        msg.setStartPoint(value);
        break;
      case 5:
        var value = /** @type {!Array<number>} */ (reader.readPackedSint32());
        msg.setSampleOffsetsList(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setLoThreshold(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setHiThreshold(value);
        break;
      case 8:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setDiffThreshold(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Slot.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Slot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Slot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Slot.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStartPoint();
  if (f !== 0) {
    writer.writeSint32(
      4,
      f
    );
  }
  f = message.getSampleOffsetsList();
  if (f.length > 0) {
    writer.writePackedSint32(
      5,
      f
    );
  }
  f = message.getLoThreshold();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHiThreshold();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDiffThreshold();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Slot.SlotType = {
  NO_SENSOR: 0,
  TEMPERATURE: 1,
  HUMIDITY: 2,
  PRESSURE: 3,
  DIFERENTIAL_PRESSURE: 4,
  RELAY: 5
};

/**
 * optional SlotType type = 1;
 * @return {!proto.Slot.SlotType}
 */
proto.Slot.prototype.getType = function () {
  return /** @type {!proto.Slot.SlotType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Slot.SlotType} value */
proto.Slot.prototype.setType = function (value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 timestamp = 2;
 * @return {number}
 */
proto.Slot.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.Slot.prototype.setTimestamp = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional sint32 start_point = 4;
 * @return {number}
 */
proto.Slot.prototype.getStartPoint = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.Slot.prototype.setStartPoint = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated sint32 sample_offsets = 5;
 * @return {!Array<number>}
 */
proto.Slot.prototype.getSampleOffsetsList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<number>} value */
proto.Slot.prototype.setSampleOffsetsList = function (value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.Slot.prototype.addSampleOffsets = function (value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.Slot.prototype.clearSampleOffsetsList = function () {
  this.setSampleOffsetsList([]);
};


/**
 * optional int32 lo_threshold = 6;
 * @return {number}
 */
proto.Slot.prototype.getLoThreshold = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.Slot.prototype.setLoThreshold = function (value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 hi_threshold = 7;
 * @return {number}
 */
proto.Slot.prototype.getHiThreshold = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.Slot.prototype.setHiThreshold = function (value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 diff_threshold = 8;
 * @return {number}
 */
proto.Slot.prototype.getDiffThreshold = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.Slot.prototype.setDiffThreshold = function (value) {
  jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Measurements = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Measurements.repeatedFields_, null);
};
goog.inherits(proto.Measurements, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Measurements.displayName = 'proto.Measurements';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Measurements.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Measurements.prototype.toObject = function (opt_includeInstance) {
    return proto.Measurements.toObject(opt_includeInstance, this);
  };


  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Measurements} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Measurements.toObject = function (includeInstance, msg) {
    var f, obj = {
      serialNum: msg.getSerialNum_asB64(),
      batteryStatus: jspb.Message.getFieldWithDefault(msg, 2, false),
      measurementPeriod: jspb.Message.getFieldWithDefault(msg, 3, 0),
      slotsList: jspb.Message.toObjectList(msg.getSlotsList(),
        proto.Slot.toObject, includeInstance),
      nextMeasure: jspb.Message.getFieldWithDefault(msg, 5, 0),
      transferReason: jspb.Message.getFieldWithDefault(msg, 6, 0),
      cloudToken: jspb.Message.getFieldWithDefault(msg, 16, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Measurements}
 */
proto.Measurements.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Measurements;
  return proto.Measurements.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Measurements} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Measurements}
 */
proto.Measurements.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setSerialNum(value);
        break;
      case 2:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setBatteryStatus(value);
        break;
      case 3:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setMeasurementPeriod(value);
        break;
      case 4:
        var value = new proto.Slot;
        reader.readMessage(value, proto.Slot.deserializeBinaryFromReader);
        msg.addSlots(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readInt32());
        msg.setNextMeasure(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setTransferReason(value);
        break;
      case 16:
        var value = /** @type {string} */ (reader.readString());
        msg.setCloudToken(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Measurements.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.Measurements.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Measurements} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Measurements.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getSerialNum_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBatteryStatus();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMeasurementPeriod();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getSlotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.Slot.serializeBinaryToWriter
    );
  }
  f = message.getNextMeasure();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTransferReason();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCloudToken();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional bytes serial_num = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Measurements.prototype.getSerialNum = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes serial_num = 1;
 * This is a type-conversion wrapper around `getSerialNum()`
 * @return {string}
 */
proto.Measurements.prototype.getSerialNum_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getSerialNum()));
};


/**
 * optional bytes serial_num = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerialNum()`
 * @return {!Uint8Array}
 */
proto.Measurements.prototype.getSerialNum_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getSerialNum()));
};


/** @param {!(string|Uint8Array)} value */
proto.Measurements.prototype.setSerialNum = function (value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bool battery_status = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.Measurements.prototype.getBatteryStatus = function () {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.Measurements.prototype.setBatteryStatus = function (value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int32 measurement_period = 3;
 * @return {number}
 */
proto.Measurements.prototype.getMeasurementPeriod = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Measurements.prototype.setMeasurementPeriod = function (value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Slot slots = 4;
 * @return {!Array<!proto.Slot>}
 */
proto.Measurements.prototype.getSlotsList = function () {
  return /** @type{!Array<!proto.Slot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Slot, 4));
};


/** @param {!Array<!proto.Slot>} value */
proto.Measurements.prototype.setSlotsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.Slot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Slot}
 */
proto.Measurements.prototype.addSlots = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.Slot, opt_index);
};


proto.Measurements.prototype.clearSlotsList = function () {
  this.setSlotsList([]);
};


/**
 * optional int32 next_measure = 5;
 * @return {number}
 */
proto.Measurements.prototype.getNextMeasure = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.Measurements.prototype.setNextMeasure = function (value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 transfer_reason = 6;
 * @return {number}
 */
proto.Measurements.prototype.getTransferReason = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.Measurements.prototype.setTransferReason = function (value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string cloud_token = 16;
 * @return {string}
 */
proto.Measurements.prototype.getCloudToken = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/** @param {string} value */
proto.Measurements.prototype.setCloudToken = function (value) {
  jspb.Message.setProto3StringField(this, 16, value);
};


goog.object.extend(exports, proto);

