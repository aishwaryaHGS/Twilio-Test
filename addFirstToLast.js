const addFirstToLast = (strArray) =>{
    if(strArray.length === 0){
        return ""
    }
    return strArray[0] + strArray[strArray.length -1]
}