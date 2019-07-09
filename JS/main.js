window.onload = function(){
    
    
    
    $('#home').on('click',function(){
        $('#div_table').show().hide(); 
        $('#krustyslaves').show(); 
        $('#div_home').show();
        console.log('working');
    });
    
    $('#tables').on('click',function(){
        $('#div_home').show().hide(); 
        $('#krustyslaves').show().hide(); 
        $('#div_choose_file').show().hide();
        
        $('#div_table').show();
        
        console.log('working');
    });
    
    $('#charts').on('click',function(){
        $('#div_home').show().hide(); 
        $('#krustyslaves').show().hide(); 
        $('#div_table').show().hide();
        $('#div_choose_file').show().hide();
        
        console.log('working');
    });
    
    $('#upload').on('click',function(){
        $('#div_home').show().hide(); 
        $('#krustyslaves').show().hide(); 
        $('#div_table').show().hide();
        
        $('#div_choose_file').show();
        
        console.log('working');
    });
    
    $('#logout').on('click',function(){
        window.location = "LogIn.html";
        console.log('working');
    });
    
    
    
    
}