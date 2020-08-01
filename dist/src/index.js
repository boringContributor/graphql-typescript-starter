"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../typeDefs/schema");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;
const resolvers = {
    Query: {
        numberSix: () => 4,
    },
};
const options = {
    port: process.env.NODE_ENV || 4000,
    playground: isDevelopment,
    introspective: isDevelopment,
    tracing: isDevelopment,
};
const server = new apollo_server_1.ApolloServer(Object.assign({ typeDefs: schema_1.typeDefs,
    resolvers }, options));
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map