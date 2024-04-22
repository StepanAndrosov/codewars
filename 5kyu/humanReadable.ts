//     assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');

function humanReadable(seconds: number): string {
    const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`)
    const MIN = 60
    const HOUR = 60 * 60
    const hours = Math.floor(seconds / HOUR)
    let difference = 0
    difference = seconds - hours * HOUR
    const minutes = Math.floor(difference / MIN)
    difference = difference - minutes * MIN
    const sec = Math.floor(difference)
    console.log(hours, minutes, sec)

    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(sec)}`
}

console.log(humanReadable(60))
