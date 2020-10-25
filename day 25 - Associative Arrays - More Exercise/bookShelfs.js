function bookShelfs(input) {

    let shelfs = {};
    input.forEach(line => {
        let titelAndAuthor = []

        if (line[2] === '-') {
            let [id, genre] = line.split(' -> ');
            id = Number(id)

            if (!shelfs[id]) {
                shelfs[id] = {};
                shelfs[id][genre] = []
            }
        } else {
            for (let el in shelfs) {

                el = Number(el)
                let [title, otherInfo] = line.split(': ');
                let [author, genre] = otherInfo.split(', ');

                if (shelfs[el][genre]) {

                    titelAndAuthor.push(title, author)
                    shelfs[el][genre].push(titelAndAuthor);
                }
            }
        }
    });

    let shelfEntries = Object.entries(shelfs).sort((a, b) => {
        let aLength = Object.entries(a[1]);
        let bLength = Object.entries(b[1]);

        return bLength[0][1].length - aLength[0][1].length;
    });

    shelfEntries.forEach(line => {
        let length = Object.entries(line[1])
        console.log(`${line[0]} ${length[0][0]}: ${length[0][1].length}`);
        for (let el of length[0][1]) {
            console.log(`--> ${el.join(': ')}`);

        }
    });

}
bookShelfs(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
])