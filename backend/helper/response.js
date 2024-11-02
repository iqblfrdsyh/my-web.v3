exports.successResponse = (res, data, message = "success", status = 200) => {
  return res.status(status).json({
    status,
    success: true,
    message,
    data,
  });
};

exports.errorResponse = (res, message, error, status = 500) => {
  return res.status(status).json({
    status,
    success: false,
    message,
    errors: error ? (error instanceof Error ? error.message : error) : null,
  });
};
