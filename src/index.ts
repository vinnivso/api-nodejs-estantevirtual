import { app } from "./app"
import { EndpointCreateCompetition } from "./endpoints/EndpointCreateCompetition"
import { EndpointGetCompetition } from "./endpoints/EndpointGetCompetition"

app.post("/competition", new EndpointCreateCompetition().createCompetition)
app.get("/competition", new EndpointGetCompetition().getCompetitions)