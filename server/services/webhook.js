exports.addCats = (req, res) => {
  console.log('==============Cart add Request===================');
  console.log(req);
  console.log('==============Cart add Response===================');
  console.log(res);
  res.json({ status: 'success' });
};
exports.updateCats = (req, res) => {
  console.log('==============Cart update Request===================');
  console.log(req);
  console.log('==============Cart update Response===================');
  console.log(res);
  res.json({ status: 'success' });
};
