self.addEventListener('push', function(event) {
  let note = event.data.json()

  event.waitUntil(
    self.registration.showNotification(
      note.title,
      {
        body: note.body.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, ""),
        icon: '/logo.png',
        data: {
          link: 'google.com',
        },
      }
    )
  )
})