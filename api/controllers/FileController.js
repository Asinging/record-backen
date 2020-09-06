/**
 * FileController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  upload: function (req, res) {
    console.log('yes am here')
    let name = req.param("orgName")
    let image = req.param("orgLogo")
    //     let image = "../../assets/images/rename"
//     console.log(typeof image)
    //console.log(image)
    if (req.method === 'GET')
      return res.json({
        'status': 'GET not allowed'
      });


    var data = req.file("orgLogo");
    console.log(data)
    console.log("i can't see any file uploaded")

    data.upload({
      dirname: '../../assets/images/newFile'
    }, function onUploadComplete(err, files) {

      // Earlier it was ./assets/images .. Changed to ../../assets/images
      //  Files will be uploaded to ./assets/images
      // Access it via localhost:1337/images/file-name
      console.log(files);
      if (err) {
        console.log(err);
        return res.json(500, err);
      } else if (files.length === 0) {
        console.log("i can't see any file uploaded")
        // proceed without files
        res.notFound({
          status: 'Unsucess',
          response: 'File not Uploaded'
        });
      } else {
        //  handle uploaded file
        res.json({
          status: 200,
          file: files
        });
      }
    });
  }


};
