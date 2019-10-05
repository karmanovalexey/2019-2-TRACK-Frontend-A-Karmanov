/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {

    let result = Number(bytes)
    if (result < 0 || (!result && result !==0)){
        return false
    }

    let flag = 0

    while(result >=1024){
        result /= 1024
        flag += 1
    }

    let suffix
    
    switch(flag){
        case 0:
            suffix = "B"
            break
        case 1:
            suffix = "KB"
            break
        case 2:
            suffix = "MB"
            break
        case 3:
            suffix = "GB"
            break
        case 4:
            suffix = "TB"
            break
        case 5:
            suffix = "PB"
            break
        case 6:
            suffix = "EB"
            break
        default:
            suffix = "You have a damn great amount of storage, Boy"
    }

    return  `${result.toFixed(2)} ${suffix}` 
}
