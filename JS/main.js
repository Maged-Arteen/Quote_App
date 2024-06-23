// * Generating a Random Number 

var Last_Quote_Number =0 ; 
    function Generate_Quote(){
        var Random_Number = Math.trunc(Math.random()*6)+1;
        
        console.log(`last_Quote : ${Last_Quote_Number}=--> Random : ${Random_Number}`) 
        console.log(`---------------------------`) 

        //! adding +1 if Quote No Repeated (avoid Double Preview)
        if (Random_Number === Last_Quote_Number) ++Random_Number;

        //^Preview The new Quote
            if (Last_Quote_Number !== Random_Number){
                while (Random_Number <7 ){
                
                    switch (Random_Number){
                        case 1:
                            document.getElementById('new_quote').innerText = "“Be yourself; everyone else is already taken.”";
                        break;
                        
                        case 2:
                            document.getElementById('new_quote').innerText = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”";
                        break;
                    
                        case 3:
                              document.getElementById('new_quote').innerText ="“So many books, so little time.”";
                           
                        break;
                    
                        case 4:
                              document.getElementById('new_quote').innerText ="“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
                            
                        break;
                    
                        case 5:
                              document.getElementById('new_quote').innerText ="“A room without books is like a body without a soul.”";
                            
                        break;
                    
                        case 6: 
                          document.getElementById('new_quote').innerText ="“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”";
                        
                        break; 
                    }
                    break;
                }
            }

            //& Saving Last Quote No
            Last_Quote_Number = Random_Number;
            return Random_Number;
           
        }
         
        
       
 
