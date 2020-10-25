function comments(input) {

  let usersList = [];
  let articleList = [];
  let obj = {};

  input.forEach(line => {

    if (line.split(' ')[0] === 'user') {

      let splitedLine = line.split(' ');
      let user = splitedLine[1];
      usersList.push(user);

    } else if (line.split(' ')[0] === 'article') {

      let splitedLine = line.split(' ');
      let article = splitedLine[1];
      articleList.push(article);

    } else {

      let [whoPost, whichArt] = line.split(': ');
      let splitedWho = whoPost.split(' ');
      let user = splitedWho[0];
      let article = splitedWho[3];
      let splitedWhich = whichArt.split(', ');
      let comment = [];
      splitedWhich.forEach(comm => {

        comment.push(comm);
      });

      if (usersList.includes(user) && articleList.includes(article)) {

        if (!obj[article]) {
          obj[article] = {};
          obj[article][user] = comment;
        } else {
          obj[article][user] = comment;

        }
      }
    }
  });

  let sortedArt = Object.entries(obj).sort((a, b) => {
    let aEntr = Object.entries(a[1]);
    let bEntr = Object.entries(b[1]);

    return bEntr.length - aEntr.length;
  });

  sortedArt.forEach(line => {
    console.log(`Comments on ${line[0]}`);

    let sortedUsers = Object.entries(line[1]).sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });

    sortedUsers.forEach(user => {
      console.log(`--- From user ${user[0]}: ${user[1].join(' - ')}`);
    });
  })
}
comments([
  'user aUser123',
  'someUser posts on someArticle: NoTitle, stupidComment',
  'article Books',
  'article Movies',
  'article Shopping',
  'user someUser',
  'user uSeR4',
  'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do',
  'someUser posts on Shopping: title, I go shopping every day',
  'someUser posts on Movies: Like, I also like movies very much'
]);