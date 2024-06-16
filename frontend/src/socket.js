import io from "socket.io-client";

const URL = `ws://backend:9000`;
export const socket = io(URL, {
  autoConnect: false,
  transports: ["websocket"],
});
