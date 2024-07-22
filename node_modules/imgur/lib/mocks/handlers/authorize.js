const RequiredFieldErrorResponse = (method) => {
  return {
    data: {
      error: 'client_id and response_type are required',
      request: '/oauth/authorize',
      method,
    },
    success: false,
    status: 400,
  };
};

const UnauthorizedErrorResponse = {
  data: {
    error: 'Unauthorized',
    request: '/oauth2/authorize',
    method: 'POST',
  },
  success: false,
  status: 403,
};

function createRedirectUrl(username) {
  return `https://somedomain.com#access_token=123accesstoken456&expires_in=315360000&token_type=bearer&refresh_token=123refrestoken456&account_username=${username}&account_id=123456`;
}

function postHandler(req, res, ctx) {
  const clientId = req.url.searchParams.get('client_id');
  const responseType = req.url.searchParams.get('response_type');

  if (!(clientId && responseType)) {
    return res(ctx.status(400), ctx.json(RequiredFieldErrorResponse('POST')));
  }

  const { username, password, allow } = Object.fromEntries(
    new URLSearchParams(req.body)
  );

  if (!(username && password && allow)) {
    return res(ctx.status(403), ctx.json(UnauthorizedErrorResponse));
  }

  return res(
    ctx.status(302),
    ctx.set('Location', createRedirectUrl(username)),
    ctx.cookie('authorize_token', allow)
  );
}

function getHandler(req, res, ctx) {
  const clientId = req.url.searchParams.get('client_id');
  const responseType = req.url.searchParams.get('response_type');

  if (!(clientId && responseType)) {
    return res(ctx.status(400), ctx.json(RequiredFieldErrorResponse('GET')));
  }

  const mockAuthorizeToken = 'abcxyz';
  const html = `
      <html>
        <form method="post" action="">
          <input type="text" name="username" id="username">
          <input type="password" name="password" id="password">
          <button type="submit" name="allow" value="${mockAuthorizeToken}"></button>
        </form>
      </html>
      `;
  return res(
    ctx.cookie('authorize_token', mockAuthorizeToken, {
      path: '/oauth2',
      domain: '.api.imgur.com',
      secure: true,
      httpOnly: true,
    }),
    ctx.status(200),
    ctx.body(html)
  );
}

module.exports = {
  postHandler,
  getHandler,
};
