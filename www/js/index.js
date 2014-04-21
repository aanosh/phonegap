
//function capturePhoto() {
//    navigator.notification.alert("PhoneGap is working", function(){}, "", "");
//}

        function getImage() {
            // Открываем галерею
            navigator.camera.getPicture(uploadPhoto, function(message) {
                        navigator.notification.alert("11", function(){}, "", "");
                },{
                        quality: 50, 
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                }
            );
 
        }
        
        function uploadPhoto(imageURI) {
            navigator.notification.alert("22", function(){}, "", "");
        }
        
//        //загружаем картинки на сервер
//        function uploadPhoto(imageURI) {
//            var options = new FileUploadOptions();
//            options.fileKey="file";
//            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
//            options.mimeType="image/jpeg";
// 
//            var params = new Object();
//            params.value1 = "test";
//            params.value2 = "param";
// 
//            options.params = params;
//            options.chunkedMode = false;
// 
//            var ft = new FileTransfer();
//            ft.upload(imageURI, "http://yourdomain.com/upload.php", win, fail, options);
//        }
//        
//        //если все хорошо
//        function win(r) {
//            console.log("Code = " + r.responseCode);
//            console.log("Response = " + r.response);
//            console.log("Sent = " + r.bytesSent);
//            alert(r.response);
//        }
//        
//        //если ошибка
//        function fail(error) {
//            alert("An error has occurred: Code = " + error.code);
//        }