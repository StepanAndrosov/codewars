const users = [
    [
        {
            login: 'stypeano',
            leaguePoints: 4,
        },
        {
            login: 'rstrazir',
            leaguePoints: 45,
        },
        {
            login: 'cathead',
            leaguePoints: 143,
        },
        {
            login: 'cavernous',
            leaguePoints: 324,
        },
    ],
    [
        {
            login: 'ConspiracyLil',
            leaguePoints: 356,
        },
        {
            login: 'CzarStories',
            leaguePoints: 568,
        },
        {
            login: 'GottaSaiyan',
            leaguePoints: 598,
        },
        {
            login: 'Mountaintrid',
            leaguePoints: 785,
        },
    ],
    [
        {
            login: 'Rectionom',
            leaguePoints: 930,
        },
        {
            login: 'JoshChase',
            leaguePoints: 931,
        },
        {
            login: 'DreamLess',
            leaguePoints: 956,
        },
        {
            login: 'BlondiePlanet',
            leaguePoints: 1045,
        },
    ],
    [
        {
            login: 'Breakingbing',
            leaguePoints: 1056,
        },
        {
            login: 'Goldenelox',
            leaguePoints: 1130,
        },
        {
            login: 'SaiyanBroadway',
            leaguePoints: 1432,
        },
        {
            login: 'BoostScooby',
            leaguePoints: 1476,
        },
    ],
    [
        {
            login: 'Breakingbing',
            leaguePoints: 1756,
        },
        {
            login: 'Goldenelox',
            leaguePoints: 1930,
        },
    ],
    [
        {
            login: 'qwe',
            leaguePoints: 2100,
        },
    ],
    [
        {
            login: 'asde',
            leaguePoints: 2200,
        },
    ],
    [
        {
            login: '2ew',
            leaguePoints: 2300,
        },
    ],
    [
        {
            login: 'ty',
            leaguePoints: 2400,
        },
    ],
    [
        {
            login: 'ert',
            leaguePoints: 2500,
        },
    ],
    [
        {
            login: 'cb',
            leaguePoints: 2600,
        },
    ],
    [
        {
            login: 'werty',
            leaguePoints: 2700,
        },
    ],
    [
        {
            login: 'nbmj',
            leaguePoints: 2800,
        },
    ],
    [
        {
            login: 'tyio',
            leaguePoints: 2900,
        },
    ],
    [
        {
            login: 'yui',
            leaguePoints: 3000,
        },
    ],
    [
        {
            login: 'dfg',
            leaguePoints: 3100,
        },
        {
            login: '2g',
            leaguePoints: 3200,
        },
        {
            login: '3g',
            leaguePoints: 3300,
        },
        {
            login: '4fg',
            leaguePoints: 3400,
        },
        {
            login: '5fg',
            leaguePoints: 3500,
        },
        {
            login: '6fg',
            leaguePoints: 3700,
        },
        {
            login: '7fg',
            leaguePoints: 3800,
        },
        {
            login: '8fg',
            leaguePoints: 3900,
        },
        {
            login: '9fg',
            leaguePoints: 3700,
        },
        {
            login: '10fg',
            leaguePoints: 3800,
        },
        {
            login: '11g',
            leaguePoints: 3900,
        },
        {
            login: '12g',
            leaguePoints: 4000,
        },
        {
            login: '13fg',
            leaguePoints: 4100,
        },
        {
            login: '14dfg',
            leaguePoints: 4200,
        },
        {
            login: '15dfg',
            leaguePoints: 4300,
        },
        {
            login: '20dfg',
            leaguePoints: 4400,
        },
        {
            login: '21g',
            leaguePoints: 4500,
        },
        {
            login: '313g',
            leaguePoints: 4600,
        },
        {
            login: '414fg',
            leaguePoints: 4700,
        },
        {
            login: '515fg',
            leaguePoints: 4800,
        },
        {
            login: '616fg',
            leaguePoints: 4900,
        },
        {
            login: '717fg',
            leaguePoints: 5000,
        },
        {
            login: '81',
            leaguePoints: 5100,
        },
        {
            login: '919fg',
            leaguePoints: 5200,
        },
        {
            login: '0110fg',
            leaguePoints: 5300,
        },
        {
            login: '1211g',
            leaguePoints: 5400,
        },
        {
            login: '2212g',
            leaguePoints: 5500,
        },
        {
            login: '2313fg',
            leaguePoints: 5600,
        },
        {
            login: '2414dfg',
            leaguePoints: 5700,
        },
        {
            login: '2515dfg',
            leaguePoints: 5800,
        },
    ],
]

type Users = typeof users

const bynarySearchLeague = (leaderboard: Users, points: number) => {
    let left = 0
    let right = leaderboard.length - 1
    const firstPlace =
        leaderboard[right][leaderboard[right].length - 1].leaguePoints
    const lastPlace = leaderboard[0][0].leaguePoints

    if (lastPlace > points || firstPlace < points) return null

    let count = 0
    while (left <= right) {
        count++
        console.log('league', count)
        const middleIndex = Math.floor((right + left) / 2)
        const middle = leaderboard[middleIndex]
        const firstPlayerPoints = middle[middle.length - 1].leaguePoints
        const lastPlayerPoints = middle[0].leaguePoints

        if (lastPlayerPoints <= points && points <= firstPlayerPoints) {
            return middleIndex
        }
        if (lastPlayerPoints > points) {
            right = middleIndex - 1
        } else if (points > firstPlayerPoints) {
            left = middleIndex + 1
        }
        return middleIndex
    }
}

const searchInLegaue = (league: Users[number] | null, points: number) => {
    if (!league) return null
    let left = 0
    let right = league.length - 1

    const firstPlace = league[right].leaguePoints
    const lastPlace = league[0].leaguePoints

    if (lastPlace > points || firstPlace < points) return null

    let count = 0
    while (left <= right) {
        count++
        console.log('place', count)
        const middleIndex = Math.floor((right + left) / 2)
        const middle = league[middleIndex].leaguePoints

        if (middle === points) {
            return league.length - middleIndex
        }
        if (middle > points) {
            right = middleIndex - 1
        } else if (points > middle) {
            left = middleIndex + 1
        }
    }
    return null
}

// const leagueIndex = users[bynarySearchLeague(users, 1930) ? bynarySearchLeague(users, 1930) : 0]
// console.log(bynarySearchLeague(users, 3700))

console.log(searchInLegaue(users[15], 5800))
