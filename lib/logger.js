export default function logger(req, _res, next) {
  console.log(`Incoming request: ${req.method} - ${req.url}`)
  next()
}