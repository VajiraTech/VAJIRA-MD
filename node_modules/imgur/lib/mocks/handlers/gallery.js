function getHandler(req, res, ctx) {
  const { id } = req.params;
  const response = {
    data: {
      id,
      title: 'gallery-title',
      description: 'gallery-description',
    },
    success: true,
    status: 200,
  };
  return res(ctx.json(response));
}

module.exports = {
  getHandler,
};
