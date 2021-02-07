var domain=window.location.hostname;
domain=domain.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];



chrome.runtime.sendMessage({command:"fetch",data:{domain:domain}},response=>{
      parseCoupons(response.data,domain);
      
})


var parseCoupons=function(coupons,domain){

          var couponHTML =''
          coupons.forEach(function(coupon,index){
              couponHTML+='<li>Code: ' +coupon.code+' - <em>' + coupon.description+'</em></li>';
            //  console.log(coupon.code,coupon.description)
          })
          let couponDisplay=document.createElement('div')
          couponDisplay.className='_coupon__list';
          couponDisplay.innerHTML='<h1>Coupons</h1><p>List of coupons for: '+domain+'</p><ul>'+couponHTML+'</ul>';
          couponDisplay.style.display='none';
          document.body.appendChild(couponDisplay);

          var couponButton = document.createElement('div');
          couponButton.className='_coupon__button';
        
          
          
          couponButton.innerHTML='💰';
          document.body.appendChild(couponButton);
          createEvents();



}


var createEvents=function(){
    document.querySelector('._coupon__button').addEventListener('click',function(event){
        if(document.querySelector('._coupon__list').style.display=='block'){

        }else{
            document.querySelector('._coupon__list').style.display=='block'
        }
    })
}

     