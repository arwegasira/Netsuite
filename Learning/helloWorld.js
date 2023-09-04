/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */
//0. define api version and suitScript

//1. define modules to load that the script will use

define(['N/ui/dialog'], function (dialog) {
  function helloWorld() {
    var options = {
      title: 'Hello',
      message: 'Hello world',
    }
    try {
      dialog.alert(options)
      log.debug({ title: 'success', details: 'Alert displayed successfully' })
    } catch (e) {
      log.error({ title: e.name, details: e.message })
    }
  }
  return {
    pageInit: helloWorld,
  }
})

// In Step 4, you will add additional code here.
