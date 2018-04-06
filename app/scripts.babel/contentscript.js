let authors = Array.from(document.querySelectorAll('.author')).filter(author => (author.innerText.indexOf('by robbalvey') > -1));

let rows = Array.from(document.querySelectorAll('.topiclist .row')).filter(row => {return row.querySelector('dt').innerText.indexOf('by robbalvey') > -1});

for(let author of authors){
	author.parentElement.parentElement.parentElement.remove();
}

for(let row of rows) {
	row.remove();
}
