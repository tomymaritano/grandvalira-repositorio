const validate =
  (schema, property = 'body') =>
  (req, res, next) => {
    const result = schema.safeParse(req[property])
    if (!result.success) {
      return res.status(400).json({ errors: result.error.flatten() })
    }
    req[property] = result.data
    next()
  }

module.exports = validate
