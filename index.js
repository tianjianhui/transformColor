function transeformColor(val,num=1) {
    if(val.length>4){
        return 'rgba(' + parseInt(val.slice(1,3),16) + ',' + parseInt(val.slice(3,5),16) + ',' + parseInt(val.slice(5),16) + ',' + num + ')'
    }else{
        return 'rgba(' + parseInt(val.slice(1,2)+val.slice(1,2),16) + ',' + parseInt(val.slice(2,3)+val.slice(2,3),16) + ',' + parseInt(val.slice(3)+val.slice(3),16) + ',' + num + ')'
    }
}
export default transeformColor