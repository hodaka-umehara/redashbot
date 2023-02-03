import { App, ExpressReceiver } from '@slack/bolt'
import { createApp } from './src/app'
import { config } from './src/config'

const app = createApp(config);

(async () => {
  // Start your app
  await app.start(config.port)
  console.log(`⚡️ Bolt app is running @ ${config.port}!`)
})()
