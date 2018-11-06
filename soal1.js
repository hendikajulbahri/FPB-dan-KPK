 var hasilangkapertama = []
 var hasilangkakedua = []
 var hasilfpb = []  
//  var a = []
//  var b = []
//  var hasilfp= []

 function hitungFPB(){
 var inputangka1 = 3
 var inputangka2 = 2

 for(i=1; i<=inputangka1; i++){
     if(inputangka1%i == 0){
         hasilangkapertama.push(i)
     }
 }
 for(i=1; i<=inputangka2; i++){
     if(inputangka2%i == 0){
         hasilangkakedua.push(i)
     }
 }
  
 for(i=0;i<hasilangkapertama.length;  i++ ){
     if(hasilangkakedua.includes(hasilangkapertama[i]) ){
          hasilfpb.push(hasilangkapertama[i])
     }
 }
 var i=0;
 console.log('FPB dari '+inputangka1+','+inputangka2 +' = '+hasilfpb.slice(i-1))

 var inputKPK = [inputangka1] * [inputangka2]
 var hasilKPK = inputKPK/hasilfpb
 console.log('KPK dari '+inputangka1+',' + inputangka2 +' = '+ hasilKPK)
 }
 

 // KPK
hitungFPB()
 
 


 


