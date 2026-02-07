module.exports = {
  apps: [{
    name: 'planexus',
    script: 'server-start.mjs',
    cwd: '/var/www/app',
    env: {
      NODE_ENV: 'production',
      HOST: '0.0.0.0',
      PORT: '4321',
    },
  }],
};
