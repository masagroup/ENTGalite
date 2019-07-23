/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sword = (function() {

    /**
     * Namespace sword.
     * @exports sword
     * @namespace
     */
    var sword = {};

    sword.AuthenticationKeyRequest = (function() {

        /**
         * Properties of an AuthenticationKeyRequest.
         * @memberof sword
         * @interface IAuthenticationKeyRequest
         */

        /**
         * Constructs a new AuthenticationKeyRequest.
         * @memberof sword
         * @classdesc Represents an AuthenticationKeyRequest.
         * @implements IAuthenticationKeyRequest
         * @constructor
         * @param {sword.IAuthenticationKeyRequest=} [properties] Properties to set
         */
        function AuthenticationKeyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AuthenticationKeyRequest instance using the specified properties.
         * @function create
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {sword.IAuthenticationKeyRequest=} [properties] Properties to set
         * @returns {sword.AuthenticationKeyRequest} AuthenticationKeyRequest instance
         */
        AuthenticationKeyRequest.create = function create(properties) {
            return new AuthenticationKeyRequest(properties);
        };

        /**
         * Encodes the specified AuthenticationKeyRequest message. Does not implicitly {@link sword.AuthenticationKeyRequest.verify|verify} messages.
         * @function encode
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {sword.IAuthenticationKeyRequest} message AuthenticationKeyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationKeyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AuthenticationKeyRequest message, length delimited. Does not implicitly {@link sword.AuthenticationKeyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {sword.IAuthenticationKeyRequest} message AuthenticationKeyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationKeyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationKeyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.AuthenticationKeyRequest} AuthenticationKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationKeyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.AuthenticationKeyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthenticationKeyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.AuthenticationKeyRequest} AuthenticationKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationKeyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationKeyRequest message.
         * @function verify
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationKeyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an AuthenticationKeyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.AuthenticationKeyRequest} AuthenticationKeyRequest
         */
        AuthenticationKeyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.AuthenticationKeyRequest)
                return object;
            return new $root.sword.AuthenticationKeyRequest();
        };

        /**
         * Creates a plain object from an AuthenticationKeyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.AuthenticationKeyRequest
         * @static
         * @param {sword.AuthenticationKeyRequest} message AuthenticationKeyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationKeyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this AuthenticationKeyRequest to JSON.
         * @function toJSON
         * @memberof sword.AuthenticationKeyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationKeyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthenticationKeyRequest;
    })();

    sword.ConnectedProfilesRequest = (function() {

        /**
         * Properties of a ConnectedProfilesRequest.
         * @memberof sword
         * @interface IConnectedProfilesRequest
         */

        /**
         * Constructs a new ConnectedProfilesRequest.
         * @memberof sword
         * @classdesc Represents a ConnectedProfilesRequest.
         * @implements IConnectedProfilesRequest
         * @constructor
         * @param {sword.IConnectedProfilesRequest=} [properties] Properties to set
         */
        function ConnectedProfilesRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ConnectedProfilesRequest instance using the specified properties.
         * @function create
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {sword.IConnectedProfilesRequest=} [properties] Properties to set
         * @returns {sword.ConnectedProfilesRequest} ConnectedProfilesRequest instance
         */
        ConnectedProfilesRequest.create = function create(properties) {
            return new ConnectedProfilesRequest(properties);
        };

        /**
         * Encodes the specified ConnectedProfilesRequest message. Does not implicitly {@link sword.ConnectedProfilesRequest.verify|verify} messages.
         * @function encode
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {sword.IConnectedProfilesRequest} message ConnectedProfilesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectedProfilesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ConnectedProfilesRequest message, length delimited. Does not implicitly {@link sword.ConnectedProfilesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {sword.IConnectedProfilesRequest} message ConnectedProfilesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectedProfilesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectedProfilesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ConnectedProfilesRequest} ConnectedProfilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectedProfilesRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ConnectedProfilesRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectedProfilesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ConnectedProfilesRequest} ConnectedProfilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectedProfilesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectedProfilesRequest message.
         * @function verify
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectedProfilesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ConnectedProfilesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ConnectedProfilesRequest} ConnectedProfilesRequest
         */
        ConnectedProfilesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ConnectedProfilesRequest)
                return object;
            return new $root.sword.ConnectedProfilesRequest();
        };

        /**
         * Creates a plain object from a ConnectedProfilesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ConnectedProfilesRequest
         * @static
         * @param {sword.ConnectedProfilesRequest} message ConnectedProfilesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectedProfilesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ConnectedProfilesRequest to JSON.
         * @function toJSON
         * @memberof sword.ConnectedProfilesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectedProfilesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnectedProfilesRequest;
    })();

    sword.AuthenticationRequest = (function() {

        /**
         * Properties of an AuthenticationRequest.
         * @memberof sword
         * @interface IAuthenticationRequest
         * @property {string} login AuthenticationRequest login
         * @property {string} password AuthenticationRequest password
         * @property {sword.IProtocolVersion} version AuthenticationRequest version
         * @property {string|null} [authenticationKey] AuthenticationRequest authenticationKey
         * @property {string|null} [token] AuthenticationRequest token
         * @property {boolean|null} [sync] AuthenticationRequest sync
         * @property {boolean|null} [virtualClient] AuthenticationRequest virtualClient
         */

        /**
         * Constructs a new AuthenticationRequest.
         * @memberof sword
         * @classdesc Represents an AuthenticationRequest.
         * @implements IAuthenticationRequest
         * @constructor
         * @param {sword.IAuthenticationRequest=} [properties] Properties to set
         */
        function AuthenticationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationRequest login.
         * @member {string} login
         * @memberof sword.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.login = "";

        /**
         * AuthenticationRequest password.
         * @member {string} password
         * @memberof sword.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.password = "";

        /**
         * AuthenticationRequest version.
         * @member {sword.IProtocolVersion} version
         * @memberof sword.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.version = null;

        /**
         * AuthenticationRequest authenticationKey.
         * @member {string} authenticationKey
         * @memberof sword.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.authenticationKey = "";

        /**
         * AuthenticationRequest token.
         * @member {string} token
         * @memberof sword.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.token = "";

        /**
         * AuthenticationRequest sync.
         * @member {boolean} sync
         * @memberof sword.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.sync = false;

        /**
         * AuthenticationRequest virtualClient.
         * @member {boolean} virtualClient
         * @memberof sword.AuthenticationRequest
         * @instance
         */
        AuthenticationRequest.prototype.virtualClient = false;

        /**
         * Creates a new AuthenticationRequest instance using the specified properties.
         * @function create
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {sword.IAuthenticationRequest=} [properties] Properties to set
         * @returns {sword.AuthenticationRequest} AuthenticationRequest instance
         */
        AuthenticationRequest.create = function create(properties) {
            return new AuthenticationRequest(properties);
        };

        /**
         * Encodes the specified AuthenticationRequest message. Does not implicitly {@link sword.AuthenticationRequest.verify|verify} messages.
         * @function encode
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {sword.IAuthenticationRequest} message AuthenticationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            $root.sword.ProtocolVersion.encode(message.version, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.authenticationKey != null && message.hasOwnProperty("authenticationKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.authenticationKey);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.token);
            if (message.sync != null && message.hasOwnProperty("sync"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.sync);
            if (message.virtualClient != null && message.hasOwnProperty("virtualClient"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.virtualClient);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link sword.AuthenticationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {sword.IAuthenticationRequest} message AuthenticationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.AuthenticationRequest} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.AuthenticationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.version = $root.sword.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authenticationKey = reader.string();
                    break;
                case 5:
                    message.token = reader.string();
                    break;
                case 6:
                    message.sync = reader.bool();
                    break;
                case 7:
                    message.virtualClient = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("login"))
                throw $util.ProtocolError("missing required 'login'", { instance: message });
            if (!message.hasOwnProperty("password"))
                throw $util.ProtocolError("missing required 'password'", { instance: message });
            if (!message.hasOwnProperty("version"))
                throw $util.ProtocolError("missing required 'version'", { instance: message });
            return message;
        };

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.AuthenticationRequest} AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationRequest message.
         * @function verify
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.login))
                return "login: string expected";
            if (!$util.isString(message.password))
                return "password: string expected";
            {
                var error = $root.sword.ProtocolVersion.verify(message.version);
                if (error)
                    return "version." + error;
            }
            if (message.authenticationKey != null && message.hasOwnProperty("authenticationKey"))
                if (!$util.isString(message.authenticationKey))
                    return "authenticationKey: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.sync != null && message.hasOwnProperty("sync"))
                if (typeof message.sync !== "boolean")
                    return "sync: boolean expected";
            if (message.virtualClient != null && message.hasOwnProperty("virtualClient"))
                if (typeof message.virtualClient !== "boolean")
                    return "virtualClient: boolean expected";
            return null;
        };

        /**
         * Creates an AuthenticationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.AuthenticationRequest} AuthenticationRequest
         */
        AuthenticationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.AuthenticationRequest)
                return object;
            var message = new $root.sword.AuthenticationRequest();
            if (object.login != null)
                message.login = String(object.login);
            if (object.password != null)
                message.password = String(object.password);
            if (object.version != null) {
                if (typeof object.version !== "object")
                    throw TypeError(".sword.AuthenticationRequest.version: object expected");
                message.version = $root.sword.ProtocolVersion.fromObject(object.version);
            }
            if (object.authenticationKey != null)
                message.authenticationKey = String(object.authenticationKey);
            if (object.token != null)
                message.token = String(object.token);
            if (object.sync != null)
                message.sync = Boolean(object.sync);
            if (object.virtualClient != null)
                message.virtualClient = Boolean(object.virtualClient);
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.AuthenticationRequest
         * @static
         * @param {sword.AuthenticationRequest} message AuthenticationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.password = "";
                object.version = null;
                object.authenticationKey = "";
                object.token = "";
                object.sync = false;
                object.virtualClient = false;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = $root.sword.ProtocolVersion.toObject(message.version, options);
            if (message.authenticationKey != null && message.hasOwnProperty("authenticationKey"))
                object.authenticationKey = message.authenticationKey;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.sync != null && message.hasOwnProperty("sync"))
                object.sync = message.sync;
            if (message.virtualClient != null && message.hasOwnProperty("virtualClient"))
                object.virtualClient = message.virtualClient;
            return object;
        };

        /**
         * Converts this AuthenticationRequest to JSON.
         * @function toJSON
         * @memberof sword.AuthenticationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthenticationRequest;
    })();

    sword.DisconnectionRequest = (function() {

        /**
         * Properties of a DisconnectionRequest.
         * @memberof sword
         * @interface IDisconnectionRequest
         * @property {number|null} [clientId] DisconnectionRequest clientId
         */

        /**
         * Constructs a new DisconnectionRequest.
         * @memberof sword
         * @classdesc Represents a DisconnectionRequest.
         * @implements IDisconnectionRequest
         * @constructor
         * @param {sword.IDisconnectionRequest=} [properties] Properties to set
         */
        function DisconnectionRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisconnectionRequest clientId.
         * @member {number} clientId
         * @memberof sword.DisconnectionRequest
         * @instance
         */
        DisconnectionRequest.prototype.clientId = 0;

        /**
         * Creates a new DisconnectionRequest instance using the specified properties.
         * @function create
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {sword.IDisconnectionRequest=} [properties] Properties to set
         * @returns {sword.DisconnectionRequest} DisconnectionRequest instance
         */
        DisconnectionRequest.create = function create(properties) {
            return new DisconnectionRequest(properties);
        };

        /**
         * Encodes the specified DisconnectionRequest message. Does not implicitly {@link sword.DisconnectionRequest.verify|verify} messages.
         * @function encode
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {sword.IDisconnectionRequest} message DisconnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectionRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified DisconnectionRequest message, length delimited. Does not implicitly {@link sword.DisconnectionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {sword.IDisconnectionRequest} message DisconnectionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectionRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisconnectionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.DisconnectionRequest} DisconnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectionRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.DisconnectionRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisconnectionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.DisconnectionRequest} DisconnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectionRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisconnectionRequest message.
         * @function verify
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisconnectionRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            return null;
        };

        /**
         * Creates a DisconnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.DisconnectionRequest} DisconnectionRequest
         */
        DisconnectionRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.DisconnectionRequest)
                return object;
            var message = new $root.sword.DisconnectionRequest();
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            return message;
        };

        /**
         * Creates a plain object from a DisconnectionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.DisconnectionRequest
         * @static
         * @param {sword.DisconnectionRequest} message DisconnectionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisconnectionRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.clientId = 0;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            return object;
        };

        /**
         * Converts this DisconnectionRequest to JSON.
         * @function toJSON
         * @memberof sword.DisconnectionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisconnectionRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DisconnectionRequest;
    })();

    sword.ClientToAuthentication = (function() {

        /**
         * Properties of a ClientToAuthentication.
         * @memberof sword
         * @interface IClientToAuthentication
         * @property {number|null} [context] ClientToAuthentication context
         * @property {sword.ClientToAuthentication.IContent} message ClientToAuthentication message
         */

        /**
         * Constructs a new ClientToAuthentication.
         * @memberof sword
         * @classdesc Represents a ClientToAuthentication.
         * @implements IClientToAuthentication
         * @constructor
         * @param {sword.IClientToAuthentication=} [properties] Properties to set
         */
        function ClientToAuthentication(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientToAuthentication context.
         * @member {number} context
         * @memberof sword.ClientToAuthentication
         * @instance
         */
        ClientToAuthentication.prototype.context = 0;

        /**
         * ClientToAuthentication message.
         * @member {sword.ClientToAuthentication.IContent} message
         * @memberof sword.ClientToAuthentication
         * @instance
         */
        ClientToAuthentication.prototype.message = null;

        /**
         * Creates a new ClientToAuthentication instance using the specified properties.
         * @function create
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {sword.IClientToAuthentication=} [properties] Properties to set
         * @returns {sword.ClientToAuthentication} ClientToAuthentication instance
         */
        ClientToAuthentication.create = function create(properties) {
            return new ClientToAuthentication(properties);
        };

        /**
         * Encodes the specified ClientToAuthentication message. Does not implicitly {@link sword.ClientToAuthentication.verify|verify} messages.
         * @function encode
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {sword.IClientToAuthentication} message ClientToAuthentication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientToAuthentication.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.context != null && message.hasOwnProperty("context"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.context);
            $root.sword.ClientToAuthentication.Content.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientToAuthentication message, length delimited. Does not implicitly {@link sword.ClientToAuthentication.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {sword.IClientToAuthentication} message ClientToAuthentication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientToAuthentication.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientToAuthentication message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ClientToAuthentication} ClientToAuthentication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientToAuthentication.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ClientToAuthentication();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.context = reader.int32();
                    break;
                case 2:
                    message.message = $root.sword.ClientToAuthentication.Content.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("message"))
                throw $util.ProtocolError("missing required 'message'", { instance: message });
            return message;
        };

        /**
         * Decodes a ClientToAuthentication message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ClientToAuthentication} ClientToAuthentication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientToAuthentication.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientToAuthentication message.
         * @function verify
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientToAuthentication.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isInteger(message.context))
                    return "context: integer expected";
            {
                var error = $root.sword.ClientToAuthentication.Content.verify(message.message);
                if (error)
                    return "message." + error;
            }
            return null;
        };

        /**
         * Creates a ClientToAuthentication message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ClientToAuthentication} ClientToAuthentication
         */
        ClientToAuthentication.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ClientToAuthentication)
                return object;
            var message = new $root.sword.ClientToAuthentication();
            if (object.context != null)
                message.context = object.context | 0;
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".sword.ClientToAuthentication.message: object expected");
                message.message = $root.sword.ClientToAuthentication.Content.fromObject(object.message);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientToAuthentication message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ClientToAuthentication
         * @static
         * @param {sword.ClientToAuthentication} message ClientToAuthentication
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientToAuthentication.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.context = 0;
                object.message = null;
            }
            if (message.context != null && message.hasOwnProperty("context"))
                object.context = message.context;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.sword.ClientToAuthentication.Content.toObject(message.message, options);
            return object;
        };

        /**
         * Converts this ClientToAuthentication to JSON.
         * @function toJSON
         * @memberof sword.ClientToAuthentication
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientToAuthentication.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientToAuthentication.Content = (function() {

            /**
             * Properties of a Content.
             * @memberof sword.ClientToAuthentication
             * @interface IContent
             * @property {sword.IAuthenticationRequest|null} [authenticationRequest] Content authenticationRequest
             * @property {sword.IAuthenticationKeyRequest|null} [authenticationKeyRequest] Content authenticationKeyRequest
             */

            /**
             * Constructs a new Content.
             * @memberof sword.ClientToAuthentication
             * @classdesc Represents a Content.
             * @implements IContent
             * @constructor
             * @param {sword.ClientToAuthentication.IContent=} [properties] Properties to set
             */
            function Content(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Content authenticationRequest.
             * @member {sword.IAuthenticationRequest|null|undefined} authenticationRequest
             * @memberof sword.ClientToAuthentication.Content
             * @instance
             */
            Content.prototype.authenticationRequest = null;

            /**
             * Content authenticationKeyRequest.
             * @member {sword.IAuthenticationKeyRequest|null|undefined} authenticationKeyRequest
             * @memberof sword.ClientToAuthentication.Content
             * @instance
             */
            Content.prototype.authenticationKeyRequest = null;

            /**
             * Creates a new Content instance using the specified properties.
             * @function create
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {sword.ClientToAuthentication.IContent=} [properties] Properties to set
             * @returns {sword.ClientToAuthentication.Content} Content instance
             */
            Content.create = function create(properties) {
                return new Content(properties);
            };

            /**
             * Encodes the specified Content message. Does not implicitly {@link sword.ClientToAuthentication.Content.verify|verify} messages.
             * @function encode
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {sword.ClientToAuthentication.IContent} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.authenticationRequest != null && message.hasOwnProperty("authenticationRequest"))
                    $root.sword.AuthenticationRequest.encode(message.authenticationRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.authenticationKeyRequest != null && message.hasOwnProperty("authenticationKeyRequest"))
                    $root.sword.AuthenticationKeyRequest.encode(message.authenticationKeyRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Content message, length delimited. Does not implicitly {@link sword.ClientToAuthentication.Content.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {sword.ClientToAuthentication.IContent} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Content message from the specified reader or buffer.
             * @function decode
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sword.ClientToAuthentication.Content} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ClientToAuthentication.Content();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.authenticationRequest = $root.sword.AuthenticationRequest.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.authenticationKeyRequest = $root.sword.AuthenticationKeyRequest.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Content message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sword.ClientToAuthentication.Content} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Content message.
             * @function verify
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Content.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.authenticationRequest != null && message.hasOwnProperty("authenticationRequest")) {
                    var error = $root.sword.AuthenticationRequest.verify(message.authenticationRequest);
                    if (error)
                        return "authenticationRequest." + error;
                }
                if (message.authenticationKeyRequest != null && message.hasOwnProperty("authenticationKeyRequest")) {
                    var error = $root.sword.AuthenticationKeyRequest.verify(message.authenticationKeyRequest);
                    if (error)
                        return "authenticationKeyRequest." + error;
                }
                return null;
            };

            /**
             * Creates a Content message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sword.ClientToAuthentication.Content} Content
             */
            Content.fromObject = function fromObject(object) {
                if (object instanceof $root.sword.ClientToAuthentication.Content)
                    return object;
                var message = new $root.sword.ClientToAuthentication.Content();
                if (object.authenticationRequest != null) {
                    if (typeof object.authenticationRequest !== "object")
                        throw TypeError(".sword.ClientToAuthentication.Content.authenticationRequest: object expected");
                    message.authenticationRequest = $root.sword.AuthenticationRequest.fromObject(object.authenticationRequest);
                }
                if (object.authenticationKeyRequest != null) {
                    if (typeof object.authenticationKeyRequest !== "object")
                        throw TypeError(".sword.ClientToAuthentication.Content.authenticationKeyRequest: object expected");
                    message.authenticationKeyRequest = $root.sword.AuthenticationKeyRequest.fromObject(object.authenticationKeyRequest);
                }
                return message;
            };

            /**
             * Creates a plain object from a Content message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sword.ClientToAuthentication.Content
             * @static
             * @param {sword.ClientToAuthentication.Content} message Content
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Content.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.authenticationRequest = null;
                    object.authenticationKeyRequest = null;
                }
                if (message.authenticationRequest != null && message.hasOwnProperty("authenticationRequest"))
                    object.authenticationRequest = $root.sword.AuthenticationRequest.toObject(message.authenticationRequest, options);
                if (message.authenticationKeyRequest != null && message.hasOwnProperty("authenticationKeyRequest"))
                    object.authenticationKeyRequest = $root.sword.AuthenticationKeyRequest.toObject(message.authenticationKeyRequest, options);
                return object;
            };

            /**
             * Converts this Content to JSON.
             * @function toJSON
             * @memberof sword.ClientToAuthentication.Content
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Content.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Content;
        })();

        return ClientToAuthentication;
    })();

    sword.ProtocolVersion = (function() {

        /**
         * Properties of a ProtocolVersion.
         * @memberof sword
         * @interface IProtocolVersion
         * @property {string} value ProtocolVersion value
         */

        /**
         * Constructs a new ProtocolVersion.
         * @memberof sword
         * @classdesc Represents a ProtocolVersion.
         * @implements IProtocolVersion
         * @constructor
         * @param {sword.IProtocolVersion=} [properties] Properties to set
         */
        function ProtocolVersion(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtocolVersion value.
         * @member {string} value
         * @memberof sword.ProtocolVersion
         * @instance
         */
        ProtocolVersion.prototype.value = "5.1";

        /**
         * Creates a new ProtocolVersion instance using the specified properties.
         * @function create
         * @memberof sword.ProtocolVersion
         * @static
         * @param {sword.IProtocolVersion=} [properties] Properties to set
         * @returns {sword.ProtocolVersion} ProtocolVersion instance
         */
        ProtocolVersion.create = function create(properties) {
            return new ProtocolVersion(properties);
        };

        /**
         * Encodes the specified ProtocolVersion message. Does not implicitly {@link sword.ProtocolVersion.verify|verify} messages.
         * @function encode
         * @memberof sword.ProtocolVersion
         * @static
         * @param {sword.IProtocolVersion} message ProtocolVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtocolVersion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified ProtocolVersion message, length delimited. Does not implicitly {@link sword.ProtocolVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProtocolVersion
         * @static
         * @param {sword.IProtocolVersion} message ProtocolVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtocolVersion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtocolVersion message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProtocolVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProtocolVersion} ProtocolVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtocolVersion.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProtocolVersion();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("value"))
                throw $util.ProtocolError("missing required 'value'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProtocolVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProtocolVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProtocolVersion} ProtocolVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtocolVersion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtocolVersion message.
         * @function verify
         * @memberof sword.ProtocolVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtocolVersion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.value))
                return "value: string expected";
            return null;
        };

        /**
         * Creates a ProtocolVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProtocolVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProtocolVersion} ProtocolVersion
         */
        ProtocolVersion.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProtocolVersion)
                return object;
            var message = new $root.sword.ProtocolVersion();
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a ProtocolVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProtocolVersion
         * @static
         * @param {sword.ProtocolVersion} message ProtocolVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtocolVersion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.value = "5.1";
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this ProtocolVersion to JSON.
         * @function toJSON
         * @memberof sword.ProtocolVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtocolVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProtocolVersion;
    })();

    sword.Id = (function() {

        /**
         * Properties of an Id.
         * @memberof sword
         * @interface IId
         * @property {number} id Id id
         */

        /**
         * Constructs a new Id.
         * @memberof sword
         * @classdesc Represents an Id.
         * @implements IId
         * @constructor
         * @param {sword.IId=} [properties] Properties to set
         */
        function Id(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Id id.
         * @member {number} id
         * @memberof sword.Id
         * @instance
         */
        Id.prototype.id = 0;

        /**
         * Creates a new Id instance using the specified properties.
         * @function create
         * @memberof sword.Id
         * @static
         * @param {sword.IId=} [properties] Properties to set
         * @returns {sword.Id} Id instance
         */
        Id.create = function create(properties) {
            return new Id(properties);
        };

        /**
         * Encodes the specified Id message. Does not implicitly {@link sword.Id.verify|verify} messages.
         * @function encode
         * @memberof sword.Id
         * @static
         * @param {sword.IId} message Id message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Id.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified Id message, length delimited. Does not implicitly {@link sword.Id.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.Id
         * @static
         * @param {sword.IId} message Id message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Id.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Id message from the specified reader or buffer.
         * @function decode
         * @memberof sword.Id
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.Id} Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Id.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.Id();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes an Id message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.Id
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.Id} Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Id.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Id message.
         * @function verify
         * @memberof sword.Id
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Id.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            return null;
        };

        /**
         * Creates an Id message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.Id
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.Id} Id
         */
        Id.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.Id)
                return object;
            var message = new $root.sword.Id();
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Id message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.Id
         * @static
         * @param {sword.Id} message Id
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Id.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this Id to JSON.
         * @function toJSON
         * @memberof sword.Id
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Id.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Id;
    })();

    sword.IdList = (function() {

        /**
         * Properties of an IdList.
         * @memberof sword
         * @interface IIdList
         * @property {Array.<sword.IId>|null} [elem] IdList elem
         */

        /**
         * Constructs a new IdList.
         * @memberof sword
         * @classdesc Represents an IdList.
         * @implements IIdList
         * @constructor
         * @param {sword.IIdList=} [properties] Properties to set
         */
        function IdList(properties) {
            this.elem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdList elem.
         * @member {Array.<sword.IId>} elem
         * @memberof sword.IdList
         * @instance
         */
        IdList.prototype.elem = $util.emptyArray;

        /**
         * Creates a new IdList instance using the specified properties.
         * @function create
         * @memberof sword.IdList
         * @static
         * @param {sword.IIdList=} [properties] Properties to set
         * @returns {sword.IdList} IdList instance
         */
        IdList.create = function create(properties) {
            return new IdList(properties);
        };

        /**
         * Encodes the specified IdList message. Does not implicitly {@link sword.IdList.verify|verify} messages.
         * @function encode
         * @memberof sword.IdList
         * @static
         * @param {sword.IIdList} message IdList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elem != null && message.elem.length)
                for (var i = 0; i < message.elem.length; ++i)
                    $root.sword.Id.encode(message.elem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IdList message, length delimited. Does not implicitly {@link sword.IdList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.IdList
         * @static
         * @param {sword.IIdList} message IdList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdList message from the specified reader or buffer.
         * @function decode
         * @memberof sword.IdList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.IdList} IdList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.IdList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.elem && message.elem.length))
                        message.elem = [];
                    message.elem.push($root.sword.Id.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IdList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.IdList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.IdList} IdList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdList message.
         * @function verify
         * @memberof sword.IdList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elem != null && message.hasOwnProperty("elem")) {
                if (!Array.isArray(message.elem))
                    return "elem: array expected";
                for (var i = 0; i < message.elem.length; ++i) {
                    var error = $root.sword.Id.verify(message.elem[i]);
                    if (error)
                        return "elem." + error;
                }
            }
            return null;
        };

        /**
         * Creates an IdList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.IdList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.IdList} IdList
         */
        IdList.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.IdList)
                return object;
            var message = new $root.sword.IdList();
            if (object.elem) {
                if (!Array.isArray(object.elem))
                    throw TypeError(".sword.IdList.elem: array expected");
                message.elem = [];
                for (var i = 0; i < object.elem.length; ++i) {
                    if (typeof object.elem[i] !== "object")
                        throw TypeError(".sword.IdList.elem: object expected");
                    message.elem[i] = $root.sword.Id.fromObject(object.elem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an IdList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.IdList
         * @static
         * @param {sword.IdList} message IdList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elem = [];
            if (message.elem && message.elem.length) {
                object.elem = [];
                for (var j = 0; j < message.elem.length; ++j)
                    object.elem[j] = $root.sword.Id.toObject(message.elem[j], options);
            }
            return object;
        };

        /**
         * Converts this IdList to JSON.
         * @function toJSON
         * @memberof sword.IdList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdList;
    })();

    sword.DateTime = (function() {

        /**
         * Properties of a DateTime.
         * @memberof sword
         * @interface IDateTime
         * @property {string} data DateTime data
         */

        /**
         * Constructs a new DateTime.
         * @memberof sword
         * @classdesc Represents a DateTime.
         * @implements IDateTime
         * @constructor
         * @param {sword.IDateTime=} [properties] Properties to set
         */
        function DateTime(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DateTime data.
         * @member {string} data
         * @memberof sword.DateTime
         * @instance
         */
        DateTime.prototype.data = "";

        /**
         * Creates a new DateTime instance using the specified properties.
         * @function create
         * @memberof sword.DateTime
         * @static
         * @param {sword.IDateTime=} [properties] Properties to set
         * @returns {sword.DateTime} DateTime instance
         */
        DateTime.create = function create(properties) {
            return new DateTime(properties);
        };

        /**
         * Encodes the specified DateTime message. Does not implicitly {@link sword.DateTime.verify|verify} messages.
         * @function encode
         * @memberof sword.DateTime
         * @static
         * @param {sword.IDateTime} message DateTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateTime.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified DateTime message, length delimited. Does not implicitly {@link sword.DateTime.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.DateTime
         * @static
         * @param {sword.IDateTime} message DateTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DateTime.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DateTime message from the specified reader or buffer.
         * @function decode
         * @memberof sword.DateTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.DateTime} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateTime.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.DateTime();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a DateTime message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.DateTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.DateTime} DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DateTime.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DateTime message.
         * @function verify
         * @memberof sword.DateTime
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DateTime.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.data))
                return "data: string expected";
            return null;
        };

        /**
         * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.DateTime
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.DateTime} DateTime
         */
        DateTime.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.DateTime)
                return object;
            var message = new $root.sword.DateTime();
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a DateTime message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.DateTime
         * @static
         * @param {sword.DateTime} message DateTime
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DateTime.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.data = "";
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this DateTime to JSON.
         * @function toJSON
         * @memberof sword.DateTime
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DateTime.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DateTime;
    })();

    return sword;
})();

module.exports = $root;
