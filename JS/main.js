window.onload = function(){
    
    var chart = [];
    var title = ""; 
    var chartApp = document.getElementById("div_chart");
    var num_charts = -1;

    $('#home').on('click',function(){
        $('#div_table').show().hide(); 
        $('#div_chart').show().hide(); 
        $('#div_upload').show().hide(); 
        
        $('#div_home').show();
        
        console.log('home_working');
    });
    
    $('#tables').on('click',function(){
        $('#div_home').show().hide(); 
        $('#div_chart').show().hide();
        $('#div_upload').show().hide();
        
        $('#div_table').show();
        
        console.log('tables_working');
    });
    
    $('#charts').on('click',function(){
        $('#div_home').show().hide(); 
        $('#div_table').show().hide();
        $('#div_upload').show().hide();
        
        $('#div_chart').show();
        
        console.log('charts_working');
    });
    
    $('#upload').on('click',function(){
        $('#div_home').show().hide(); 
        $('#div_table').show().hide();
        $('#div_chart').show().hide();
        
        $('#div_upload').show();
        
        console.log('upload_working');
    });
    
    $('#logout').on('click',function(){
        window.location = "LogIn.html";
        console.log('logout_working');
    });
    
    
    $("#file-chooser").change(function(event){
        var uploadedFile = event.target.files[0]; 
        console.log(uploadedFile.type);
        if(uploadedFile.type != "application/json") { 
        alert("Please upload a JSON file."); 
        return false;
        }else{
            alert("JSON File uploaded!");   
            if (uploadedFile) {
                var readFile = new FileReader();
                readFile.onload = function(e) { 
                var contents = e.target.result;
                var json = JSON.parse(contents);
                traverse(json,process);
                $('#table').show();
                $('.show_data').show();
                $('.no_data').show().hide();
                };
                readFile.readAsText(uploadedFile);
                }else { 
                console.log("JSON File failed to load");
                }
        }
    });
    
    //METHODS
    
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
            addTableHeader(key); 
            title = key.split("_").join(" ");
        }
        else{
                if (typeof value !== "string" && document.getElementsByClassName(title).length === 0){
                    create_chart(title);
                    addData(chart[num_charts], key, value);
                    $('#table tr:last').remove();
                }else if(document.getElementsByClassName(title).length !== 0){
                    addData(chart[num_charts], key, value);
                }else
                    addJSONToTable(key, value); 
        }
    }
    
    function addJSONToTable(key, value) {
        $('#table tr:last').append('<td>' + key.split("_").join(" ") + '<\/td> <td>' + value + '<\/td>');
    }
    
    function addTableHeader(key){
        $("#table").append(
          "<tr>" +
            "<th>" + key.split("_").join(" ") + ": </th>" +
          "</tr>"
        );
                   
    }
    
    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });

        chart.update();
    }
                
 
    function create_chart(key){
        var new_chart = document.createElement('canvas');
        new_chart.className = key;
        chartApp.appendChild(new_chart);
        new_chart.style.backgroundColor = "white";
        num_charts++;
        
        chart[num_charts] = new Chart(new_chart,
        {"type":"bar",
        "data":{"labels":[],
        "datasets":[{"label":key,
        "data":[],
        "fill":false,
        backgroundColor: "#FFB6C1",
        "borderWidth":1}]},
        "options":{
        responsive: false,
        maintainAspectRatio: false,
        "scales":{
        "yAxes":[{
        "ticks":{
        "beginAtZero":true}}]}}});  
                                            
        new_chart.style.display = "inline-block";
    }
    
    $("#chart_type").change(function () {
        var ctype = this.value;
                    
        var num_of_charts = chart.length - 1;
        while (num_of_charts >= 0){
            var chart_data = chart[num_of_charts].data;
            var chart_option = chart[num_of_charts].options;
            var ctx = document.getElementsByClassName(chart[num_of_charts].data.datasets[0].label);
            myChart = new Chart(ctx, {
            type: ctype,
            data: chart_data,
            options: chart_option
            });
                
            num_of_charts--;
                       
        }
    });
    

    
    
    
    
    
    
    
    
    
    
    
}