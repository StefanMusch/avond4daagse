import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '843286c150a6817593ff3cc2b766f320f7448adb', queries,  });
export default client;
  