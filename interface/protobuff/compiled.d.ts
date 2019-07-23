import * as $protobuf from "protobufjs";
/** Namespace sword. */
export namespace sword {

    /** Properties of an AuthenticationKeyRequest. */
    interface IAuthenticationKeyRequest {
    }

    /** Represents an AuthenticationKeyRequest. */
    class AuthenticationKeyRequest implements IAuthenticationKeyRequest {

        /**
         * Constructs a new AuthenticationKeyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IAuthenticationKeyRequest);

        /**
         * Creates a new AuthenticationKeyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthenticationKeyRequest instance
         */
        public static create(properties?: sword.IAuthenticationKeyRequest): sword.AuthenticationKeyRequest;

        /**
         * Encodes the specified AuthenticationKeyRequest message. Does not implicitly {@link sword.AuthenticationKeyRequest.verify|verify} messages.
         * @param message AuthenticationKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IAuthenticationKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthenticationKeyRequest message, length delimited. Does not implicitly {@link sword.AuthenticationKeyRequest.verify|verify} messages.
         * @param message AuthenticationKeyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IAuthenticationKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthenticationKeyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthenticationKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.AuthenticationKeyRequest;

        /**
         * Decodes an AuthenticationKeyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthenticationKeyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.AuthenticationKeyRequest;

        /**
         * Verifies an AuthenticationKeyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthenticationKeyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthenticationKeyRequest
         */
        public static fromObject(object: { [k: string]: any }): sword.AuthenticationKeyRequest;

        /**
         * Creates a plain object from an AuthenticationKeyRequest message. Also converts values to other types if specified.
         * @param message AuthenticationKeyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.AuthenticationKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthenticationKeyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectedProfilesRequest. */
    interface IConnectedProfilesRequest {
    }

    /** Represents a ConnectedProfilesRequest. */
    class ConnectedProfilesRequest implements IConnectedProfilesRequest {

        /**
         * Constructs a new ConnectedProfilesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IConnectedProfilesRequest);

        /**
         * Creates a new ConnectedProfilesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectedProfilesRequest instance
         */
        public static create(properties?: sword.IConnectedProfilesRequest): sword.ConnectedProfilesRequest;

        /**
         * Encodes the specified ConnectedProfilesRequest message. Does not implicitly {@link sword.ConnectedProfilesRequest.verify|verify} messages.
         * @param message ConnectedProfilesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IConnectedProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectedProfilesRequest message, length delimited. Does not implicitly {@link sword.ConnectedProfilesRequest.verify|verify} messages.
         * @param message ConnectedProfilesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IConnectedProfilesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectedProfilesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectedProfilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.ConnectedProfilesRequest;

        /**
         * Decodes a ConnectedProfilesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectedProfilesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.ConnectedProfilesRequest;

        /**
         * Verifies a ConnectedProfilesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectedProfilesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectedProfilesRequest
         */
        public static fromObject(object: { [k: string]: any }): sword.ConnectedProfilesRequest;

        /**
         * Creates a plain object from a ConnectedProfilesRequest message. Also converts values to other types if specified.
         * @param message ConnectedProfilesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.ConnectedProfilesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectedProfilesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AuthenticationRequest. */
    interface IAuthenticationRequest {

        /** AuthenticationRequest login */
        login: string;

        /** AuthenticationRequest password */
        password: string;

        /** AuthenticationRequest version */
        version: sword.IProtocolVersion;

        /** AuthenticationRequest authenticationKey */
        authenticationKey?: (string|null);

        /** AuthenticationRequest token */
        token?: (string|null);

        /** AuthenticationRequest sync */
        sync?: (boolean|null);

        /** AuthenticationRequest virtualClient */
        virtualClient?: (boolean|null);
    }

    /** Represents an AuthenticationRequest. */
    class AuthenticationRequest implements IAuthenticationRequest {

        /**
         * Constructs a new AuthenticationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IAuthenticationRequest);

        /** AuthenticationRequest login. */
        public login: string;

        /** AuthenticationRequest password. */
        public password: string;

        /** AuthenticationRequest version. */
        public version: sword.IProtocolVersion;

        /** AuthenticationRequest authenticationKey. */
        public authenticationKey: string;

        /** AuthenticationRequest token. */
        public token: string;

        /** AuthenticationRequest sync. */
        public sync: boolean;

        /** AuthenticationRequest virtualClient. */
        public virtualClient: boolean;

        /**
         * Creates a new AuthenticationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AuthenticationRequest instance
         */
        public static create(properties?: sword.IAuthenticationRequest): sword.AuthenticationRequest;

        /**
         * Encodes the specified AuthenticationRequest message. Does not implicitly {@link sword.AuthenticationRequest.verify|verify} messages.
         * @param message AuthenticationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IAuthenticationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link sword.AuthenticationRequest.verify|verify} messages.
         * @param message AuthenticationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IAuthenticationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.AuthenticationRequest;

        /**
         * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AuthenticationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.AuthenticationRequest;

        /**
         * Verifies an AuthenticationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AuthenticationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AuthenticationRequest
         */
        public static fromObject(object: { [k: string]: any }): sword.AuthenticationRequest;

        /**
         * Creates a plain object from an AuthenticationRequest message. Also converts values to other types if specified.
         * @param message AuthenticationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.AuthenticationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AuthenticationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DisconnectionRequest. */
    interface IDisconnectionRequest {

        /** DisconnectionRequest clientId */
        clientId?: (number|null);
    }

    /** Represents a DisconnectionRequest. */
    class DisconnectionRequest implements IDisconnectionRequest {

        /**
         * Constructs a new DisconnectionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IDisconnectionRequest);

        /** DisconnectionRequest clientId. */
        public clientId: number;

        /**
         * Creates a new DisconnectionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisconnectionRequest instance
         */
        public static create(properties?: sword.IDisconnectionRequest): sword.DisconnectionRequest;

        /**
         * Encodes the specified DisconnectionRequest message. Does not implicitly {@link sword.DisconnectionRequest.verify|verify} messages.
         * @param message DisconnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IDisconnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisconnectionRequest message, length delimited. Does not implicitly {@link sword.DisconnectionRequest.verify|verify} messages.
         * @param message DisconnectionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IDisconnectionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisconnectionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisconnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.DisconnectionRequest;

        /**
         * Decodes a DisconnectionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisconnectionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.DisconnectionRequest;

        /**
         * Verifies a DisconnectionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisconnectionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisconnectionRequest
         */
        public static fromObject(object: { [k: string]: any }): sword.DisconnectionRequest;

        /**
         * Creates a plain object from a DisconnectionRequest message. Also converts values to other types if specified.
         * @param message DisconnectionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.DisconnectionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisconnectionRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientToAuthentication. */
    interface IClientToAuthentication {

        /** ClientToAuthentication context */
        context?: (number|null);

        /** ClientToAuthentication message */
        message: sword.ClientToAuthentication.IContent;
    }

    /** Represents a ClientToAuthentication. */
    class ClientToAuthentication implements IClientToAuthentication {

        /**
         * Constructs a new ClientToAuthentication.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IClientToAuthentication);

        /** ClientToAuthentication context. */
        public context: number;

        /** ClientToAuthentication message. */
        public message: sword.ClientToAuthentication.IContent;

        /**
         * Creates a new ClientToAuthentication instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientToAuthentication instance
         */
        public static create(properties?: sword.IClientToAuthentication): sword.ClientToAuthentication;

        /**
         * Encodes the specified ClientToAuthentication message. Does not implicitly {@link sword.ClientToAuthentication.verify|verify} messages.
         * @param message ClientToAuthentication message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IClientToAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientToAuthentication message, length delimited. Does not implicitly {@link sword.ClientToAuthentication.verify|verify} messages.
         * @param message ClientToAuthentication message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IClientToAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientToAuthentication message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientToAuthentication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.ClientToAuthentication;

        /**
         * Decodes a ClientToAuthentication message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientToAuthentication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.ClientToAuthentication;

        /**
         * Verifies a ClientToAuthentication message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientToAuthentication message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientToAuthentication
         */
        public static fromObject(object: { [k: string]: any }): sword.ClientToAuthentication;

        /**
         * Creates a plain object from a ClientToAuthentication message. Also converts values to other types if specified.
         * @param message ClientToAuthentication
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.ClientToAuthentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientToAuthentication to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ClientToAuthentication {

        /** Properties of a Content. */
        interface IContent {

            /** Content authenticationRequest */
            authenticationRequest?: (sword.IAuthenticationRequest|null);

            /** Content authenticationKeyRequest */
            authenticationKeyRequest?: (sword.IAuthenticationKeyRequest|null);
        }

        /** Represents a Content. */
        class Content implements IContent {

            /**
             * Constructs a new Content.
             * @param [properties] Properties to set
             */
            constructor(properties?: sword.ClientToAuthentication.IContent);

            /** Content authenticationRequest. */
            public authenticationRequest?: (sword.IAuthenticationRequest|null);

            /** Content authenticationKeyRequest. */
            public authenticationKeyRequest?: (sword.IAuthenticationKeyRequest|null);

            /**
             * Creates a new Content instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Content instance
             */
            public static create(properties?: sword.ClientToAuthentication.IContent): sword.ClientToAuthentication.Content;

            /**
             * Encodes the specified Content message. Does not implicitly {@link sword.ClientToAuthentication.Content.verify|verify} messages.
             * @param message Content message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sword.ClientToAuthentication.IContent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Content message, length delimited. Does not implicitly {@link sword.ClientToAuthentication.Content.verify|verify} messages.
             * @param message Content message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sword.ClientToAuthentication.IContent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Content message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.ClientToAuthentication.Content;

            /**
             * Decodes a Content message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Content
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.ClientToAuthentication.Content;

            /**
             * Verifies a Content message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Content message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Content
             */
            public static fromObject(object: { [k: string]: any }): sword.ClientToAuthentication.Content;

            /**
             * Creates a plain object from a Content message. Also converts values to other types if specified.
             * @param message Content
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sword.ClientToAuthentication.Content, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Content to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ProtocolVersion. */
    interface IProtocolVersion {

        /** ProtocolVersion value */
        value: string;
    }

    /** Represents a ProtocolVersion. */
    class ProtocolVersion implements IProtocolVersion {

        /**
         * Constructs a new ProtocolVersion.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IProtocolVersion);

        /** ProtocolVersion value. */
        public value: string;

        /**
         * Creates a new ProtocolVersion instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtocolVersion instance
         */
        public static create(properties?: sword.IProtocolVersion): sword.ProtocolVersion;

        /**
         * Encodes the specified ProtocolVersion message. Does not implicitly {@link sword.ProtocolVersion.verify|verify} messages.
         * @param message ProtocolVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IProtocolVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtocolVersion message, length delimited. Does not implicitly {@link sword.ProtocolVersion.verify|verify} messages.
         * @param message ProtocolVersion message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IProtocolVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtocolVersion message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtocolVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.ProtocolVersion;

        /**
         * Decodes a ProtocolVersion message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtocolVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.ProtocolVersion;

        /**
         * Verifies a ProtocolVersion message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtocolVersion message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtocolVersion
         */
        public static fromObject(object: { [k: string]: any }): sword.ProtocolVersion;

        /**
         * Creates a plain object from a ProtocolVersion message. Also converts values to other types if specified.
         * @param message ProtocolVersion
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.ProtocolVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtocolVersion to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Id. */
    interface IId {

        /** Id id */
        id: number;
    }

    /** Represents an Id. */
    class Id implements IId {

        /**
         * Constructs a new Id.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IId);

        /** Id id. */
        public id: number;

        /**
         * Creates a new Id instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Id instance
         */
        public static create(properties?: sword.IId): sword.Id;

        /**
         * Encodes the specified Id message. Does not implicitly {@link sword.Id.verify|verify} messages.
         * @param message Id message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Id message, length delimited. Does not implicitly {@link sword.Id.verify|verify} messages.
         * @param message Id message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Id message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.Id;

        /**
         * Decodes an Id message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Id
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.Id;

        /**
         * Verifies an Id message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Id message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Id
         */
        public static fromObject(object: { [k: string]: any }): sword.Id;

        /**
         * Creates a plain object from an Id message. Also converts values to other types if specified.
         * @param message Id
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Id to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IdList. */
    interface IIdList {

        /** IdList elem */
        elem?: (sword.IId[]|null);
    }

    /** Represents an IdList. */
    class IdList implements IIdList {

        /**
         * Constructs a new IdList.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IIdList);

        /** IdList elem. */
        public elem: sword.IId[];

        /**
         * Creates a new IdList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdList instance
         */
        public static create(properties?: sword.IIdList): sword.IdList;

        /**
         * Encodes the specified IdList message. Does not implicitly {@link sword.IdList.verify|verify} messages.
         * @param message IdList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IIdList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdList message, length delimited. Does not implicitly {@link sword.IdList.verify|verify} messages.
         * @param message IdList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IIdList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.IdList;

        /**
         * Decodes an IdList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.IdList;

        /**
         * Verifies an IdList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdList
         */
        public static fromObject(object: { [k: string]: any }): sword.IdList;

        /**
         * Creates a plain object from an IdList message. Also converts values to other types if specified.
         * @param message IdList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.IdList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DateTime. */
    interface IDateTime {

        /** DateTime data */
        data: string;
    }

    /** Represents a DateTime. */
    class DateTime implements IDateTime {

        /**
         * Constructs a new DateTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: sword.IDateTime);

        /** DateTime data. */
        public data: string;

        /**
         * Creates a new DateTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DateTime instance
         */
        public static create(properties?: sword.IDateTime): sword.DateTime;

        /**
         * Encodes the specified DateTime message. Does not implicitly {@link sword.DateTime.verify|verify} messages.
         * @param message DateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sword.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DateTime message, length delimited. Does not implicitly {@link sword.DateTime.verify|verify} messages.
         * @param message DateTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sword.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DateTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sword.DateTime;

        /**
         * Decodes a DateTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DateTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sword.DateTime;

        /**
         * Verifies a DateTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DateTime
         */
        public static fromObject(object: { [k: string]: any }): sword.DateTime;

        /**
         * Creates a plain object from a DateTime message. Also converts values to other types if specified.
         * @param message DateTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sword.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DateTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
