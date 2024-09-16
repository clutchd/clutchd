// A custom jest environment for jsdom that fixes TextEncoder, TextDecoder, Request, and Response.

"use strict";

const { TextEncoder, TextDecoder } = require("node:util");
const {
  default: $JSDOMEnvironment,
  TestEnvironment,
} = require("jest-environment-jsdom");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

class JSDOMEnvironment extends $JSDOMEnvironment {
  constructor(...args) {
    const { global } = super(...args);
    if (!global.TextEncoder) global.TextEncoder = TextEncoder;
    if (!global.TextDecoder) global.TextDecoder = TextDecoder;
    if (!global.Uint8Array) global.Uint8Array = Uint8Array;
    if (!global.Request) global.Request = Request;
    if (!global.Response) global.Response = Response;
  }
}

exports.default = JSDOMEnvironment;
exports.TestEnvironment =
  TestEnvironment === $JSDOMEnvironment ? JSDOMEnvironment : TestEnvironment;
