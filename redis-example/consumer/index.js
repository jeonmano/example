const redis = require('redis');

// const url = `redis://default:tiger@13.210.254.233:6379`;

// const client = redis.createClient({ url: url });

const client = redis.createClient({
  host: '3.25.85.141', // Redis 서버 호스트
  port: '6379', // Redis 포트
  // password: 'tiger', // Redis 비밀번호
  legacyMode: true,
});

// client.auth('tiger');

// client.on('error', (err) => console.log('Redis Client Error', err));

const catalog_load_sub = client.duplicate();
const catalog_meta_sub = client.duplicate();
const impala_load_sub = client.duplicate();
const implal_meta_sub = client.duplicate();

catalog_load_sub.connect();
catalog_meta_sub.connect();
impala_load_sub.connect();
implal_meta_sub.connect();

catalog_load_sub.subscribe('catalog_load', (message) => {
  console.log(`catalog_load ${message}`);
});

catalog_meta_sub.subscribe('catalog_meta', (message) => {
  console.log(`catalog_meta ${message}`);
});

impala_load_sub.subscribe('impala_load', (message) => {
  console.log(`impala_load ${message}`);
});

implal_meta_sub.subscribe('impala_meta', (message) => {
  console.log(`impala_meta ${message}`);
});
