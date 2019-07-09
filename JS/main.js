window.onload = function(){
    
    
    
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
    
    
    
    
}