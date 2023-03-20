import * as _1 from "./app/runtime/v1alpha1/module";
import * as _2 from "./app/v1alpha1/config";
import * as _3 from "./app/v1alpha1/module";
import * as _4 from "./app/v1alpha1/query";
import * as _5 from "./auth/module/v1/module";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./auth/v1beta1/tx";
import * as _10 from "./authz/module/v1/module";
import * as _11 from "./authz/v1beta1/authz";
import * as _12 from "./authz/v1beta1/event";
import * as _13 from "./authz/v1beta1/genesis";
import * as _14 from "./authz/v1beta1/query";
import * as _15 from "./authz/v1beta1/tx";
import * as _16 from "./bank/module/v1/module";
import * as _17 from "./bank/v1beta1/authz";
import * as _18 from "./bank/v1beta1/bank";
import * as _19 from "./bank/v1beta1/genesis";
import * as _20 from "./bank/v1beta1/query";
import * as _21 from "./bank/v1beta1/tx";
import * as _22 from "./base/abci/v1beta1/abci";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v1beta1/reflection";
import * as _26 from "./base/reflection/v2alpha1/reflection";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/tendermint/v1beta1/types";
import * as _29 from "./base/v1beta1/coin";
import * as _30 from "./circuit/v1/tx";
import * as _31 from "./consensus/module/v1/module";
import * as _32 from "./consensus/v1/query";
import * as _33 from "./consensus/v1/tx";
import * as _34 from "./crisis/module/v1/module";
import * as _35 from "./crisis/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/tx";
import * as _37 from "./crypto/ed25519/keys";
import * as _38 from "./crypto/hd/v1/hd";
import * as _39 from "./crypto/keyring/v1/record";
import * as _40 from "./crypto/multisig/keys";
import * as _41 from "./crypto/secp256k1/keys";
import * as _42 from "./crypto/secp256r1/keys";
import * as _43 from "./distribution/module/v1/module";
import * as _44 from "./distribution/v1beta1/distribution";
import * as _45 from "./distribution/v1beta1/genesis";
import * as _46 from "./distribution/v1beta1/query";
import * as _47 from "./distribution/v1beta1/tx";
import * as _48 from "./evidence/module/v1/module";
import * as _49 from "./evidence/v1beta1/evidence";
import * as _50 from "./evidence/v1beta1/genesis";
import * as _51 from "./evidence/v1beta1/query";
import * as _52 from "./evidence/v1beta1/tx";
import * as _53 from "./feegrant/module/v1/module";
import * as _54 from "./feegrant/v1beta1/feegrant";
import * as _55 from "./feegrant/v1beta1/genesis";
import * as _56 from "./feegrant/v1beta1/query";
import * as _57 from "./feegrant/v1beta1/tx";
import * as _58 from "./genutil/module/v1/module";
import * as _59 from "./genutil/v1beta1/genesis";
import * as _60 from "./gov/module/v1/module";
import * as _61 from "./gov/v1/genesis";
import * as _62 from "./gov/v1/gov";
import * as _63 from "./gov/v1/query";
import * as _64 from "./gov/v1/tx";
import * as _65 from "./gov/v1beta1/genesis";
import * as _66 from "./gov/v1beta1/gov";
import * as _67 from "./gov/v1beta1/query";
import * as _68 from "./gov/v1beta1/tx";
import * as _69 from "./group/module/v1/module";
import * as _70 from "./group/v1/events";
import * as _71 from "./group/v1/genesis";
import * as _72 from "./group/v1/query";
import * as _73 from "./group/v1/tx";
import * as _74 from "./group/v1/types";
import * as _75 from "./mint/module/v1/module";
import * as _76 from "./mint/v1beta1/genesis";
import * as _77 from "./mint/v1beta1/mint";
import * as _78 from "./mint/v1beta1/query";
import * as _79 from "./mint/v1beta1/tx";
import * as _80 from "./msg/textual/v1/textual";
import * as _81 from "./msg/v1/msg";
import * as _82 from "./nft/module/v1/module";
import * as _83 from "./nft/v1beta1/event";
import * as _84 from "./nft/v1beta1/genesis";
import * as _85 from "./nft/v1beta1/nft";
import * as _86 from "./nft/v1beta1/query";
import * as _87 from "./nft/v1beta1/tx";
import * as _88 from "./orm/module/v1alpha1/module";
import * as _89 from "./orm/query/v1alpha1/query";
import * as _90 from "./orm/v1/orm";
import * as _91 from "./orm/v1alpha1/schema";
import * as _92 from "./params/module/v1/module";
import * as _93 from "./params/v1beta1/params";
import * as _94 from "./params/v1beta1/query";
import * as _95 from "./query/v1/query";
import * as _96 from "./reflection/v1/reflection";
import * as _97 from "./slashing/module/v1/module";
import * as _98 from "./slashing/v1beta1/genesis";
import * as _99 from "./slashing/v1beta1/query";
import * as _100 from "./slashing/v1beta1/slashing";
import * as _101 from "./slashing/v1beta1/tx";
import * as _102 from "./staking/module/v1/module";
import * as _103 from "./staking/v1beta1/authz";
import * as _104 from "./staking/v1beta1/genesis";
import * as _105 from "./staking/v1beta1/query";
import * as _106 from "./staking/v1beta1/staking";
import * as _107 from "./staking/v1beta1/tx";
import * as _108 from "./store/internal/kv/v1beta1/kv";
import * as _109 from "./store/snapshots/v1/snapshot";
import * as _110 from "./store/streaming/abci/grpc";
import * as _111 from "./store/v1beta1/commit_info";
import * as _112 from "./store/v1beta1/listening";
import * as _113 from "./tx/config/v1/config";
import * as _114 from "./tx/signing/v1beta1/signing";
import * as _115 from "./tx/v1beta1/service";
import * as _116 from "./tx/v1beta1/tx";
import * as _117 from "./upgrade/module/v1/module";
import * as _118 from "./upgrade/v1beta1/query";
import * as _119 from "./upgrade/v1beta1/tx";
import * as _120 from "./upgrade/v1beta1/upgrade";
import * as _121 from "./vesting/module/v1/module";
import * as _122 from "./vesting/v1beta1/tx";
import * as _123 from "./vesting/v1beta1/vesting";
import * as _151 from "./auth/v1beta1/tx.amino";
import * as _152 from "./authz/v1beta1/tx.amino";
import * as _153 from "./bank/v1beta1/tx.amino";
import * as _154 from "./circuit/v1/tx.amino";
import * as _155 from "./consensus/v1/tx.amino";
import * as _156 from "./crisis/v1beta1/tx.amino";
import * as _157 from "./distribution/v1beta1/tx.amino";
import * as _158 from "./evidence/v1beta1/tx.amino";
import * as _159 from "./feegrant/v1beta1/tx.amino";
import * as _160 from "./gov/v1/tx.amino";
import * as _161 from "./gov/v1beta1/tx.amino";
import * as _162 from "./group/v1/tx.amino";
import * as _163 from "./mint/v1beta1/tx.amino";
import * as _164 from "./nft/v1beta1/tx.amino";
import * as _165 from "./slashing/v1beta1/tx.amino";
import * as _166 from "./staking/v1beta1/tx.amino";
import * as _167 from "./upgrade/v1beta1/tx.amino";
import * as _168 from "./vesting/v1beta1/tx.amino";
import * as _169 from "./auth/v1beta1/tx.registry";
import * as _170 from "./authz/v1beta1/tx.registry";
import * as _171 from "./bank/v1beta1/tx.registry";
import * as _172 from "./circuit/v1/tx.registry";
import * as _173 from "./consensus/v1/tx.registry";
import * as _174 from "./crisis/v1beta1/tx.registry";
import * as _175 from "./distribution/v1beta1/tx.registry";
import * as _176 from "./evidence/v1beta1/tx.registry";
import * as _177 from "./feegrant/v1beta1/tx.registry";
import * as _178 from "./gov/v1/tx.registry";
import * as _179 from "./gov/v1beta1/tx.registry";
import * as _180 from "./group/v1/tx.registry";
import * as _181 from "./mint/v1beta1/tx.registry";
import * as _182 from "./nft/v1beta1/tx.registry";
import * as _183 from "./slashing/v1beta1/tx.registry";
import * as _184 from "./staking/v1beta1/tx.registry";
import * as _185 from "./upgrade/v1beta1/tx.registry";
import * as _186 from "./vesting/v1beta1/tx.registry";
import * as _187 from "./app/v1alpha1/query.rpc.Query";
import * as _188 from "./auth/v1beta1/query.rpc.Query";
import * as _189 from "./authz/v1beta1/query.rpc.Query";
import * as _190 from "./bank/v1beta1/query.rpc.Query";
import * as _191 from "./base/node/v1beta1/query.rpc.Service";
import * as _192 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _193 from "./consensus/v1/query.rpc.Query";
import * as _194 from "./distribution/v1beta1/query.rpc.Query";
import * as _195 from "./evidence/v1beta1/query.rpc.Query";
import * as _196 from "./feegrant/v1beta1/query.rpc.Query";
import * as _197 from "./gov/v1/query.rpc.Query";
import * as _198 from "./gov/v1beta1/query.rpc.Query";
import * as _199 from "./group/v1/query.rpc.Query";
import * as _200 from "./mint/v1beta1/query.rpc.Query";
import * as _201 from "./nft/v1beta1/query.rpc.Query";
import * as _202 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _203 from "./params/v1beta1/query.rpc.Query";
import * as _204 from "./slashing/v1beta1/query.rpc.Query";
import * as _205 from "./staking/v1beta1/query.rpc.Query";
import * as _206 from "./tx/v1beta1/service.rpc.Service";
import * as _207 from "./upgrade/v1beta1/query.rpc.Query";
import * as _208 from "./auth/v1beta1/tx.rpc.msg";
import * as _209 from "./authz/v1beta1/tx.rpc.msg";
import * as _210 from "./bank/v1beta1/tx.rpc.msg";
import * as _211 from "./circuit/v1/tx.rpc.msg";
import * as _212 from "./consensus/v1/tx.rpc.msg";
import * as _213 from "./crisis/v1beta1/tx.rpc.msg";
import * as _214 from "./distribution/v1beta1/tx.rpc.msg";
import * as _215 from "./evidence/v1beta1/tx.rpc.msg";
import * as _216 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _217 from "./gov/v1/tx.rpc.msg";
import * as _218 from "./gov/v1beta1/tx.rpc.msg";
import * as _219 from "./group/v1/tx.rpc.msg";
import * as _220 from "./mint/v1beta1/tx.rpc.msg";
import * as _221 from "./nft/v1beta1/tx.rpc.msg";
import * as _222 from "./slashing/v1beta1/tx.rpc.msg";
import * as _223 from "./staking/v1beta1/tx.rpc.msg";
import * as _224 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _225 from "./vesting/v1beta1/tx.rpc.msg";
import * as _230 from "./rpc.query";
import * as _231 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = { ..._1
      };
    }
    export const v1alpha1 = { ..._2,
      ..._3,
      ..._4,
      ..._187
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = { ..._5
      };
    }
    export const v1beta1 = { ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._151,
      ..._169,
      ..._188,
      ..._208
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = { ..._10
      };
    }
    export const v1beta1 = { ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._152,
      ..._170,
      ..._189,
      ..._209
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = { ..._16
      };
    }
    export const v1beta1 = { ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._153,
      ..._171,
      ..._190,
      ..._210
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._22
      };
    }
    export namespace node {
      export const v1beta1 = { ..._23,
        ..._191
      };
    }
    export namespace query {
      export const v1beta1 = { ..._24
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._25
      };
      export const v2alpha1 = { ..._26
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._27,
        ..._28,
        ..._192
      };
    }
    export const v1beta1 = { ..._29
    };
  }
  export namespace circuit {
    export const v1 = { ..._30,
      ..._154,
      ..._172,
      ..._211
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = { ..._31
      };
    }
    export const v1 = { ..._32,
      ..._33,
      ..._155,
      ..._173,
      ..._193,
      ..._212
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = { ..._34
      };
    }
    export const v1beta1 = { ..._35,
      ..._36,
      ..._156,
      ..._174,
      ..._213
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._37
    };
    export namespace hd {
      export const v1 = { ..._38
      };
    }
    export namespace keyring {
      export const v1 = { ..._39
      };
    }
    export const multisig = { ..._40
    };
    export const secp256k1 = { ..._41
    };
    export const secp256r1 = { ..._42
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = { ..._43
      };
    }
    export const v1beta1 = { ..._44,
      ..._45,
      ..._46,
      ..._47,
      ..._157,
      ..._175,
      ..._194,
      ..._214
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = { ..._48
      };
    }
    export const v1beta1 = { ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._158,
      ..._176,
      ..._195,
      ..._215
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = { ..._53
      };
    }
    export const v1beta1 = { ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._159,
      ..._177,
      ..._196,
      ..._216
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = { ..._58
      };
    }
    export const v1beta1 = { ..._59
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = { ..._60
      };
    }
    export const v1 = { ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._160,
      ..._178,
      ..._197,
      ..._217
    };
    export const v1beta1 = { ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._161,
      ..._179,
      ..._198,
      ..._218
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = { ..._69
      };
    }
    export const v1 = { ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._162,
      ..._180,
      ..._199,
      ..._219
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = { ..._75
      };
    }
    export const v1beta1 = { ..._76,
      ..._77,
      ..._78,
      ..._79,
      ..._163,
      ..._181,
      ..._200,
      ..._220
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = { ..._80
      };
    }
    export const v1 = { ..._81
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = { ..._82
      };
    }
    export const v1beta1 = { ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._164,
      ..._182,
      ..._201,
      ..._221
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = { ..._88
      };
    }
    export namespace query {
      export const v1alpha1 = { ..._89,
        ..._202
      };
    }
    export const v1 = { ..._90
    };
    export const v1alpha1 = { ..._91
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = { ..._92
      };
    }
    export const v1beta1 = { ..._93,
      ..._94,
      ..._203
    };
  }
  export namespace query {
    export const v1 = { ..._95
    };
  }
  export namespace reflection {
    export const v1 = { ..._96
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = { ..._97
      };
    }
    export const v1beta1 = { ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._165,
      ..._183,
      ..._204,
      ..._222
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = { ..._102
      };
    }
    export const v1beta1 = { ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._107,
      ..._166,
      ..._184,
      ..._205,
      ..._223
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = { ..._108
        };
      }
    }
    export namespace snapshots {
      export const v1 = { ..._109
      };
    }
    export namespace streaming {
      export const abci = { ..._110
      };
    }
    export const v1beta1 = { ..._111,
      ..._112
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = { ..._113
      };
    }
    export namespace signing {
      export const v1beta1 = { ..._114
      };
    }
    export const v1beta1 = { ..._115,
      ..._116,
      ..._206
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = { ..._117
      };
    }
    export const v1beta1 = { ..._118,
      ..._119,
      ..._120,
      ..._167,
      ..._185,
      ..._207,
      ..._224
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = { ..._121
      };
    }
    export const v1beta1 = { ..._122,
      ..._123,
      ..._168,
      ..._186,
      ..._225
    };
  }
  export const ClientFactory = { ..._230,
    ..._231
  };
}