// Service worker script

self.addEventListener('push', event => {
  console.log('Push event received:', event);
  const data = event.data.json();
  console.log('Push event data:', data);
  event.waitUntil(
    self.clients.matchAll().then(clients => {
      console.log('Number of clients:', clients.length);
      clients.forEach(client => {
        console.log('Sending message to client:', client);
        client.postMessage({ action: 'playAudio' }); // Send message to the client
      });
    })
  );
});
