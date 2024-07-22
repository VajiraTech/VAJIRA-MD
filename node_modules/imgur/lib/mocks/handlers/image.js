const SuccessResponse = {
  data: true,
  success: true,
  status: 200,
};

const FavoriteSuccessResponse = {
  data: 'favorited',
  success: true,
  status: 200,
};

function postHandler(_req, res, ctx) {
  return res(ctx.json(SuccessResponse));
}

function deleteHandler(req, res, ctx) {
  return res(ctx.json(SuccessResponse));
}

function postFavoriteHandler(req, res, ctx) {
  return res(ctx.json(FavoriteSuccessResponse));
}

module.exports = {
  postHandler,
  postFavoriteHandler,
  deleteHandler,
};
