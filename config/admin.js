module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ea072e35360b18e9f1c83ed6d5f23f84'),
  },
});
