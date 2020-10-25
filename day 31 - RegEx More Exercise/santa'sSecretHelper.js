function santasSecretHelper(input) {

    let key = input.shift();
    key = Number(key);

    let message = input.shift();

    while (message !== 'end') {
        let decrypted = [];
        message = message.split('');
        message.forEach(char => {

            let currentAscii = char.charCodeAt() - key;
            decrypted.push(String.fromCharCode(currentAscii));
        });
        decrypted = decrypted.join('');
        let pattern = /\@(?<name>[A-Za-z]+)[^@\-!:>]*\!(?<behavior>[GN])\!/;
        let matched = decrypted.match(pattern);
        if (matched !== null) {
            let name = matched.groups['name'];
            let behavior = matched.groups['behavior'];
            if (behavior === 'G') {
                console.log(name);
            }

        }

        message = input.shift();
    }

}
santasSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);
santasSecretHelper([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
]);
santasSecretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
]);