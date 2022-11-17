const Class = () => {

    class User {
        constructor ( name, surname, books, pets ) {
            this.name = name;
            this.surname = surname;
            this.books = books;
            this.pets = pets;
        }

        getFullName = () => console.log(`${this.name}  ${this.surname}`)

        addPet( name ) {
            
        }

    } 

    return(
        <div>
            <h2> First deliverable challenge </h2>
        </div>
    )
}

export default Class