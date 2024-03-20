const express = require('express');
const redis = require('redis');

const app = express();
const url = `redis://default:tiger@13.210.254.233:16379`;
const publisher = redis.createClient({ url: url ,legacyMode: true});

const port = process.env.PORT || 3001;

const catalog_load = 'catalog_load';
const catalog_meta = 'catalog_meta';
const impala_load = 'impala_load';
const impala_meta = 'impala_meta';

app.get('/', (req, res) => {
  res.status(200).json({ message: `Redis Publisher active at ${port}` });
});

app.get('/catalog_load', async (req, res) => {
  try {
    await publisher.publish(catalog_load, 'catalog load로 이벤트 발사');
  } catch (error) {}
  console.log('catalog_load publish');
  res.send('catalog_load publish');
});

app.get('/catalog_meta', async (req, res) => {
  try {
    await publisher.publish(catalog_meta, 'catalog meta로 이벤트 발사');
  } catch (error) {}
  console.log('catalog_meta publish');
  res.send('catalog_meta publish');
});
app.get('/impala_load', async (req, res) => {
  try {
    await publisher.publish(impala_load, 'impala load로 이벤트 발사');
  } catch (error) {}
  console.log('impala_load publish');
  res.send('impala_load publish');
});
app.get('/impala_meta', async (req, res) => {
  try {
    await publisher.publish(impala_meta, 'impala meta로 이벤트 발사');
  } catch (error) {}
  console.log('impala_meta publish');
  res.send('impala_meta publish');
});

app.listen(port, async () => {
  console.log(`Running on port ${port}`);
  await publisher.connect();
});
