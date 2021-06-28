module.exports = (req, res, next) => {
  if (`${Number(req.query.name)}` !== 'NaN') {

    next('Not a name');
    
  } else {
    
    next();
    
  }
};