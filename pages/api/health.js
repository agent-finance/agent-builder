export default function handler(req, res) {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_VERSION || 'development',
    environment: process.env.NODE_ENV || 'development',
  });
}
