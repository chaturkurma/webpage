function area(input1,input2){
    Diagonala = input1;
    Diagonalb = input2;
    let area;
    if(Diagonala<0||Diagonalb<0){
        area=0;
}
else if(Diagonala>500||Diagonalb>500){
    area=0;
}
else{
    area=0.5*(Diagonala)*(Diagonalb);
}
return area;
    
 }