export const pagination = (arr,size,no) => {

    const newArr = [...arr]
    const start = no*size;
    const end = start+size
    return newArr.slice(start,end)

}