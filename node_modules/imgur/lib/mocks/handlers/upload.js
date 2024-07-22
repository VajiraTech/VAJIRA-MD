const BadRequestErrorResponse = {
  status: 400,
  success: false,
  data: {
    error: 'Bad Request',
    request: '/3/upload',
    method: 'POST',
  },
};

const SuccessfulUploadResponse = {
  data: {
    id: 'JK9ybyj',
    deletehash: 'j83zimv4VtDA0Xp',
    link: 'https://i.imgur.com/JK9ybyj.jpg',
  },
  success: true,
  status: 200,
};

function postHandler(req, res, ctx) {
  // image field is always required
  if (!('image' in req.body)) {
    return res(ctx.status(400), ctx.json(BadRequestErrorResponse));
  }

  // type is optional when uploading a file, but required
  // for any other type
  if ('type' in req.body) {
    // only these types are allowed
    if (!['file', 'url', 'base64'].includes(req.body.type)) {
      return res(ctx.status(400), ctx.json(BadRequestErrorResponse));
    }
    // if type is not specified we assume we're uploading a file.
    // but we need to make sure a file was sent in the image field
  } else if (typeof req.body.image !== 'object') {
    return res(ctx.status(400), ctx.json(BadRequestErrorResponse));
  }

  return res(ctx.json(SuccessfulUploadResponse));
}

module.exports = {
  postHandler,
};
