const APIKEY = process.env.APIKEY;

exports.secure = async (req, res, next) => {
  try {
    const authHeader = req.header("apikey");
    if (!authHeader || authHeader !== APIKEY) {
      return res.status(401).json({
        status: 401,
        success: false,
        msg: "Access Denied: API key is invalid or missing",
      });
    }

    next();

  } catch (error) {
    return res
      .status(500)
      .json({ status: 500, success: false, msg: error.message });
  }
};
