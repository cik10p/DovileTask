class Book {
    constructor(title, author, pages, status) {
      (this.title = title),
        (this.author = author),
        (this.pages = pages),
        (this.status = status);
      this.id = generateId();
    }
  
    cardHtml() {
      const card = `
      <div id=${this.id} class="card">
      <h5 class='text'>"${this.title}"</h5>
      <p class='text'>By: ${this.author}</p>
      <p class='text'>Pages: ${this.pages}</p>
      <button class='change' onClick="toggleStatus(${this.id})">${this.status}</button>
      <button class='change' onClick="openEditDialog(${this.id})">Edit</button>
      <button class='remove' onClick="removeBook(${this.id})">Delete</button>
      </div>`;
      return card;
    }
  }