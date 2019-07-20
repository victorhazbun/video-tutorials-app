const express = require('express')

function createActions ({
  db
}) {
  function recordViewing (correlationId, videoId) {
    // Return something Promise-based so that the endpoint doesn't crash
    return Promise.resolve(true)
  }

  return {
    recordViewing
  }
}

function createHandlers ({ actions }) {
  function handleRecordViewing (req, res) {
    return actions
      .recordViewing(req.context.correlationId, req.params.videoId)
      .then(() => res.redirect('/'))
  }

  return {
    handleRecordViewing
  }
}

function createRecordViewings ({
  db
}) {
  const actions = createActions({
    db
  })
  const handlers = createHandlers({ actions })

  const router = express.Router()

  router.route('/:videoId').post(handlers.handleRecordViewing)

  return { actions, handlers, router }
}

module.exports = createRecordViewings
