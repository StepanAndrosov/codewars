// assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
// (Tw ! ! nVZGxBwkWyXPNpluC ZUrXNI), wTay !ay! VZGxBwkWyXPNpluCnay UrXNIZay

const pigIt = (a: string): string => {
    const suffix = 'ay'
    // looks for any characters
    const getAnyCharacters = (str: string) => str.match(/[.,!? ]/g)
    const arr = a.split(' ')
    const newArr = [] as string[]
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        const characters = getAnyCharacters(arr[i])
        if (characters) {
            const character = characters[0]
            console.log(characters[0], 'ch')
            arr[i] === character
                ? newArr.push(character)
                : newArr.push(
                      `${arr[i].slice(1, arr[i].length - 1)}${
                          arr[i][0]
                      }${suffix}${character}`
                  )
        } else {
            if (arr[i]) newArr.push(`${arr[i].slice(1)}${arr[i][0]}${suffix}`)
            else newArr.push('')
        }
    }
    return newArr.join(' ')
}

console.log(pigIt('Hello world!'))
;('ZFKNLRay   aTrEVDtexRjRay QYUHvPPbay eVMZsNCBfzisyNamay OUahWqIxFbmFoay ray !')
;('ZFKNLRay  aTrEVDtexRjRay QYUHvPPbay eVMZsNCBfzisyNamay OUahWqIxFbmFoay ray !')
;('bNfnrfdkpUeEWPWtay nnIoGwVFkCakwojKEvBay ? ! YUdYpmEcakFpbrHay ? pmHGKay YWCxHQQGTxeRArOSfday asOVWVyosYgvwWqcLbay Bay CVttwIDdigDay xtaCXGBcoZSmEay ! JyXlLkePIRrrCPNaay')
;('bNfnrfdkpUeEWPWtay nnIoGwVFkCakwojKEvBay ? ! YUdYpmEcakFpbrHay ? pmHGKay   YWCxHQQGTxeRArOSfday  asOVWVyosYgvwWqcLbay Bay CVttwIDdigDay xtaCXGBcoZSmEay  ! JyXlLkePIRrrCPNaay')
;('OxJkKzZBmMdBxHtGay ? qdOmCHiQPNiVbxAfay DFbSNSaay QzILbSKuTWay . fOsPfsay . pIYrNNsay QAjrbGyYgRiPmKNTWyay Day uhwoay PFjpvuRadgNWrOtdsEay RsgqhEOJsBJQZay xUAvay   duQscUUFRmay . nhZygay LjyCSmEXsDobhbay')
;('OxJkKzZBmMdBxHtGay ? qdOmCHiQPNiVbxAfay DFbSNSaay QzILbSKuTWay . fOsPfsay . pIYrNNsay QAjrbGyYgRiPmKNTWyay Day uhwoay PFjpvuRadgNWrOtdsEay RsgqhEOJsBJQZay xUAvay  duQscUUFRmay . nhZygay LjyCSmEXsDobhbay')
;('hqeay Oay . ! MqrmPssBvJiaWcDpWgay iay hECycULJAperZay guwQPNCcqWuay NngQLWeay WtOay !   BBIHEHwtnzay oFToKXAkbay')
;('hqeay Oay . ! MqrmPssBvJiaWcDpWgay iay hECycULJAperZay guwQPNCcqWuay NngQLWeay WtOay !  BBIHEHwtnzay oFToKXAkbay')
;('upMay   OTJay TAoIay lvgAJvay QoxAEohoSJXjpBay txeJMxBcway ! kKbSWVay mIRkNWsIuKBkZay')
;('upMay  OTJay TAoIay lvgAJvay QoxAEohoSJXjpBay txeJMxBcway ! kKbSWVay mIRkNWsIuKBkZay')
;('! WXgprYay LnvtPUetmay mCbSKWbbXqamay pTONxgzVrjxay ATLGpgkJMcFOTrIzay ? ZHFmay  eNeGMJcay mdliwfWWqsgnay IncgrtAArFpkIcONxKay')
;('! WXgprYay LnvtPUetmay mCbSKWbbXqamay pTONxgzVrjxay ATLGpgkJMcFOTrIzay ? ZHFmay  eNeGMJcay mdliwfWWqsgnay IncgrtAArFpkIcONxKay ')
