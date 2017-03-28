module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [{
      name: "sc1",
      script: "./dist/index.js",
      env_production: {
        NODE_ENV: "production",
        PORT: '3000',
        DEBUG: 'scaleChange:*'
      }
    },
    {
      name: "sc2",
      script: "./dist/index.js",
      env_production: {
        NODE_ENV: "production",
        PORT: '3001',
        DEBUG: 'scaleChange:*'
      }
    },
    {
      name: "sc3",
      script: "./dist/index.js",
      env_production: {
        NODE_ENV: "production",
        PORT: '3002',
        DEBUG: 'scaleChange:*'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: "node",
      host: "localhost",
      ref: "origin/master",
      exec_mode: 'cluster',
      instances: 4
    }
    // dev: {
    //   user: "node",
    //   host: "212.83.163.1",
    //   ref: "origin/master",
    //   repo: "git@github.com:repo.git",
    //   path: "/var/www/development",
    //   "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js --env dev",
    //   env: {
    //     NODE_ENV: "dev"
    //   }
    // }
  }
}
