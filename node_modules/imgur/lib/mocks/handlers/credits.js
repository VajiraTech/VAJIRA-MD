const AuthenticationRequiredResponse = {
  data: {
    error: 'Authentication required',
    request: '/3/credits',
    method: 'GET',
  },
  success: false,
  status: 401,
};

const SuccessResponse = {
  data: {
    UserLimit: 500,
    UserRemaining: 500,
    UserReset: 1615614380,
    ClientLimit: 12500,
    ClientRemaining: 12500,
  },
  success: true,
  status: 200,
};

function getHandler(req, res, ctx) {
  if (!req.headers.has('authorization')) {
    return res(ctx.status(401), ctx.json(AuthenticationRequiredResponse));
  }

  return res(ctx.json(SuccessResponse));
}

module.exports = {
  getHandler,
};
