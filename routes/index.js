
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.page = function(req, res){
  var keyword = req.params.keyword;
  keyword = keyword.replace('-',' ');
  res.render('page', { keyword: keyword });
};