exports.post = function(req, res){
 
    var name = req.body.name;
 
    console.log("Received POST data: " + name);
 
    res.render('test', { title: 'Test Page designed *exclusively* for ' 
        + name });
 
};