const createNoteBtn = document.getElementById('createNoteBtn');
const createNoteFormContainer = document.getElementById('createNoteFormContainer');
const cancelBtn = document.getElementById('cancelBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const editNoteFormContainer = document.getElementById('editNoteFormContainer');

createNoteBtn.addEventListener('click', () => {
    createNoteFormContainer.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
    createNoteFormContainer.style.display = 'none';
});

cancelEditBtn.addEventListener('click', () => {
    editNoteFormContainer.style.display = 'none';
});


function editNote(id, title, content) {
    document.getElementById('noteId').value = id;
    document.getElementById('editTitle').value = title;
    document.getElementById('editContent').value = content;
    editNoteFormContainer.style.display = 'block';
}

document.getElementById('editNoteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('noteId').value;
    const title = document.getElementById('editTitle').value;
    const content = document.getElementById('editContent').value;

    fetch(`/notes/update/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    }).then(response => {
        if (response.ok) {
            location.reload(); 
        } else {
            alert('Failed to update note');
        }
    });
});
