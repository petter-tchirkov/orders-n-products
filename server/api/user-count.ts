
import type { Peer } from 'crossws'

const connectedPeers: Peer[] = []

function sendConnectedPeersQuantity(peers: Peer[]) {
  peers.forEach((p) => p.send(peers.length))
}

export default defineWebSocketHandler({
  open(peer) {
    console.log('opened WS', peer)
    connectedPeers.push(peer)
    sendConnectedPeersQuantity(connectedPeers)
  },
  close(peer) {
    console.log('closed WS', peer)
    connectedPeers.splice(connectedPeers.indexOf(peer), 1)
    sendConnectedPeersQuantity(connectedPeers)
  },
  error(peer, error) {
    console.log('error on WS', peer, error)
  },
})
