declare module 'express' {
  const express: any;
  export interface Request {}
  export interface Response {}
  export type Express = any;
  export function Router(): any;
  export default express;
}

declare module 'cors' {
  const cors: any;
  export default cors;
}

declare module 'morgan' {
  const morgan: any;
  export default morgan;
}

declare module 'cookie-parser' {
  const cookieParser: any;
  export default cookieParser;
}

declare module 'compression' {
  const compression: (options?: any) => any;
  export default compression;
}

declare module 'express-rate-limit' {
  const rateLimit: any;
  export default rateLimit;
}

declare module 'dotenv' {
  const dotenv: { config: () => void };
  export default dotenv;
}
