window.onload = function(){
    
    
    $("#file-chooser").change(function(event){
        var uploadedFile = event.target.files[0]; 
        console.log(uploadedFile.type);
        if(uploadedFile.type != "application/json") { 
        alert("File not read. Please upload a .json file!"); 
        return false;
        }else{
        alert("File read successfully!");   
            if (uploadedFile) {
                var readFile = new FileReader();
                readFile.onload = function(e) { 
                var contents = e.target.result;
                var json = JSON.parse(contents);
                traverse(json,process);
                $('#table').show();
                $('.yes_data').show();
                $('.no_data').show().hide();
                };
                readFile.readAsText(uploadedFile);
                }else { 
                console.log("Failed to load file");
                }
        }
    });
    
    $('#home').on('click',function(){
        $('#div_table').show().hide(); 
        $('#div_chart').show().hide(); 
        $('#div_upload').show().hide(); 
        
        $('#div_home').show();
        
        console.log('working');
    });
    
    $('#tables').on('click',function(){
        $('#div_home').show().hide(); 
        $('#div_chart').show().hide();
        $('#div_upload').show().hide();
        
        $('#div_table').show();
        
        console.log('working');
    });
    
    $('#charts').on('click',function(){
        $('#div_home').show().hide(); 
        $('#div_table').show().hide();
        $('#div_upload').show().hide();
        
        $('#div_chart').show();
        
        console.log('working');
    });
    
    $('#upload').on('click',function(){
        $('#div_home').show().hide(); 
        $('#div_table').show().hide();
        $('#div_chart').show().hide();
        
        $('#div_upload').show();
        
        console.log('working');
    });
    
    $('#logout').on('click',function(){
        window.location = "LogIn.html";
        console.log('working');
    });
    
    function traverse(json,process) {
        for(var i in json) {
            process.apply(this,[i,json[i]]);  
            if (json[i] !== null && typeof(json[i])=="object") {
                traverse(json[i],process);
            }
        }
    }
    
    function process(key,value) {
        if (value == "[object Object]"){
            addHeader(key); 
            title = key.split("_").join(" ");
        }
        else{
                if (typeof value !== "string" && document.getElementsByClassName(title).length === 0){
                    $('#table tr:last').remove();
                }else
                    addJSONToTable(key, value); 
        }
    }
    
    function addJSONToTable(key, value) {
        $('#table tr:last').append('<td>' + key.split("_").join(" ") + '<\/td> <td>' + value + '<\/td>');
    }
    
    function addHeader(key){
        $("#table").append(
          "<tr>" +
            "<th>" + key.split("_").join(" ") + ": </th>" +
          "</tr>"
        );
                   
    }
    
                
    
}