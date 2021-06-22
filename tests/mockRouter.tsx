import { NextRouter } from "next/router";

interface IMockRouter {
  basePath?: string;
  pathname?: string;
  route?: string;
  asPath?: string;
}

const defaultProps = {
  basePath: "/",
  pathname: "/",
  route: "/",
  asPath: "/",
};

export function MockRouter(props: IMockRouter = defaultProps): NextRouter {
  return {
    basePath: props.basePath,
    pathname: props.pathname,
    route: props.route,
    asPath: props.asPath,
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isReady: true,
    isPreview: true,
    isLocaleDomain: true,
  };
}
