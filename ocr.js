var analyzedAlt = null;
// Google Vision API Text Detection

var vision = require('@google-cloud/vision');


var path = "http://gi.esmplus.com/thehadaa/earphone2/A_1.jpg";


//Google Vision API Key 입력
const GOOGLEVISIONAPI = new vision.ImageAnnotatorClient({
    keyFilename: './visionAPI_KEY.json'
});

GOOGLEVISIONAPI.textDetection('./img/prod_03.jpg').then(results => {

    if(results[0].fullTextAnnotation != null){
        //Detection된 Text가 있는 경우
        analyzedAlt=results[0].fullTextAnnotation.text;
    }else{
        //Detection된 Text가 없는 경우
        analyzedAlt=null;
    }
    console.log(results[0].fullTextAnnotation.text);
}).catch(err => {
    console.error(err);
});
