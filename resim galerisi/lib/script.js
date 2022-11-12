const body = document.querySelector('body');
const gallery = document.createElement('div');
gallery.setAttribute('id', 'gallery');

for (let i = 0; i < 5; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  gallery.appendChild(row);
  
for (let j = 0; j < 3; j++) {
  const column = document.createElement('div');
  column.classList.add('column');

  const img = document.createElement('img');
  column.appendChild(img);
  img.setAttribute('src', 'https://source.unsplash.com/collection/'+i+j+'/300x300');
   
  row.appendChild(column);
  }
}
body.appendChild(gallery);
