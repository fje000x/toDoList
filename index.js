function addNote() {
    let text = document.getElementById("text").value;

    if (text.trim() !== "") {
        let noteContainer = document.createElement('div');
        noteContainer.className = 'note-container';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'note-checkbox';
        checkbox.checked = false;

        let noteLabel = document.createElement('label');
        noteLabel.textContent = text;
        noteLabel.className = 'note-label';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            noteContainer.remove();
        });

        noteContainer.appendChild(checkbox);
        noteContainer.appendChild(noteLabel);
        noteContainer.appendChild(deleteButton);

        document.getElementById('notes').appendChild(noteContainer);
        document.getElementById('text').value = '';
    }
}