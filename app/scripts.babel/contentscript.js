let author_nodes = Array.from(document.querySelectorAll('.author'));
let robs_authored_posts = author_nodes.filter(author => {
  return author.innerText.indexOf('by robbalvey') > -1
});

let threads = Array.from(document.querySelectorAll('.topiclist .row'));
let robs_threads = threads.filter(thread => {
  return thread.querySelector('dt').innerText.indexOf('by robbalvey') > -1
});

for(let post of robs_authored_posts){
	post.parentElement.parentElement.parentElement.remove();
}

for(let thread of robs_threads) {
	thread.remove();
}
