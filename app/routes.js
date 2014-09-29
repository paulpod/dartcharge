module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index',
                {'assetPath' : assetPath});
    });

    /* Example pages */

    app.get('/examples/hello-world', function (req, res) {
      res.render('examples/hello-world', {'message' : 'Hello world'});
    });

    app.get('/examples/inheritance', function (req, res) {
      res.render('examples/inheritance/page-level', {'message' : 'Hello world'});
    });

    app.get('/examples/alpha', function (req, res) {
      res.render('examples/alpha/alpha', {'assetPath' : assetPath });    
    });

    var quotes = [
  { author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
  { author : 'Walt Disney', text : "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"},
  { author : 'Unknown', text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch', text : "You are afraid to die, and you're afraid to live. What a way to exist."}
];

    app.get('/local-type', function (req, res) {
      var o = req.query.Option;
      
      res.render('local-type-' + o, {'assetPath' : assetPath });

      //res.send('Local Account Type: ' + o);  
    });


    app.get('/account-type', function (req, res) {
      var o = req.query.Option;

      if (o == 'personal') {
        res.redirect('https://test.dart-charge.co.uk/Registration/Register');
      } else if (o == 'local') {
        res.render('dart-account-1-' + o, {'assetPath' : assetPath });
      } else if (o == 'company') {
        res.redirect('https://test.dart-charge.co.uk/Registration/RegisterBusiness');
      }
      
      //res.render('dart-account-1-' + o, {'assetPath' : assetPath });

      //res.send('Local Account Type: ' + o);  
    });



  }
};
