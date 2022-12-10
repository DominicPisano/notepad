<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/DominicPisano/notepad/main/src/NotepadBannerDark.png">
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/DominicPisano/notepad/main/src/NotepadLight.png">
        <img src="https://raw.githubusercontent.com/DominicPisano/notepad/main/src/NotepadBannerLight.png">
    </picture>
    <p align="center">Notepad is a simple note-taking app built with React and Spring Boot. It allows users to create, read, update, and delete notes, and uses a server to persist the notes in a database. The app uses React Router for navigation, and React Hooks for managing state and performing data fetching. The app's API is defined in a `NoteController` class, and the `Note` class represents a single note. The `NoteRepository` interface is used to manage the persistence of notes in the database.</p>
</p>

# Technical Stack
- [React](https://reactjs.org)
- [React Router](https://reactrouter.com)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [H2 Database](https://www.h2database.com/html/main.html)

# Installation
1. Clone the repository:
```
git clone https://github.com/DominicPisano/notepad.git
```
2. Navigate to the main directory:
```
cd notepad
```
3. Run NotepadApplication.java in your IDE.
4. Navigate to the frontend directory:
```
cd notepad
```
5. Install dependencies:
```
npm install
```
6. Start the frontend:
```
npm start
```
7. Notepad will now be hosted at [localhost:3000](https://localhost:3000).
8. The data can be seen at [localhost:8080](https://localhost:8080).

# Screenshots
<p align="center">
    <img src="https://raw.githubusercontent.com/DominicPisano/bookedshelf/main/src/AllNotes.PNG" width="32%">
    <img src="https://raw.githubusercontent.com/DominicPisano/bookedshelf/main/src/AddNote.PNG" width="32%">
    <img src="https://raw.githubusercontent.com/DominicPisano/bookedshelf/main/src/EditNote.PNG" width="32%">
    <img src="https://raw.githubusercontent.com/DominicPisano/bookedshelf/main/src/ViewNote.PNG" width="32%">
    <img src="https://raw.githubusercontent.com/DominicPisano/bookedshelf/main/src/DeletedNotes.PNG" width="32%">
</p>