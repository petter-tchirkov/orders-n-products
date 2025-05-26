import type { Peer } from 'crossws'

const connectedPeers: Peer[] = []

function sendConnectedPeersQuantity(peers: Peer[]) {
  peers.map(p => p.send(peers.length))
}

export default defineWebSocketHandler({
  open(peer) {
    connectedPeers.push(peer)
    sendConnectedPeersQuantity(connectedPeers)
  },
  close(peer) {
    connectedPeers.splice(connectedPeers.indexOf(peer), 1)
    sendConnectedPeersQuantity(connectedPeers)
  },
})
