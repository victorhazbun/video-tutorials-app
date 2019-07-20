const test = require('blue-tape')

const { config, reset } = require('../../test-helper')

test('The loadHomePage query sums video views', t => {
  const videos = [
    { name: 'one', description: 'one', view_count: 1 },
    { name: 'two', description: 'one', view_count: 1 },
    { name: 'three', description: 'one', view_count: 1 }
  ]

  return reset()
    .then(() => config.db.then(client => client('videos').insert(videos)))
    .then(() =>
      config.homeApp.queries.loadHomePage().then(res => {
        t.equals(res.videosWatched, '3', 'Summed the views')
      })
    )
})
