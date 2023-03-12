<?php 


for ($i=1; $i <=100; $i++) { 
    if(primo($i)){
        echo $i." es primo <br/>";
    }
    else{
        echo $i." no primo <br/>";
    }
}
function primo($num){
    $cont=0;
    for ($i=1; $i <= $num; $i++ ) { 
        if ($num%$i==0) {
            $cont=$cont+1;
        }
    }
    if ($cont==2) {
            return true;
    }
    else{
            return false;
    }

    
}
?>