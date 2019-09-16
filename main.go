package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "admin"
	dbname   = "sugjest"
)

var PSQLINFO = fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

type Idea struct {
	Id          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Owner       string `json:"owner"`
	Upvotes     int    `json:"upvotes"`
	Downvotes   int    `json:"downvotes"`
}

type Ideas []Idea

func fetchAllIdeas(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	db, _ := connectToDb()
	defer db.Close()

	getIdeaStatement := `
		SELECT * FROM ideas`

	var idea Idea
	var ideas Ideas

	res, _ := db.Query(getIdeaStatement)

	for res.Next() {
		err := res.Scan(&idea.Description, &idea.Downvotes, &idea.Owner, &idea.Title, &idea.Upvotes, &idea.Id)
		if err != nil {
			log.Fatal(err)
		}
		ideas = append(ideas, idea)
	}

	fmt.Println("Endpoint Hit: All Ideas")
	json.NewEncoder(w).Encode(ideas)
}

func insertNewIdea(w http.ResponseWriter, r *http.Request) {

	db, _ := connectToDb()
	defer db.Close()

	decoder := json.NewDecoder(r.Body)
	var idea Idea
	err := decoder.Decode(&idea)
	if err != nil {
		json.NewEncoder(w).Encode("Error my nigga")
	}

	insertIdeaStatement := `
		INSERT INTO ideas (description, downvotes, owner, title, upvotes)
		VALUES ($1, 0, $2, $3, 0)`

	if idea.Owner == "" {
		idea.Owner = "Anonymous"
	}

	_, err = db.Query(insertIdeaStatement, idea.Description, idea.Owner, idea.Title)

}

func connectToDb() (*sql.DB, error) {
	db, err := sql.Open("postgres", PSQLINFO)
	if err != nil {
		panic(err)
	}
	return db, err
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Homepage endpoint")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/ideas/all", fetchAllIdeas)
	http.HandleFunc("/ideas/new", insertNewIdea)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {

	handleRequests()

}
