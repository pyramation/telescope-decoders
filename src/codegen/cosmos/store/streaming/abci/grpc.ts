import { RequestBeginBlock, RequestBeginBlockAmino, RequestBeginBlockSDKType, ResponseBeginBlock, ResponseBeginBlockAmino, ResponseBeginBlockSDKType, RequestEndBlock, RequestEndBlockAmino, RequestEndBlockSDKType, ResponseEndBlock, ResponseEndBlockAmino, ResponseEndBlockSDKType, RequestDeliverTx, RequestDeliverTxAmino, RequestDeliverTxSDKType, ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType, ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import { StoreKVPair, StoreKVPairAmino, StoreKVPairSDKType } from "../../v1beta1/listening";
import * as _m0 from "protobufjs/minimal";
import { isSet, Long } from "../../../../helpers";
/** ListenBeginBlockRequest is the request type for the ListenBeginBlock RPC method */

export interface ListenBeginBlockRequest {
  req?: RequestBeginBlock;
  res?: ResponseBeginBlock;
}
export interface ListenBeginBlockRequestProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenBeginBlockRequest";
  value: Uint8Array;
}
/** ListenBeginBlockRequest is the request type for the ListenBeginBlock RPC method */

export interface ListenBeginBlockRequestAmino {
  req?: RequestBeginBlockAmino;
  res?: ResponseBeginBlockAmino;
}
export interface ListenBeginBlockRequestAminoMsg {
  type: "cosmos-sdk/ListenBeginBlockRequest";
  value: ListenBeginBlockRequestAmino;
}
/** ListenBeginBlockRequest is the request type for the ListenBeginBlock RPC method */

export interface ListenBeginBlockRequestSDKType {
  req?: RequestBeginBlockSDKType;
  res?: ResponseBeginBlockSDKType;
}
/** ListenBeginBlockResponse is the response type for the ListenBeginBlock RPC method */

export interface ListenBeginBlockResponse {}
export interface ListenBeginBlockResponseProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenBeginBlockResponse";
  value: Uint8Array;
}
/** ListenBeginBlockResponse is the response type for the ListenBeginBlock RPC method */

export interface ListenBeginBlockResponseAmino {}
export interface ListenBeginBlockResponseAminoMsg {
  type: "cosmos-sdk/ListenBeginBlockResponse";
  value: ListenBeginBlockResponseAmino;
}
/** ListenBeginBlockResponse is the response type for the ListenBeginBlock RPC method */

export interface ListenBeginBlockResponseSDKType {}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */

export interface ListenEndBlockRequest {
  req?: RequestEndBlock;
  res?: ResponseEndBlock;
}
export interface ListenEndBlockRequestProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenEndBlockRequest";
  value: Uint8Array;
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */

export interface ListenEndBlockRequestAmino {
  req?: RequestEndBlockAmino;
  res?: ResponseEndBlockAmino;
}
export interface ListenEndBlockRequestAminoMsg {
  type: "cosmos-sdk/ListenEndBlockRequest";
  value: ListenEndBlockRequestAmino;
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */

export interface ListenEndBlockRequestSDKType {
  req?: RequestEndBlockSDKType;
  res?: ResponseEndBlockSDKType;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */

export interface ListenEndBlockResponse {}
export interface ListenEndBlockResponseProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenEndBlockResponse";
  value: Uint8Array;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */

export interface ListenEndBlockResponseAmino {}
export interface ListenEndBlockResponseAminoMsg {
  type: "cosmos-sdk/ListenEndBlockResponse";
  value: ListenEndBlockResponseAmino;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */

export interface ListenEndBlockResponseSDKType {}
/** ListenDeliverTxRequest is the request type for the ListenDeliverTx RPC method */

export interface ListenDeliverTxRequest {
  /** explicitly pass in block height as neither RequestDeliverTx or ResponseDeliverTx contain it */
  blockHeight: Long;
  req?: RequestDeliverTx;
  res?: ResponseDeliverTx;
}
export interface ListenDeliverTxRequestProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenDeliverTxRequest";
  value: Uint8Array;
}
/** ListenDeliverTxRequest is the request type for the ListenDeliverTx RPC method */

export interface ListenDeliverTxRequestAmino {
  /** explicitly pass in block height as neither RequestDeliverTx or ResponseDeliverTx contain it */
  block_height: string;
  req?: RequestDeliverTxAmino;
  res?: ResponseDeliverTxAmino;
}
export interface ListenDeliverTxRequestAminoMsg {
  type: "cosmos-sdk/ListenDeliverTxRequest";
  value: ListenDeliverTxRequestAmino;
}
/** ListenDeliverTxRequest is the request type for the ListenDeliverTx RPC method */

export interface ListenDeliverTxRequestSDKType {
  block_height: Long;
  req?: RequestDeliverTxSDKType;
  res?: ResponseDeliverTxSDKType;
}
/** ListenDeliverTxResponse is the response type for the ListenDeliverTx RPC method */

export interface ListenDeliverTxResponse {}
export interface ListenDeliverTxResponseProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenDeliverTxResponse";
  value: Uint8Array;
}
/** ListenDeliverTxResponse is the response type for the ListenDeliverTx RPC method */

export interface ListenDeliverTxResponseAmino {}
export interface ListenDeliverTxResponseAminoMsg {
  type: "cosmos-sdk/ListenDeliverTxResponse";
  value: ListenDeliverTxResponseAmino;
}
/** ListenDeliverTxResponse is the response type for the ListenDeliverTx RPC method */

export interface ListenDeliverTxResponseSDKType {}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */

export interface ListenCommitRequest {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  blockHeight: Long;
  res?: ResponseCommit;
  changeSet: StoreKVPair[];
}
export interface ListenCommitRequestProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest";
  value: Uint8Array;
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */

export interface ListenCommitRequestAmino {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  block_height: string;
  res?: ResponseCommitAmino;
  change_set: StoreKVPairAmino[];
}
export interface ListenCommitRequestAminoMsg {
  type: "cosmos-sdk/ListenCommitRequest";
  value: ListenCommitRequestAmino;
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */

export interface ListenCommitRequestSDKType {
  block_height: Long;
  res?: ResponseCommitSDKType;
  change_set: StoreKVPairSDKType[];
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */

export interface ListenCommitResponse {}
export interface ListenCommitResponseProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse";
  value: Uint8Array;
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */

export interface ListenCommitResponseAmino {}
export interface ListenCommitResponseAminoMsg {
  type: "cosmos-sdk/ListenCommitResponse";
  value: ListenCommitResponseAmino;
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */

export interface ListenCommitResponseSDKType {}

function createBaseListenBeginBlockRequest(): ListenBeginBlockRequest {
  return {
    req: undefined,
    res: undefined
  };
}

export const ListenBeginBlockRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenBeginBlockRequest",
  aminoType: "cosmos-sdk/ListenBeginBlockRequest",

  encode(message: ListenBeginBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.req !== undefined) {
      RequestBeginBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }

    if (message.res !== undefined) {
      ResponseBeginBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenBeginBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenBeginBlockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.req = RequestBeginBlock.decode(reader, reader.uint32());
          break;

        case 2:
          message.res = ResponseBeginBlock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenBeginBlockRequest {
    return {
      req: isSet(object.req) ? RequestBeginBlock.fromJSON(object.req) : undefined,
      res: isSet(object.res) ? ResponseBeginBlock.fromJSON(object.res) : undefined
    };
  },

  toJSON(message: ListenBeginBlockRequest): unknown {
    const obj: any = {};
    message.req !== undefined && (obj.req = message.req ? RequestBeginBlock.toJSON(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseBeginBlock.toJSON(message.res) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ListenBeginBlockRequest>): ListenBeginBlockRequest {
    const message = createBaseListenBeginBlockRequest();
    message.req = object.req !== undefined && object.req !== null ? RequestBeginBlock.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseBeginBlock.fromPartial(object.res) : undefined;
    return message;
  },

  fromSDK(object: ListenBeginBlockRequestSDKType): ListenBeginBlockRequest {
    return {
      req: object.req ? RequestBeginBlock.fromSDK(object.req) : undefined,
      res: object.res ? ResponseBeginBlock.fromSDK(object.res) : undefined
    };
  },

  toSDK(message: ListenBeginBlockRequest): ListenBeginBlockRequestSDKType {
    const obj: any = {};
    message.req !== undefined && (obj.req = message.req ? RequestBeginBlock.toSDK(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseBeginBlock.toSDK(message.res) : undefined);
    return obj;
  },

  fromAmino(object: ListenBeginBlockRequestAmino): ListenBeginBlockRequest {
    return {
      req: object?.req ? RequestBeginBlock.fromAmino(object.req) : undefined,
      res: object?.res ? ResponseBeginBlock.fromAmino(object.res) : undefined
    };
  },

  toAmino(message: ListenBeginBlockRequest): ListenBeginBlockRequestAmino {
    const obj: any = {};
    obj.req = message.req ? RequestBeginBlock.toAmino(message.req) : undefined;
    obj.res = message.res ? ResponseBeginBlock.toAmino(message.res) : undefined;
    return obj;
  },

  fromAminoMsg(object: ListenBeginBlockRequestAminoMsg): ListenBeginBlockRequest {
    return ListenBeginBlockRequest.fromAmino(object.value);
  },

  toAminoMsg(message: ListenBeginBlockRequest): ListenBeginBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenBeginBlockRequest",
      value: ListenBeginBlockRequest.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenBeginBlockRequestProtoMsg): ListenBeginBlockRequest {
    return ListenBeginBlockRequest.decode(message.value);
  },

  toProto(message: ListenBeginBlockRequest): Uint8Array {
    return ListenBeginBlockRequest.encode(message).finish();
  },

  toProtoMsg(message: ListenBeginBlockRequest): ListenBeginBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenBeginBlockRequest",
      value: ListenBeginBlockRequest.encode(message).finish()
    };
  }

};

function createBaseListenBeginBlockResponse(): ListenBeginBlockResponse {
  return {};
}

export const ListenBeginBlockResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenBeginBlockResponse",
  aminoType: "cosmos-sdk/ListenBeginBlockResponse",

  encode(_: ListenBeginBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenBeginBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenBeginBlockResponse();

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

  fromJSON(_: any): ListenBeginBlockResponse {
    return {};
  },

  toJSON(_: ListenBeginBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenBeginBlockResponse>): ListenBeginBlockResponse {
    const message = createBaseListenBeginBlockResponse();
    return message;
  },

  fromSDK(_: ListenBeginBlockResponseSDKType): ListenBeginBlockResponse {
    return {};
  },

  toSDK(_: ListenBeginBlockResponse): ListenBeginBlockResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: ListenBeginBlockResponseAmino): ListenBeginBlockResponse {
    return {};
  },

  toAmino(_: ListenBeginBlockResponse): ListenBeginBlockResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: ListenBeginBlockResponseAminoMsg): ListenBeginBlockResponse {
    return ListenBeginBlockResponse.fromAmino(object.value);
  },

  toAminoMsg(message: ListenBeginBlockResponse): ListenBeginBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenBeginBlockResponse",
      value: ListenBeginBlockResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenBeginBlockResponseProtoMsg): ListenBeginBlockResponse {
    return ListenBeginBlockResponse.decode(message.value);
  },

  toProto(message: ListenBeginBlockResponse): Uint8Array {
    return ListenBeginBlockResponse.encode(message).finish();
  },

  toProtoMsg(message: ListenBeginBlockResponse): ListenBeginBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenBeginBlockResponse",
      value: ListenBeginBlockResponse.encode(message).finish()
    };
  }

};

function createBaseListenEndBlockRequest(): ListenEndBlockRequest {
  return {
    req: undefined,
    res: undefined
  };
}

export const ListenEndBlockRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenEndBlockRequest",
  aminoType: "cosmos-sdk/ListenEndBlockRequest",

  encode(message: ListenEndBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.req !== undefined) {
      RequestEndBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }

    if (message.res !== undefined) {
      ResponseEndBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenEndBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenEndBlockRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.req = RequestEndBlock.decode(reader, reader.uint32());
          break;

        case 2:
          message.res = ResponseEndBlock.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenEndBlockRequest {
    return {
      req: isSet(object.req) ? RequestEndBlock.fromJSON(object.req) : undefined,
      res: isSet(object.res) ? ResponseEndBlock.fromJSON(object.res) : undefined
    };
  },

  toJSON(message: ListenEndBlockRequest): unknown {
    const obj: any = {};
    message.req !== undefined && (obj.req = message.req ? RequestEndBlock.toJSON(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseEndBlock.toJSON(message.res) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ListenEndBlockRequest>): ListenEndBlockRequest {
    const message = createBaseListenEndBlockRequest();
    message.req = object.req !== undefined && object.req !== null ? RequestEndBlock.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseEndBlock.fromPartial(object.res) : undefined;
    return message;
  },

  fromSDK(object: ListenEndBlockRequestSDKType): ListenEndBlockRequest {
    return {
      req: object.req ? RequestEndBlock.fromSDK(object.req) : undefined,
      res: object.res ? ResponseEndBlock.fromSDK(object.res) : undefined
    };
  },

  toSDK(message: ListenEndBlockRequest): ListenEndBlockRequestSDKType {
    const obj: any = {};
    message.req !== undefined && (obj.req = message.req ? RequestEndBlock.toSDK(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseEndBlock.toSDK(message.res) : undefined);
    return obj;
  },

  fromAmino(object: ListenEndBlockRequestAmino): ListenEndBlockRequest {
    return {
      req: object?.req ? RequestEndBlock.fromAmino(object.req) : undefined,
      res: object?.res ? ResponseEndBlock.fromAmino(object.res) : undefined
    };
  },

  toAmino(message: ListenEndBlockRequest): ListenEndBlockRequestAmino {
    const obj: any = {};
    obj.req = message.req ? RequestEndBlock.toAmino(message.req) : undefined;
    obj.res = message.res ? ResponseEndBlock.toAmino(message.res) : undefined;
    return obj;
  },

  fromAminoMsg(object: ListenEndBlockRequestAminoMsg): ListenEndBlockRequest {
    return ListenEndBlockRequest.fromAmino(object.value);
  },

  toAminoMsg(message: ListenEndBlockRequest): ListenEndBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenEndBlockRequest",
      value: ListenEndBlockRequest.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenEndBlockRequestProtoMsg): ListenEndBlockRequest {
    return ListenEndBlockRequest.decode(message.value);
  },

  toProto(message: ListenEndBlockRequest): Uint8Array {
    return ListenEndBlockRequest.encode(message).finish();
  },

  toProtoMsg(message: ListenEndBlockRequest): ListenEndBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenEndBlockRequest",
      value: ListenEndBlockRequest.encode(message).finish()
    };
  }

};

function createBaseListenEndBlockResponse(): ListenEndBlockResponse {
  return {};
}

export const ListenEndBlockResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenEndBlockResponse",
  aminoType: "cosmos-sdk/ListenEndBlockResponse",

  encode(_: ListenEndBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenEndBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenEndBlockResponse();

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

  fromJSON(_: any): ListenEndBlockResponse {
    return {};
  },

  toJSON(_: ListenEndBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenEndBlockResponse>): ListenEndBlockResponse {
    const message = createBaseListenEndBlockResponse();
    return message;
  },

  fromSDK(_: ListenEndBlockResponseSDKType): ListenEndBlockResponse {
    return {};
  },

  toSDK(_: ListenEndBlockResponse): ListenEndBlockResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: ListenEndBlockResponseAmino): ListenEndBlockResponse {
    return {};
  },

  toAmino(_: ListenEndBlockResponse): ListenEndBlockResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: ListenEndBlockResponseAminoMsg): ListenEndBlockResponse {
    return ListenEndBlockResponse.fromAmino(object.value);
  },

  toAminoMsg(message: ListenEndBlockResponse): ListenEndBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenEndBlockResponse",
      value: ListenEndBlockResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenEndBlockResponseProtoMsg): ListenEndBlockResponse {
    return ListenEndBlockResponse.decode(message.value);
  },

  toProto(message: ListenEndBlockResponse): Uint8Array {
    return ListenEndBlockResponse.encode(message).finish();
  },

  toProtoMsg(message: ListenEndBlockResponse): ListenEndBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenEndBlockResponse",
      value: ListenEndBlockResponse.encode(message).finish()
    };
  }

};

function createBaseListenDeliverTxRequest(): ListenDeliverTxRequest {
  return {
    blockHeight: Long.ZERO,
    req: undefined,
    res: undefined
  };
}

export const ListenDeliverTxRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenDeliverTxRequest",
  aminoType: "cosmos-sdk/ListenDeliverTxRequest",

  encode(message: ListenDeliverTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    if (message.req !== undefined) {
      RequestDeliverTx.encode(message.req, writer.uint32(18).fork()).ldelim();
    }

    if (message.res !== undefined) {
      ResponseDeliverTx.encode(message.res, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenDeliverTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 2:
          message.req = RequestDeliverTx.decode(reader, reader.uint32());
          break;

        case 3:
          message.res = ResponseDeliverTx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenDeliverTxRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      req: isSet(object.req) ? RequestDeliverTx.fromJSON(object.req) : undefined,
      res: isSet(object.res) ? ResponseDeliverTx.fromJSON(object.res) : undefined
    };
  },

  toJSON(message: ListenDeliverTxRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.req !== undefined && (obj.req = message.req ? RequestDeliverTx.toJSON(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseDeliverTx.toJSON(message.res) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ListenDeliverTxRequest>): ListenDeliverTxRequest {
    const message = createBaseListenDeliverTxRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.req = object.req !== undefined && object.req !== null ? RequestDeliverTx.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseDeliverTx.fromPartial(object.res) : undefined;
    return message;
  },

  fromSDK(object: ListenDeliverTxRequestSDKType): ListenDeliverTxRequest {
    return {
      blockHeight: object?.block_height,
      req: object.req ? RequestDeliverTx.fromSDK(object.req) : undefined,
      res: object.res ? ResponseDeliverTx.fromSDK(object.res) : undefined
    };
  },

  toSDK(message: ListenDeliverTxRequest): ListenDeliverTxRequestSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    message.req !== undefined && (obj.req = message.req ? RequestDeliverTx.toSDK(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseDeliverTx.toSDK(message.res) : undefined);
    return obj;
  },

  fromAmino(object: ListenDeliverTxRequestAmino): ListenDeliverTxRequest {
    return {
      blockHeight: Long.fromString(object.block_height),
      req: object?.req ? RequestDeliverTx.fromAmino(object.req) : undefined,
      res: object?.res ? ResponseDeliverTx.fromAmino(object.res) : undefined
    };
  },

  toAmino(message: ListenDeliverTxRequest): ListenDeliverTxRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.req = message.req ? RequestDeliverTx.toAmino(message.req) : undefined;
    obj.res = message.res ? ResponseDeliverTx.toAmino(message.res) : undefined;
    return obj;
  },

  fromAminoMsg(object: ListenDeliverTxRequestAminoMsg): ListenDeliverTxRequest {
    return ListenDeliverTxRequest.fromAmino(object.value);
  },

  toAminoMsg(message: ListenDeliverTxRequest): ListenDeliverTxRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenDeliverTxRequest",
      value: ListenDeliverTxRequest.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenDeliverTxRequestProtoMsg): ListenDeliverTxRequest {
    return ListenDeliverTxRequest.decode(message.value);
  },

  toProto(message: ListenDeliverTxRequest): Uint8Array {
    return ListenDeliverTxRequest.encode(message).finish();
  },

  toProtoMsg(message: ListenDeliverTxRequest): ListenDeliverTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenDeliverTxRequest",
      value: ListenDeliverTxRequest.encode(message).finish()
    };
  }

};

function createBaseListenDeliverTxResponse(): ListenDeliverTxResponse {
  return {};
}

export const ListenDeliverTxResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenDeliverTxResponse",
  aminoType: "cosmos-sdk/ListenDeliverTxResponse",

  encode(_: ListenDeliverTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenDeliverTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverTxResponse();

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

  fromJSON(_: any): ListenDeliverTxResponse {
    return {};
  },

  toJSON(_: ListenDeliverTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenDeliverTxResponse>): ListenDeliverTxResponse {
    const message = createBaseListenDeliverTxResponse();
    return message;
  },

  fromSDK(_: ListenDeliverTxResponseSDKType): ListenDeliverTxResponse {
    return {};
  },

  toSDK(_: ListenDeliverTxResponse): ListenDeliverTxResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: ListenDeliverTxResponseAmino): ListenDeliverTxResponse {
    return {};
  },

  toAmino(_: ListenDeliverTxResponse): ListenDeliverTxResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: ListenDeliverTxResponseAminoMsg): ListenDeliverTxResponse {
    return ListenDeliverTxResponse.fromAmino(object.value);
  },

  toAminoMsg(message: ListenDeliverTxResponse): ListenDeliverTxResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenDeliverTxResponse",
      value: ListenDeliverTxResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenDeliverTxResponseProtoMsg): ListenDeliverTxResponse {
    return ListenDeliverTxResponse.decode(message.value);
  },

  toProto(message: ListenDeliverTxResponse): Uint8Array {
    return ListenDeliverTxResponse.encode(message).finish();
  },

  toProtoMsg(message: ListenDeliverTxResponse): ListenDeliverTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenDeliverTxResponse",
      value: ListenDeliverTxResponse.encode(message).finish()
    };
  }

};

function createBaseListenCommitRequest(): ListenCommitRequest {
  return {
    blockHeight: Long.ZERO,
    res: undefined,
    changeSet: []
  };
}

export const ListenCommitRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
  aminoType: "cosmos-sdk/ListenCommitRequest",

  encode(message: ListenCommitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).int64(message.blockHeight);
    }

    if (message.res !== undefined) {
      ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.changeSet) {
      StoreKVPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 2:
          message.res = ResponseCommit.decode(reader, reader.uint32());
          break;

        case 3:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListenCommitRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? Long.fromValue(object.blockHeight) : Long.ZERO,
      res: isSet(object.res) ? ResponseCommit.fromJSON(object.res) : undefined,
      changeSet: Array.isArray(object?.changeSet) ? object.changeSet.map((e: any) => StoreKVPair.fromJSON(e)) : []
    };
  },

  toJSON(message: ListenCommitRequest): unknown {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());
    message.res !== undefined && (obj.res = message.res ? ResponseCommit.toJSON(message.res) : undefined);

    if (message.changeSet) {
      obj.changeSet = message.changeSet.map(e => e ? StoreKVPair.toJSON(e) : undefined);
    } else {
      obj.changeSet = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ListenCommitRequest>): ListenCommitRequest {
    const message = createBaseListenCommitRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.res = object.res !== undefined && object.res !== null ? ResponseCommit.fromPartial(object.res) : undefined;
    message.changeSet = object.changeSet?.map(e => StoreKVPair.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ListenCommitRequestSDKType): ListenCommitRequest {
    return {
      blockHeight: object?.block_height,
      res: object.res ? ResponseCommit.fromSDK(object.res) : undefined,
      changeSet: Array.isArray(object?.change_set) ? object.change_set.map((e: any) => StoreKVPair.fromSDK(e)) : []
    };
  },

  toSDK(message: ListenCommitRequest): ListenCommitRequestSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    message.res !== undefined && (obj.res = message.res ? ResponseCommit.toSDK(message.res) : undefined);

    if (message.changeSet) {
      obj.change_set = message.changeSet.map(e => e ? StoreKVPair.toSDK(e) : undefined);
    } else {
      obj.change_set = [];
    }

    return obj;
  },

  fromAmino(object: ListenCommitRequestAmino): ListenCommitRequest {
    return {
      blockHeight: Long.fromString(object.block_height),
      res: object?.res ? ResponseCommit.fromAmino(object.res) : undefined,
      changeSet: Array.isArray(object?.change_set) ? object.change_set.map((e: any) => StoreKVPair.fromAmino(e)) : []
    };
  },

  toAmino(message: ListenCommitRequest): ListenCommitRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.res = message.res ? ResponseCommit.toAmino(message.res) : undefined;

    if (message.changeSet) {
      obj.change_set = message.changeSet.map(e => e ? StoreKVPair.toAmino(e) : undefined);
    } else {
      obj.change_set = [];
    }

    return obj;
  },

  fromAminoMsg(object: ListenCommitRequestAminoMsg): ListenCommitRequest {
    return ListenCommitRequest.fromAmino(object.value);
  },

  toAminoMsg(message: ListenCommitRequest): ListenCommitRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitRequest",
      value: ListenCommitRequest.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenCommitRequestProtoMsg): ListenCommitRequest {
    return ListenCommitRequest.decode(message.value);
  },

  toProto(message: ListenCommitRequest): Uint8Array {
    return ListenCommitRequest.encode(message).finish();
  },

  toProtoMsg(message: ListenCommitRequest): ListenCommitRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
      value: ListenCommitRequest.encode(message).finish()
    };
  }

};

function createBaseListenCommitResponse(): ListenCommitResponse {
  return {};
}

export const ListenCommitResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
  aminoType: "cosmos-sdk/ListenCommitResponse",

  encode(_: ListenCommitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitResponse();

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

  fromJSON(_: any): ListenCommitResponse {
    return {};
  },

  toJSON(_: ListenCommitResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<ListenCommitResponse>): ListenCommitResponse {
    const message = createBaseListenCommitResponse();
    return message;
  },

  fromSDK(_: ListenCommitResponseSDKType): ListenCommitResponse {
    return {};
  },

  toSDK(_: ListenCommitResponse): ListenCommitResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: ListenCommitResponseAmino): ListenCommitResponse {
    return {};
  },

  toAmino(_: ListenCommitResponse): ListenCommitResponseAmino {
    const obj: any = {};
    return obj;
  },

  fromAminoMsg(object: ListenCommitResponseAminoMsg): ListenCommitResponse {
    return ListenCommitResponse.fromAmino(object.value);
  },

  toAminoMsg(message: ListenCommitResponse): ListenCommitResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitResponse",
      value: ListenCommitResponse.toAmino(message)
    };
  },

  fromProtoMsg(message: ListenCommitResponseProtoMsg): ListenCommitResponse {
    return ListenCommitResponse.decode(message.value);
  },

  toProto(message: ListenCommitResponse): Uint8Array {
    return ListenCommitResponse.encode(message).finish();
  },

  toProtoMsg(message: ListenCommitResponse): ListenCommitResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
      value: ListenCommitResponse.encode(message).finish()
    };
  }

};