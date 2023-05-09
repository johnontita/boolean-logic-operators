//boolean logic operator symbols are (AND)&&,(OR)|| ,(NOT)!
const isThirdYearUndergraduate=true;
const isStudyingEngineering=true;
const hasNoBarriers=false;
// if(isThirdYearUndergraduate && isStudyingEngineering ){
//     console.log("you should seek for attachment opportunities");
// }else{
//     console.log("you will defer the attachment");
// }
if(isThirdYearUndergraduate && isThirdYearUndergraduate && !hasNoBarriers){
    console.log('you qualify best for the attachment');
}else{
    console.log("you are not eligible for attachments")
}

