import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** Level is the permission level. */

export enum CircuitBreakerPermissions_Level {
  /**
   * LEVEL_NONE_UNSPECIFIED - LEVEL_NONE_UNSPECIFIED indicates that the account will have no circuit
   * breaker permissions.
   */
  LEVEL_NONE_UNSPECIFIED = 0,

  /**
   * LEVEL_SOME_MSGS - LEVEL_SOME_MSGS indicates that the account will have permission to
   * trip or reset the circuit breaker for some Msg type URLs. If this level
   * is chosen, a non-empty list of Msg type URLs must be provided in
   * limit_type_urls.
   */
  LEVEL_SOME_MSGS = 1,

  /**
   * LEVEL_ALL_MSGS - LEVEL_ALL_MSGS indicates that the account can trip or reset the circuit
   * breaker for Msg's of all type URLs.
   */
  LEVEL_ALL_MSGS = 2,

  /**
   * LEVEL_SUPER_ADMIN - LEVEL_SUPER_ADMIN indicates that the account can take all circuit breaker
   * actions and can grant permissions to other accounts.
   */
  LEVEL_SUPER_ADMIN = 3,
  UNRECOGNIZED = -1,
}
export const CircuitBreakerPermissions_LevelSDKType = CircuitBreakerPermissions_Level;
export const CircuitBreakerPermissions_LevelAmino = CircuitBreakerPermissions_Level;
export function circuitBreakerPermissions_LevelFromJSON(object: any): CircuitBreakerPermissions_Level {
  switch (object) {
    case 0:
    case "LEVEL_NONE_UNSPECIFIED":
      return CircuitBreakerPermissions_Level.LEVEL_NONE_UNSPECIFIED;

    case 1:
    case "LEVEL_SOME_MSGS":
      return CircuitBreakerPermissions_Level.LEVEL_SOME_MSGS;

    case 2:
    case "LEVEL_ALL_MSGS":
      return CircuitBreakerPermissions_Level.LEVEL_ALL_MSGS;

    case 3:
    case "LEVEL_SUPER_ADMIN":
      return CircuitBreakerPermissions_Level.LEVEL_SUPER_ADMIN;

    case -1:
    case "UNRECOGNIZED":
    default:
      return CircuitBreakerPermissions_Level.UNRECOGNIZED;
  }
}
export function circuitBreakerPermissions_LevelToJSON(object: CircuitBreakerPermissions_Level): string {
  switch (object) {
    case CircuitBreakerPermissions_Level.LEVEL_NONE_UNSPECIFIED:
      return "LEVEL_NONE_UNSPECIFIED";

    case CircuitBreakerPermissions_Level.LEVEL_SOME_MSGS:
      return "LEVEL_SOME_MSGS";

    case CircuitBreakerPermissions_Level.LEVEL_ALL_MSGS:
      return "LEVEL_ALL_MSGS";

    case CircuitBreakerPermissions_Level.LEVEL_SUPER_ADMIN:
      return "LEVEL_SUPER_ADMIN";

    case CircuitBreakerPermissions_Level.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */

export interface MsgAuthorizeCircuitBreaker {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter: string;
  /** grantee is the account authorized with the provided permissions. */

  grantee: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */

  permissions?: CircuitBreakerPermissions;
}
export interface MsgAuthorizeCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker";
  value: Uint8Array;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */

export interface MsgAuthorizeCircuitBreakerAmino {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter: string;
  /** grantee is the account authorized with the provided permissions. */

  grantee: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */

  permissions?: CircuitBreakerPermissionsAmino;
}
export interface MsgAuthorizeCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgAuthorizeCircuitBreaker";
  value: MsgAuthorizeCircuitBreakerAmino;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */

export interface MsgAuthorizeCircuitBreakerSDKType {
  granter: string;
  grantee: string;
  permissions?: CircuitBreakerPermissionsSDKType;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker response type. */

export interface MsgAuthorizeCircuitBreakerResponse {}
export interface MsgAuthorizeCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker response type. */

export interface MsgAuthorizeCircuitBreakerResponseAmino {}
export interface MsgAuthorizeCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse";
  value: MsgAuthorizeCircuitBreakerResponseAmino;
}
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker response type. */

export interface MsgAuthorizeCircuitBreakerResponseSDKType {}
/**
 * CircuitBreakerPermissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */

export interface CircuitBreakerPermissions {
  /** level is the level of permissions granted to this account. */
  level: CircuitBreakerPermissions_Level;
  /**
   * limit_msg_types is used with LEVEL_SOME_MSGS to limit the lists of Msg type
   * name that the account can pause. It is an error to use limit_msg_types with
   * a level other than LEVEL_SOME_MSGS.
   */

  limitMsgTypes: string[];
}
export interface CircuitBreakerPermissionsProtoMsg {
  typeUrl: "/cosmos.circuit.v1.CircuitBreakerPermissions";
  value: Uint8Array;
}
/**
 * CircuitBreakerPermissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */

export interface CircuitBreakerPermissionsAmino {
  /** level is the level of permissions granted to this account. */
  level: CircuitBreakerPermissions_Level;
  /**
   * limit_msg_types is used with LEVEL_SOME_MSGS to limit the lists of Msg type
   * name that the account can pause. It is an error to use limit_msg_types with
   * a level other than LEVEL_SOME_MSGS.
   */

  limit_msg_types: string[];
}
export interface CircuitBreakerPermissionsAminoMsg {
  type: "cosmos-sdk/CircuitBreakerPermissions";
  value: CircuitBreakerPermissionsAmino;
}
/**
 * CircuitBreakerPermissions are the permissions that an account has to trip
 * or reset the circuit breaker.
 */

export interface CircuitBreakerPermissionsSDKType {
  level: CircuitBreakerPermissions_Level;
  limit_msg_types: string[];
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */

export interface MsgTripCircuitBreaker {
  /** authority is the account authorized to trip the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */

  msgTypeUrls: string[];
}
export interface MsgTripCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker";
  value: Uint8Array;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */

export interface MsgTripCircuitBreakerAmino {
  /** authority is the account authorized to trip the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */

  msg_type_urls: string[];
}
export interface MsgTripCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgTripCircuitBreaker";
  value: MsgTripCircuitBreakerAmino;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */

export interface MsgTripCircuitBreakerSDKType {
  authority: string;
  msg_type_urls: string[];
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker response type. */

export interface MsgTripCircuitBreakerResponse {}
export interface MsgTripCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker response type. */

export interface MsgTripCircuitBreakerResponseAmino {}
export interface MsgTripCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgTripCircuitBreakerResponse";
  value: MsgTripCircuitBreakerResponseAmino;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker response type. */

export interface MsgTripCircuitBreakerResponseSDKType {}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */

export interface MsgResetCircuitBreaker {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */

  msgTypeUrls: string[];
}
export interface MsgResetCircuitBreakerProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker";
  value: Uint8Array;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */

export interface MsgResetCircuitBreakerAmino {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */

  msg_type_urls: string[];
}
export interface MsgResetCircuitBreakerAminoMsg {
  type: "cosmos-sdk/MsgResetCircuitBreaker";
  value: MsgResetCircuitBreakerAmino;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */

export interface MsgResetCircuitBreakerSDKType {
  authority: string;
  msg_type_urls: string[];
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */

export interface MsgResetCircuitBreakerResponse {}
export interface MsgResetCircuitBreakerResponseProtoMsg {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse";
  value: Uint8Array;
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */

export interface MsgResetCircuitBreakerResponseAmino {}
export interface MsgResetCircuitBreakerResponseAminoMsg {
  type: "cosmos-sdk/MsgResetCircuitBreakerResponse";
  value: MsgResetCircuitBreakerResponseAmino;
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */

export interface MsgResetCircuitBreakerResponseSDKType {}

function createBaseMsgAuthorizeCircuitBreaker(): MsgAuthorizeCircuitBreaker {
  return {
    granter: "",
    grantee: "",
    permissions: undefined
  };
}

export const MsgAuthorizeCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
  aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreaker",

  encode(message: MsgAuthorizeCircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.permissions !== undefined) {
      CircuitBreakerPermissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeCircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreaker();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.permissions = CircuitBreakerPermissions.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAuthorizeCircuitBreaker {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      permissions: isSet(object.permissions) ? CircuitBreakerPermissions.fromJSON(object.permissions) : undefined
    };
  },

  toJSON(message: MsgAuthorizeCircuitBreaker): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permissions !== undefined && (obj.permissions = message.permissions ? CircuitBreakerPermissions.toJSON(message.permissions) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MsgAuthorizeCircuitBreaker>): MsgAuthorizeCircuitBreaker {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.permissions = object.permissions !== undefined && object.permissions !== null ? CircuitBreakerPermissions.fromPartial(object.permissions) : undefined;
    return message;
  },

  fromSDK(object: MsgAuthorizeCircuitBreakerSDKType): MsgAuthorizeCircuitBreaker {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      permissions: object.permissions ? CircuitBreakerPermissions.fromSDK(object.permissions) : undefined
    };
  },

  toSDK(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.permissions !== undefined && (obj.permissions = message.permissions ? CircuitBreakerPermissions.toSDK(message.permissions) : undefined);
    return obj;
  },

  fromAmino(object: MsgAuthorizeCircuitBreakerAmino): MsgAuthorizeCircuitBreaker {
    return {
      granter: object.granter,
      grantee: object.grantee,
      permissions: object?.permissions ? CircuitBreakerPermissions.fromAmino(object.permissions) : undefined
    };
  },

  toAmino(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    obj.permissions = message.permissions ? CircuitBreakerPermissions.toAmino(message.permissions) : undefined;
    return obj;
  },

  fromAminoMsg(object: MsgAuthorizeCircuitBreakerAminoMsg): MsgAuthorizeCircuitBreaker {
    return MsgAuthorizeCircuitBreaker.fromAmino(object.value);
  },

  toAminoMsg(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
      value: MsgAuthorizeCircuitBreaker.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgAuthorizeCircuitBreakerProtoMsg): MsgAuthorizeCircuitBreaker {
    return MsgAuthorizeCircuitBreaker.decode(message.value);
  },

  toProto(message: MsgAuthorizeCircuitBreaker): Uint8Array {
    return MsgAuthorizeCircuitBreaker.encode(message).finish();
  },

  toProtoMsg(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
      value: MsgAuthorizeCircuitBreaker.encode(message).finish()
    };
  }

};

function createBaseMsgAuthorizeCircuitBreakerResponse(): MsgAuthorizeCircuitBreakerResponse {
  return {};
}

export const MsgAuthorizeCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
  aminoType: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",

  encode(_: MsgAuthorizeCircuitBreakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuthorizeCircuitBreakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAuthorizeCircuitBreakerResponse {
    return {};
  },

  toJSON(_: MsgAuthorizeCircuitBreakerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgAuthorizeCircuitBreakerResponse>): MsgAuthorizeCircuitBreakerResponse {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    return message;
  },

  fromSDK(_: MsgAuthorizeCircuitBreakerResponseSDKType): MsgAuthorizeCircuitBreakerResponse {
    return {};
  },

  toSDK(_: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgAuthorizeCircuitBreakerResponseAmino): MsgAuthorizeCircuitBreakerResponse {
    return {};
  },

  toAmino(_: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgAuthorizeCircuitBreakerResponseAminoMsg): MsgAuthorizeCircuitBreakerResponse {
    return MsgAuthorizeCircuitBreakerResponse.fromAmino(object.value);
  },

  toAminoMsg(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
      value: MsgAuthorizeCircuitBreakerResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgAuthorizeCircuitBreakerResponseProtoMsg): MsgAuthorizeCircuitBreakerResponse {
    return MsgAuthorizeCircuitBreakerResponse.decode(message.value);
  },

  toProto(message: MsgAuthorizeCircuitBreakerResponse): Uint8Array {
    return MsgAuthorizeCircuitBreakerResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
      value: MsgAuthorizeCircuitBreakerResponse.encode(message).finish()
    };
  }

};

function createBaseCircuitBreakerPermissions(): CircuitBreakerPermissions {
  return {
    level: 0,
    limitMsgTypes: []
  };
}

export const CircuitBreakerPermissions = {
  typeUrl: "/cosmos.circuit.v1.CircuitBreakerPermissions",
  aminoType: "cosmos-sdk/CircuitBreakerPermissions",

  encode(message: CircuitBreakerPermissions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }

    for (const v of message.limitMsgTypes) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CircuitBreakerPermissions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircuitBreakerPermissions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.level = (reader.int32() as any);
          break;

        case 2:
          message.limitMsgTypes.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CircuitBreakerPermissions {
    return {
      level: isSet(object.level) ? circuitBreakerPermissions_LevelFromJSON(object.level) : 0,
      limitMsgTypes: Array.isArray(object?.limitMsgTypes) ? object.limitMsgTypes.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: CircuitBreakerPermissions): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = circuitBreakerPermissions_LevelToJSON(message.level));

    if (message.limitMsgTypes) {
      obj.limitMsgTypes = message.limitMsgTypes.map(e => e);
    } else {
      obj.limitMsgTypes = [];
    }

    return obj;
  },

  fromPartial(object: Partial<CircuitBreakerPermissions>): CircuitBreakerPermissions {
    const message = createBaseCircuitBreakerPermissions();
    message.level = object.level ?? 0;
    message.limitMsgTypes = object.limitMsgTypes?.map(e => e) || [];
    return message;
  },

  fromSDK(object: CircuitBreakerPermissionsSDKType): CircuitBreakerPermissions {
    return {
      level: isSet(object.level) ? circuitBreakerPermissions_LevelFromJSON(object.level) : 0,
      limitMsgTypes: Array.isArray(object?.limit_msg_types) ? object.limit_msg_types.map((e: any) => e) : []
    };
  },

  toSDK(message: CircuitBreakerPermissions): CircuitBreakerPermissionsSDKType {
    const obj: any = {};
    message.level !== undefined && (obj.level = circuitBreakerPermissions_LevelToJSON(message.level));

    if (message.limitMsgTypes) {
      obj.limit_msg_types = message.limitMsgTypes.map(e => e);
    } else {
      obj.limit_msg_types = [];
    }

    return obj;
  },

  fromAmino(object: CircuitBreakerPermissionsAmino): CircuitBreakerPermissions {
    return {
      level: isSet(object.level) ? circuitBreakerPermissions_LevelFromJSON(object.level) : 0,
      limitMsgTypes: Array.isArray(object?.limit_msg_types) ? object.limit_msg_types.map((e: any) => e) : []
    };
  },

  toAmino(message: CircuitBreakerPermissions): CircuitBreakerPermissionsAmino {
    const obj: any = {};
    obj.level = message.level;

    if (message.limitMsgTypes) {
      obj.limit_msg_types = message.limitMsgTypes.map(e => e);
    } else {
      obj.limit_msg_types = [];
    }

    return obj;
  },

  fromAminoMsg(object: CircuitBreakerPermissionsAminoMsg): CircuitBreakerPermissions {
    return CircuitBreakerPermissions.fromAmino(object.value);
  },

  toAminoMsg(message: CircuitBreakerPermissions): CircuitBreakerPermissionsAminoMsg {
    return {
      type: "cosmos-sdk/CircuitBreakerPermissions",
      value: CircuitBreakerPermissions.toAmino(message)
    };
  },

  fromProtoMsg(message: CircuitBreakerPermissionsProtoMsg): CircuitBreakerPermissions {
    return CircuitBreakerPermissions.decode(message.value);
  },

  toProto(message: CircuitBreakerPermissions): Uint8Array {
    return CircuitBreakerPermissions.encode(message).finish();
  },

  toProtoMsg(message: CircuitBreakerPermissions): CircuitBreakerPermissionsProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.CircuitBreakerPermissions",
      value: CircuitBreakerPermissions.encode(message).finish()
    };
  }

};

function createBaseMsgTripCircuitBreaker(): MsgTripCircuitBreaker {
  return {
    authority: "",
    msgTypeUrls: []
  };
}

export const MsgTripCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
  aminoType: "cosmos-sdk/MsgTripCircuitBreaker",

  encode(message: MsgTripCircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    for (const v of message.msgTypeUrls) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTripCircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreaker();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.msgTypeUrls.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgTripCircuitBreaker {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgTripCircuitBreaker): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);

    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msgTypeUrls = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgTripCircuitBreaker>): MsgTripCircuitBreaker {
    const message = createBaseMsgTripCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },

  fromSDK(object: MsgTripCircuitBreakerSDKType): MsgTripCircuitBreaker {
    return {
      authority: object?.authority,
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },

  toSDK(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerSDKType {
    const obj: any = {};
    obj.authority = message.authority;

    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }

    return obj;
  },

  fromAmino(object: MsgTripCircuitBreakerAmino): MsgTripCircuitBreaker {
    return {
      authority: object.authority,
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },

  toAmino(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerAmino {
    const obj: any = {};
    obj.authority = message.authority;

    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgTripCircuitBreakerAminoMsg): MsgTripCircuitBreaker {
    return MsgTripCircuitBreaker.fromAmino(object.value);
  },

  toAminoMsg(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreaker",
      value: MsgTripCircuitBreaker.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgTripCircuitBreakerProtoMsg): MsgTripCircuitBreaker {
    return MsgTripCircuitBreaker.decode(message.value);
  },

  toProto(message: MsgTripCircuitBreaker): Uint8Array {
    return MsgTripCircuitBreaker.encode(message).finish();
  },

  toProtoMsg(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
      value: MsgTripCircuitBreaker.encode(message).finish()
    };
  }

};

function createBaseMsgTripCircuitBreakerResponse(): MsgTripCircuitBreakerResponse {
  return {};
}

export const MsgTripCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
  aminoType: "cosmos-sdk/MsgTripCircuitBreakerResponse",

  encode(_: MsgTripCircuitBreakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTripCircuitBreakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreakerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgTripCircuitBreakerResponse {
    return {};
  },

  toJSON(_: MsgTripCircuitBreakerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgTripCircuitBreakerResponse>): MsgTripCircuitBreakerResponse {
    const message = createBaseMsgTripCircuitBreakerResponse();
    return message;
  },

  fromSDK(_: MsgTripCircuitBreakerResponseSDKType): MsgTripCircuitBreakerResponse {
    return {};
  },

  toSDK(_: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgTripCircuitBreakerResponseAmino): MsgTripCircuitBreakerResponse {
    return {};
  },

  toAmino(_: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgTripCircuitBreakerResponseAminoMsg): MsgTripCircuitBreakerResponse {
    return MsgTripCircuitBreakerResponse.fromAmino(object.value);
  },

  toAminoMsg(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreakerResponse",
      value: MsgTripCircuitBreakerResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgTripCircuitBreakerResponseProtoMsg): MsgTripCircuitBreakerResponse {
    return MsgTripCircuitBreakerResponse.decode(message.value);
  },

  toProto(message: MsgTripCircuitBreakerResponse): Uint8Array {
    return MsgTripCircuitBreakerResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
      value: MsgTripCircuitBreakerResponse.encode(message).finish()
    };
  }

};

function createBaseMsgResetCircuitBreaker(): MsgResetCircuitBreaker {
  return {
    authority: "",
    msgTypeUrls: []
  };
}

export const MsgResetCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
  aminoType: "cosmos-sdk/MsgResetCircuitBreaker",

  encode(message: MsgResetCircuitBreaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    for (const v of message.msgTypeUrls) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetCircuitBreaker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreaker();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 3:
          message.msgTypeUrls.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgResetCircuitBreaker {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      msgTypeUrls: Array.isArray(object?.msgTypeUrls) ? object.msgTypeUrls.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgResetCircuitBreaker): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);

    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msgTypeUrls = [];
    }

    return obj;
  },

  fromPartial(object: Partial<MsgResetCircuitBreaker>): MsgResetCircuitBreaker {
    const message = createBaseMsgResetCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },

  fromSDK(object: MsgResetCircuitBreakerSDKType): MsgResetCircuitBreaker {
    return {
      authority: object?.authority,
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },

  toSDK(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerSDKType {
    const obj: any = {};
    obj.authority = message.authority;

    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }

    return obj;
  },

  fromAmino(object: MsgResetCircuitBreakerAmino): MsgResetCircuitBreaker {
    return {
      authority: object.authority,
      msgTypeUrls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e: any) => e) : []
    };
  },

  toAmino(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerAmino {
    const obj: any = {};
    obj.authority = message.authority;

    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = [];
    }

    return obj;
  },

  fromAminoMsg(object: MsgResetCircuitBreakerAminoMsg): MsgResetCircuitBreaker {
    return MsgResetCircuitBreaker.fromAmino(object.value);
  },

  toAminoMsg(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreaker",
      value: MsgResetCircuitBreaker.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgResetCircuitBreakerProtoMsg): MsgResetCircuitBreaker {
    return MsgResetCircuitBreaker.decode(message.value);
  },

  toProto(message: MsgResetCircuitBreaker): Uint8Array {
    return MsgResetCircuitBreaker.encode(message).finish();
  },

  toProtoMsg(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
      value: MsgResetCircuitBreaker.encode(message).finish()
    };
  }

};

function createBaseMsgResetCircuitBreakerResponse(): MsgResetCircuitBreakerResponse {
  return {};
}

export const MsgResetCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
  aminoType: "cosmos-sdk/MsgResetCircuitBreakerResponse",

  encode(_: MsgResetCircuitBreakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgResetCircuitBreakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreakerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgResetCircuitBreakerResponse {
    return {};
  },

  toJSON(_: MsgResetCircuitBreakerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<MsgResetCircuitBreakerResponse>): MsgResetCircuitBreakerResponse {
    const message = createBaseMsgResetCircuitBreakerResponse();
    return message;
  },

  fromSDK(_: MsgResetCircuitBreakerResponseSDKType): MsgResetCircuitBreakerResponse {
    return {};
  },

  toSDK(_: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgResetCircuitBreakerResponseAmino): MsgResetCircuitBreakerResponse {
    return {};
  },

  toAmino(_: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: MsgResetCircuitBreakerResponseAminoMsg): MsgResetCircuitBreakerResponse {
    return MsgResetCircuitBreakerResponse.fromAmino(object.value);
  },

  toAminoMsg(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreakerResponse",
      value: MsgResetCircuitBreakerResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: MsgResetCircuitBreakerResponseProtoMsg): MsgResetCircuitBreakerResponse {
    return MsgResetCircuitBreakerResponse.decode(message.value);
  },

  toProto(message: MsgResetCircuitBreakerResponse): Uint8Array {
    return MsgResetCircuitBreakerResponse.encode(message).finish();
  },

  toProtoMsg(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
      value: MsgResetCircuitBreakerResponse.encode(message).finish()
    };
  }

};