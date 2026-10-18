module.exports = {
  apps: [{
    name: 'my_app',
    script: 'src/index.ts',
    node_args: '--env-file=config/prod.env',
    max_memory_restart: '500M',
    autorestart: true,
    stop_exit_codes: [1]
  }]
}