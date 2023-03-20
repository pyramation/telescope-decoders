import * as _135 from "./wasm/v1/authz";
import * as _136 from "./wasm/v1/genesis";
import * as _137 from "./wasm/v1/ibc";
import * as _138 from "./wasm/v1/proposal";
import * as _139 from "./wasm/v1/query";
import * as _140 from "./wasm/v1/tx";
import * as _141 from "./wasm/v1/types";
import * as _226 from "./wasm/v1/tx.amino";
import * as _227 from "./wasm/v1/tx.registry";
import * as _228 from "./wasm/v1/query.rpc.Query";
import * as _229 from "./wasm/v1/tx.rpc.msg";
import * as _232 from "./rpc.query";
import * as _233 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._226,
      ..._227,
      ..._228,
      ..._229
    };
  }
  export const ClientFactory = { ..._232,
    ..._233
  };
}