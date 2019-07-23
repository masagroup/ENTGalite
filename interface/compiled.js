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

    sword.AuthenticationKeyResponse = (function() {

        /**
         * Properties of an AuthenticationKeyResponse.
         * @memberof sword
         * @interface IAuthenticationKeyResponse
         * @property {string} authenticationKey AuthenticationKeyResponse authenticationKey
         */

        /**
         * Constructs a new AuthenticationKeyResponse.
         * @memberof sword
         * @classdesc Represents an AuthenticationKeyResponse.
         * @implements IAuthenticationKeyResponse
         * @constructor
         * @param {sword.IAuthenticationKeyResponse=} [properties] Properties to set
         */
        function AuthenticationKeyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationKeyResponse authenticationKey.
         * @member {string} authenticationKey
         * @memberof sword.AuthenticationKeyResponse
         * @instance
         */
        AuthenticationKeyResponse.prototype.authenticationKey = "";

        /**
         * Creates a new AuthenticationKeyResponse instance using the specified properties.
         * @function create
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {sword.IAuthenticationKeyResponse=} [properties] Properties to set
         * @returns {sword.AuthenticationKeyResponse} AuthenticationKeyResponse instance
         */
        AuthenticationKeyResponse.create = function create(properties) {
            return new AuthenticationKeyResponse(properties);
        };

        /**
         * Encodes the specified AuthenticationKeyResponse message. Does not implicitly {@link sword.AuthenticationKeyResponse.verify|verify} messages.
         * @function encode
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {sword.IAuthenticationKeyResponse} message AuthenticationKeyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationKeyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.authenticationKey);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationKeyResponse message, length delimited. Does not implicitly {@link sword.AuthenticationKeyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {sword.IAuthenticationKeyResponse} message AuthenticationKeyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationKeyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationKeyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.AuthenticationKeyResponse} AuthenticationKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationKeyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.AuthenticationKeyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authenticationKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("authenticationKey"))
                throw $util.ProtocolError("missing required 'authenticationKey'", { instance: message });
            return message;
        };

        /**
         * Decodes an AuthenticationKeyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.AuthenticationKeyResponse} AuthenticationKeyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationKeyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationKeyResponse message.
         * @function verify
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationKeyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.authenticationKey))
                return "authenticationKey: string expected";
            return null;
        };

        /**
         * Creates an AuthenticationKeyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.AuthenticationKeyResponse} AuthenticationKeyResponse
         */
        AuthenticationKeyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.AuthenticationKeyResponse)
                return object;
            var message = new $root.sword.AuthenticationKeyResponse();
            if (object.authenticationKey != null)
                message.authenticationKey = String(object.authenticationKey);
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationKeyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.AuthenticationKeyResponse
         * @static
         * @param {sword.AuthenticationKeyResponse} message AuthenticationKeyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationKeyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.authenticationKey = "";
            if (message.authenticationKey != null && message.hasOwnProperty("authenticationKey"))
                object.authenticationKey = message.authenticationKey;
            return object;
        };

        /**
         * Converts this AuthenticationKeyResponse to JSON.
         * @function toJSON
         * @memberof sword.AuthenticationKeyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationKeyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthenticationKeyResponse;
    })();

    sword.ProfileDescription = (function() {

        /**
         * Properties of a ProfileDescription.
         * @memberof sword
         * @interface IProfileDescription
         * @property {string} login ProfileDescription login
         * @property {boolean} password ProfileDescription password
         * @property {boolean} supervisor ProfileDescription supervisor
         * @property {sword.IRoleType|null} [role] ProfileDescription role
         */

        /**
         * Constructs a new ProfileDescription.
         * @memberof sword
         * @classdesc Represents a ProfileDescription.
         * @implements IProfileDescription
         * @constructor
         * @param {sword.IProfileDescription=} [properties] Properties to set
         */
        function ProfileDescription(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileDescription login.
         * @member {string} login
         * @memberof sword.ProfileDescription
         * @instance
         */
        ProfileDescription.prototype.login = "";

        /**
         * ProfileDescription password.
         * @member {boolean} password
         * @memberof sword.ProfileDescription
         * @instance
         */
        ProfileDescription.prototype.password = false;

        /**
         * ProfileDescription supervisor.
         * @member {boolean} supervisor
         * @memberof sword.ProfileDescription
         * @instance
         */
        ProfileDescription.prototype.supervisor = false;

        /**
         * ProfileDescription role.
         * @member {sword.IRoleType|null|undefined} role
         * @memberof sword.ProfileDescription
         * @instance
         */
        ProfileDescription.prototype.role = null;

        /**
         * Creates a new ProfileDescription instance using the specified properties.
         * @function create
         * @memberof sword.ProfileDescription
         * @static
         * @param {sword.IProfileDescription=} [properties] Properties to set
         * @returns {sword.ProfileDescription} ProfileDescription instance
         */
        ProfileDescription.create = function create(properties) {
            return new ProfileDescription(properties);
        };

        /**
         * Encodes the specified ProfileDescription message. Does not implicitly {@link sword.ProfileDescription.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileDescription
         * @static
         * @param {sword.IProfileDescription} message ProfileDescription message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDescription.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.password);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.supervisor);
            if (message.role != null && message.hasOwnProperty("role"))
                $root.sword.RoleType.encode(message.role, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProfileDescription message, length delimited. Does not implicitly {@link sword.ProfileDescription.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileDescription
         * @static
         * @param {sword.IProfileDescription} message ProfileDescription message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDescription.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileDescription message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileDescription
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileDescription} ProfileDescription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDescription.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileDescription();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.password = reader.bool();
                    break;
                case 3:
                    message.supervisor = reader.bool();
                    break;
                case 4:
                    message.role = $root.sword.RoleType.decode(reader, reader.uint32());
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
            if (!message.hasOwnProperty("supervisor"))
                throw $util.ProtocolError("missing required 'supervisor'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProfileDescription message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileDescription
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileDescription} ProfileDescription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDescription.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileDescription message.
         * @function verify
         * @memberof sword.ProfileDescription
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileDescription.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.login))
                return "login: string expected";
            if (typeof message.password !== "boolean")
                return "password: boolean expected";
            if (typeof message.supervisor !== "boolean")
                return "supervisor: boolean expected";
            if (message.role != null && message.hasOwnProperty("role")) {
                var error = $root.sword.RoleType.verify(message.role);
                if (error)
                    return "role." + error;
            }
            return null;
        };

        /**
         * Creates a ProfileDescription message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileDescription
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileDescription} ProfileDescription
         */
        ProfileDescription.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileDescription)
                return object;
            var message = new $root.sword.ProfileDescription();
            if (object.login != null)
                message.login = String(object.login);
            if (object.password != null)
                message.password = Boolean(object.password);
            if (object.supervisor != null)
                message.supervisor = Boolean(object.supervisor);
            if (object.role != null) {
                if (typeof object.role !== "object")
                    throw TypeError(".sword.ProfileDescription.role: object expected");
                message.role = $root.sword.RoleType.fromObject(object.role);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileDescription message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileDescription
         * @static
         * @param {sword.ProfileDescription} message ProfileDescription
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileDescription.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.password = false;
                object.supervisor = false;
                object.role = null;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.supervisor != null && message.hasOwnProperty("supervisor"))
                object.supervisor = message.supervisor;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = $root.sword.RoleType.toObject(message.role, options);
            return object;
        };

        /**
         * Converts this ProfileDescription to JSON.
         * @function toJSON
         * @memberof sword.ProfileDescription
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileDescription.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProfileDescription;
    })();

    sword.ProfileDescriptionList = (function() {

        /**
         * Properties of a ProfileDescriptionList.
         * @memberof sword
         * @interface IProfileDescriptionList
         * @property {Array.<sword.IProfileDescription>|null} [elem] ProfileDescriptionList elem
         */

        /**
         * Constructs a new ProfileDescriptionList.
         * @memberof sword
         * @classdesc Represents a ProfileDescriptionList.
         * @implements IProfileDescriptionList
         * @constructor
         * @param {sword.IProfileDescriptionList=} [properties] Properties to set
         */
        function ProfileDescriptionList(properties) {
            this.elem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileDescriptionList elem.
         * @member {Array.<sword.IProfileDescription>} elem
         * @memberof sword.ProfileDescriptionList
         * @instance
         */
        ProfileDescriptionList.prototype.elem = $util.emptyArray;

        /**
         * Creates a new ProfileDescriptionList instance using the specified properties.
         * @function create
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {sword.IProfileDescriptionList=} [properties] Properties to set
         * @returns {sword.ProfileDescriptionList} ProfileDescriptionList instance
         */
        ProfileDescriptionList.create = function create(properties) {
            return new ProfileDescriptionList(properties);
        };

        /**
         * Encodes the specified ProfileDescriptionList message. Does not implicitly {@link sword.ProfileDescriptionList.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {sword.IProfileDescriptionList} message ProfileDescriptionList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDescriptionList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elem != null && message.elem.length)
                for (var i = 0; i < message.elem.length; ++i)
                    $root.sword.ProfileDescription.encode(message.elem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProfileDescriptionList message, length delimited. Does not implicitly {@link sword.ProfileDescriptionList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {sword.IProfileDescriptionList} message ProfileDescriptionList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDescriptionList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileDescriptionList message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileDescriptionList} ProfileDescriptionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDescriptionList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileDescriptionList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.elem && message.elem.length))
                        message.elem = [];
                    message.elem.push($root.sword.ProfileDescription.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileDescriptionList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileDescriptionList} ProfileDescriptionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDescriptionList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileDescriptionList message.
         * @function verify
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileDescriptionList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elem != null && message.hasOwnProperty("elem")) {
                if (!Array.isArray(message.elem))
                    return "elem: array expected";
                for (var i = 0; i < message.elem.length; ++i) {
                    var error = $root.sword.ProfileDescription.verify(message.elem[i]);
                    if (error)
                        return "elem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProfileDescriptionList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileDescriptionList} ProfileDescriptionList
         */
        ProfileDescriptionList.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileDescriptionList)
                return object;
            var message = new $root.sword.ProfileDescriptionList();
            if (object.elem) {
                if (!Array.isArray(object.elem))
                    throw TypeError(".sword.ProfileDescriptionList.elem: array expected");
                message.elem = [];
                for (var i = 0; i < object.elem.length; ++i) {
                    if (typeof object.elem[i] !== "object")
                        throw TypeError(".sword.ProfileDescriptionList.elem: object expected");
                    message.elem[i] = $root.sword.ProfileDescription.fromObject(object.elem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileDescriptionList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileDescriptionList
         * @static
         * @param {sword.ProfileDescriptionList} message ProfileDescriptionList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileDescriptionList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elem = [];
            if (message.elem && message.elem.length) {
                object.elem = [];
                for (var j = 0; j < message.elem.length; ++j)
                    object.elem[j] = $root.sword.ProfileDescription.toObject(message.elem[j], options);
            }
            return object;
        };

        /**
         * Converts this ProfileDescriptionList to JSON.
         * @function toJSON
         * @memberof sword.ProfileDescriptionList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileDescriptionList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProfileDescriptionList;
    })();

    sword.AuthenticationResponse = (function() {

        /**
         * Properties of an AuthenticationResponse.
         * @memberof sword
         * @interface IAuthenticationResponse
         * @property {sword.AuthenticationResponse.ErrorCode} errorCode AuthenticationResponse errorCode
         * @property {sword.IProfile|null} [profile] AuthenticationResponse profile
         * @property {sword.IProfileDescriptionList|null} [profiles] AuthenticationResponse profiles
         * @property {sword.IProtocolVersion} serverVersion AuthenticationResponse serverVersion
         * @property {sword.IDateTime|null} [restartDateTime] AuthenticationResponse restartDateTime
         * @property {string|null} [terrainName] AuthenticationResponse terrainName
         * @property {string|null} [dataset] AuthenticationResponse dataset
         * @property {string|null} [physical] AuthenticationResponse physical
         * @property {string|null} [exercise] AuthenticationResponse exercise
         * @property {string|null} [login] AuthenticationResponse login
         */

        /**
         * Constructs a new AuthenticationResponse.
         * @memberof sword
         * @classdesc Represents an AuthenticationResponse.
         * @implements IAuthenticationResponse
         * @constructor
         * @param {sword.IAuthenticationResponse=} [properties] Properties to set
         */
        function AuthenticationResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationResponse errorCode.
         * @member {sword.AuthenticationResponse.ErrorCode} errorCode
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.errorCode = 0;

        /**
         * AuthenticationResponse profile.
         * @member {sword.IProfile|null|undefined} profile
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.profile = null;

        /**
         * AuthenticationResponse profiles.
         * @member {sword.IProfileDescriptionList|null|undefined} profiles
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.profiles = null;

        /**
         * AuthenticationResponse serverVersion.
         * @member {sword.IProtocolVersion} serverVersion
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.serverVersion = null;

        /**
         * AuthenticationResponse restartDateTime.
         * @member {sword.IDateTime|null|undefined} restartDateTime
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.restartDateTime = null;

        /**
         * AuthenticationResponse terrainName.
         * @member {string} terrainName
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.terrainName = "";

        /**
         * AuthenticationResponse dataset.
         * @member {string} dataset
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.dataset = "";

        /**
         * AuthenticationResponse physical.
         * @member {string} physical
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.physical = "";

        /**
         * AuthenticationResponse exercise.
         * @member {string} exercise
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.exercise = "";

        /**
         * AuthenticationResponse login.
         * @member {string} login
         * @memberof sword.AuthenticationResponse
         * @instance
         */
        AuthenticationResponse.prototype.login = "";

        /**
         * Creates a new AuthenticationResponse instance using the specified properties.
         * @function create
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {sword.IAuthenticationResponse=} [properties] Properties to set
         * @returns {sword.AuthenticationResponse} AuthenticationResponse instance
         */
        AuthenticationResponse.create = function create(properties) {
            return new AuthenticationResponse(properties);
        };

        /**
         * Encodes the specified AuthenticationResponse message. Does not implicitly {@link sword.AuthenticationResponse.verify|verify} messages.
         * @function encode
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {sword.IAuthenticationResponse} message AuthenticationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            if (message.profile != null && message.hasOwnProperty("profile"))
                $root.sword.Profile.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.profiles != null && message.hasOwnProperty("profiles"))
                $root.sword.ProfileDescriptionList.encode(message.profiles, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.sword.ProtocolVersion.encode(message.serverVersion, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.restartDateTime != null && message.hasOwnProperty("restartDateTime"))
                $root.sword.DateTime.encode(message.restartDateTime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.terrainName != null && message.hasOwnProperty("terrainName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.terrainName);
            if (message.dataset != null && message.hasOwnProperty("dataset"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.dataset);
            if (message.physical != null && message.hasOwnProperty("physical"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.physical);
            if (message.exercise != null && message.hasOwnProperty("exercise"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.exercise);
            if (message.login != null && message.hasOwnProperty("login"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.login);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationResponse message, length delimited. Does not implicitly {@link sword.AuthenticationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {sword.IAuthenticationResponse} message AuthenticationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.AuthenticationResponse} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.AuthenticationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                case 2:
                    message.profile = $root.sword.Profile.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.profiles = $root.sword.ProfileDescriptionList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.serverVersion = $root.sword.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.restartDateTime = $root.sword.DateTime.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.terrainName = reader.string();
                    break;
                case 7:
                    message.dataset = reader.string();
                    break;
                case 8:
                    message.physical = reader.string();
                    break;
                case 9:
                    message.exercise = reader.string();
                    break;
                case 10:
                    message.login = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("errorCode"))
                throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
            if (!message.hasOwnProperty("serverVersion"))
                throw $util.ProtocolError("missing required 'serverVersion'", { instance: message });
            return message;
        };

        /**
         * Decodes an AuthenticationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.AuthenticationResponse} AuthenticationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationResponse message.
         * @function verify
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.errorCode) {
            default:
                return "errorCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
            if (message.profile != null && message.hasOwnProperty("profile")) {
                var error = $root.sword.Profile.verify(message.profile);
                if (error)
                    return "profile." + error;
            }
            if (message.profiles != null && message.hasOwnProperty("profiles")) {
                var error = $root.sword.ProfileDescriptionList.verify(message.profiles);
                if (error)
                    return "profiles." + error;
            }
            {
                var error = $root.sword.ProtocolVersion.verify(message.serverVersion);
                if (error)
                    return "serverVersion." + error;
            }
            if (message.restartDateTime != null && message.hasOwnProperty("restartDateTime")) {
                var error = $root.sword.DateTime.verify(message.restartDateTime);
                if (error)
                    return "restartDateTime." + error;
            }
            if (message.terrainName != null && message.hasOwnProperty("terrainName"))
                if (!$util.isString(message.terrainName))
                    return "terrainName: string expected";
            if (message.dataset != null && message.hasOwnProperty("dataset"))
                if (!$util.isString(message.dataset))
                    return "dataset: string expected";
            if (message.physical != null && message.hasOwnProperty("physical"))
                if (!$util.isString(message.physical))
                    return "physical: string expected";
            if (message.exercise != null && message.hasOwnProperty("exercise"))
                if (!$util.isString(message.exercise))
                    return "exercise: string expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            return null;
        };

        /**
         * Creates an AuthenticationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.AuthenticationResponse} AuthenticationResponse
         */
        AuthenticationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.AuthenticationResponse)
                return object;
            var message = new $root.sword.AuthenticationResponse();
            switch (object.errorCode) {
            case "success":
            case 0:
                message.errorCode = 0;
                break;
            case "invalid_login":
            case 1:
                message.errorCode = 1;
                break;
            case "too_many_connections":
            case 2:
                message.errorCode = 2;
                break;
            case "mismatched_protocol_version":
            case 4:
                message.errorCode = 4;
                break;
            case "invalid_authentication_key":
            case 5:
                message.errorCode = 5;
                break;
            case "invalid_token":
            case 6:
                message.errorCode = 6;
                break;
            case "invalid_synchronization":
            case 7:
                message.errorCode = 7;
                break;
            }
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".sword.AuthenticationResponse.profile: object expected");
                message.profile = $root.sword.Profile.fromObject(object.profile);
            }
            if (object.profiles != null) {
                if (typeof object.profiles !== "object")
                    throw TypeError(".sword.AuthenticationResponse.profiles: object expected");
                message.profiles = $root.sword.ProfileDescriptionList.fromObject(object.profiles);
            }
            if (object.serverVersion != null) {
                if (typeof object.serverVersion !== "object")
                    throw TypeError(".sword.AuthenticationResponse.serverVersion: object expected");
                message.serverVersion = $root.sword.ProtocolVersion.fromObject(object.serverVersion);
            }
            if (object.restartDateTime != null) {
                if (typeof object.restartDateTime !== "object")
                    throw TypeError(".sword.AuthenticationResponse.restartDateTime: object expected");
                message.restartDateTime = $root.sword.DateTime.fromObject(object.restartDateTime);
            }
            if (object.terrainName != null)
                message.terrainName = String(object.terrainName);
            if (object.dataset != null)
                message.dataset = String(object.dataset);
            if (object.physical != null)
                message.physical = String(object.physical);
            if (object.exercise != null)
                message.exercise = String(object.exercise);
            if (object.login != null)
                message.login = String(object.login);
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.AuthenticationResponse
         * @static
         * @param {sword.AuthenticationResponse} message AuthenticationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorCode = options.enums === String ? "success" : 0;
                object.profile = null;
                object.profiles = null;
                object.serverVersion = null;
                object.restartDateTime = null;
                object.terrainName = "";
                object.dataset = "";
                object.physical = "";
                object.exercise = "";
                object.login = "";
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.sword.AuthenticationResponse.ErrorCode[message.errorCode] : message.errorCode;
            if (message.profile != null && message.hasOwnProperty("profile"))
                object.profile = $root.sword.Profile.toObject(message.profile, options);
            if (message.profiles != null && message.hasOwnProperty("profiles"))
                object.profiles = $root.sword.ProfileDescriptionList.toObject(message.profiles, options);
            if (message.serverVersion != null && message.hasOwnProperty("serverVersion"))
                object.serverVersion = $root.sword.ProtocolVersion.toObject(message.serverVersion, options);
            if (message.restartDateTime != null && message.hasOwnProperty("restartDateTime"))
                object.restartDateTime = $root.sword.DateTime.toObject(message.restartDateTime, options);
            if (message.terrainName != null && message.hasOwnProperty("terrainName"))
                object.terrainName = message.terrainName;
            if (message.dataset != null && message.hasOwnProperty("dataset"))
                object.dataset = message.dataset;
            if (message.physical != null && message.hasOwnProperty("physical"))
                object.physical = message.physical;
            if (message.exercise != null && message.hasOwnProperty("exercise"))
                object.exercise = message.exercise;
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            return object;
        };

        /**
         * Converts this AuthenticationResponse to JSON.
         * @function toJSON
         * @memberof sword.AuthenticationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name sword.AuthenticationResponse.ErrorCode
         * @enum {string}
         * @property {number} success=0 success value
         * @property {number} invalid_login=1 invalid_login value
         * @property {number} too_many_connections=2 too_many_connections value
         * @property {number} mismatched_protocol_version=4 mismatched_protocol_version value
         * @property {number} invalid_authentication_key=5 invalid_authentication_key value
         * @property {number} invalid_token=6 invalid_token value
         * @property {number} invalid_synchronization=7 invalid_synchronization value
         */
        AuthenticationResponse.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "success"] = 0;
            values[valuesById[1] = "invalid_login"] = 1;
            values[valuesById[2] = "too_many_connections"] = 2;
            values[valuesById[4] = "mismatched_protocol_version"] = 4;
            values[valuesById[5] = "invalid_authentication_key"] = 5;
            values[valuesById[6] = "invalid_token"] = 6;
            values[valuesById[7] = "invalid_synchronization"] = 7;
            return values;
        })();

        return AuthenticationResponse;
    })();

    sword.ProfileCreation = (function() {

        /**
         * Properties of a ProfileCreation.
         * @memberof sword
         * @interface IProfileCreation
         * @property {sword.IProfile} profile ProfileCreation profile
         */

        /**
         * Constructs a new ProfileCreation.
         * @memberof sword
         * @classdesc Represents a ProfileCreation.
         * @implements IProfileCreation
         * @constructor
         * @param {sword.IProfileCreation=} [properties] Properties to set
         */
        function ProfileCreation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileCreation profile.
         * @member {sword.IProfile} profile
         * @memberof sword.ProfileCreation
         * @instance
         */
        ProfileCreation.prototype.profile = null;

        /**
         * Creates a new ProfileCreation instance using the specified properties.
         * @function create
         * @memberof sword.ProfileCreation
         * @static
         * @param {sword.IProfileCreation=} [properties] Properties to set
         * @returns {sword.ProfileCreation} ProfileCreation instance
         */
        ProfileCreation.create = function create(properties) {
            return new ProfileCreation(properties);
        };

        /**
         * Encodes the specified ProfileCreation message. Does not implicitly {@link sword.ProfileCreation.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileCreation
         * @static
         * @param {sword.IProfileCreation} message ProfileCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileCreation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.sword.Profile.encode(message.profile, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProfileCreation message, length delimited. Does not implicitly {@link sword.ProfileCreation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileCreation
         * @static
         * @param {sword.IProfileCreation} message ProfileCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileCreation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileCreation message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileCreation} ProfileCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileCreation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileCreation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.profile = $root.sword.Profile.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("profile"))
                throw $util.ProtocolError("missing required 'profile'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProfileCreation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileCreation} ProfileCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileCreation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileCreation message.
         * @function verify
         * @memberof sword.ProfileCreation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileCreation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.sword.Profile.verify(message.profile);
                if (error)
                    return "profile." + error;
            }
            return null;
        };

        /**
         * Creates a ProfileCreation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileCreation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileCreation} ProfileCreation
         */
        ProfileCreation.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileCreation)
                return object;
            var message = new $root.sword.ProfileCreation();
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".sword.ProfileCreation.profile: object expected");
                message.profile = $root.sword.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileCreation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileCreation
         * @static
         * @param {sword.ProfileCreation} message ProfileCreation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileCreation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.profile = null;
            if (message.profile != null && message.hasOwnProperty("profile"))
                object.profile = $root.sword.Profile.toObject(message.profile, options);
            return object;
        };

        /**
         * Converts this ProfileCreation to JSON.
         * @function toJSON
         * @memberof sword.ProfileCreation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileCreation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProfileCreation;
    })();

    sword.ProfileCreationRequestAck = (function() {

        /**
         * Properties of a ProfileCreationRequestAck.
         * @memberof sword
         * @interface IProfileCreationRequestAck
         * @property {string} login ProfileCreationRequestAck login
         * @property {sword.ProfileCreationRequestAck.ErrorCode} errorCode ProfileCreationRequestAck errorCode
         */

        /**
         * Constructs a new ProfileCreationRequestAck.
         * @memberof sword
         * @classdesc Represents a ProfileCreationRequestAck.
         * @implements IProfileCreationRequestAck
         * @constructor
         * @param {sword.IProfileCreationRequestAck=} [properties] Properties to set
         */
        function ProfileCreationRequestAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileCreationRequestAck login.
         * @member {string} login
         * @memberof sword.ProfileCreationRequestAck
         * @instance
         */
        ProfileCreationRequestAck.prototype.login = "";

        /**
         * ProfileCreationRequestAck errorCode.
         * @member {sword.ProfileCreationRequestAck.ErrorCode} errorCode
         * @memberof sword.ProfileCreationRequestAck
         * @instance
         */
        ProfileCreationRequestAck.prototype.errorCode = 0;

        /**
         * Creates a new ProfileCreationRequestAck instance using the specified properties.
         * @function create
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {sword.IProfileCreationRequestAck=} [properties] Properties to set
         * @returns {sword.ProfileCreationRequestAck} ProfileCreationRequestAck instance
         */
        ProfileCreationRequestAck.create = function create(properties) {
            return new ProfileCreationRequestAck(properties);
        };

        /**
         * Encodes the specified ProfileCreationRequestAck message. Does not implicitly {@link sword.ProfileCreationRequestAck.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {sword.IProfileCreationRequestAck} message ProfileCreationRequestAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileCreationRequestAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified ProfileCreationRequestAck message, length delimited. Does not implicitly {@link sword.ProfileCreationRequestAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {sword.IProfileCreationRequestAck} message ProfileCreationRequestAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileCreationRequestAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileCreationRequestAck message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileCreationRequestAck} ProfileCreationRequestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileCreationRequestAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileCreationRequestAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.errorCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("login"))
                throw $util.ProtocolError("missing required 'login'", { instance: message });
            if (!message.hasOwnProperty("errorCode"))
                throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProfileCreationRequestAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileCreationRequestAck} ProfileCreationRequestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileCreationRequestAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileCreationRequestAck message.
         * @function verify
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileCreationRequestAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.login))
                return "login: string expected";
            switch (message.errorCode) {
            default:
                return "errorCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
            return null;
        };

        /**
         * Creates a ProfileCreationRequestAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileCreationRequestAck} ProfileCreationRequestAck
         */
        ProfileCreationRequestAck.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileCreationRequestAck)
                return object;
            var message = new $root.sword.ProfileCreationRequestAck();
            if (object.login != null)
                message.login = String(object.login);
            switch (object.errorCode) {
            case "success":
            case 0:
                message.errorCode = 0;
                break;
            case "invalid_login":
            case 1:
                message.errorCode = 1;
                break;
            case "invalid_password":
            case 2:
                message.errorCode = 2;
                break;
            case "duplicate_login":
            case 3:
                message.errorCode = 3;
                break;
            case "forbidden":
            case 4:
                message.errorCode = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileCreationRequestAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileCreationRequestAck
         * @static
         * @param {sword.ProfileCreationRequestAck} message ProfileCreationRequestAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileCreationRequestAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.errorCode = options.enums === String ? "success" : 0;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.sword.ProfileCreationRequestAck.ErrorCode[message.errorCode] : message.errorCode;
            return object;
        };

        /**
         * Converts this ProfileCreationRequestAck to JSON.
         * @function toJSON
         * @memberof sword.ProfileCreationRequestAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileCreationRequestAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name sword.ProfileCreationRequestAck.ErrorCode
         * @enum {string}
         * @property {number} success=0 success value
         * @property {number} invalid_login=1 invalid_login value
         * @property {number} invalid_password=2 invalid_password value
         * @property {number} duplicate_login=3 duplicate_login value
         * @property {number} forbidden=4 forbidden value
         */
        ProfileCreationRequestAck.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "success"] = 0;
            values[valuesById[1] = "invalid_login"] = 1;
            values[valuesById[2] = "invalid_password"] = 2;
            values[valuesById[3] = "duplicate_login"] = 3;
            values[valuesById[4] = "forbidden"] = 4;
            return values;
        })();

        return ProfileCreationRequestAck;
    })();

    sword.ProfileUpdate = (function() {

        /**
         * Properties of a ProfileUpdate.
         * @memberof sword
         * @interface IProfileUpdate
         * @property {string} login ProfileUpdate login
         * @property {sword.IProfile} profile ProfileUpdate profile
         */

        /**
         * Constructs a new ProfileUpdate.
         * @memberof sword
         * @classdesc Represents a ProfileUpdate.
         * @implements IProfileUpdate
         * @constructor
         * @param {sword.IProfileUpdate=} [properties] Properties to set
         */
        function ProfileUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileUpdate login.
         * @member {string} login
         * @memberof sword.ProfileUpdate
         * @instance
         */
        ProfileUpdate.prototype.login = "";

        /**
         * ProfileUpdate profile.
         * @member {sword.IProfile} profile
         * @memberof sword.ProfileUpdate
         * @instance
         */
        ProfileUpdate.prototype.profile = null;

        /**
         * Creates a new ProfileUpdate instance using the specified properties.
         * @function create
         * @memberof sword.ProfileUpdate
         * @static
         * @param {sword.IProfileUpdate=} [properties] Properties to set
         * @returns {sword.ProfileUpdate} ProfileUpdate instance
         */
        ProfileUpdate.create = function create(properties) {
            return new ProfileUpdate(properties);
        };

        /**
         * Encodes the specified ProfileUpdate message. Does not implicitly {@link sword.ProfileUpdate.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileUpdate
         * @static
         * @param {sword.IProfileUpdate} message ProfileUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            $root.sword.Profile.encode(message.profile, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProfileUpdate message, length delimited. Does not implicitly {@link sword.ProfileUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileUpdate
         * @static
         * @param {sword.IProfileUpdate} message ProfileUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileUpdate} ProfileUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.profile = $root.sword.Profile.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("login"))
                throw $util.ProtocolError("missing required 'login'", { instance: message });
            if (!message.hasOwnProperty("profile"))
                throw $util.ProtocolError("missing required 'profile'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProfileUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileUpdate} ProfileUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileUpdate message.
         * @function verify
         * @memberof sword.ProfileUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.login))
                return "login: string expected";
            {
                var error = $root.sword.Profile.verify(message.profile);
                if (error)
                    return "profile." + error;
            }
            return null;
        };

        /**
         * Creates a ProfileUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileUpdate} ProfileUpdate
         */
        ProfileUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileUpdate)
                return object;
            var message = new $root.sword.ProfileUpdate();
            if (object.login != null)
                message.login = String(object.login);
            if (object.profile != null) {
                if (typeof object.profile !== "object")
                    throw TypeError(".sword.ProfileUpdate.profile: object expected");
                message.profile = $root.sword.Profile.fromObject(object.profile);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileUpdate
         * @static
         * @param {sword.ProfileUpdate} message ProfileUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.profile = null;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.profile != null && message.hasOwnProperty("profile"))
                object.profile = $root.sword.Profile.toObject(message.profile, options);
            return object;
        };

        /**
         * Converts this ProfileUpdate to JSON.
         * @function toJSON
         * @memberof sword.ProfileUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProfileUpdate;
    })();

    sword.ProfileUpdateRequestAck = (function() {

        /**
         * Properties of a ProfileUpdateRequestAck.
         * @memberof sword
         * @interface IProfileUpdateRequestAck
         * @property {string} login ProfileUpdateRequestAck login
         * @property {sword.ProfileUpdateRequestAck.ErrorCode} errorCode ProfileUpdateRequestAck errorCode
         */

        /**
         * Constructs a new ProfileUpdateRequestAck.
         * @memberof sword
         * @classdesc Represents a ProfileUpdateRequestAck.
         * @implements IProfileUpdateRequestAck
         * @constructor
         * @param {sword.IProfileUpdateRequestAck=} [properties] Properties to set
         */
        function ProfileUpdateRequestAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileUpdateRequestAck login.
         * @member {string} login
         * @memberof sword.ProfileUpdateRequestAck
         * @instance
         */
        ProfileUpdateRequestAck.prototype.login = "";

        /**
         * ProfileUpdateRequestAck errorCode.
         * @member {sword.ProfileUpdateRequestAck.ErrorCode} errorCode
         * @memberof sword.ProfileUpdateRequestAck
         * @instance
         */
        ProfileUpdateRequestAck.prototype.errorCode = 0;

        /**
         * Creates a new ProfileUpdateRequestAck instance using the specified properties.
         * @function create
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {sword.IProfileUpdateRequestAck=} [properties] Properties to set
         * @returns {sword.ProfileUpdateRequestAck} ProfileUpdateRequestAck instance
         */
        ProfileUpdateRequestAck.create = function create(properties) {
            return new ProfileUpdateRequestAck(properties);
        };

        /**
         * Encodes the specified ProfileUpdateRequestAck message. Does not implicitly {@link sword.ProfileUpdateRequestAck.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {sword.IProfileUpdateRequestAck} message ProfileUpdateRequestAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileUpdateRequestAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified ProfileUpdateRequestAck message, length delimited. Does not implicitly {@link sword.ProfileUpdateRequestAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {sword.IProfileUpdateRequestAck} message ProfileUpdateRequestAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileUpdateRequestAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileUpdateRequestAck message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileUpdateRequestAck} ProfileUpdateRequestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileUpdateRequestAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileUpdateRequestAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                case 2:
                    message.errorCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("login"))
                throw $util.ProtocolError("missing required 'login'", { instance: message });
            if (!message.hasOwnProperty("errorCode"))
                throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProfileUpdateRequestAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileUpdateRequestAck} ProfileUpdateRequestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileUpdateRequestAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileUpdateRequestAck message.
         * @function verify
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileUpdateRequestAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.login))
                return "login: string expected";
            switch (message.errorCode) {
            default:
                return "errorCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            return null;
        };

        /**
         * Creates a ProfileUpdateRequestAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileUpdateRequestAck} ProfileUpdateRequestAck
         */
        ProfileUpdateRequestAck.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileUpdateRequestAck)
                return object;
            var message = new $root.sword.ProfileUpdateRequestAck();
            if (object.login != null)
                message.login = String(object.login);
            switch (object.errorCode) {
            case "success":
            case 0:
                message.errorCode = 0;
                break;
            case "invalid_profile":
            case 1:
                message.errorCode = 1;
                break;
            case "invalid_login":
            case 2:
                message.errorCode = 2;
                break;
            case "invalid_password":
            case 3:
                message.errorCode = 3;
                break;
            case "duplicate_login":
            case 4:
                message.errorCode = 4;
                break;
            case "forbidden":
            case 5:
                message.errorCode = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfileUpdateRequestAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileUpdateRequestAck
         * @static
         * @param {sword.ProfileUpdateRequestAck} message ProfileUpdateRequestAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileUpdateRequestAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.errorCode = options.enums === String ? "success" : 0;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.sword.ProfileUpdateRequestAck.ErrorCode[message.errorCode] : message.errorCode;
            return object;
        };

        /**
         * Converts this ProfileUpdateRequestAck to JSON.
         * @function toJSON
         * @memberof sword.ProfileUpdateRequestAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileUpdateRequestAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name sword.ProfileUpdateRequestAck.ErrorCode
         * @enum {string}
         * @property {number} success=0 success value
         * @property {number} invalid_profile=1 invalid_profile value
         * @property {number} invalid_login=2 invalid_login value
         * @property {number} invalid_password=3 invalid_password value
         * @property {number} duplicate_login=4 duplicate_login value
         * @property {number} forbidden=5 forbidden value
         */
        ProfileUpdateRequestAck.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "success"] = 0;
            values[valuesById[1] = "invalid_profile"] = 1;
            values[valuesById[2] = "invalid_login"] = 2;
            values[valuesById[3] = "invalid_password"] = 3;
            values[valuesById[4] = "duplicate_login"] = 4;
            values[valuesById[5] = "forbidden"] = 5;
            return values;
        })();

        return ProfileUpdateRequestAck;
    })();

    sword.ProfileDestruction = (function() {

        /**
         * Properties of a ProfileDestruction.
         * @memberof sword
         * @interface IProfileDestruction
         * @property {string|null} [login] ProfileDestruction login
         */

        /**
         * Constructs a new ProfileDestruction.
         * @memberof sword
         * @classdesc Represents a ProfileDestruction.
         * @implements IProfileDestruction
         * @constructor
         * @param {sword.IProfileDestruction=} [properties] Properties to set
         */
        function ProfileDestruction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileDestruction login.
         * @member {string} login
         * @memberof sword.ProfileDestruction
         * @instance
         */
        ProfileDestruction.prototype.login = "";

        /**
         * Creates a new ProfileDestruction instance using the specified properties.
         * @function create
         * @memberof sword.ProfileDestruction
         * @static
         * @param {sword.IProfileDestruction=} [properties] Properties to set
         * @returns {sword.ProfileDestruction} ProfileDestruction instance
         */
        ProfileDestruction.create = function create(properties) {
            return new ProfileDestruction(properties);
        };

        /**
         * Encodes the specified ProfileDestruction message. Does not implicitly {@link sword.ProfileDestruction.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileDestruction
         * @static
         * @param {sword.IProfileDestruction} message ProfileDestruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDestruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.login != null && message.hasOwnProperty("login"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            return writer;
        };

        /**
         * Encodes the specified ProfileDestruction message, length delimited. Does not implicitly {@link sword.ProfileDestruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileDestruction
         * @static
         * @param {sword.IProfileDestruction} message ProfileDestruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDestruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileDestruction message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileDestruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileDestruction} ProfileDestruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDestruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileDestruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.login = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProfileDestruction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileDestruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileDestruction} ProfileDestruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDestruction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileDestruction message.
         * @function verify
         * @memberof sword.ProfileDestruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileDestruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.login != null && message.hasOwnProperty("login"))
                if (!$util.isString(message.login))
                    return "login: string expected";
            return null;
        };

        /**
         * Creates a ProfileDestruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileDestruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileDestruction} ProfileDestruction
         */
        ProfileDestruction.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileDestruction)
                return object;
            var message = new $root.sword.ProfileDestruction();
            if (object.login != null)
                message.login = String(object.login);
            return message;
        };

        /**
         * Creates a plain object from a ProfileDestruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileDestruction
         * @static
         * @param {sword.ProfileDestruction} message ProfileDestruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileDestruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.login = "";
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            return object;
        };

        /**
         * Converts this ProfileDestruction to JSON.
         * @function toJSON
         * @memberof sword.ProfileDestruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileDestruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ProfileDestruction;
    })();

    sword.ProfileDestructionRequestAck = (function() {

        /**
         * Properties of a ProfileDestructionRequestAck.
         * @memberof sword
         * @interface IProfileDestructionRequestAck
         * @property {sword.ProfileDestructionRequestAck.ErrorCode} errorCode ProfileDestructionRequestAck errorCode
         * @property {string} login ProfileDestructionRequestAck login
         */

        /**
         * Constructs a new ProfileDestructionRequestAck.
         * @memberof sword
         * @classdesc Represents a ProfileDestructionRequestAck.
         * @implements IProfileDestructionRequestAck
         * @constructor
         * @param {sword.IProfileDestructionRequestAck=} [properties] Properties to set
         */
        function ProfileDestructionRequestAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfileDestructionRequestAck errorCode.
         * @member {sword.ProfileDestructionRequestAck.ErrorCode} errorCode
         * @memberof sword.ProfileDestructionRequestAck
         * @instance
         */
        ProfileDestructionRequestAck.prototype.errorCode = 0;

        /**
         * ProfileDestructionRequestAck login.
         * @member {string} login
         * @memberof sword.ProfileDestructionRequestAck
         * @instance
         */
        ProfileDestructionRequestAck.prototype.login = "";

        /**
         * Creates a new ProfileDestructionRequestAck instance using the specified properties.
         * @function create
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {sword.IProfileDestructionRequestAck=} [properties] Properties to set
         * @returns {sword.ProfileDestructionRequestAck} ProfileDestructionRequestAck instance
         */
        ProfileDestructionRequestAck.create = function create(properties) {
            return new ProfileDestructionRequestAck(properties);
        };

        /**
         * Encodes the specified ProfileDestructionRequestAck message. Does not implicitly {@link sword.ProfileDestructionRequestAck.verify|verify} messages.
         * @function encode
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {sword.IProfileDestructionRequestAck} message ProfileDestructionRequestAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDestructionRequestAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errorCode);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.login);
            return writer;
        };

        /**
         * Encodes the specified ProfileDestructionRequestAck message, length delimited. Does not implicitly {@link sword.ProfileDestructionRequestAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {sword.IProfileDestructionRequestAck} message ProfileDestructionRequestAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfileDestructionRequestAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfileDestructionRequestAck message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ProfileDestructionRequestAck} ProfileDestructionRequestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDestructionRequestAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ProfileDestructionRequestAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorCode = reader.int32();
                    break;
                case 2:
                    message.login = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("errorCode"))
                throw $util.ProtocolError("missing required 'errorCode'", { instance: message });
            if (!message.hasOwnProperty("login"))
                throw $util.ProtocolError("missing required 'login'", { instance: message });
            return message;
        };

        /**
         * Decodes a ProfileDestructionRequestAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ProfileDestructionRequestAck} ProfileDestructionRequestAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfileDestructionRequestAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfileDestructionRequestAck message.
         * @function verify
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfileDestructionRequestAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.errorCode) {
            default:
                return "errorCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            if (!$util.isString(message.login))
                return "login: string expected";
            return null;
        };

        /**
         * Creates a ProfileDestructionRequestAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ProfileDestructionRequestAck} ProfileDestructionRequestAck
         */
        ProfileDestructionRequestAck.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ProfileDestructionRequestAck)
                return object;
            var message = new $root.sword.ProfileDestructionRequestAck();
            switch (object.errorCode) {
            case "success":
            case 0:
                message.errorCode = 0;
                break;
            case "invalid_profile":
            case 1:
                message.errorCode = 1;
                break;
            case "failure":
            case 2:
                message.errorCode = 2;
                break;
            case "forbidden":
            case 3:
                message.errorCode = 3;
                break;
            }
            if (object.login != null)
                message.login = String(object.login);
            return message;
        };

        /**
         * Creates a plain object from a ProfileDestructionRequestAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ProfileDestructionRequestAck
         * @static
         * @param {sword.ProfileDestructionRequestAck} message ProfileDestructionRequestAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfileDestructionRequestAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.errorCode = options.enums === String ? "success" : 0;
                object.login = "";
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = options.enums === String ? $root.sword.ProfileDestructionRequestAck.ErrorCode[message.errorCode] : message.errorCode;
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            return object;
        };

        /**
         * Converts this ProfileDestructionRequestAck to JSON.
         * @function toJSON
         * @memberof sword.ProfileDestructionRequestAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfileDestructionRequestAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name sword.ProfileDestructionRequestAck.ErrorCode
         * @enum {string}
         * @property {number} success=0 success value
         * @property {number} invalid_profile=1 invalid_profile value
         * @property {number} failure=2 failure value
         * @property {number} forbidden=3 forbidden value
         */
        ProfileDestructionRequestAck.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "success"] = 0;
            values[valuesById[1] = "invalid_profile"] = 1;
            values[valuesById[2] = "failure"] = 2;
            values[valuesById[3] = "forbidden"] = 3;
            return values;
        })();

        return ProfileDestructionRequestAck;
    })();

    sword.RoleType = (function() {

        /**
         * Properties of a RoleType.
         * @memberof sword
         * @interface IRoleType
         * @property {number} id RoleType id
         */

        /**
         * Constructs a new RoleType.
         * @memberof sword
         * @classdesc Represents a RoleType.
         * @implements IRoleType
         * @constructor
         * @param {sword.IRoleType=} [properties] Properties to set
         */
        function RoleType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleType id.
         * @member {number} id
         * @memberof sword.RoleType
         * @instance
         */
        RoleType.prototype.id = 0;

        /**
         * Creates a new RoleType instance using the specified properties.
         * @function create
         * @memberof sword.RoleType
         * @static
         * @param {sword.IRoleType=} [properties] Properties to set
         * @returns {sword.RoleType} RoleType instance
         */
        RoleType.create = function create(properties) {
            return new RoleType(properties);
        };

        /**
         * Encodes the specified RoleType message. Does not implicitly {@link sword.RoleType.verify|verify} messages.
         * @function encode
         * @memberof sword.RoleType
         * @static
         * @param {sword.IRoleType} message RoleType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified RoleType message, length delimited. Does not implicitly {@link sword.RoleType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.RoleType
         * @static
         * @param {sword.IRoleType} message RoleType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleType message from the specified reader or buffer.
         * @function decode
         * @memberof sword.RoleType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.RoleType} RoleType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.RoleType();
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
         * Decodes a RoleType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.RoleType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.RoleType} RoleType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleType message.
         * @function verify
         * @memberof sword.RoleType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            return null;
        };

        /**
         * Creates a RoleType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.RoleType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.RoleType} RoleType
         */
        RoleType.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.RoleType)
                return object;
            var message = new $root.sword.RoleType();
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RoleType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.RoleType
         * @static
         * @param {sword.RoleType} message RoleType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoleType.toObject = function toObject(message, options) {
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
         * Converts this RoleType to JSON.
         * @function toJSON
         * @memberof sword.RoleType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoleType;
    })();

    sword.Profile = (function() {

        /**
         * Properties of a Profile.
         * @memberof sword
         * @interface IProfile
         * @property {string} login Profile login
         * @property {string|null} [password] Profile password
         * @property {sword.IIdList|null} [readOnlyFormations] Profile readOnlyFormations
         * @property {sword.IIdList|null} [readWriteFormations] Profile readWriteFormations
         * @property {sword.IIdList|null} [readOnlyAutomates] Profile readOnlyAutomates
         * @property {sword.IIdList|null} [readWriteAutomates] Profile readWriteAutomates
         * @property {sword.IIdList|null} [readOnlyParties] Profile readOnlyParties
         * @property {sword.IIdList|null} [readWriteParties] Profile readWriteParties
         * @property {sword.IIdList|null} [readOnlyCrowds] Profile readOnlyCrowds
         * @property {sword.IIdList|null} [readWriteCrowds] Profile readWriteCrowds
         * @property {boolean} supervisor Profile supervisor
         * @property {boolean|null} [timeControl] Profile timeControl
         * @property {number|null} [clientId] Profile clientId
         * @property {number|null} [parentClientId] Profile parentClientId
         * @property {boolean|null} [teleport] Profile teleport
         */

        /**
         * Constructs a new Profile.
         * @memberof sword
         * @classdesc Represents a Profile.
         * @implements IProfile
         * @constructor
         * @param {sword.IProfile=} [properties] Properties to set
         */
        function Profile(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Profile login.
         * @member {string} login
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.login = "";

        /**
         * Profile password.
         * @member {string} password
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.password = "";

        /**
         * Profile readOnlyFormations.
         * @member {sword.IIdList|null|undefined} readOnlyFormations
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readOnlyFormations = null;

        /**
         * Profile readWriteFormations.
         * @member {sword.IIdList|null|undefined} readWriteFormations
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readWriteFormations = null;

        /**
         * Profile readOnlyAutomates.
         * @member {sword.IIdList|null|undefined} readOnlyAutomates
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readOnlyAutomates = null;

        /**
         * Profile readWriteAutomates.
         * @member {sword.IIdList|null|undefined} readWriteAutomates
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readWriteAutomates = null;

        /**
         * Profile readOnlyParties.
         * @member {sword.IIdList|null|undefined} readOnlyParties
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readOnlyParties = null;

        /**
         * Profile readWriteParties.
         * @member {sword.IIdList|null|undefined} readWriteParties
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readWriteParties = null;

        /**
         * Profile readOnlyCrowds.
         * @member {sword.IIdList|null|undefined} readOnlyCrowds
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readOnlyCrowds = null;

        /**
         * Profile readWriteCrowds.
         * @member {sword.IIdList|null|undefined} readWriteCrowds
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.readWriteCrowds = null;

        /**
         * Profile supervisor.
         * @member {boolean} supervisor
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.supervisor = false;

        /**
         * Profile timeControl.
         * @member {boolean} timeControl
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.timeControl = false;

        /**
         * Profile clientId.
         * @member {number} clientId
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.clientId = 0;

        /**
         * Profile parentClientId.
         * @member {number} parentClientId
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.parentClientId = 0;

        /**
         * Profile teleport.
         * @member {boolean} teleport
         * @memberof sword.Profile
         * @instance
         */
        Profile.prototype.teleport = false;

        /**
         * Creates a new Profile instance using the specified properties.
         * @function create
         * @memberof sword.Profile
         * @static
         * @param {sword.IProfile=} [properties] Properties to set
         * @returns {sword.Profile} Profile instance
         */
        Profile.create = function create(properties) {
            return new Profile(properties);
        };

        /**
         * Encodes the specified Profile message. Does not implicitly {@link sword.Profile.verify|verify} messages.
         * @function encode
         * @memberof sword.Profile
         * @static
         * @param {sword.IProfile} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.login);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.readOnlyFormations != null && message.hasOwnProperty("readOnlyFormations"))
                $root.sword.IdList.encode(message.readOnlyFormations, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.readWriteFormations != null && message.hasOwnProperty("readWriteFormations"))
                $root.sword.IdList.encode(message.readWriteFormations, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.readOnlyAutomates != null && message.hasOwnProperty("readOnlyAutomates"))
                $root.sword.IdList.encode(message.readOnlyAutomates, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.readWriteAutomates != null && message.hasOwnProperty("readWriteAutomates"))
                $root.sword.IdList.encode(message.readWriteAutomates, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.readOnlyParties != null && message.hasOwnProperty("readOnlyParties"))
                $root.sword.IdList.encode(message.readOnlyParties, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.readWriteParties != null && message.hasOwnProperty("readWriteParties"))
                $root.sword.IdList.encode(message.readWriteParties, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.readOnlyCrowds != null && message.hasOwnProperty("readOnlyCrowds"))
                $root.sword.IdList.encode(message.readOnlyCrowds, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.readWriteCrowds != null && message.hasOwnProperty("readWriteCrowds"))
                $root.sword.IdList.encode(message.readWriteCrowds, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.supervisor);
            if (message.timeControl != null && message.hasOwnProperty("timeControl"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.timeControl);
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.clientId);
            if (message.parentClientId != null && message.hasOwnProperty("parentClientId"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.parentClientId);
            if (message.teleport != null && message.hasOwnProperty("teleport"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.teleport);
            return writer;
        };

        /**
         * Encodes the specified Profile message, length delimited. Does not implicitly {@link sword.Profile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.Profile
         * @static
         * @param {sword.IProfile} message Profile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Profile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Profile message from the specified reader or buffer.
         * @function decode
         * @memberof sword.Profile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.Profile();
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
                    message.readOnlyFormations = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.readWriteFormations = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.readOnlyAutomates = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.readWriteAutomates = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.readOnlyParties = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.readWriteParties = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.readOnlyCrowds = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.readWriteCrowds = $root.sword.IdList.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.supervisor = reader.bool();
                    break;
                case 12:
                    message.timeControl = reader.bool();
                    break;
                case 13:
                    message.clientId = reader.uint32();
                    break;
                case 14:
                    message.parentClientId = reader.uint32();
                    break;
                case 15:
                    message.teleport = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("login"))
                throw $util.ProtocolError("missing required 'login'", { instance: message });
            if (!message.hasOwnProperty("supervisor"))
                throw $util.ProtocolError("missing required 'supervisor'", { instance: message });
            return message;
        };

        /**
         * Decodes a Profile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.Profile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.Profile} Profile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Profile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Profile message.
         * @function verify
         * @memberof sword.Profile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Profile.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.login))
                return "login: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.readOnlyFormations != null && message.hasOwnProperty("readOnlyFormations")) {
                var error = $root.sword.IdList.verify(message.readOnlyFormations);
                if (error)
                    return "readOnlyFormations." + error;
            }
            if (message.readWriteFormations != null && message.hasOwnProperty("readWriteFormations")) {
                var error = $root.sword.IdList.verify(message.readWriteFormations);
                if (error)
                    return "readWriteFormations." + error;
            }
            if (message.readOnlyAutomates != null && message.hasOwnProperty("readOnlyAutomates")) {
                var error = $root.sword.IdList.verify(message.readOnlyAutomates);
                if (error)
                    return "readOnlyAutomates." + error;
            }
            if (message.readWriteAutomates != null && message.hasOwnProperty("readWriteAutomates")) {
                var error = $root.sword.IdList.verify(message.readWriteAutomates);
                if (error)
                    return "readWriteAutomates." + error;
            }
            if (message.readOnlyParties != null && message.hasOwnProperty("readOnlyParties")) {
                var error = $root.sword.IdList.verify(message.readOnlyParties);
                if (error)
                    return "readOnlyParties." + error;
            }
            if (message.readWriteParties != null && message.hasOwnProperty("readWriteParties")) {
                var error = $root.sword.IdList.verify(message.readWriteParties);
                if (error)
                    return "readWriteParties." + error;
            }
            if (message.readOnlyCrowds != null && message.hasOwnProperty("readOnlyCrowds")) {
                var error = $root.sword.IdList.verify(message.readOnlyCrowds);
                if (error)
                    return "readOnlyCrowds." + error;
            }
            if (message.readWriteCrowds != null && message.hasOwnProperty("readWriteCrowds")) {
                var error = $root.sword.IdList.verify(message.readWriteCrowds);
                if (error)
                    return "readWriteCrowds." + error;
            }
            if (typeof message.supervisor !== "boolean")
                return "supervisor: boolean expected";
            if (message.timeControl != null && message.hasOwnProperty("timeControl"))
                if (typeof message.timeControl !== "boolean")
                    return "timeControl: boolean expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            if (message.parentClientId != null && message.hasOwnProperty("parentClientId"))
                if (!$util.isInteger(message.parentClientId))
                    return "parentClientId: integer expected";
            if (message.teleport != null && message.hasOwnProperty("teleport"))
                if (typeof message.teleport !== "boolean")
                    return "teleport: boolean expected";
            return null;
        };

        /**
         * Creates a Profile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.Profile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.Profile} Profile
         */
        Profile.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.Profile)
                return object;
            var message = new $root.sword.Profile();
            if (object.login != null)
                message.login = String(object.login);
            if (object.password != null)
                message.password = String(object.password);
            if (object.readOnlyFormations != null) {
                if (typeof object.readOnlyFormations !== "object")
                    throw TypeError(".sword.Profile.readOnlyFormations: object expected");
                message.readOnlyFormations = $root.sword.IdList.fromObject(object.readOnlyFormations);
            }
            if (object.readWriteFormations != null) {
                if (typeof object.readWriteFormations !== "object")
                    throw TypeError(".sword.Profile.readWriteFormations: object expected");
                message.readWriteFormations = $root.sword.IdList.fromObject(object.readWriteFormations);
            }
            if (object.readOnlyAutomates != null) {
                if (typeof object.readOnlyAutomates !== "object")
                    throw TypeError(".sword.Profile.readOnlyAutomates: object expected");
                message.readOnlyAutomates = $root.sword.IdList.fromObject(object.readOnlyAutomates);
            }
            if (object.readWriteAutomates != null) {
                if (typeof object.readWriteAutomates !== "object")
                    throw TypeError(".sword.Profile.readWriteAutomates: object expected");
                message.readWriteAutomates = $root.sword.IdList.fromObject(object.readWriteAutomates);
            }
            if (object.readOnlyParties != null) {
                if (typeof object.readOnlyParties !== "object")
                    throw TypeError(".sword.Profile.readOnlyParties: object expected");
                message.readOnlyParties = $root.sword.IdList.fromObject(object.readOnlyParties);
            }
            if (object.readWriteParties != null) {
                if (typeof object.readWriteParties !== "object")
                    throw TypeError(".sword.Profile.readWriteParties: object expected");
                message.readWriteParties = $root.sword.IdList.fromObject(object.readWriteParties);
            }
            if (object.readOnlyCrowds != null) {
                if (typeof object.readOnlyCrowds !== "object")
                    throw TypeError(".sword.Profile.readOnlyCrowds: object expected");
                message.readOnlyCrowds = $root.sword.IdList.fromObject(object.readOnlyCrowds);
            }
            if (object.readWriteCrowds != null) {
                if (typeof object.readWriteCrowds !== "object")
                    throw TypeError(".sword.Profile.readWriteCrowds: object expected");
                message.readWriteCrowds = $root.sword.IdList.fromObject(object.readWriteCrowds);
            }
            if (object.supervisor != null)
                message.supervisor = Boolean(object.supervisor);
            if (object.timeControl != null)
                message.timeControl = Boolean(object.timeControl);
            if (object.clientId != null)
                message.clientId = object.clientId >>> 0;
            if (object.parentClientId != null)
                message.parentClientId = object.parentClientId >>> 0;
            if (object.teleport != null)
                message.teleport = Boolean(object.teleport);
            return message;
        };

        /**
         * Creates a plain object from a Profile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.Profile
         * @static
         * @param {sword.Profile} message Profile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Profile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.login = "";
                object.password = "";
                object.readOnlyFormations = null;
                object.readWriteFormations = null;
                object.readOnlyAutomates = null;
                object.readWriteAutomates = null;
                object.readOnlyParties = null;
                object.readWriteParties = null;
                object.readOnlyCrowds = null;
                object.readWriteCrowds = null;
                object.supervisor = false;
                object.timeControl = false;
                object.clientId = 0;
                object.parentClientId = 0;
                object.teleport = false;
            }
            if (message.login != null && message.hasOwnProperty("login"))
                object.login = message.login;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.readOnlyFormations != null && message.hasOwnProperty("readOnlyFormations"))
                object.readOnlyFormations = $root.sword.IdList.toObject(message.readOnlyFormations, options);
            if (message.readWriteFormations != null && message.hasOwnProperty("readWriteFormations"))
                object.readWriteFormations = $root.sword.IdList.toObject(message.readWriteFormations, options);
            if (message.readOnlyAutomates != null && message.hasOwnProperty("readOnlyAutomates"))
                object.readOnlyAutomates = $root.sword.IdList.toObject(message.readOnlyAutomates, options);
            if (message.readWriteAutomates != null && message.hasOwnProperty("readWriteAutomates"))
                object.readWriteAutomates = $root.sword.IdList.toObject(message.readWriteAutomates, options);
            if (message.readOnlyParties != null && message.hasOwnProperty("readOnlyParties"))
                object.readOnlyParties = $root.sword.IdList.toObject(message.readOnlyParties, options);
            if (message.readWriteParties != null && message.hasOwnProperty("readWriteParties"))
                object.readWriteParties = $root.sword.IdList.toObject(message.readWriteParties, options);
            if (message.readOnlyCrowds != null && message.hasOwnProperty("readOnlyCrowds"))
                object.readOnlyCrowds = $root.sword.IdList.toObject(message.readOnlyCrowds, options);
            if (message.readWriteCrowds != null && message.hasOwnProperty("readWriteCrowds"))
                object.readWriteCrowds = $root.sword.IdList.toObject(message.readWriteCrowds, options);
            if (message.supervisor != null && message.hasOwnProperty("supervisor"))
                object.supervisor = message.supervisor;
            if (message.timeControl != null && message.hasOwnProperty("timeControl"))
                object.timeControl = message.timeControl;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.parentClientId != null && message.hasOwnProperty("parentClientId"))
                object.parentClientId = message.parentClientId;
            if (message.teleport != null && message.hasOwnProperty("teleport"))
                object.teleport = message.teleport;
            return object;
        };

        /**
         * Converts this Profile to JSON.
         * @function toJSON
         * @memberof sword.Profile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Profile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Profile;
    })();

    sword.ConnectedProfileList = (function() {

        /**
         * Properties of a ConnectedProfileList.
         * @memberof sword
         * @interface IConnectedProfileList
         * @property {Array.<sword.IProfile>|null} [elem] ConnectedProfileList elem
         */

        /**
         * Constructs a new ConnectedProfileList.
         * @memberof sword
         * @classdesc Represents a ConnectedProfileList.
         * @implements IConnectedProfileList
         * @constructor
         * @param {sword.IConnectedProfileList=} [properties] Properties to set
         */
        function ConnectedProfileList(properties) {
            this.elem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnectedProfileList elem.
         * @member {Array.<sword.IProfile>} elem
         * @memberof sword.ConnectedProfileList
         * @instance
         */
        ConnectedProfileList.prototype.elem = $util.emptyArray;

        /**
         * Creates a new ConnectedProfileList instance using the specified properties.
         * @function create
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {sword.IConnectedProfileList=} [properties] Properties to set
         * @returns {sword.ConnectedProfileList} ConnectedProfileList instance
         */
        ConnectedProfileList.create = function create(properties) {
            return new ConnectedProfileList(properties);
        };

        /**
         * Encodes the specified ConnectedProfileList message. Does not implicitly {@link sword.ConnectedProfileList.verify|verify} messages.
         * @function encode
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {sword.IConnectedProfileList} message ConnectedProfileList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectedProfileList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elem != null && message.elem.length)
                for (var i = 0; i < message.elem.length; ++i)
                    $root.sword.Profile.encode(message.elem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConnectedProfileList message, length delimited. Does not implicitly {@link sword.ConnectedProfileList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {sword.IConnectedProfileList} message ConnectedProfileList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnectedProfileList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnectedProfileList message from the specified reader or buffer.
         * @function decode
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.ConnectedProfileList} ConnectedProfileList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectedProfileList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.ConnectedProfileList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.elem && message.elem.length))
                        message.elem = [];
                    message.elem.push($root.sword.Profile.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConnectedProfileList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.ConnectedProfileList} ConnectedProfileList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnectedProfileList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnectedProfileList message.
         * @function verify
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnectedProfileList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elem != null && message.hasOwnProperty("elem")) {
                if (!Array.isArray(message.elem))
                    return "elem: array expected";
                for (var i = 0; i < message.elem.length; ++i) {
                    var error = $root.sword.Profile.verify(message.elem[i]);
                    if (error)
                        return "elem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ConnectedProfileList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.ConnectedProfileList} ConnectedProfileList
         */
        ConnectedProfileList.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.ConnectedProfileList)
                return object;
            var message = new $root.sword.ConnectedProfileList();
            if (object.elem) {
                if (!Array.isArray(object.elem))
                    throw TypeError(".sword.ConnectedProfileList.elem: array expected");
                message.elem = [];
                for (var i = 0; i < object.elem.length; ++i) {
                    if (typeof object.elem[i] !== "object")
                        throw TypeError(".sword.ConnectedProfileList.elem: object expected");
                    message.elem[i] = $root.sword.Profile.fromObject(object.elem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ConnectedProfileList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.ConnectedProfileList
         * @static
         * @param {sword.ConnectedProfileList} message ConnectedProfileList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnectedProfileList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elem = [];
            if (message.elem && message.elem.length) {
                object.elem = [];
                for (var j = 0; j < message.elem.length; ++j)
                    object.elem[j] = $root.sword.Profile.toObject(message.elem[j], options);
            }
            return object;
        };

        /**
         * Converts this ConnectedProfileList to JSON.
         * @function toJSON
         * @memberof sword.ConnectedProfileList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnectedProfileList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnectedProfileList;
    })();

    sword.AuthenticationToClient = (function() {

        /**
         * Properties of an AuthenticationToClient.
         * @memberof sword
         * @interface IAuthenticationToClient
         * @property {number|null} [context] AuthenticationToClient context
         * @property {sword.AuthenticationToClient.IContent} message AuthenticationToClient message
         * @property {number|null} [clientId] AuthenticationToClient clientId
         * @property {boolean|null} [virtualClient] AuthenticationToClient virtualClient
         */

        /**
         * Constructs a new AuthenticationToClient.
         * @memberof sword
         * @classdesc Represents an AuthenticationToClient.
         * @implements IAuthenticationToClient
         * @constructor
         * @param {sword.IAuthenticationToClient=} [properties] Properties to set
         */
        function AuthenticationToClient(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationToClient context.
         * @member {number} context
         * @memberof sword.AuthenticationToClient
         * @instance
         */
        AuthenticationToClient.prototype.context = 0;

        /**
         * AuthenticationToClient message.
         * @member {sword.AuthenticationToClient.IContent} message
         * @memberof sword.AuthenticationToClient
         * @instance
         */
        AuthenticationToClient.prototype.message = null;

        /**
         * AuthenticationToClient clientId.
         * @member {number} clientId
         * @memberof sword.AuthenticationToClient
         * @instance
         */
        AuthenticationToClient.prototype.clientId = 0;

        /**
         * AuthenticationToClient virtualClient.
         * @member {boolean} virtualClient
         * @memberof sword.AuthenticationToClient
         * @instance
         */
        AuthenticationToClient.prototype.virtualClient = false;

        /**
         * Creates a new AuthenticationToClient instance using the specified properties.
         * @function create
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {sword.IAuthenticationToClient=} [properties] Properties to set
         * @returns {sword.AuthenticationToClient} AuthenticationToClient instance
         */
        AuthenticationToClient.create = function create(properties) {
            return new AuthenticationToClient(properties);
        };

        /**
         * Encodes the specified AuthenticationToClient message. Does not implicitly {@link sword.AuthenticationToClient.verify|verify} messages.
         * @function encode
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {sword.IAuthenticationToClient} message AuthenticationToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationToClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.context != null && message.hasOwnProperty("context"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.context);
            $root.sword.AuthenticationToClient.Content.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.clientId);
            if (message.virtualClient != null && message.hasOwnProperty("virtualClient"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.virtualClient);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationToClient message, length delimited. Does not implicitly {@link sword.AuthenticationToClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {sword.IAuthenticationToClient} message AuthenticationToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationToClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationToClient message from the specified reader or buffer.
         * @function decode
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {sword.AuthenticationToClient} AuthenticationToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationToClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.AuthenticationToClient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.context = reader.int32();
                    break;
                case 2:
                    message.message = $root.sword.AuthenticationToClient.Content.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.clientId = reader.int32();
                    break;
                case 4:
                    message.virtualClient = reader.bool();
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
         * Decodes an AuthenticationToClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {sword.AuthenticationToClient} AuthenticationToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationToClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationToClient message.
         * @function verify
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationToClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isInteger(message.context))
                    return "context: integer expected";
            {
                var error = $root.sword.AuthenticationToClient.Content.verify(message.message);
                if (error)
                    return "message." + error;
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId))
                    return "clientId: integer expected";
            if (message.virtualClient != null && message.hasOwnProperty("virtualClient"))
                if (typeof message.virtualClient !== "boolean")
                    return "virtualClient: boolean expected";
            return null;
        };

        /**
         * Creates an AuthenticationToClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {sword.AuthenticationToClient} AuthenticationToClient
         */
        AuthenticationToClient.fromObject = function fromObject(object) {
            if (object instanceof $root.sword.AuthenticationToClient)
                return object;
            var message = new $root.sword.AuthenticationToClient();
            if (object.context != null)
                message.context = object.context | 0;
            if (object.message != null) {
                if (typeof object.message !== "object")
                    throw TypeError(".sword.AuthenticationToClient.message: object expected");
                message.message = $root.sword.AuthenticationToClient.Content.fromObject(object.message);
            }
            if (object.clientId != null)
                message.clientId = object.clientId | 0;
            if (object.virtualClient != null)
                message.virtualClient = Boolean(object.virtualClient);
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationToClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof sword.AuthenticationToClient
         * @static
         * @param {sword.AuthenticationToClient} message AuthenticationToClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationToClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.context = 0;
                object.message = null;
                object.clientId = 0;
                object.virtualClient = false;
            }
            if (message.context != null && message.hasOwnProperty("context"))
                object.context = message.context;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = $root.sword.AuthenticationToClient.Content.toObject(message.message, options);
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            if (message.virtualClient != null && message.hasOwnProperty("virtualClient"))
                object.virtualClient = message.virtualClient;
            return object;
        };

        /**
         * Converts this AuthenticationToClient to JSON.
         * @function toJSON
         * @memberof sword.AuthenticationToClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationToClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        AuthenticationToClient.Content = (function() {

            /**
             * Properties of a Content.
             * @memberof sword.AuthenticationToClient
             * @interface IContent
             * @property {sword.IAuthenticationResponse|null} [authenticationResponse] Content authenticationResponse
             * @property {sword.IProfileCreation|null} [profileCreation] Content profileCreation
             * @property {sword.IProfileCreationRequestAck|null} [profileCreationRequestAck] Content profileCreationRequestAck
             * @property {sword.IProfileUpdate|null} [profileUpdate] Content profileUpdate
             * @property {sword.IProfileUpdateRequestAck|null} [profileUpdateRequestAck] Content profileUpdateRequestAck
             * @property {sword.IProfileDestruction|null} [profileDestruction] Content profileDestruction
             * @property {sword.IProfileDestructionRequestAck|null} [profileDestructionRequestAck] Content profileDestructionRequestAck
             * @property {sword.IConnectedProfileList|null} [connectedProfileList] Content connectedProfileList
             * @property {sword.IAuthenticationKeyResponse|null} [authenticationKeyResponse] Content authenticationKeyResponse
             */

            /**
             * Constructs a new Content.
             * @memberof sword.AuthenticationToClient
             * @classdesc Represents a Content.
             * @implements IContent
             * @constructor
             * @param {sword.AuthenticationToClient.IContent=} [properties] Properties to set
             */
            function Content(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Content authenticationResponse.
             * @member {sword.IAuthenticationResponse|null|undefined} authenticationResponse
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.authenticationResponse = null;

            /**
             * Content profileCreation.
             * @member {sword.IProfileCreation|null|undefined} profileCreation
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.profileCreation = null;

            /**
             * Content profileCreationRequestAck.
             * @member {sword.IProfileCreationRequestAck|null|undefined} profileCreationRequestAck
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.profileCreationRequestAck = null;

            /**
             * Content profileUpdate.
             * @member {sword.IProfileUpdate|null|undefined} profileUpdate
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.profileUpdate = null;

            /**
             * Content profileUpdateRequestAck.
             * @member {sword.IProfileUpdateRequestAck|null|undefined} profileUpdateRequestAck
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.profileUpdateRequestAck = null;

            /**
             * Content profileDestruction.
             * @member {sword.IProfileDestruction|null|undefined} profileDestruction
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.profileDestruction = null;

            /**
             * Content profileDestructionRequestAck.
             * @member {sword.IProfileDestructionRequestAck|null|undefined} profileDestructionRequestAck
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.profileDestructionRequestAck = null;

            /**
             * Content connectedProfileList.
             * @member {sword.IConnectedProfileList|null|undefined} connectedProfileList
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.connectedProfileList = null;

            /**
             * Content authenticationKeyResponse.
             * @member {sword.IAuthenticationKeyResponse|null|undefined} authenticationKeyResponse
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             */
            Content.prototype.authenticationKeyResponse = null;

            /**
             * Creates a new Content instance using the specified properties.
             * @function create
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {sword.AuthenticationToClient.IContent=} [properties] Properties to set
             * @returns {sword.AuthenticationToClient.Content} Content instance
             */
            Content.create = function create(properties) {
                return new Content(properties);
            };

            /**
             * Encodes the specified Content message. Does not implicitly {@link sword.AuthenticationToClient.Content.verify|verify} messages.
             * @function encode
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {sword.AuthenticationToClient.IContent} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.authenticationResponse != null && message.hasOwnProperty("authenticationResponse"))
                    $root.sword.AuthenticationResponse.encode(message.authenticationResponse, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.profileCreation != null && message.hasOwnProperty("profileCreation"))
                    $root.sword.ProfileCreation.encode(message.profileCreation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.profileCreationRequestAck != null && message.hasOwnProperty("profileCreationRequestAck"))
                    $root.sword.ProfileCreationRequestAck.encode(message.profileCreationRequestAck, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.profileUpdate != null && message.hasOwnProperty("profileUpdate"))
                    $root.sword.ProfileUpdate.encode(message.profileUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.profileUpdateRequestAck != null && message.hasOwnProperty("profileUpdateRequestAck"))
                    $root.sword.ProfileUpdateRequestAck.encode(message.profileUpdateRequestAck, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.profileDestruction != null && message.hasOwnProperty("profileDestruction"))
                    $root.sword.ProfileDestruction.encode(message.profileDestruction, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.profileDestructionRequestAck != null && message.hasOwnProperty("profileDestructionRequestAck"))
                    $root.sword.ProfileDestructionRequestAck.encode(message.profileDestructionRequestAck, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.connectedProfileList != null && message.hasOwnProperty("connectedProfileList"))
                    $root.sword.ConnectedProfileList.encode(message.connectedProfileList, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.authenticationKeyResponse != null && message.hasOwnProperty("authenticationKeyResponse"))
                    $root.sword.AuthenticationKeyResponse.encode(message.authenticationKeyResponse, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Content message, length delimited. Does not implicitly {@link sword.AuthenticationToClient.Content.verify|verify} messages.
             * @function encodeDelimited
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {sword.AuthenticationToClient.IContent} message Content message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Content.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Content message from the specified reader or buffer.
             * @function decode
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {sword.AuthenticationToClient.Content} Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Content.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sword.AuthenticationToClient.Content();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.authenticationResponse = $root.sword.AuthenticationResponse.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.profileCreation = $root.sword.ProfileCreation.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.profileCreationRequestAck = $root.sword.ProfileCreationRequestAck.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.profileUpdate = $root.sword.ProfileUpdate.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.profileUpdateRequestAck = $root.sword.ProfileUpdateRequestAck.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.profileDestruction = $root.sword.ProfileDestruction.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.profileDestructionRequestAck = $root.sword.ProfileDestructionRequestAck.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.connectedProfileList = $root.sword.ConnectedProfileList.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.authenticationKeyResponse = $root.sword.AuthenticationKeyResponse.decode(reader, reader.uint32());
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
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {sword.AuthenticationToClient.Content} Content
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
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Content.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.authenticationResponse != null && message.hasOwnProperty("authenticationResponse")) {
                    var error = $root.sword.AuthenticationResponse.verify(message.authenticationResponse);
                    if (error)
                        return "authenticationResponse." + error;
                }
                if (message.profileCreation != null && message.hasOwnProperty("profileCreation")) {
                    var error = $root.sword.ProfileCreation.verify(message.profileCreation);
                    if (error)
                        return "profileCreation." + error;
                }
                if (message.profileCreationRequestAck != null && message.hasOwnProperty("profileCreationRequestAck")) {
                    var error = $root.sword.ProfileCreationRequestAck.verify(message.profileCreationRequestAck);
                    if (error)
                        return "profileCreationRequestAck." + error;
                }
                if (message.profileUpdate != null && message.hasOwnProperty("profileUpdate")) {
                    var error = $root.sword.ProfileUpdate.verify(message.profileUpdate);
                    if (error)
                        return "profileUpdate." + error;
                }
                if (message.profileUpdateRequestAck != null && message.hasOwnProperty("profileUpdateRequestAck")) {
                    var error = $root.sword.ProfileUpdateRequestAck.verify(message.profileUpdateRequestAck);
                    if (error)
                        return "profileUpdateRequestAck." + error;
                }
                if (message.profileDestruction != null && message.hasOwnProperty("profileDestruction")) {
                    var error = $root.sword.ProfileDestruction.verify(message.profileDestruction);
                    if (error)
                        return "profileDestruction." + error;
                }
                if (message.profileDestructionRequestAck != null && message.hasOwnProperty("profileDestructionRequestAck")) {
                    var error = $root.sword.ProfileDestructionRequestAck.verify(message.profileDestructionRequestAck);
                    if (error)
                        return "profileDestructionRequestAck." + error;
                }
                if (message.connectedProfileList != null && message.hasOwnProperty("connectedProfileList")) {
                    var error = $root.sword.ConnectedProfileList.verify(message.connectedProfileList);
                    if (error)
                        return "connectedProfileList." + error;
                }
                if (message.authenticationKeyResponse != null && message.hasOwnProperty("authenticationKeyResponse")) {
                    var error = $root.sword.AuthenticationKeyResponse.verify(message.authenticationKeyResponse);
                    if (error)
                        return "authenticationKeyResponse." + error;
                }
                return null;
            };

            /**
             * Creates a Content message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {sword.AuthenticationToClient.Content} Content
             */
            Content.fromObject = function fromObject(object) {
                if (object instanceof $root.sword.AuthenticationToClient.Content)
                    return object;
                var message = new $root.sword.AuthenticationToClient.Content();
                if (object.authenticationResponse != null) {
                    if (typeof object.authenticationResponse !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.authenticationResponse: object expected");
                    message.authenticationResponse = $root.sword.AuthenticationResponse.fromObject(object.authenticationResponse);
                }
                if (object.profileCreation != null) {
                    if (typeof object.profileCreation !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.profileCreation: object expected");
                    message.profileCreation = $root.sword.ProfileCreation.fromObject(object.profileCreation);
                }
                if (object.profileCreationRequestAck != null) {
                    if (typeof object.profileCreationRequestAck !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.profileCreationRequestAck: object expected");
                    message.profileCreationRequestAck = $root.sword.ProfileCreationRequestAck.fromObject(object.profileCreationRequestAck);
                }
                if (object.profileUpdate != null) {
                    if (typeof object.profileUpdate !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.profileUpdate: object expected");
                    message.profileUpdate = $root.sword.ProfileUpdate.fromObject(object.profileUpdate);
                }
                if (object.profileUpdateRequestAck != null) {
                    if (typeof object.profileUpdateRequestAck !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.profileUpdateRequestAck: object expected");
                    message.profileUpdateRequestAck = $root.sword.ProfileUpdateRequestAck.fromObject(object.profileUpdateRequestAck);
                }
                if (object.profileDestruction != null) {
                    if (typeof object.profileDestruction !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.profileDestruction: object expected");
                    message.profileDestruction = $root.sword.ProfileDestruction.fromObject(object.profileDestruction);
                }
                if (object.profileDestructionRequestAck != null) {
                    if (typeof object.profileDestructionRequestAck !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.profileDestructionRequestAck: object expected");
                    message.profileDestructionRequestAck = $root.sword.ProfileDestructionRequestAck.fromObject(object.profileDestructionRequestAck);
                }
                if (object.connectedProfileList != null) {
                    if (typeof object.connectedProfileList !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.connectedProfileList: object expected");
                    message.connectedProfileList = $root.sword.ConnectedProfileList.fromObject(object.connectedProfileList);
                }
                if (object.authenticationKeyResponse != null) {
                    if (typeof object.authenticationKeyResponse !== "object")
                        throw TypeError(".sword.AuthenticationToClient.Content.authenticationKeyResponse: object expected");
                    message.authenticationKeyResponse = $root.sword.AuthenticationKeyResponse.fromObject(object.authenticationKeyResponse);
                }
                return message;
            };

            /**
             * Creates a plain object from a Content message. Also converts values to other types if specified.
             * @function toObject
             * @memberof sword.AuthenticationToClient.Content
             * @static
             * @param {sword.AuthenticationToClient.Content} message Content
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Content.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.authenticationResponse = null;
                    object.profileCreation = null;
                    object.profileCreationRequestAck = null;
                    object.profileUpdate = null;
                    object.profileUpdateRequestAck = null;
                    object.profileDestruction = null;
                    object.profileDestructionRequestAck = null;
                    object.connectedProfileList = null;
                    object.authenticationKeyResponse = null;
                }
                if (message.authenticationResponse != null && message.hasOwnProperty("authenticationResponse"))
                    object.authenticationResponse = $root.sword.AuthenticationResponse.toObject(message.authenticationResponse, options);
                if (message.profileCreation != null && message.hasOwnProperty("profileCreation"))
                    object.profileCreation = $root.sword.ProfileCreation.toObject(message.profileCreation, options);
                if (message.profileCreationRequestAck != null && message.hasOwnProperty("profileCreationRequestAck"))
                    object.profileCreationRequestAck = $root.sword.ProfileCreationRequestAck.toObject(message.profileCreationRequestAck, options);
                if (message.profileUpdate != null && message.hasOwnProperty("profileUpdate"))
                    object.profileUpdate = $root.sword.ProfileUpdate.toObject(message.profileUpdate, options);
                if (message.profileUpdateRequestAck != null && message.hasOwnProperty("profileUpdateRequestAck"))
                    object.profileUpdateRequestAck = $root.sword.ProfileUpdateRequestAck.toObject(message.profileUpdateRequestAck, options);
                if (message.profileDestruction != null && message.hasOwnProperty("profileDestruction"))
                    object.profileDestruction = $root.sword.ProfileDestruction.toObject(message.profileDestruction, options);
                if (message.profileDestructionRequestAck != null && message.hasOwnProperty("profileDestructionRequestAck"))
                    object.profileDestructionRequestAck = $root.sword.ProfileDestructionRequestAck.toObject(message.profileDestructionRequestAck, options);
                if (message.connectedProfileList != null && message.hasOwnProperty("connectedProfileList"))
                    object.connectedProfileList = $root.sword.ConnectedProfileList.toObject(message.connectedProfileList, options);
                if (message.authenticationKeyResponse != null && message.hasOwnProperty("authenticationKeyResponse"))
                    object.authenticationKeyResponse = $root.sword.AuthenticationKeyResponse.toObject(message.authenticationKeyResponse, options);
                return object;
            };

            /**
             * Converts this Content to JSON.
             * @function toJSON
             * @memberof sword.AuthenticationToClient.Content
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Content.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Content;
        })();

        return AuthenticationToClient;
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
