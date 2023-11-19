class Book {
    constructor(title, author, pages, status1) {
      (this.title = title),
        (this.author = author),
        (this.pages = pages),
        (this.status1 = status1);
      this.id = generateId();
    }
  
    cardHtml() {
      const card = `
      <div id=${this.id} class="card">
      <h5 class='text'>"${this.title}"</h5>
      <p class='text'>By: ${this.author}</p>
      <p class='text'>Pages: ${this.pages}</p>
      <button class='change'>${this.status1}</button>
      <button onClick="editBook(${this.id})">Change</button>
      <button class='remove'>Delete</button>
      </div>`;
      return card;
    }
  }